#!/usr/bin/env python3
"""Validate repo-local skill ownership and public case-study preservation."""

from __future__ import annotations

import argparse
import hashlib
import json
import re
import subprocess
import sys
import tempfile
from html.parser import HTMLParser
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
SKILL_REGISTRY = ROOT / "registry" / "skills.json"
CASE_REGISTRY = ROOT / "registry" / "portfolio-cases.json"
PUBLIC_PACKAGER = ROOT / "scripts" / "package_public_site.py"
PUBLIC_DEPLOY_WORKFLOW = ROOT / ".github" / "workflows" / "deploy-public-site.yml"
ALLOWED_INVOCATIONS = {"auto", "supporting", "explicit"}
ALLOWED_FRONTMATTER = {"name", "description"}
LOCKED_SKILL_OWNERS = {
    "build-lesly-case-study": "case-study-lifecycle",
    "3d-production-expert": "portfolio-media-and-proof",
    "3d-portfolio-writing-director": "public-portfolio-copy",
    "frontend-design": "frontend-implementation",
    "lesly-website-finalizer": "release-integration",
}
REQUIRED_CASE_STUDY_REFERENCES = (
    "case-outline-template.md",
    "category-proof-modules.md",
    "image-model-media-protocol.md",
    "evaluation-scenarios.md",
)
LOCKED_CASE_CONTRACT = {
    "game-hero": (True, 2),
    "character-environment": (True, 2),
    "interior-props": (True, 1),
    "ai-visual-pipeline": (True, 1),
    "santa-cruz-ai-visual-pipeline": (True, 1),
    "construction-client-progress-workflow": (True, 1),
    "print-startup-direction": (True, 1),
    "sculpt-to-retopo": (True, 1),
    "avatar-character": (True, 1),
    "mascot-character": (True, 1),
    "outfits-accessories": (True, 2),
    "pbr-texturing": (True, 2),
    "original-site-concept": (True, 2),
}

AUDIENCE_RULES = (
    ("EXACT_EVIDENCE_STATUS", re.compile(r"\bevidence status\b", re.IGNORECASE)),
    (
        "EXACT_PRODUCTION_NOT_VERIFIED",
        re.compile(r"\bproduction is not(?: yet)? verified\b", re.IGNORECASE),
    ),
    ("EXACT_REQUIRED_NEXT", re.compile(r"\brequired next\b", re.IGNORECASE)),
    (
        "EXACT_CAPTURE_CHANGES_CLAIM",
        re.compile(r"\bone capture that changes the claim\b", re.IGNORECASE),
    ),
    (
        "EXACT_HYPOTHETICAL_FORGE_MODEL",
        re.compile(r"\bif the Forge Warden model exists\b", re.IGNORECASE),
    ),
    (
        "EXACT_CURRENT_PACKAGE_INSPECTABLE",
        re.compile(r"\bwhat the current package makes inspectable\b", re.IGNORECASE),
    ),
    (
        "SELF_REFERENTIAL_PORTFOLIO_PROVENANCE",
        re.compile(
            r"\bportfolio case author\b"
            r"|\bzero[- ]to[- ]one website\s+(?:case|presentation|contribution|story|narrative)\b"
            r"|\b(?:authored|built|created|completed)\s+(?:this|the|a)?\s*"
            r"(?:[a-z0-9&'’-]+\s+){0,5}website case\b"
            r"|\bauthored\s+(?:the\s+)?(?:case structure|media sequence|public narrative)\b"
            r"|\bwebsite case and (?:costume|material|character|visual|portfolio|presentation)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "INTERNAL_VISIBILITY_STATE",
        re.compile(
            r"\b(?:visible|verified) now\b|\b(?:project evidence|verified capture|supporting evidence)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "INTERNAL_LEDGER_LANGUAGE",
        re.compile(
            r"\b(?:evidence|proof)\s+(?:ledger|map|slot|status|state|pending|category)\b"
            r"|\bpending\s+(?:evidence|proof|capture)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "INTERNAL_CLAIM_STATE",
        re.compile(
            r"\b(?:claim|evidence|proof)\s+"
            r"(?:boundary|gate|state|status|plan|path|requirement|requirements|question|questions|blocker)\b"
            r"|\b(?:review|human) boundary\b|\bacceptance path\b|\bproduction acceptance\b"
            r"|^(?:direction|proof|evidence) shown(?:$|[:.—-])"
            r"|\bunsupported claim\b|\bmatching-asset status\b|\bpermission status\b",
            re.IGNORECASE,
        ),
    ),
    (
        "MISSING_OR_UNVERIFIED_FRAMING",
        re.compile(
            r"\b(?:not yet|is not|are not|was not|were not|remains? not|remains? un|none)\s*"
            r"(?:verified|documented|captured|evidenced)\b"
            r"|\b(?:is|are|was|were|remains?)\s+(?:unverified|undocumented)\b"
            r"|\b(?:unverified|undocumented)\s+"
            r"(?:role|team|authorship|contribution|production|model|scene|asset|record|claim|evidence|proof|capture|result|outcome|approval|client|site)\b"
            r"|^(?:unverified|undocumented)$",
            re.IGNORECASE,
        ),
    ),
    (
        "NEGATIVE_CLAIM_DISCLAIMER",
        re.compile(
            r"\bno\s+(?:matching|verified|production|technical|source|project|client|site|model|scene|asset|record|capture|evidence|proof|polycount|topology|UV|bake|texture|rig)\b"
            r"[^.!?]{0,240}\b(?:is|are)\s+(?:shown|claimed|verified|documented|presented)\b"
            r"|\bno\b[^.!?]{0,240}\bclaim is made\b"
            r"|\bno\s+(?:option|selection|approval|outcome)\b[^.!?]{0,120}\b"
            r"(?:is|are)\s+(?:selected|recorded|verified|documented|shown|presented)\b"
            r"|\b(?:this|the|these|those)?\s*(?:current|public|existing|generated|final)?\s*"
            r"(?:page|case|study|package|image|images|media|render|renders|work|project|asset|assets|result|results|direction)\b"
            r"[^.!?]{0,80}\b(?:cannot|can't)\s+(?:document|verify|prove|confirm)\b"
            r"|\b(?:this|the|these|those)?\s*(?:current|public|existing|generated|final)?\s*"
            r"(?:page|case|study|package|image|images|media|render|renders|work|project|asset|assets|result|results|direction)\b"
            r"[^.!?]{0,80}\b(?:does not|do not)\s+(?:document|verify|claim)\b"
            r"|\b(?:this|the|these|those)?\s*(?:current|public|existing|generated|final)?\s*"
            r"(?:page|case|study|package|image|images|media|render|renders|work|project|asset|assets|result|results|direction)\b"
            r"[^.!?]{0,80}\b(?:does not|do not)\s+(?:present|imply)\b[^.!?]{0,100}\b"
            r"(?:evidence|proof|model|scene|asset|client|commission|approval|outcome|authorship|ownership|technical|production|verified|captured|rig|topology|UV|physical|site|source)\b"
            r"|\b(?:work|project|case|study|page|package|image|images|media|render|renders|asset|assets|result|results|direction|client|commission|approval|outcome|authorship)\b"
            r"\s+(?:is|are)\s+not\s+(?:claimed|presented as)\b"
            r"|\bno\s+(?:client|commission)\s+(?:is|was)\s+(?:named|involved|claimed)\b"
            r"|\bthere\s+(?:is|are)\s+no\s+(?:matching\s+)?"
            r"(?:model|scene|asset|source (?:models?|files?|scenes?|assets?)|evidence|proof|capture|record)\b"
            r"|\bmodel\s+is\s+not\s+presented\s+as\s+"
            r"(?:finished|production|game-ready|verified|captured|technical)\b"
            r"|\bwithout\s+(?:presenting|claiming|implying)\b[^.!?]{0,100}\b"
            r"(?:finished|production|technical|verified|captured|matching|client|project|model|scene|asset|proof|evidence|outcome|approval|authorship|delivery)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "PROOF_NEGATION_DISCLAIMER",
        re.compile(
            r"\b(?:is|are|was|were)\s+not\b[^.!?]{0,180}\b(?:evidence|proof)\b"
            r"|\bnot\s+(?:a|an|one|the)\b[^.!?]{0,180}\b"
            r"(?:matching (?:model|scene|asset)|project record|production result|technical delivery)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "FUTURE_EVIDENCE_REQUEST",
        re.compile(
            r"\b(?:next|future|later)\s+(?:capture|captures|evidence|proof|record|records)\b"
            r"|\b(?:missing|requested|pending)\s+(?:capture|captures|evidence|proof|record|records)\b"
            r"|\b(?:capture|captures|evidence|proof|record|records)\s+"
            r"(?:(?:is|are|would be|will be)\s+)?(?:required|needed|must|should)\b"
            r"|(?:^|[.!?;:]\s+)(?:needs?|requires?)\s+(?:a|an|one|the)?\s*"
            r"(?:future|next|matching|real|technical)?\s*(?:capture|record|evidence|proof)\b"
            r"|^(?:need|needs|required|request|requested):\s+[^.!?]{0,80}\b"
            r"(?:capture|record|evidence|proof|DCC|wireframes?|topology|UVs?|bakes?|texture maps?|rig|source (?:models?|files?|scenes?|assets?))\b"
            r"|\b(?:page|case|claim|package|study|copy|section)\s+(?:needs?|requires?)\s+"
            r"(?:a|an|one|the)?\s*(?:future|next|matching|real|technical)?\s*"
            r"(?:capture|record|evidence|proof)\b"
            r"|\b(?:first|next)\s+(?:technical\s+)?evidence\s+(?:needed|required)\b"
            r"|\b(?:matching|traceable|permissioned)\b[^.!?]{0,120}\b(?:capture|record|evidence)\b"
            r"|\buntil\s+(?:captured|verified|documented)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "INTERNAL_PROOF_PENDING",
        re.compile(
            r"\b(?:evidence|proof|verification|capture|record)\b\s*"
            r"(?:(?:is|are|remains?|would be|will be|still)\s+)*"
            r"(?::|—|-)?\s*(?:TBD|TODO|pending|missing|outstanding|unavailable|forthcoming|needed|required|to come)\b"
            r"|\b(?:wireframes?|topology|UVs?|bakes?|texture maps?|rig|(?:matching\s+)?model|source (?:files?|scenes?|assets?)|DCC (?:file|record|capture))\b\s*"
            r"(?:(?:is|are|remains?|still)\s+)*(?::|—|-)?\s*"
            r"(?:TBD|TODO|pending|missing|outstanding|unavailable|to come)\b"
            r"|\b(?:wireframes?|topology|UVs?|bakes?|texture maps?|rig|(?:matching\s+)?model|source (?:models?|files?|scenes?|assets?)|DCC (?:file|record|capture))\b\s*"
            r"(?:(?:is|are)\s+not\s+available|(?:does not|doesn't)\s+exist)\b"
            r"|\b(?:wireframes?|topology|UVs?|bakes?|texture maps?|rig|(?:matching\s+)?model|source (?:models?|files?|scenes?|assets?)|DCC (?:file|record|capture))\b"
            r"[^.!?]{0,60}\b(?:will|would|can|could)\s+(?:be\s+)?"
            r"(?:added|provided|documented|verified|captured|come|follow)\b[^.!?]{0,40}\b"
            r"(?:later|next|future update)\b"
            r"|\b(?:wireframes?|topology|UVs?|bakes?|texture maps?|rig|(?:matching\s+)?model|source (?:models?|files?|scenes?|assets?)|DCC (?:file|record|capture)|evidence|proof|verification|capture|record)\b"
            r"[^.!?]{0,30}\b(?:coming soon|future work|to be added|to follow)\b"
            r"|\bpending\s+(?:DCC|wireframes?|topology|UVs?|bakes?|texture maps?|rig|source (?:models?|files?|scenes?|assets?)|model|capture|evidence|proof|record)\b"
            r"|\bfuture update\b[^.!?]{0,80}\b(?:add|provide|document|verify|capture)\b"
            r"[^.!?]{0,60}\b(?:DCC|wireframes?|topology|UVs?|bakes?|texture maps?|rig|source (?:models?|files?|scenes?|assets?)|model|capture|evidence|proof|record)\b"
            r"|\b(?:awaits?|waiting for|waiting on)\b[^.!?]{0,80}\b"
            r"(?:DCC|wireframes?|topology|UVs?|bakes?|texture maps?|rig|source (?:models?|files?|scenes?|assets?)|model|capture|evidence|proof|record)\b"
            r"|\bno\s+(?:matching\s+)?(?:DCC|wireframes?|topology|UVs?|bakes?|texture maps?|rig|source (?:models?|files?|scenes?|assets?)|model|capture|evidence|proof|record)\b"
            r"[^.!?]{0,40}\b(?:yet|available|exists?)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "HYPOTHETICAL_PRODUCTION_INSTRUCTION",
        re.compile(
            r"\bif\s+(?:the|a|an)?\s*(?:model|source|file|scene|asset|record)\b[^.!?]{0,100}\bexists?\b"
            r"|\bwhen\s+(?:the\s+)?matching\b[^.!?]{0,120}\b(?:exists?|available|completed)\b"
            r"|\b(?:if|when|once|after)\b[^.!?]{0,100}\b(?:is|becomes)\s+"
            r"(?:modeled|built|available|captured|verified|documented)\b"
            r"|\b(?:if|when|once)\s+(?:(?:it|this|that|the [a-z-]+)\s+)?"
            r"(?:is\s+)?(?:available|verified|captured|documented)\b"
            r"|\buntil\b[^.!?]{0,80}\b(?:have|receive|obtain)\b[^.!?]{0,80}\b"
            r"(?:model|source|file|scene|capture|evidence|proof|record)\b"
            r"|\bwhere (?:scoped|completed|the scope requires)\b|\bfuture matching\b",
            re.IGNORECASE,
        ),
    ),
    (
        "MAINTAINER_FACING_INSTRUCTION",
        re.compile(
            r"(?:^|[.!?;:,]\s+)(?:please\s+)?"
            r"(?:capture|provide|supply)\b[^.!?]{0,160}\b"
            r"(?:DCC|wireframes?|UVs?|bakes?|texture maps?|source (?:files?|scenes?|assets?)|evidence|proof)\b"
            r"|(?:^|[.!?;:,]\s+)(?:please\s+)?add\b[^.!?]{0,160}\b"
            r"(?:capture|record|evidence|proof)\b"
            r"|\b(?:capture|document|verify)\b[^.!?]{0,80}\b(?:later|next|when available)\b"
            r"|\b(?:evidence|proof|capture|record)\b[^.!?]{0,80}\b"
            r"(?:will|would|can|could)\s+be\s+(?:added|provided|captured|documented|verified)\s+"
            r"(?:later|next|when available)\b"
            r"|\b(?:DCC|wireframes?|UVs?|bakes?|texture maps?|source (?:files?|scenes?|assets?))\b"
            r"[^.!?]{0,80}\b(?:would|will)\s+(?:change|upgrade|verify|support)\b"
            r"[^.!?]{0,40}\b(?:claim|proof|case)\b"
            r"|\bbefore\b[^.!?]{0,160}\bcan be claimed\b"
            r"|\bonly after\b[^.!?]{0,160}\b(?:exists?|captured|verified|documented)\b"
            r"|\bwhat (?:this page shows|completes (?:production|technical) proof)\b",
            re.IGNORECASE,
        ),
    ),
    (
        "INTERNAL_PROVENANCE_NOTE",
        re.compile(
            r"\b(?:source[- ]lineage|presentation provenance|rejection history|audit commentary)\b"
            r"|\b(?:role|team|authorship|contribution)(?:\s+(?:is|was))?\s*"
            r"(?:[:·—-]\s*)?(?:not documented|unverified|unknown)\b"
            r"|\bpublic-use rights\b|\bapproval state\b",
            re.IGNORECASE,
        ),
    ),
    (
        "INTERNAL_GATE_TOKEN",
        re.compile(r"\bCASE_ADVANCE_GATE\b|\b(?:APPROVED|BLOCKED|FAIL)\b|\bP[012]\b"),
    ),
)

FIRST_PERSON_ARTIST_RATIONALE = re.compile(
    r"\bI\s+(?:[a-z]{3,}ed|aimed|built|chose|focused|kept|made|set|started|used|wanted|worked)\b"
    r"|\bmy\s+(?:approach|decision|focus|goal|intent|priority|solution)\b",
    re.IGNORECASE,
)

PUBLIC_PRESENTATION_DISCLOSURE = re.compile(
    r"\b(?:AI-assisted(?: portfolio)? presentation|portfolio presentation image|"
    r"generated presentation media|presentation image created from approved source art)\b",
    re.IGNORECASE,
)

PUBLIC_PROOF_NEGATION = re.compile(
    r"\bwithout pretending\b"
    r"|\bnot\s+(?:a|an|one|the)\s+"
    r"(?:exact model|production sequence|documented build history|captured sculpt timeline)\b"
    r"|\brather than\s+(?:proof\b|a rig\b|a measured\b|a production\b|a captured\b|a documented\b)"
    r"|\bnot claims?\s+about\b",
    re.IGNORECASE,
)

FORBIDDEN_PUBLIC_STRUCTURE_PATTERNS = (
    (
        "FORBIDDEN_EVIDENCE_CAPTURE_SELECTOR",
        re.compile(
            r"\bdata-[a-z0-9-]*(?:evidence|capture)[a-z0-9-]*\b",
            re.IGNORECASE,
        ),
    ),
    (
        "FORBIDDEN_EVIDENCE_CAPTURE_CLASS_OR_ID",
        re.compile(
            r"\b(?:class|id)=[\"'][^\"']*\b"
            r"[a-z0-9_-]*(?:evidence|capture)[a-z0-9_-]*\b",
            re.IGNORECASE,
        ),
    ),
    (
        "FORBIDDEN_EVIDENCE_CAPTURE_CSS_SELECTOR",
        re.compile(
            r"[.#][a-z0-9_-]*(?:evidence|capture)[a-z0-9_-]*(?=\s*[{,>:~+])",
            re.IGNORECASE,
        ),
    ),
)

FORBIDDEN_PUBLIC_DATA_PATTERNS = (
    (
        "FORBIDDEN_INTERNAL_PUBLIC_DATA_KEY",
        re.compile(
            r"\b(?:evidenceSummary|captureRequired|captureLabel|captureTitle)\s*:",
            re.IGNORECASE,
        ),
    ),
    (
        "FORBIDDEN_INTERNAL_PUBLIC_DATA_LABEL",
        re.compile(
            r"[\"'](?:Evidence status|Evidence boundary|Claim boundary|Capture required|"
            r"Acceptance path|Direction shown)[\"']\s*,",
            re.IGNORECASE,
        ),
    ),
    (
        "FORBIDDEN_PUBLIC_MEDIA_STATUS_SCHEMA",
        re.compile(
            r"\bmediaStatus\s*:|\bCASE_STATUS_LABELS\b|\bcase-media-status\b",
            re.IGNORECASE,
        ),
    ),
)

VOID_HTML_ELEMENTS = {
    "area",
    "base",
    "br",
    "col",
    "embed",
    "hr",
    "img",
    "input",
    "link",
    "meta",
    "param",
    "source",
    "track",
    "wbr",
}

BLOCK_HTML_ELEMENTS = {
    "address",
    "article",
    "aside",
    "blockquote",
    "dd",
    "div",
    "dl",
    "dt",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "header",
    "hr",
    "li",
    "main",
    "nav",
    "ol",
    "p",
    "pre",
    "section",
    "table",
    "tbody",
    "td",
    "tfoot",
    "th",
    "thead",
    "tr",
    "ul",
}


def load_json(path: Path) -> dict:
    return json.loads(path.read_text(encoding="utf-8"))


def parse_frontmatter(path: Path) -> dict[str, str]:
    text = path.read_text(encoding="utf-8")
    match = re.match(r"^---\n(.*?)\n---", text, re.DOTALL)
    if not match:
        raise ValueError("missing YAML frontmatter")
    values: dict[str, str] = {}
    for raw_line in match.group(1).splitlines():
        if not raw_line.strip():
            continue
        if raw_line.startswith((" ", "\t", "-")) or ":" not in raw_line:
            raise ValueError(f"unsupported frontmatter line: {raw_line}")
        key, value = raw_line.split(":", 1)
        values[key.strip()] = value.strip()
    return values


class VisibleTextParser(HTMLParser):
    """Extract browser-visible static text without scripts, styles, or hidden nodes."""

    def __init__(self) -> None:
        super().__init__(convert_charrefs=True)
        self.parts: list[str] = []
        self.stream: list[str] = []
        self._skip_stack: list[bool] = []
        self._skip_depth = 0

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        tag = tag.lower()
        attributes = {name.lower(): value for name, value in attrs}
        own_skip = (
            tag in {"script", "style", "template", "noscript"}
            or "hidden" in attributes
            or (attributes.get("aria-hidden") or "").lower() == "true"
        )
        inherited_skip = self._skip_depth > 0
        skip = own_skip or inherited_skip
        if tag in BLOCK_HTML_ELEMENTS and not skip:
            self.stream.append("\n")
        if tag not in VOID_HTML_ELEMENTS:
            self._skip_stack.append(skip)
            if skip:
                self._skip_depth += 1
        if tag == "img" and not skip:
            alt = attributes.get("alt")
            if alt:
                self.parts.append(alt)
                self.stream.append(alt)

    def handle_startendtag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        self.handle_starttag(tag, attrs)
        if tag.lower() not in VOID_HTML_ELEMENTS:
            self.handle_endtag(tag)

    def handle_endtag(self, tag: str) -> None:
        tag = tag.lower()
        if tag in VOID_HTML_ELEMENTS or not self._skip_stack:
            return
        skipped = self._skip_stack.pop()
        if skipped:
            self._skip_depth -= 1
        elif tag in BLOCK_HTML_ELEMENTS:
            self.stream.append("\n")

    def handle_data(self, data: str) -> None:
        if self._skip_depth == 0:
            self.stream.append(data)
            if data.strip():
                self.parts.append(data)


def visible_html_text(source: str) -> str:
    parser = VisibleTextParser()
    parser.feed(source)
    parser.close()
    return " ".join(part.strip() for part in parser.parts if part.strip())


def visible_html_parts(source: str) -> list[str]:
    parser = VisibleTextParser()
    parser.feed(source)
    parser.close()
    return [re.sub(r"\s+", " ", part).strip() for part in parser.parts if part.strip()]


def visible_html_blocks(source: str) -> list[str]:
    parser = VisibleTextParser()
    parser.feed(source)
    parser.close()
    return [
        re.sub(r"\s+", " ", block).strip()
        for block in "".join(parser.stream).splitlines()
        if block.strip()
    ]


def load_runtime_cases() -> list[dict]:
    """Evaluate the complete JS and export the final merged, renderer-facing case data."""

    node_program = r"""
const fs=require('fs');
const vm=require('vm');
const source=fs.readFileSync('case-study.js','utf8');
const sandbox={
  URL,
  URLSearchParams,
  window:{location:{search:''}},
  document:{
    title:'',
    head:{appendChild(){}},
    body:{dataset:{},classList:{toggle(){}}},
    createElement(){
      return {
        id:'',
        type:'',
        textContent:'',
        setAttribute(){}
      };
    },
    querySelector(){return null;}
  },
  console:{log(){},warn(){},error(){}}
};
const exportProgram=String.raw`
function __publicView(study){
  const visibility={direction:true,problem:true,process:true,media:true,result:Boolean(study.resultSummary),details:true,...(study.visibleSections||{})};
  const gallery=(study.gallery||[]).map(media=>Array.isArray(media)
    ? {alt:media[1]||'',caption:media[1]||''}
    : {
        alt:media.alt||'',
        caption:media.caption||''
      });
  const related=Object.fromEntries(getRelatedCases(study).map(item=>[
    item.id,
    {
      thumbnailAlt:item.hero?.alt||'',
      thumbnailLabel:item.hero?'':item.kicker||'Selected work',
      thumbnailSublabel:item.hero?'':'Project story',
      title:item.title||'',
      meta:item.kicker||'Selected work',
      lead:item.relatedLead||'Explore the project story and final presentation.'
    }
  ]));
  return {
    title:study.title||'',
    kicker:study.kicker||'Selected work',
    meta:study.meta||[],
    lead:study.lead||'',
    narrative:study.narrative||study.storySections||study.story||[],
    hero:{
      alt:study.hero?.alt||study.alt||'',
      caption:study.heroCaption||''
    },
    facts:study.facts||[],
    direction:visibility.direction?{
      label:study.directionLabel||'Project direction',
      title:study.whatTitle||study.directionTitle||'Project direction.',
      copy:study.whatCopy||study.directionCopy||''
    }:null,
    problem:visibility.problem?{
      label:study.problemLabel||'Problem solved',
      title:study.problemTitle||'Problem solved.',
      items:study.problems||[]
    }:null,
    process:visibility.process?{
      label:study.processLabel||'Process',
      title:study.processTitle||'Process structure.',
      items:study.process||narrative.process||[]
    }:null,
    media:visibility.media?{
      label:study.mediaLabel||'Selected project media',
      title:study.mediaTitle||'Visual direction.',
      gallery
    }:null,
    result:visibility.result&&study.resultSummary?{
      label:study.resultSummary.label||'Final presentation',
      title:study.resultSummary.title||'Project result.',
      copy:study.resultSummary.copy||''
    }:null,
    details:visibility.details?{
      label:study.detailsLabel||'Visual read',
      title:study.detailsTitle||'Visual read.',
      items:study.details||[]
    }:null,
    related
  };
}
globalThis.__cases=CASE_STUDIES.map(study=>({
  id:study.id,
  runtime:study,
  public:__publicView(study),
  hero:study.hero?.src||study.image||null,
  gallery:(study.gallery||[]).map(media=>media.src||media[0]).filter(Boolean)
}));`;
vm.runInNewContext(source+'\n'+exportProgram,sandbox,{filename:'case-study.js'});
process.stdout.write(JSON.stringify(sandbox.__cases));
"""
    result = subprocess.run(
        ["node", "-e", node_program],
        cwd=ROOT,
        check=True,
        capture_output=True,
        text=True,
    )
    return json.loads(result.stdout)


def clean_asset_path(value: str) -> str:
    return value.split("?", 1)[0].split("#", 1)[0]


def file_digest(path: Path) -> str:
    digest = hashlib.sha256()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1024 * 1024), b""):
            digest.update(chunk)
    return digest.hexdigest()


def homepage_cards() -> list[dict[str, str | None]]:
    text = (ROOT / "index.html").read_text(encoding="utf-8")
    anchor_pattern = re.compile(r"<a\b([^>]*)>(.*?)</a>", re.DOTALL | re.IGNORECASE)
    cards: list[dict[str, str | None]] = []
    for attributes, body in anchor_pattern.findall(text):
        class_match = re.search(r'\bclass=["\']([^"\']*)["\']', attributes, re.IGNORECASE)
        href_match = re.search(r'\bhref=["\']([^"\']*)["\']', attributes, re.IGNORECASE)
        classes = (class_match.group(1) if class_match else "").split()
        href = href_match.group(1) if href_match else ""
        case_match = re.fullmatch(r"case-study\.html\?id=([^&#]+)", href)
        if "work-card" not in classes or not case_match:
            continue
        case_id = case_match.group(1)
        image_match = re.search(r'<img\b[^>]*src="([^"]+)"', body)
        alt_match = re.search(r'<img\b[^>]*alt="([^"]*)"', body)
        cards.append(
            {
                "id": case_id,
                "image": image_match.group(1) if image_match else None,
                "alt": alt_match.group(1) if alt_match else "",
                "text": visible_html_text(body),
            }
        )
    return cards


def iter_public_strings(value: object, path: str) -> list[tuple[str, str]]:
    strings: list[tuple[str, str]] = []
    if isinstance(value, str):
        if value.strip():
            strings.append((path, value))
        return strings
    if isinstance(value, list):
        for index, item in enumerate(value):
            strings.extend(iter_public_strings(item, f"{path}[{index}]"))
        return strings
    if isinstance(value, dict):
        for key, item in value.items():
            strings.extend(iter_public_strings(item, f"{path}.{key}"))
    return strings


def has_public_words(value: object, minimum: int = 1) -> bool:
    if not isinstance(value, str):
        return False
    normalized = re.sub(r"\s+", " ", value).strip()
    return len(re.findall(r"\b[\w’'-]+\b", normalized)) >= minimum


def public_narrative_fragments(public: dict) -> list[str]:
    """Collect developed prose without requiring one renderer schema."""

    fragments: list[str] = []

    def add(value: object) -> None:
        if isinstance(value, str):
            if has_public_words(value, 8):
                fragments.append(re.sub(r"\s+", " ", value).strip())
            return
        for _, text in iter_public_strings(value, "narrative"):
            if has_public_words(text, 8):
                fragments.append(re.sub(r"\s+", " ", text).strip())

    add(public.get("lead"))
    add(public.get("narrative"))

    direction = public.get("direction")
    if isinstance(direction, dict):
        add(direction.get("copy"))

    for field in ("problem", "process", "details"):
        section = public.get(field)
        if not isinstance(section, dict):
            continue
        items = section.get("items")
        if isinstance(items, list):
            for item in items:
                if isinstance(item, list) and len(item) >= 2:
                    add(item[1])
                elif isinstance(item, dict):
                    add(item.get("copy") or item.get("body") or item.get("paragraphs"))
                else:
                    add(item)

    result = public.get("result")
    if isinstance(result, dict):
        add(result.get("copy"))

    return fragments

def completeness_failure(case_id: str, path: str, rule: str, value: object) -> str:
    if isinstance(value, str) and value.strip():
        failure_excerpt = re.sub(r"\s+", " ", value).strip()
    elif isinstance(value, (list, dict)) and value:
        failure_excerpt = json.dumps(value, ensure_ascii=False, separators=(",", ":"))
        if len(failure_excerpt) > 180:
            failure_excerpt = f"{failure_excerpt[:179]}…"
    else:
        failure_excerpt = "<missing or incomplete>"
    return (
        f"{case_id}: audience completeness path={path} rule={rule} "
        f"excerpt={json.dumps(failure_excerpt, ensure_ascii=False)}"
    )


def public_completeness_failures(case_id: str, public: object) -> list[str]:
    """Enforce a deterministic first-10/first-30-second recruiter read."""

    if not isinstance(public, dict):
        return [
            completeness_failure(
                case_id,
                f"CASE_STUDIES[{case_id}].public",
                "FIRST_10_PUBLIC_STORY",
                public,
            )
        ]

    root = f"CASE_STUDIES[{case_id}].public"
    failures: list[str] = []
    for field, minimum, rule in (
        ("title", 2, "FIRST_10_TITLE"),
        ("kicker", 2, "FIRST_10_SCOPE_LABEL"),
        ("lead", 8, "FIRST_10_PROJECT_LEAD"),
    ):
        value = public.get(field)
        if not has_public_words(value, minimum):
            failures.append(completeness_failure(case_id, f"{root}.{field}", rule, value))

    hero = public.get("hero")
    if not isinstance(hero, dict) or not has_public_words(hero.get("alt"), 4):
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.hero.alt",
                "FIRST_10_HERO_ALT",
                hero.get("alt") if isinstance(hero, dict) else hero,
            )
        )
    if not isinstance(hero, dict) or not has_public_words(hero.get("caption"), 3):
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.hero.caption",
                "FIRST_10_HERO_CAPTION",
                hero.get("caption") if isinstance(hero, dict) else hero,
            )
        )

    narrative_fragments = public_narrative_fragments(public)
    narrative_text = " ".join(narrative_fragments)
    narrative_word_count = len(re.findall(r"\b[\w’'-]+\b", narrative_text))

    if len(narrative_fragments) < 4 or narrative_word_count < 180:
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.narrative",
                "SUBSTANTIVE_ARTIST_CASE_NARRATIVE",
                {
                    "developedFragments": len(narrative_fragments),
                    "wordCount": narrative_word_count,
                },
            )
        )

    if not re.search(r"\b(?:I|my|me)\b", narrative_text, re.IGNORECASE):
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.narrative",
                "FIRST_PERSON_ARTIST_VOICE",
                narrative_fragments,
            )
        )

    if not FIRST_PERSON_ARTIST_RATIONALE.search(narrative_text):
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.narrative",
                "FIRST_PERSON_ARTISTIC_RATIONALE",
                narrative_fragments,
            )
        )

    public_strings = iter_public_strings(public, root)
    proof_negations = [
        (path, text)
        for path, text in public_strings
        if PUBLIC_PROOF_NEGATION.search(text)
    ]
    if proof_negations:
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.narrative",
                "PUBLIC_PROOF_NEGATION",
                proof_negations,
            )
        )

    disclosures = [
        (path, text)
        for path, text in public_strings
        if PUBLIC_PRESENTATION_DISCLOSURE.search(text)
    ]
    if len(disclosures) > 1:
        failures.append(
            completeness_failure(
                case_id,
                f"{root}.media-credit",
                "REPEATED_PRESENTATION_DISCLOSURE",
                disclosures,
            )
        )

    media = public.get("media")
    gallery = media.get("gallery") if isinstance(media, dict) else None
    gallery_complete = (
        isinstance(gallery, list)
        and len(gallery) >= 1
        and all(
            isinstance(item, dict)
            and has_public_words(item.get("alt"), 3)
            and has_public_words(item.get("caption"), 5)
            for item in gallery
        )
    )
    if not (
        isinstance(media, dict)
        and has_public_words(media.get("label"))
        and has_public_words(media.get("title"), 3)
        and gallery_complete
    ):
        failures.append(
            completeness_failure(case_id, f"{root}.media", "FIRST_30_SUPPORTING_MEDIA", media)
        )

    return failures


def excerpt(value: str, start: int, end: int, limit: int = 180) -> str:
    normalized = re.sub(r"\s+", " ", value).strip()
    if len(normalized) <= limit:
        return normalized
    center = (start + end) // 2
    left = max(0, center - limit // 2)
    right = min(len(normalized), left + limit)
    left = max(0, right - limit)
    prefix = "…" if left else ""
    suffix = "…" if right < len(normalized) else ""
    return f"{prefix}{normalized[left:right].strip()}{suffix}"


def audience_failures(case_id: str, path: str, value: str) -> list[str]:
    normalized = re.sub(r"\s+", " ", value).strip()
    failures: list[str] = []
    for rule_name, pattern in AUDIENCE_RULES:
        match = pattern.search(normalized)
        if not match:
            continue
        matched_excerpt = json.dumps(
            excerpt(normalized, match.start(), match.end()), ensure_ascii=False
        )
        failures.append(
            f'{case_id}: audience copy path={path} rule={rule_name} '
            f"excerpt={matched_excerpt}"
        )
    return failures


def corpus_repetition_failures(
    rendered_by_id: dict[str, dict], selected_ids: list[str]
) -> list[str]:
    """Reject copied narrative units and highly repeated long phrases."""

    selected = set(selected_ids)
    exact_units: dict[str, set[str]] = {}
    phrase_owners: dict[tuple[str, ...], set[str]] = {}

    for case_id, item in rendered_by_id.items():
        public = item.get("public", {})
        if not isinstance(public, dict):
            continue
        for fragment in public_narrative_fragments(public):
            normalized = re.sub(r"\s+", " ", fragment).strip().lower()
            if len(re.findall(r"\b[\w’'-]+\b", normalized)) >= 12:
                exact_units.setdefault(normalized, set()).add(case_id)

            tokens = re.findall(r"[a-z0-9’'-]+", normalized)
            for index in range(max(0, len(tokens) - 6)):
                phrase = tuple(tokens[index : index + 7])
                phrase_owners.setdefault(phrase, set()).add(case_id)

    failures: list[str] = []
    for text, owners in sorted(exact_units.items()):
        if len(owners) < 2 or not owners.intersection(selected):
            continue
        failures.append(
            "shared: narrative repetition rule=EXACT_PARAGRAPH_REUSE "
            f"cases={sorted(owners)} excerpt={json.dumps(text[:180], ensure_ascii=False)}"
        )
        if len(failures) >= 6:
            break

    repeated_phrases = [
        (phrase, owners)
        for phrase, owners in phrase_owners.items()
        if len(owners) >= 4 and owners.intersection(selected)
    ]
    repeated_phrases.sort(key=lambda item: (-len(item[1]), item[0]))
    for phrase, owners in repeated_phrases[:6]:
        failures.append(
            "shared: narrative repetition rule=CORPUS_TEMPLATE_PHRASE "
            f"cases={sorted(owners)} excerpt={json.dumps(' '.join(phrase), ensure_ascii=False)}"
        )

    return failures


def structural_runtime_failures(case_id: str, value: object, path: str) -> list[str]:
    failures: list[str] = []
    if isinstance(value, list):
        for index, item in enumerate(value):
            failures.extend(structural_runtime_failures(case_id, item, f"{path}[{index}]"))
        return failures
    if not isinstance(value, dict):
        return failures
    for key, item in value.items():
        key_path = f"{path}.{key}"
        if re.search(r"evidence|capture|mediaStatus", key, re.IGNORECASE):
            matched_excerpt = json.dumps(key, ensure_ascii=False)
            failures.append(
                f'{case_id}: public structure path={key_path} '
                f"rule=FORBIDDEN_EVIDENCE_CAPTURE_KEY excerpt={matched_excerpt}"
            )
        failures.extend(structural_runtime_failures(case_id, item, key_path))
    return failures


def structural_source_failures(path: Path) -> list[str]:
    if not path.exists():
        return []
    source = re.sub(r"\s+", " ", path.read_text(encoding="utf-8")).strip()
    failures: list[str] = []
    for rule_name, pattern in FORBIDDEN_PUBLIC_STRUCTURE_PATTERNS:
        match = pattern.search(source)
        if match:
            matched_excerpt = json.dumps(
                excerpt(source, match.start(), match.end()), ensure_ascii=False
            )
            failures.append(
                f'shared: public structure path={path.relative_to(ROOT)} '
                f"rule={rule_name} excerpt={matched_excerpt}"
            )
    return failures


def internal_public_data_failures(path: Path) -> list[str]:
    if not path.exists():
        return []
    source = re.sub(r"\s+", " ", path.read_text(encoding="utf-8")).strip()
    failures: list[str] = []
    for rule_name, pattern in FORBIDDEN_PUBLIC_DATA_PATTERNS:
        match = pattern.search(source)
        if not match:
            continue
        failures.append(
            f'shared: public source path={path.relative_to(ROOT)} '
            f"rule={rule_name} excerpt="
            f"{json.dumps(excerpt(source, match.start(), match.end()), ensure_ascii=False)}"
        )
    return failures


def public_package_failures() -> list[str]:
    failures: list[str] = []
    if not PUBLIC_PACKAGER.is_file():
        return ["shared: missing allowlisted public-site packager"]
    if not PUBLIC_DEPLOY_WORKFLOW.is_file():
        return ["shared: missing manual allowlisted Pages workflow"]

    workflow = PUBLIC_DEPLOY_WORKFLOW.read_text(encoding="utf-8")
    if "workflow_dispatch:" not in workflow:
        failures.append("shared: Pages workflow must remain explicitly dispatched")
    if re.search(r"(?m)^\s{2}(?:push|pull_request)\s*:", workflow):
        failures.append("shared: Pages workflow must not auto-publish on push or pull request")
    if "scripts/package_public_site.py --output _site" not in workflow:
        failures.append("shared: Pages workflow bypasses the public-site allowlist packager")

    with tempfile.TemporaryDirectory(prefix="lesly-public-package-") as temp_root:
        output = Path(temp_root) / "site"
        result = subprocess.run(
            [sys.executable, str(PUBLIC_PACKAGER), "--output", str(output)],
            cwd=ROOT,
            capture_output=True,
            text=True,
        )
        if result.returncode:
            failures.append(
                "shared: public package gate failed: "
                f"{(result.stderr or result.stdout).strip()}"
            )
            return failures

        required = {
            ".nojekyll",
            "index.html",
            "case-study.html",
            "styles.css",
            "script.js",
            "case-study.js",
            "robots.txt",
            "sitemap.xml",
            "assets",
        }
        top_level = {path.name for path in output.iterdir()}
        missing = sorted(required - top_level)
        if missing:
            failures.append(f"shared: public package misses required paths {missing}")
        private = sorted(
            top_level
            & {
                ".agents",
                ".codex",
                ".git",
                ".github",
                "clients",
                "docs",
                "registry",
                "reserch",
                "scripts",
                "temp",
            }
        )
        if private:
            failures.append(f"shared: public package leaks private paths {private}")
    return failures


def validate(case_filter: str | None = None) -> list[str]:
    failures: list[str] = []
    failures.extend(public_package_failures())

    skill_data = load_json(SKILL_REGISTRY)
    entries = skill_data.get("skills", [])
    names = [entry.get("name") for entry in entries]
    paths = [entry.get("path") for entry in entries]
    jobs = [entry.get("job") for entry in entries]
    owners = [entry.get("owner") for entry in entries]

    for label, values in (("skill name", names), ("skill path", paths), ("job", jobs), ("owner", owners)):
        if len(values) != len(set(values)):
            failures.append(f"Duplicate {label} in registry")

    registered_owners = {entry.get("name"): entry.get("owner") for entry in entries}
    for name, expected_owner in LOCKED_SKILL_OWNERS.items():
        if registered_owners.get(name) != expected_owner:
            failures.append(
                f"{name}: owner must remain {expected_owner}, found {registered_owners.get(name)}"
            )

    active_dirs = {
        path.parent.name
        for path in (ROOT / ".agents" / "skills").glob("*/SKILL.md")
    }
    if set(names) != active_dirs:
        failures.append(
            "Skill registry does not match .agents/skills: "
            f"registry={sorted(names)} disk={sorted(active_dirs)}"
        )

    stale_mirror_files = list((ROOT / ".codex" / "skills").glob("**/*"))
    stale_mirror_files = [path for path in stale_mirror_files if path.is_file()]
    if stale_mirror_files:
        failures.append("Legacy .codex/skills mirror still contains files")

    for entry in entries:
        name = entry.get("name", "")
        expected_path = f".agents/skills/{name}/SKILL.md"
        if entry.get("path") != expected_path:
            failures.append(f"{name}: path must be {expected_path}")
            continue
        if entry.get("invocation") not in ALLOWED_INVOCATIONS:
            failures.append(f"{name}: invalid invocation {entry.get('invocation')}")
        path = ROOT / expected_path
        if not path.exists():
            failures.append(f"{name}: missing {expected_path}")
            continue
        try:
            frontmatter = parse_frontmatter(path)
        except ValueError as error:
            failures.append(f"{name}: {error}")
            continue
        extra = set(frontmatter) - ALLOWED_FRONTMATTER
        if extra:
            failures.append(f"{name}: unsupported frontmatter keys {sorted(extra)}")
        if frontmatter.get("name") != name:
            failures.append(f"{name}: frontmatter name mismatch")
        if not frontmatter.get("description"):
            failures.append(f"{name}: missing description")
        body = path.read_text(encoding="utf-8")
        if ".codex/skills" in body:
            failures.append(f"{name}: stale .codex/skills reference")
        if len(body.split()) > 5000:
            failures.append(f"{name}: body exceeds 5,000 words")

    case_builder_path = ROOT / ".agents" / "skills" / "build-lesly-case-study"
    case_builder_body = (case_builder_path / "SKILL.md").read_text(encoding="utf-8")
    for filename in REQUIRED_CASE_STUDY_REFERENCES:
        reference = case_builder_path / "references" / filename
        if not reference.is_file():
            failures.append(f"build-lesly-case-study: missing references/{filename}")
        if f"references/{filename}" not in case_builder_body:
            failures.append(f"build-lesly-case-study: SKILL.md does not route to references/{filename}")

    case_data = load_json(CASE_REGISTRY)
    expected_entries = case_data.get("cases", [])
    expected_by_id = {entry["id"]: entry for entry in expected_entries}
    if len(expected_by_id) != len(expected_entries):
        failures.append("Duplicate case ID in registry")
    registry_contract = {
        case_id: (bool(entry.get("homepage")), int(entry.get("minimumMedia", 1)))
        for case_id, entry in expected_by_id.items()
    }
    if registry_contract != LOCKED_CASE_CONTRACT:
        failures.append(
            "Protected case corpus changed: every locked ID, homepage state, and media floor must remain"
        )

    rendered = load_runtime_cases()
    rendered_by_id = {entry["id"]: entry for entry in rendered}
    if set(rendered_by_id) != set(expected_by_id):
        failures.append(
            "Case registry does not match case-study.js: "
            f"registry={sorted(expected_by_id)} source={sorted(rendered_by_id)}"
        )
    if case_filter and case_filter not in expected_by_id:
        failures.append(
            f"Unknown --case {case_filter!r}; expected one of {sorted(expected_by_id)}"
        )

    media_path_owners: dict[str, str] = {}
    media_digest_owners: dict[str, tuple[str, str]] = {}
    for case_id, expected in expected_by_id.items():
        item = rendered_by_id.get(case_id)
        if not item:
            continue
        hero = item.get("hero")
        gallery = item.get("gallery", [])
        if not hero:
            failures.append(f"{case_id}: text-only case study is forbidden")
            continue
        clean_hero = clean_asset_path(hero)
        clean_gallery = [clean_asset_path(value) for value in gallery]
        if clean_hero in clean_gallery:
            failures.append(f"{case_id}: hero is repeated in its gallery")
        if len(clean_gallery) != len(set(clean_gallery)):
            failures.append(f"{case_id}: gallery contains duplicate sources")
        media_count = 1 + len(clean_gallery)
        if media_count < expected.get("minimumMedia", 1):
            failures.append(
                f"{case_id}: requires {expected.get('minimumMedia', 1)} media items, found {media_count}"
            )
        for asset in [clean_hero, *clean_gallery]:
            asset_path = ROOT / asset
            if not asset_path.is_file():
                failures.append(f"{case_id}: missing media file {asset}")
                continue
            prior_path_owner = media_path_owners.get(asset)
            if prior_path_owner and prior_path_owner != case_id:
                failures.append(
                    f"{case_id}: media source also belongs to {prior_path_owner} ({asset})"
                )
            else:
                media_path_owners[asset] = case_id
            digest = file_digest(asset_path)
            prior_digest_owner = media_digest_owners.get(digest)
            if prior_digest_owner and prior_digest_owner[0] != case_id:
                failures.append(
                    f"{case_id}: media content duplicates {prior_digest_owner[0]} "
                    f"({asset} == {prior_digest_owner[1]})"
                )
            else:
                media_digest_owners[digest] = (case_id, asset)

    cards = homepage_cards()
    card_ids = [card["id"] for card in cards]
    expected_homepage = {
        case_id for case_id, entry in expected_by_id.items() if entry.get("homepage")
    }
    if set(card_ids) != expected_homepage or len(card_ids) != len(expected_homepage):
        failures.append(
            "Homepage case cards do not match registry: "
            f"expected={sorted(expected_homepage)} found={sorted(card_ids)}"
        )
    card_sources = [clean_asset_path(card["image"]) for card in cards if card["image"]]
    if len(card_sources) != len(cards):
        failures.append("Every homepage case card must contain an image")
    if len(card_sources) != len(set(card_sources)):
        failures.append("Homepage case cards contain duplicate image sources")
    card_digests: dict[str, tuple[str, str]] = {}
    for card in cards:
        case_id = card["id"]
        source = card["image"]
        if not source:
            continue
        asset = clean_asset_path(source)
        asset_path = ROOT / asset
        if not asset_path.is_file():
            failures.append(f"Homepage card references missing media file {asset}")
            continue
        digest = file_digest(asset_path)
        prior = card_digests.get(digest)
        if prior and prior[0] != case_id:
            failures.append(
                f"Homepage card {case_id} duplicates {prior[0]} by content "
                f"({asset} == {prior[1]})"
            )
        else:
            card_digests[digest] = (case_id, asset)

    selected_ids = (
        [case_filter]
        if case_filter in expected_by_id
        else ([] if case_filter else list(expected_by_id))
    )
    cards_by_id = {card["id"]: card for card in cards}
    for case_id in selected_ids:
        item = rendered_by_id.get(case_id)
        if not item:
            continue
        failures.extend(
            structural_runtime_failures(case_id, item.get("runtime", {}), f"CASE_STUDIES[{case_id}]")
        )
        failures.extend(public_completeness_failures(case_id, item.get("public", {})))
        for path, value in iter_public_strings(
            item.get("public", {}), f"CASE_STUDIES[{case_id}].public"
        ):
            failures.extend(audience_failures(case_id, path, value))
        card = cards_by_id.get(case_id)
        if card:
            failures.extend(
                audience_failures(
                    case_id,
                    f"index.html.work-card[{case_id}].text",
                    card.get("text") or "",
                )
            )
            failures.extend(
                audience_failures(
                    case_id,
                    f"index.html.work-card[{case_id}].alt",
                    card.get("alt") or "",
                )
            )

    selected_public_views = [
        rendered_by_id[case_id].get("public", {})
        for case_id in selected_ids
        if case_id in rendered_by_id
    ]
    if any(public.get("narrative") for public in selected_public_views):
        story_html = (ROOT / "case-study.html").read_text(encoding="utf-8")
        story_js = (ROOT / "case-study.js").read_text(encoding="utf-8")
        runtime_requirements = (
            ("case-study.html", story_html, "data-case-story-before"),
            ("case-study.html", story_html, "data-case-story-after"),
            ("case-study.js", story_js, "function renderStorySections"),
            ("case-study.js", story_js, "renderStorySections(study)"),
        )
        for source_name, source, token in runtime_requirements:
            if token not in source:
                failures.append(
                    "shared: artist narrative runtime "
                    f"path={source_name} rule=VISIBLE_NARRATIVE_MOUNT missing={token!r}"
                )
    failures.extend(corpus_repetition_failures(rendered_by_id, selected_ids))

    shared_visible_paths = [ROOT / "case-study.html"]
    if not case_filter:
        shared_visible_paths.insert(0, ROOT / "index.html")
    for public_path in shared_visible_paths:
        if public_path.exists():
            for index, visible_text in enumerate(
                visible_html_blocks(public_path.read_text(encoding="utf-8"))
            ):
                failures.extend(
                    audience_failures(
                        "shared",
                        f"{public_path.relative_to(ROOT)}.visible-text[{index}]",
                        visible_text,
                    )
                )

    for public_path in (
        ROOT / "index.html",
        ROOT / "case-study.html",
        ROOT / "case-study.js",
        ROOT / "styles.css",
    ):
        failures.extend(structural_source_failures(public_path))

    if not case_filter:
        failures.extend(internal_public_data_failures(ROOT / "case-study.js"))

    return failures


def parse_args(argv: list[str] | None = None) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Validate skill ownership, portfolio preservation, and public audience safety."
    )
    parser.add_argument(
        "--case",
        dest="case_id",
        metavar="CASE_ID",
        help="Run the audience gate for one active case while retaining global invariants.",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv)
    try:
        failures = validate(args.case_id)
    except (json.JSONDecodeError, OSError, subprocess.CalledProcessError) as error:
        print(f"FAIL: validator could not run: {error}")
        return 2

    print("Lesly skill and portfolio registry validation")
    print("=============================================")
    print(f"Audience scope: {args.case_id or 'all registered cases'}")
    if failures:
        print("FAIL")
        for failure in failures:
            print(f"- {failure}")
        return 2
    print("PASS")
    print(
        "Skill ownership, locked corpus, media, and public audience gates passed for "
        f"{args.case_id or 'all registered cases'}."
    )
    return 0


if __name__ == "__main__":
    sys.exit(main())
