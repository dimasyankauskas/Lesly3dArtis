#!/usr/bin/env node

import fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import vm from 'node:vm';
import {fileURLToPath} from 'node:url';

const SCRIPT_DIR=path.dirname(fileURLToPath(import.meta.url));
const ROOT=path.resolve(SCRIPT_DIR,'..');
const DATA_MARKER='const fallbackStudy=';
const MAIN_START='<!-- STATIC_CASE_MAIN_START -->';
const MAIN_END='<!-- STATIC_CASE_MAIN_END -->';
const SITE_ORIGIN='https://leslyyankauskas.com';

function fail(message){
  console.error(`FAIL: ${message}`);
  process.exit(2);
}

function parseArgs(argv){
  const values={};
  for(let index=0;index<argv.length;index+=2){
    const key=argv[index];
    const value=argv[index+1];
    if(!key?.startsWith('--')||!value)fail('Expected --output and --version arguments.');
    values[key.slice(2)]=value;
  }
  if(!values.output||!values.version)fail('Expected --output and --version arguments.');
  return values;
}

function readCaseStudies(){
  const source=fs.readFileSync(path.join(ROOT,'case-study.js'),'utf8');
  const markerIndex=source.indexOf(DATA_MARKER);
  if(markerIndex<0)fail(`Missing case-data marker: ${DATA_MARKER}`);
  const dataSource=source.slice(0,markerIndex);
  const context={};
  vm.runInNewContext(
    `${dataSource}\nglobalThis.__PUBLIC_CASE_STUDIES__=CASE_STUDIES;`,
    context,
    {filename:'case-study.js'}
  );
  const studies=JSON.parse(JSON.stringify(context.__PUBLIC_CASE_STUDIES__));
  if(!Array.isArray(studies)||studies.length===0)fail('No public case studies were extracted.');
  const ids=new Set(studies.map(study=>study.id));
  if(ids.size!==studies.length)fail('Public case-study IDs are not unique.');
  for(const study of studies){
    if(!study.id||!study.title||!study.lead||!study.seoDescription||!study.hero?.src){
      fail(`Case ${study.id||'(unknown)'} is missing required public fields.`);
    }
  }
  return studies;
}

function escapeHtml(value=''){
  return String(value)
    .replaceAll('&','&amp;')
    .replaceAll('<','&lt;')
    .replaceAll('>','&gt;')
    .replaceAll('"','&quot;')
    .replaceAll("'",'&#39;');
}

function escapeAttribute(value=''){
  return escapeHtml(value).replaceAll('`','&#96;');
}

function conciseDescription(value,maxLength=180){
  const normalized=String(value||'').replace(/\s+/g,' ').trim();
  if(normalized.length<=maxLength)return normalized;
  const shortened=normalized.slice(0,maxLength-1);
  const lastSpace=shortened.lastIndexOf(' ');
  return `${shortened.slice(0,lastSpace>120?lastSpace:maxLength-1).replace(/[,:;\s]+$/,'')}…`;
}

function versionedAsset(source,version){
  if(!source?.startsWith('assets/'))return source||'';
  return `${source}${source.includes('?')?'&':'?'}v=${version}`;
}

function absoluteAsset(source,version){
  return new URL(versionedAsset(source,version),`${SITE_ORIGIN}/`).href;
}

function cleanCaseHref(id){
  return `work/${encodeURIComponent(id)}/`;
}

function canonicalUrl(id){
  return `${SITE_ORIGIN}/${cleanCaseHref(id)}`;
}

function heroSrcset(study,version){
  const source=study.hero?.src||'';
  if(!source.endsWith('.webp'))return '';
  const small=source.replace(/\.webp$/,'-800.webp');
  const medium=source.replace(/\.webp$/,'-960.webp');
  return ` srcset="${escapeAttribute(versionedAsset(small,version))} 800w, ${escapeAttribute(versionedAsset(medium,version))} 960w, ${escapeAttribute(versionedAsset(source,version))} ${Number(study.hero.width)||1200}w" sizes="(max-width: 767px) 100vw, (max-width: 1180px) 54vw, 640px"`;
}

function renderFacts(study){
  const items=study.facts||[];
  if(items.length===0)return '';
  return `<dl class="case-facts" data-case-facts>\n${items.map(([label,value])=>
    `        <div><dt>${escapeHtml(label)}</dt><dd>${escapeHtml(value)}</dd></div>`
  ).join('\n')}\n      </dl>`;
}

function renderStoryGroup(study,placement){
  const story=Array.isArray(study.storySections)?study.storySections:[];
  const items=story.filter(section=>placement==='after-media'
    ?section.placement==='after-media'
    :section.placement!=='after-media');
  const attribute=placement==='after-media'?'data-case-story-after':'data-case-story-before';
  return `    <div class="case-story-group" ${attribute}>\n${items.map(section=>{
    const paragraphs=Array.isArray(section.paragraphs)
      ?section.paragraphs
      :[section.copy||section.body||''].filter(Boolean);
    return `      <section class="cs-section case-story-section">
        <div class="container case-story-layout">
          <header class="case-story-heading">
            ${section.label?`<p class="cs-eyebrow">${escapeHtml(section.label)}</p>`:''}
            <h2>${escapeHtml(section.title||'')}</h2>
          </header>
          <div class="case-story-copy">
${paragraphs.map(paragraph=>`            <p>${escapeHtml(paragraph)}</p>`).join('\n')}
          </div>
        </div>
      </section>`;
  }).join('\n')}\n    </div>`;
}

function renderCards(items){
  return (items||[]).map(([title,copy])=>
    `          <article><h3>${escapeHtml(title)}</h3><p>${escapeHtml(copy)}</p></article>`
  ).join('\n');
}

function renderCardSection({label,title,items,sectionAttribute,gridAttribute}){
  return `    <section class="cs-section" ${sectionAttribute}>
      <div class="container">
        <p class="cs-eyebrow">${escapeHtml(label)}</p>
        <h2>${escapeHtml(title)}</h2>
        <div class="case-detail-grid" ${gridAttribute}>
${renderCards(items)}
        </div>
      </div>
    </section>`;
}

function renderGallery(study,version){
  const gallery=study.gallery||[];
  return gallery.map(media=>{
    const isWide=media.aspect==='16/9';
    const aspectClass=`case-media--${String(media.aspect||'4/3').replace('/','x')}`;
    const srcset=media.responsive
      ?` srcset="${escapeAttribute(versionedAsset(media.responsive.small,version))} 720w, ${escapeAttribute(versionedAsset(media.responsive.medium,version))} 1200w, ${escapeAttribute(versionedAsset(media.src,version))} ${Number(media.width)||1200}w" sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1200px) calc(100vw - 4rem), 900px"`
      :'';
    return `          <figure class="case-media ${isWide?'is-wide ':''}${escapeAttribute(aspectClass)}">
            <img src="${escapeAttribute(versionedAsset(media.src,version))}"${srcset} width="${Number(media.width)||1200}" height="${Number(media.height)||900}" alt="${escapeAttribute(media.alt)}" loading="lazy" decoding="async" data-progressive-image>
            <figcaption>${escapeHtml(media.caption)}</figcaption>
          </figure>`;
  }).join('\n');
}

const VISUAL_FAMILY={
  'game-hero':'game-character',
  'pbr-texturing':'marsh-warden-texturing',
  'character-environment':'character-staging',
  'outfits-accessories':'outfit-system',
  'original-site-concept':'concept-to-character',
  'interior-props':'interior-props',
  'ai-visual-pipeline':'visual-pipeline',
  'santa-cruz-ai-visual-pipeline':'residential-workflow',
  'construction-client-progress-workflow':'construction-workflow',
  'print-startup-direction':'sol',
  'mascot-character':'sol',
  'sculpt-to-retopo':'sculpt-direction',
  'avatar-character':'mira-avatar'
};

const CURATED_RELATED={
  'game-hero':['original-site-concept','sculpt-to-retopo','pbr-texturing'],
  'original-site-concept':['game-hero','sculpt-to-retopo','pbr-texturing'],
  'pbr-texturing':['outfits-accessories','interior-props','game-hero']
};

function relatedCases(study,studies){
  const preferred=(CURATED_RELATED[study.id]||[])
    .map(id=>studies.find(item=>item.id===id))
    .filter(Boolean);
  const ordered=[...preferred,...studies];
  const seenIds=new Set([study.id]);
  const seenFamilies=new Set([VISUAL_FAMILY[study.id]||study.id]);
  const seenMedia=new Set(study.hero?.src?[study.hero.src]:[]);
  const related=[];
  for(const item of ordered){
    const family=VISUAL_FAMILY[item.id]||item.id;
    const media=item.hero?.src||item.image||'';
    if(related.length>=3||seenIds.has(item.id)||seenFamilies.has(family)||seenMedia.has(media))continue;
    seenIds.add(item.id);
    seenFamilies.add(family);
    if(media)seenMedia.add(media);
    related.push(item);
  }
  return related;
}

function renderRelated(study,studies,version){
  return relatedCases(study,studies).map(item=>{
    const scope=item.kicker||'Selected work';
    const lead=item.relatedLead||'Explore the project story and final presentation.';
    const thumb=item.hero?`<img src="${escapeAttribute(versionedAsset(item.hero.src,version))}"${heroSrcset(item,version)} width="${Number(item.hero.width)||1200}" height="${Number(item.hero.height)||900}" alt="" loading="lazy" decoding="async" data-progressive-image>`:`<span class="thumb-label">${escapeHtml(scope)}<small>Project story</small></span>`;
    return `          <a class="work-card" data-related-case="${escapeAttribute(item.id)}" data-visual-family="${escapeAttribute(VISUAL_FAMILY[item.id]||item.id)}" href="${escapeAttribute(cleanCaseHref(item.id))}">
            <div class="thumb${item.hero?'':' thumb--text'}">${thumb}</div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="meta">${escapeHtml(scope)}</p>
            <p>${escapeHtml(lead)}</p>
          </a>`;
  }).join('\n');
}

function renderMain(study,studies,version){
  const defaults={direction:true,problem:true,process:true,media:true,result:Boolean(study.resultSummary),details:true};
  const visible={...defaults,...(study.visibleSections||{})};
  const heroClass=study.hero.aspect==='4/5'?'has-portrait-hero':study.hero.aspect==='4/3'?'has-four-three-hero':'';
  const caption=study.heroCaption
    ?`        <figcaption class="cs-hero-media-note" data-case-hero-caption>${escapeHtml(study.heroCaption)}</figcaption>`
    :`        <figcaption class="cs-hero-media-note" data-case-hero-caption hidden></figcaption>`;
  const sections=[];
  sections.push(renderStoryGroup(study,'before-media'));
  if(visible.direction){
    sections.push(`    <section class="cs-section cs-section-first" data-case-direction-section>
      <div class="container">
        <p class="cs-eyebrow" data-case-direction-label>${escapeHtml(study.directionLabel||'Project direction')}</p>
        <h2 data-case-what-title>${escapeHtml(study.whatTitle||'Project direction.')}</h2>
        <p class="cs-lead" data-case-what-copy>${escapeHtml(study.whatCopy||'')}</p>
      </div>
    </section>`);
  }
  if(visible.problem){
    sections.push(renderCardSection({
      label:study.problemLabel||'Problem solved',
      title:study.problemTitle||'Problem solved.',
      items:study.problems||[],
      sectionAttribute:'data-case-problem-section',
      gridAttribute:'data-case-problems'
    }));
  }
  if(visible.process){
    sections.push(renderCardSection({
      label:study.processLabel||'Process',
      title:study.processTitle||'Process structure.',
      items:study.process||[],
      sectionAttribute:'data-case-process-section',
      gridAttribute:'data-case-process'
    }));
  }
  if(visible.media&&(study.gallery||[]).length>0){
    sections.push(`    <section class="cs-section" data-case-media-section>
      <div class="container">
        <p class="cs-eyebrow" data-case-media-label>${escapeHtml(study.mediaLabel||'Selected project media')}</p>
        <h2 data-case-media-title>${escapeHtml(study.mediaTitle||'Visual direction.')}</h2>
        <div class="case-gallery${study.gallery.length===1?' is-single':''}" data-case-gallery>
${renderGallery(study,version)}
        </div>
      </div>
    </section>`);
  }
  sections.push(renderStoryGroup(study,'after-media'));
  if(visible.result&&study.resultSummary){
    sections.push(`    <section class="cs-section" data-case-result-section>
      <div class="container case-result-layout">
        <article class="case-result-summary">
          <p class="cs-eyebrow" data-case-result-label>${escapeHtml(study.resultSummary.label||'Final presentation')}</p>
          <h2 data-case-result-title>${escapeHtml(study.resultSummary.title||'Project result.')}</h2>
          <p class="cs-lead" data-case-result-copy>${escapeHtml(study.resultSummary.copy||'')}</p>
        </article>
      </div>
    </section>`);
  }
  if(visible.details){
    sections.push(renderCardSection({
      label:study.detailsLabel||'Visual read',
      title:study.detailsTitle||'Visual read.',
      items:study.details||[],
      sectionAttribute:'data-case-details-section',
      gridAttribute:'data-case-details'
    }));
  }

  return `<main id="main">
    <section class="cs-hero cs-visual-study-hero ${heroClass}">
      <figure class="cs-hero-bg">
        <img data-case-hero src="${escapeAttribute(versionedAsset(study.hero.src,version))}"${heroSrcset(study,version)} width="${Number(study.hero.width)||1200}" height="${Number(study.hero.height)||900}" alt="${escapeAttribute(study.hero.alt)}" loading="eager" fetchpriority="high" decoding="async">
${caption}
      </figure>
      <div class="cs-hero-copy">
        <p class="eyebrow" data-case-kicker>${escapeHtml(study.kicker||'Selected work')}</p>
        <h1 data-case-title>${escapeHtml(study.title)}</h1>
        <p class="cs-meta" data-case-meta>${(study.meta||[]).map(item=>`<span>${escapeHtml(item)}</span>`).join('')}</p>
        <p class="cs-lead" data-case-lead>${escapeHtml(study.lead)}</p>
      </div>
${renderFacts(study)}
    </section>

${sections.join('\n\n')}

    <section class="cs-section cs-related">
      <div class="container">
        <p class="cs-eyebrow">More work</p>
        <h2>More case studies.</h2>
        <div class="work-grid cs-related-grid mt-2" data-related-cases>
${renderRelated(study,studies,version)}
        </div>
        <div class="cs-related-cta">
          <a class="btn btn-primary" href="index.html#contact">Start a project</a>
          <a class="btn" href="index.html#work">Back to case studies</a>
        </div>
      </div>
    </section>
  </main>`;
}

function setMetaContent(document,attribute,value){
  const pattern=new RegExp(`<meta\\b[^>]*\\b${attribute}\\b[^>]*>`,`i`);
  if(!pattern.test(document))fail(`Template is missing ${attribute}.`);
  return document.replace(pattern,tag=>{
    const contentPattern=/\bcontent="[^"]*"/i;
    if(!contentPattern.test(tag))fail(`Template ${attribute} meta has no content attribute.`);
    return tag.replace(contentPattern,`content="${escapeAttribute(value)}"`);
  });
}

function renderDocument(template,study,studies,version){
  const pageTitle=`${study.title} | Lesly`;
  const description=conciseDescription(study.seoDescription||study.lead);
  const canonical=canonicalUrl(study.id);
  const image=absoluteAsset(study.hero.src,version);
  const schema={
    '@context':'https://schema.org',
    '@type':'CreativeWork',
    '@id':`${canonical}#creativework`,
    name:study.title,
    description,
    url:canonical,
    image,
    genre:study.kicker||'3D character art',
    inLanguage:'en-US',
    creator:{
      '@type':'Person',
      '@id':`${SITE_ORIGIN}/#lesly`,
      name:'Lesly',
      jobTitle:'3D Character Artist'
    }
  };
  const head=`<base href="../../">
  <link rel="canonical" href="${escapeAttribute(canonical)}">
  <script id="case-structured-data" type="application/ld+json">${JSON.stringify(schema).replaceAll('<','\\u003c')}</script>`;
  let document=template.replace('<title>Forge Warden — Character Direction | Lesly</title>',`<title>${escapeHtml(pageTitle)}</title>`);
  document=setMetaContent(document,'data-seo-description',description);
  document=setMetaContent(document,'data-seo-robots','index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  document=setMetaContent(document,'data-seo-og-title',pageTitle);
  document=setMetaContent(document,'data-seo-og-description',description);
  document=setMetaContent(document,'data-seo-og-url',canonical);
  document=setMetaContent(document,'data-seo-og-image',image);
  document=setMetaContent(document,'data-seo-og-image-width',String(study.hero.width||''));
  document=setMetaContent(document,'data-seo-og-image-height',String(study.hero.height||''));
  document=setMetaContent(document,'data-seo-og-image-alt',study.hero.alt||'');
  document=setMetaContent(document,'data-seo-twitter-title',pageTitle);
  document=setMetaContent(document,'data-seo-twitter-description',description);
  document=setMetaContent(document,'data-seo-twitter-image',image);
  document=setMetaContent(document,'data-seo-twitter-image-alt',study.hero.alt||'');
  document=document.replace('<!-- STATIC_CASE_HEAD -->',head);
  document=document.replace(
    '<body class="case-study">',
    `<body class="case-study is-polished-case" data-static-case data-case-id="${escapeAttribute(study.id)}">`
  );
  document=document.replace(
    '<a href="#main" class="skip-link">',
    `<a href="${escapeAttribute(cleanCaseHref(study.id))}#main" class="skip-link">`
  );
  const start=document.indexOf(MAIN_START);
  const end=document.indexOf(MAIN_END);
  if(start<0||end<0||end<=start)fail('Template static-case main markers are invalid.');
  document=`${document.slice(0,start)}${MAIN_START}\n  ${renderMain(study,studies,version)}\n  ${document.slice(end)}`;
  return document;
}

function main(){
  const args=parseArgs(process.argv.slice(2));
  const output=path.resolve(args.output);
  const templatePath=path.join(output,'case-study.html');
  if(!fs.existsSync(templatePath))fail(`Packaged case-study template is missing: ${templatePath}`);
  const template=fs.readFileSync(templatePath,'utf8');
  const studies=readCaseStudies();
  for(const study of studies){
    const destination=path.join(output,'work',study.id,'index.html');
    fs.mkdirSync(path.dirname(destination),{recursive:true});
    fs.writeFileSync(destination,renderDocument(template,study,studies,args.version));
  }
  console.log(`Static case pages PASS: ${studies.length} crawlable routes.`);
}

main();
