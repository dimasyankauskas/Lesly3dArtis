const CASE_STUDIES=[
  {
    id:'game-hero',
    title:'Game-Ready Character Project',
    image:'assets/portfolio/work-game-ready-character.webp',
    alt:'Full-body game character project presentation.',
    meta:['Game character','Character asset','Handoff plan'],
    lead:'A full-body game-character case built around silhouette, costume hierarchy, material read, and production handoff.',
    whatTitle:'A character-first presentation for game work.',
    whatCopy:'This project presents the visual direction, pose, costume mood, and inspection categories a game-facing character portfolio needs.',
    details:[
      ['Silhouette','Clear full-body read, weapon shape, cape flow, and stance for a quick recruiter scan.'],
      ['Material read','Armor, cloth, leather, hair, and skin are lit to suggest surface contrast and costume hierarchy.'],
      ['Stage','Simple grounded studio stage keeps attention on the character instead of environment decoration.'],
      ['Technical checks','Mesh density, UVs, bakes, texture sheets, engine setup, and deliverables are documented for handoff.']
    ],
    gallery:[
      ['assets/process/game-hero/presentation-board.webp','Presentation board with full character plus detail crops.'],
      ['assets/process/game-hero/face-read.webp','Face and upper-body read for expression, hair, armor, and silhouette.'],
      ['assets/process/game-hero/costume-material.webp','Costume hierarchy crop showing cloth, leather, metal, and belts.'],
      ['assets/process/game-hero/weapon-silhouette.webp','Weapon and lower-silhouette crop for prop scale and pose read.']
    ],
    proof:[
      ['Topology','Wireframe, low-poly mesh, edge flow, and any optimization notes.'],
      ['UV and textures','UV layout, texture/material sheets, bake maps, and PBR or stylized material notes.'],
      ['Engine/export','FBX/OBJ/BLEND handoff plus Unity, Unreal, or Marmoset notes where the scope requires them.'],
      ['Turnaround','Front, side, back, three-quarter, closeups, and neutral lighting views.']
    ],
    current:['assets/portfolio/work-game-ready-character.webp'],
    required:['assets/process/game-hero/hero.webp','assets/process/game-hero/technical-proof.webp','assets/process/game-hero/final-renders.webp','assets/process/game-hero/deliverables.webp']
  },
  {
    id:'character-environment',
    title:'Character Staging Project',
    image:'assets/portfolio/work-character-environment.webp?v=staging-thumb-20260608',
    alt:'Character staging crop showing plinth, ground contact, supporting prop, cloth, and scale context.',
    meta:['Staging','Character context','Scene support'],
    lead:'A character-staging presentation built around grounding, scale cues, restrained props, lighting, and camera-ready context.',
    whatTitle:'A focused staging pass that supports the character.',
    whatCopy:'This project shows how stage design can frame a character without turning the case into environment art: ground plane, plinth, support props, lighting, camera angle, and final presentation context.',
    details:[
      ['Stage read','The plinth, floor contact, and prop placement make the character feel grounded instead of floating in a neutral render.'],
      ['Scale cues','Rocks, base details, and simple stage forms give the viewer size and world context.'],
      ['Lighting direction','Warm studio light separates face, costume, weapon, and silhouette while keeping the background restrained.'],
      ['Technical checks','Blockout, prop mesh, lighting setup, camera notes, and engine or render-scene captures clarify the staging work.']
    ],
    gallery:[
      ['assets/process/character-environment/presentation-board.webp','Stage presentation board showing character, base, lighting, and context.'],
      ['assets/process/character-environment/hero-stage.webp','Hero-stage crop for character scale, pose, and surrounding context.'],
      ['assets/process/character-environment/stage-grounding.webp','Grounding crop for plinth, rocks, contact shadow, and prop restraint.']
    ],
    proof:[
      ['Stage blockout','Blockout views, prop placement, scale notes, and camera framing.'],
      ['Scene assets','Plinth, rocks, ground plane, backdrop, supporting props, and material notes.'],
      ['Lighting/render setup','Key/fill/rim light notes, render settings, shadows, and color mood.'],
      ['Engine/export context','Marmoset, Blender, Unity, Unreal, or viewer captures when the scene needs real-time review.']
    ],
    current:['assets/portfolio/work-character-environment.webp'],
    required:['assets/process/character-environment/blockout.webp','assets/process/character-environment/lighting-breakdown.webp','assets/process/character-environment/prop-assets.webp','assets/process/character-environment/scene-handoff.webp']
  },
  {
    id:'interior-props',
    title:'Interior Props & Set Dressing Project',
    image:'assets/portfolio/work-interior-props.webp',
    alt:'Interior prop set with carved shelves, boxes, ceramics, glass, brass, fabric, books, and warm lighting.',
    meta:['Interior props','Material study','Set dressing'],
    lead:'A shelf-and-object prop case focused on mood, scale, material variety, and reusable interior assets.',
    whatTitle:'A prop-art pass for interiors, product worlds, and mood-driven scenes.',
    whatCopy:'This project turns a 2D mood direction into a precise 3D prop set: shelves, boxes, glass bottles, brass hardware, ceramics, carved wood, textiles, books, labels, and staged lighting.',
    details:[
      ['Set dressing','The shelf, boxes, books, ceramics, glass, candle holders, and plants build a specific interior mood instead of a generic prop dump.'],
      ['Material range','Aged brass, dark steel, clear and smoky glass, glazed ceramic, carved wood, leather, fabric, and paper each get their own surface read.'],
      ['Scale and precision','Small hinges, latches, keys, labels, carved trim, fabric folds, bottle ribs, and book spines make the scene feel manufactured and usable.'],
      ['Technical checks','The source package includes 266 named mesh objects, 8,246 faces, UV coordinates, 14 materials, closeup renders, and delivery files.']
    ],
    gallery:[
      ['assets/process/interior-props/presentation-board.webp','Interior prop board showing shelf composition, mood references, blockout, wire-style read, assets, materials, and closeups.'],
      ['assets/3d/interior-props/interior-props-mesh-sheet.svg','Technical mesh sheet with object-level wireframe, material reads, UV planning, and source-file package.'],
      ['assets/process/interior-props/glass-metal.webp','Glass and metal scene focused on transparency, reflections, aged brass, dark steel, carved wood, and hardware detail.'],
      ['assets/process/interior-props/material-study.webp','Material board for brass, steel, glass, ceramic, wood, leather, fabric, paper, labels, and PBR property previews.'],
      ['assets/process/interior-props/shelf-hero.webp','Shelf hero render with carved wood, ceramic vessels, boxes, books, textile accents, and warm interior light.'],
      ['assets/process/interior-props/two-d-to-three-d.webp','2D-to-3D workflow board from mood references and blockout into final staged props.'],
      ['assets/process/interior-props/material-closeups.webp','Closeup material grid for latch hardware, ceramics, wood carving, fabric weave, leather, paper, and metal wear.']
    ],
    proof:[
      ['Mesh package','OBJ source with named shelf, box, bottle, vase, book, textile, candle, key, latch, trim, and plant objects.'],
      ['Materials','MTL library with PBR-style base color, roughness, metallic, specular, and transparent glass alpha values.'],
      ['Set dressing','Scale, grouping, negative space, focal hierarchy, camera framing, lighting, and mood direction for the interior.'],
      ['Handoff','Source mesh, material library, manifest, technical sheet, render outputs, naming notes, and usage restrictions.']
    ],
    current:['assets/portfolio/work-interior-props.webp'],
    required:['assets/3d/interior-props/interior-props-set.obj','assets/3d/interior-props/interior-props-materials.mtl','assets/3d/interior-props/interior-props-manifest.json','assets/3d/interior-props/interior-props-mesh-sheet.svg']
  },
  {
    id:'ai-visual-pipeline',
    title:'3D Visual Pipeline Case Study',
    image:'assets/portfolio/work-interior-props.webp',
    alt:'Interior prop and material study used as the visual reference for a visual workflow system case.',
    meta:['Direction','Visual pipeline','3D handoff'],
    lead:'A direction case for turning references, AI concepts, technical constraints, material decisions, and review needs into a repeatable visual production plan.',
    whatTitle:'A character and 3D visual workflow plan for production teams.',
    whatCopy:'This case positions Lesly as a character direction and visual workflow partner: she defines the look, material library, production standards, review criteria, new-technology workflow, and developer or team handoff needed to make 3D visualization repeatable.',
    details:[
      ['Direction role','Lesly defines visual standards, material direction, review logic, and implementation guidance so image work stays connected to real 3D and product constraints.'],
      ['Reference control','References, prompts, output notes, and review decisions are organized so the team can repeat good results instead of starting from scratch each time.'],
      ['Agent instructions','3D-aware prompts, rejection rules, and review notes help AI-assisted outputs stay useful for client decisions.'],
      ['Material library','Materials, finishes, lighting moods, and context references are organized into reusable visual rules.'],
      ['Decision model','The project format helps a client compare quality, cost, consistency, and setup options before committing to a production workflow.']
    ],
    gallery:[
      ['assets/process/interior-props/presentation-board.webp','Material and interior-prop board used as a visual reference for the controlled visualization workflow.'],
      ['assets/process/interior-props/material-study.webp','Material study showing why reusable surface libraries matter for repeatable AI-assisted visualization.'],
      ['assets/process/interior-props/material-closeups.webp','Closeup material references used to explain consistency, review criteria, and output quality standards.']
    ],
    proof:[
      ['Cost baseline','Approved spend notes, tooling choices, and setup assumptions if the client wants a workflow economics review.'],
      ['Workflow package','Prompt templates, reference boards, QA checklist, output logs, and generation notes where scoped.'],
      ['Implementation notes','Developer brief, tool notes, handoff instructions, training materials, and workstation assumptions where scoped.'],
      ['Review material','Material-library screenshots, client review examples, output comparisons, and approved public-safe outcomes where available.']
    ],
    current:['assets/portfolio/work-interior-props.webp','assets/process/interior-props/presentation-board.webp','assets/process/interior-props/material-study.webp','assets/process/interior-props/material-closeups.webp'],
    required:['assets/process/ai-visual-pipeline/workflow-board-generated.png','assets/process/ai-visual-pipeline/review-criteria-generated.png','assets/process/ai-visual-pipeline/material-library-generated.png','assets/process/ai-visual-pipeline/handoff-system-generated.png']
  },
  {
    id:'santa-cruz-ai-visual-pipeline',
    title:'Local AI Visualization Pipeline',
    image:'assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp',
    alt:'Residential visualization workflow board with references, material standards, review gates, and handoff steps.',
    meta:['AI workflow','Construction visualization','Visual standards'],
    lead:'A residential-construction workflow case for turning scattered AI experiments, material references, and review needs into a controlled local visualization pipeline.',
    whatTitle:'A visual pipeline that makes AI-assisted images usable for production decisions.',
    whatCopy:'This case positions Lesly as a visual pipeline builder: she defines art-direction standards, material consistency rules, review criteria, training needs, and developer-ready workflow requirements so generated images stay connected to real construction constraints.',
    details:[
      ['Visual standards','Material direction, finish options, acceptable variation, and client-ready image criteria are defined before more visuals are generated.'],
      ['Local workflow','The case maps how references, site context, prompts, logged outputs, and review states can become a repeatable local generation workflow.'],
      ['3D-aware review','Lesly keeps the workflow connected to geometry, materials, lighting, and client decisions instead of treating AI images as finished design truth.'],
      ['Implementation handoff','The output is a practical brief for developers, AI tool setup, agent instructions, training material, and review checkpoints.']
    ],
    gallery:[
      ['assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp','Workflow board for references, material standards, local review structure, and handoff steps.'],
      ['assets/process/interior-props/material-study.webp','Material study showing how surface libraries support repeatable visualization decisions.'],
      ['assets/process/interior-props/material-closeups.webp','Closeup material references used to define consistency and review standards.'],
      ['assets/process/interior-props/two-d-to-three-d.webp','2D-to-3D workflow board used as a visual anchor for controlled production handoff.']
    ],
    proof:[
      ['Workflow package','Reference structure, material library, prompt rules, QA checklist, output logs, and training notes where approved.'],
      ['Implementation brief','Developer-ready requirements for local generation, review states, handoff rules, tool setup, and agent behavior.'],
      ['Public-safe evidence','Redacted screenshots, approved process captures, and confirmed business facts before naming exact client, savings, or agency details.'],
      ['Boundary','AI supports visualization and review; it does not replace human art direction, construction decisions, or project management.']
    ],
    current:['assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp'],
    required:['assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp','assets/process/santa-cruz-ai-visual-pipeline/material-standards.webp','assets/process/santa-cruz-ai-visual-pipeline/developer-handoff.webp']
  },
  {
    id:'construction-client-progress-workflow',
    title:'Construction Client Progress Workflow',
    image:'assets/process/construction-client-progress-workflow/progress-review-board.webp',
    alt:'Construction progress review workflow board with evidence tiles, material options, comments, and response states.',
    meta:['Client review','Progress photos','Agentic workflow'],
    lead:'A residential-construction operations case for connecting jobsite photos, client comments, AI visual options, response states, and next actions into one review workflow.',
    whatTitle:'A review system around visual evidence and client decisions.',
    whatCopy:'This case shows Lesly translating visual production judgment into an operational workflow: what to capture, how to review it, how to route comments, where AI can summarize or assist, and how approved visual decisions return to the material and design library.',
    details:[
      ['Capture standards','Photos, notes, materials, and progress evidence are organized so each update answers a real client or team question.'],
      ['Review states','Each visual item can move through clear states: captured, reviewed, needs response, approved, blocked, or ready for follow-up.'],
      ['Agent support','Agentic summaries and routing can reduce scattered communication while keeping human review responsible for actual decisions.'],
      ['Client clarity','The workflow is designed to reduce repeated questions, lost decisions, and disconnected AI visuals.']
    ],
    gallery:[
      ['assets/process/construction-client-progress-workflow/progress-review-board.webp','Progress evidence board showing phases, photo inputs, review states, comments, and next actions.'],
      ['assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp','Related visual pipeline board showing how material standards connect to review operations.'],
      ['assets/process/interior-props/presentation-board.webp','Presentation board used as a material and visual-standard reference for review systems.']
    ],
    proof:[
      ['Review model','Phase list, progress evidence, client comments, agency/team response, next action, and approval states.'],
      ['Workflow brief','Capture rules, comment model, response model, summary requirements, and implementation notes.'],
      ['Public-safe evidence','Redacted portal screenshots, before/after report examples, time logs, message counts, or approved response data.'],
      ['Boundary','AI assists summaries, routing, and visual options; it does not make construction decisions or replace project managers.']
    ],
    current:['assets/process/construction-client-progress-workflow/progress-review-board.webp'],
    required:['redacted portal screenshots','before and after progress report samples','approved baseline message or time data if metrics are shown','developer implementation brief','client permission boundaries','confirmation of Lesly role wording']
  },
  {
    id:'print-startup-direction',
    title:'3D Print Character System',
    image:'assets/portfolio/work-mascot-character.webp',
    alt:'Stylized mascot character presentation used as the visual reference for a 3D printing startup direction case.',
    meta:['Direction','3D printing','Workflow system'],
    lead:'A product-direction case for helping a small 3D printing startup turn collectible character ideas into printable assets with style rules, printability checks, and clear handoff standards.',
    whatTitle:'A product-ready character system for small-batch 3D printing.',
    whatCopy:'This case connects directly to Lesly’s 3D character authority: character style, printable form, collectible appeal, print QA, agent instructions, production handoff, and repeatable startup workflow.',
    details:[
      ['Direction role','Lesly defines character families, style rules, product scale, pose constraints, base systems, accessory logic, and production-readiness gates.'],
      ['Printability rules','The workflow brought physical constraints earlier: wall thickness, watertight geometry, supports, hollowing, drainage, fragile details, orientation, and file package checks.'],
      ['Workflow support','Her 3D knowledge becomes the operating layer for review: what to generate, what to reject, what geometry risks to flag, and what handoff instructions the team needs.'],
      ['Startup system','Instead of treating each character as a one-off, the project created a repeatable library for future collectible lines.'],
      ['Production model','The project format helps a startup track repair time, failed prints, prep labor, material waste, and successful test-print count after real production data is available.']
    ],
    gallery:[
      ['assets/process/mascot-character/presentation-board.webp','Character presentation board used to show style-system thinking for repeatable product families.'],
      ['assets/process/mascot-character/pose-panels.webp','Pose and variation panels used to explain how character decisions become a reusable startup product system.'],
      ['assets/process/sculpt-to-retopo/turnaround-strip.webp','Turnaround-style production reference used to discuss printability, geometry review, and handoff standards.']
    ],
    proof:[
      ['Design system','Style guide excerpts, character family boards, pose rules, accessory rules, agent instructions, and base-system standards.'],
      ['Print QA','Slicer screenshots, support/orientation tests, wall-thickness notes, hollowing/drainage checks, and failed-print logs.'],
      ['Handoff','STL/3MF/OBJ package examples, print notes, thumbnails, product metadata, naming rules, and startup restrictions.'],
      ['Outcome material','Before/after model-prep time, repair/rejection counts, successful test-print photos, and approved labor-savings data.']
    ],
    current:['assets/portfolio/work-mascot-character.webp','assets/process/mascot-character/presentation-board.webp','assets/process/mascot-character/pose-panels.webp','assets/process/sculpt-to-retopo/turnaround-strip.webp'],
    required:['style guide excerpt','slicer screenshots','failed-print or repair log','STL/3MF/OBJ handoff package','successful test-print photos','approved startup outcome metrics']
  },
  {
    id:'sculpt-to-retopo',
    title:'Sculpting To Retopology Project',
    image:'assets/portfolio/work-sculpt-retopo.webp',
    alt:'Sculpting and retopology project presentation board.',
    meta:['Process study','Sculpt/retopo','Technical checks'],
    lead:'A process-style project board for presenting sculpt forms, topology direction, turnaround views, and production inspection material.',
    whatTitle:'A technical case-study structure for sculpt and retopo work.',
    whatCopy:'This project gives the portfolio a clear technical category: sculpt forms, head studies, topology visibility, and source captures.',
    details:[
      ['Sculpt read','Bust forms and facial planes suggest what a sculpt breakdown could show.'],
      ['Topology cue','The mesh-style panel shows where low-poly structure, edge flow, and optimization notes are inspected.'],
      ['Breakdown format','A multi-view board is useful for showing form decisions and inspection views.'],
      ['Technical checks','ZBrush, Blender, Maya, Marmoset, UV, and engine captures belong in the inspection package.']
    ],
    gallery:[
      ['assets/process/sculpt-to-retopo/presentation-board.webp','Presentation board assembled for the sculpt-to-retopo project.'],
      ['assets/process/sculpt-to-retopo/sculpt-face.webp','Sculpt-focused face crop for planes, hair mass, and clay presentation.'],
      ['assets/process/sculpt-to-retopo/retopo-panel.webp','Retopology-style crop for mesh structure, edge-flow review, and technical notes.'],
      ['assets/process/sculpt-to-retopo/turnaround-strip.webp','Turnaround strip crop showing the kind of inspection view to request.']
    ],
    proof:[
      ['High-poly sculpt','Clay screenshots, subdivision forms, detail passes, and sculpt closeups.'],
      ['Retopology','Low-poly mesh, wireframe overlay, clean edge flow, and triangle/poly notes if approved.'],
      ['Bake/material handoff','Normal/AO/curvature bakes, texture maps, and material sheet.'],
      ['Source context','Tool screenshots or file captures that can be publicly shown.']
    ],
    current:['assets/portfolio/work-sculpt-retopo.webp'],
    required:['assets/process/sculpt-to-retopo/sculpt-model.webp','assets/process/sculpt-to-retopo/technical-proof.webp','assets/process/sculpt-to-retopo/final-renders.webp']
  },
  {
    id:'avatar-character',
    title:'Avatar Character Project',
    image:'assets/portfolio/work-avatar-character.webp',
    alt:'Avatar character project board.',
    meta:['Avatar','Expression set','Creator character'],
    lead:'A creator-facing avatar project focused on face read, charm, expression range, outfit personality, and presentation thumbnails.',
    whatTitle:'A visual target for avatar personality and expression.',
    whatCopy:'This page shows avatar positioning, expression planning, pose direction, rig-readiness notes, and delivery needs for creator use.',
    details:[
      ['Face read','Large portrait framing makes expression, eyes, hair, and charm readable at thumbnail size.'],
      ['Expression range','Side panels suggest alternate expressions or presentation crops.'],
      ['Creator use','The board is aimed at streamer, VTuber, creator, or social identity work.'],
      ['Technical checks','Rig, facial blendshapes, visemes, outfit variants, and export formats define the avatar handoff.']
    ],
    gallery:[
      ['assets/process/avatar-character/presentation-board.webp','Presentation board for avatar personality, expression crops, and presentation scale.'],
      ['assets/process/avatar-character/portrait-read.webp','Portrait crop for charm, eyes, hair shape, and identity read.'],
      ['assets/process/avatar-character/expression-panels.webp','Expression panel crop for direction and future rig or blendshape notes.'],
      ['assets/process/avatar-character/hair-costume.webp','Hair and outfit crop for style, silhouette, and accessory direction.']
    ],
    proof:[
      ['Expression sheet','Real expressions, pose set, closeups, and turnaround views.'],
      ['Rig/readiness','Rig-ready prep, blendshape list, viseme notes, or explicit no-rig scope.'],
      ['Files','VRM/FBX/BLEND/source files and delivery notes where the project scope requires them.'],
      ['Use case','Creator, VTuber, game avatar, or brand identity facts confirmed by Lesly.']
    ],
    current:['assets/portfolio/work-avatar-character.webp'],
    required:['assets/process/avatar-character/hero.webp','assets/process/avatar-character/expression-sheet.webp','assets/process/avatar-character/technical-proof.webp','assets/process/avatar-character/deliverables.webp']
  },
  {
    id:'mascot-character',
    title:'Mascot Character Project',
    image:'assets/portfolio/work-mascot-character.webp',
    alt:'Mascot character project board.',
    meta:['Mascot','Brand character','Pose system'],
    lead:'A mascot project for startup, creator, product, or brand use, centered on appeal, pose range, and recognizable shape.',
    whatTitle:'A brand-character presentation target.',
    whatCopy:'This project supports mascot service positioning with a brand-character presentation format: brief, brand system, pose pack, expression pack, source model, and campaign delivery details.',
    details:[
      ['Appeal','Large eyes, simple shapes, and friendly proportions make the character readable fast.'],
      ['Pose direction','Side panels suggest how a mascot system could include gestures and expression variants.'],
      ['Brand use','The image fits startup, app, education, creator, or product-character positioning.'],
      ['Technical checks','Brand palette, use case, model file, rig plan, and render pack define the mascot system.']
    ],
    gallery:[
      ['assets/process/mascot-character/presentation-board.webp','Mascot board with main appeal read and pose crops.'],
      ['assets/process/mascot-character/appeal-read.webp','Face and body crop focused on proportions, expression, and recognizability.'],
      ['assets/process/mascot-character/pose-panels.webp','Pose panel crop for gesture direction and future pose-pack detail.'],
      ['assets/process/mascot-character/material-palette.webp','Palette/material crop for brand-character color and surface direction.']
    ],
    proof:[
      ['Mascot system','Expression set, pose set, colorways, and usage examples.'],
      ['3D proof','Model views, topology, UVs, material sheet, and render closeups.'],
      ['Brand facts','Client/personal/speculative status and intended use confirmed.'],
      ['Deliverables','Render pack, source/export files, handoff notes, or licensing limits.']
    ],
    current:['assets/portfolio/work-mascot-character.webp'],
    required:['assets/process/mascot-character/hero.webp','assets/process/mascot-character/pose-expression-set.webp','assets/process/mascot-character/technical-proof.webp','assets/process/mascot-character/deliverables.webp']
  },
  {
    id:'outfits-accessories',
    title:'Outfits, Skins And Accessories Project',
    image:'assets/portfolio/work-outfits-accessories.webp',
    alt:'Outfit and accessory project board.',
    meta:['Outfit','Accessories','Material direction'],
    lead:'A costume and accessory project focused on outfit silhouette, material closeups, prop details, and variation-friendly presentation.',
    whatTitle:'A presentation target for clothing, props, and material detail.',
    whatCopy:'This project supports a smaller-scope service category with clear slots for modeled garments, UVs, texture maps, material bakes, and platform-ready accessory files.',
    details:[
      ['Costume read','Full-body views keep silhouette and outfit layers readable.'],
      ['Detail crops','Closeups suggest the kind of accessory, boot, fabric, trim, and prop proof needed.'],
      ['Scope fit','Good category for skins, props, accessories, outfit variants, and avatar add-ons.'],
      ['Technical checks','Garment mesh, material graph, UV layout, texture sheet, and export captures support the handoff.']
    ],
    gallery:[
      ['assets/process/outfits-accessories/presentation-board.webp','Outfit board showing the full costume and detail crop structure.'],
      ['assets/process/outfits-accessories/front-back-silhouette.webp','Front/back costume silhouette crop for outfit layer read.'],
      ['assets/process/outfits-accessories/trim-materials.webp','Trim and material crop for fabric, belt, metal, and embroidery direction.'],
      ['assets/process/outfits-accessories/prop-accessories.webp','Prop and accessory crop for smaller deliverable opportunities.']
    ],
    proof:[
      ['Modeled pieces','Outfit/accessory mesh views and detail screenshots.'],
      ['Materials','Texture maps, material sheets, bakes, and closeup renders.'],
      ['Variants','Colorways, skins, prop options, or outfit swaps if real.'],
      ['Platform fit','Roblox/avatar/game constraints only if known and approved.']
    ],
    current:['assets/portfolio/work-outfits-accessories.webp'],
    required:['assets/process/outfits-accessories/hero.webp','assets/process/outfits-accessories/material-closeups.webp','assets/process/outfits-accessories/technical-proof.webp','assets/process/outfits-accessories/deliverables.webp']
  },
  {
    id:'pbr-texturing',
    title:'Concept To Character Project',
    image:'assets/portfolio/work-concept-to-3d.webp',
    alt:'Concept-to-character project board.',
    meta:['Concept to 3D','Direction study','3D build plan'],
    lead:'A concept-to-character project showing how early visual direction can become a polished character presentation.',
    whatTitle:'A direction page for the flagship concept-to-3D offer.',
    whatCopy:'This project supports the flagship offer: turning sketches, briefs, moodboards, or reference images into character direction, presentation assets, and production handoff.',
    details:[
      ['Starting input','The board suggests rough sketch or early reference moving toward a finished character.'],
      ['Design progression','Intermediate and final panels make the transformation easy to understand.'],
      ['Buyer fit','Useful for clients who have an idea but need character-art direction and 3D execution.'],
      ['Technical checks','Brief, sculpt, retopo, UV, material, and handoff captures make the build path inspectable.']
    ],
    gallery:[
      ['assets/process/pbr-texturing/presentation-board.webp','Board for the concept-to-character presentation flow.'],
      ['assets/process/pbr-texturing/starting-sketch.webp','Starting-sketch crop to show the kind of source input a real case would document.'],
      ['assets/process/pbr-texturing/design-progression.webp','Mid-direction crop for shape, costume, and art-direction progression.'],
      ['assets/process/pbr-texturing/final-character-read.webp','Final character crop for the intended finished presentation read.']
    ],
    proof:[
      ['Input proof','Sketch, brief, moodboard, reference image, or existing concept with rights status.'],
      ['3D creation','Sculpt/model screenshots and iteration notes.'],
      ['Technical proof','Wireframe, UVs, texture maps, material sheets, and final renders.'],
      ['Result','Confirmed intended use, deliverables, and public restrictions.']
    ],
    current:['assets/portfolio/work-concept-to-3d.webp'],
    required:['assets/process/concept-to-character/starting-point.webp','assets/process/concept-to-character/sculpt-model.webp','assets/process/concept-to-character/technical-proof.webp','assets/process/concept-to-character/final-renders.webp']
  },
  {
    id:'original-site-concept',
    title:'Hero Character Presentation Project',
    image:'assets/portfolio/hero-original-site-concept.webp',
    alt:'Hero character project visual.',
    meta:['Hero character','Portfolio asset','Presentation system'],
    lead:'A hero character case used to establish the portfolio direction, character-first presentation style, and handoff structure.',
    whatTitle:'A character-first direction for the portfolio.',
    whatCopy:'This page shows the visual identity, staging logic, case-study structure, and technical categories used across the portfolio.',
    details:[
      ['Hero signal','Large character-first render gives the site immediate 3D character identity.'],
      ['Stage direction','Simple studio stage, grounded shadow, and warm lighting support the character.'],
      ['Site use','Used for homepage, work cards, and case-study staging.'],
      ['Technical checks','Source 3D files, topology, UVs, textures, and render setup notes complete the inspection package.']
    ],
    gallery:[
      ['assets/process/original-site-concept/presentation-board.webp','Site board built from the hero direction asset.'],
      ['assets/process/original-site-concept/hero-stage.webp','Hero-stage crop for character scale, pose, and environment restraint.'],
      ['assets/process/original-site-concept/face-costume.webp','Face and upper-costume crop for expression, hair, fabric, and armor read.'],
      ['assets/process/original-site-concept/stage-grounding.webp','Stage-grounding crop for plinth, contact shadow, and prop restraint.']
    ],
    proof:[
      ['Hero render','Approved Lesly render for homepage.'],
      ['Source proof','Model, topology, UVs, materials, and final presentation captures.'],
      ['Project facts','Project type, use case, tools, deliverables, and restrictions.'],
      ['Contact path','Real contact email or form endpoint before public launch.']
    ],
    current:['assets/portfolio/hero-original-site-concept.webp'],
    required:['assets/process/original-site-concept/hero.webp','assets/process/original-site-concept/technical-proof.webp','assets/process/original-site-concept/final-renders.webp','assets/process/original-site-concept/deliverables.webp']
  }
];

const CASE_NARRATIVES={
  'game-hero':{
    problemTitle:'A game-facing character needs to read fast and still hold up under inspection.',
    problems:[
      ['Buyer problem','A team may have a strong character idea, but the portfolio presentation must show silhouette, material hierarchy, pose, and handoff planning before anyone trusts it for a game pipeline.'],
      ['Presentation risk','A beauty render alone can hide weak production thinking. This project separates the hero read from the inspection materials a recruiter or art director expects.'],
      ['Solved direction','The page gives the character a full-body hero, closeup crops, costume hierarchy, weapon read, and a checklist for topology, UVs, textures, and exports.']
    ],
    process:[
      ['Brief','Define the character role, genre, use case, target engine or viewer, required views, and whether the asset needs rig-ready topology.'],
      ['Visual direction','Lock the silhouette, stance, costume layers, surface contrast, face read, and prop scale before moving into production detail.'],
      ['3D production','Build the high-level sculpt/model pass, then prepare retopo, UVs, texture maps, materials, turnarounds, and export notes for the final package.'],
      ['Presentation','Show the hero render first, then face, costume, weapon, neutral views, and technical proof so the project can be scanned quickly.']
    ],
    deliverables:[
      ['Presentation assets','Hero render, presentation board, face crop, costume/material crop, weapon silhouette crop, and project summary.'],
      ['Production package','Wireframe, UV layout, texture sheets, turnarounds, FBX/OBJ/BLEND files, and engine/viewer notes where scoped.'],
      ['Decision notes','Character role, intended use, scope assumptions, file-format needs, and any restrictions on public sharing.']
    ]
  },
  'character-environment':{
    problemTitle:'A strong character still needs scale, grounding, and presentation context.',
    problems:[
      ['Buyer problem','Founders and game teams need to understand how the character feels inside a world, pitch deck, store page, or gameplay-facing presentation.'],
      ['Presentation risk','A character on a blank background can look unfinished, while an overbuilt scene can distract from the character work.'],
      ['Solved direction','The project uses controlled staging: plinth, ground contact, supporting props, warm lighting, and camera framing that make the character feel placed without becoming a full environment-art case.']
    ],
    process:[
      ['Context brief','Define where the character will be shown: pitch render, game presentation, avatar preview, product mascot, store page, or portfolio case.'],
      ['Stage blockout','Place the character on a base with simple props, ground plane, scale cues, silhouette clearance, and camera angle.'],
      ['Lighting and mood','Tune key light, fill, rim, shadows, background value, and warm/cool contrast so face, costume, weapon, and pose remain readable.'],
      ['Presentation package','Deliver the staged hero render, stage closeups, prop notes, scene breakdown slots, and final handoff requirements.']
    ],
    deliverables:[
      ['Presentation assets','Staged thumbnail, hero-stage crop, grounding crop, presentation board, and project summary.'],
      ['Scene package','Stage blockout, prop list, camera notes, lighting notes, material direction, and source/render scene captures where scoped.'],
      ['Use-case notes','Pitch, game, creator, mascot, store-page, or portfolio context plus any restrictions on public scene or source-file sharing.']
    ]
  },
  'interior-props':{
    problemTitle:'Interior props have to carry mood, scale, and material quality without becoming clutter.',
    problems:[
      ['Buyer problem','Founders, game teams, and brand teams often need a believable interior corner, shelf, store set, or product-world scene before a full environment is funded.'],
      ['Presentation risk','A shelf full of objects can look busy but still feel generic if the materials, scale, silhouettes, and focal hierarchy are not planned.'],
      ['Solved direction','The project organizes the prop set around a controlled mood, reusable objects, precise small details, metal/glass/ceramic/wood studies, and clear handoff files.']
    ],
    process:[
      ['Mood and reference','Define the interior style, lighting mood, object categories, material palette, and intended use: game scene, brand render, pitch image, or product world.'],
      ['Asset breakdown','List the objects before modeling: shelves, boxes, bottles, jars, books, candles, labels, hardware, textiles, plants, ceramic pieces, and trim.'],
      ['3D prop production','Block scale and composition, then model high-detail objects, prepare UVs, build material reads, texture surfaces, and set camera lighting.'],
      ['Set dressing','Arrange the props by focal point, silhouette, negative space, contact shadows, repetition, material contrast, and story detail.']
    ],
    deliverables:[
      ['Presentation assets','Shelf hero render, 2D-to-3D process board, material board, glass/metal render, closeup detail grid, and project summary.'],
      ['Production package','Modeled prop set with OBJ source, material library, UV coordinates, material notes, manifest, and render-scene notes for the agreed platform.'],
      ['Decision notes','Object list, scale assumptions, material references, lighting mood, file-format needs, naming rules, and public sharing limits.']
    ]
  },
  'ai-visual-pipeline':{
    problemTitle:'The team had visual outputs, but not a repeatable 3D workflow system.',
    problems:[
      ['Buyer problem','The construction team was using online AI tools for home visuals, but the outputs were inconsistent and the spend was hard to control.'],
      ['Presentation risk','Generated images can look impressive while failing geometry, material consistency, client approval, or real project constraints.'],
      ['Solved direction','Lesly defined the visual standards, material library, review criteria, local generation workflow, cost model, and developer brief needed to make the 2D/AI-to-3D process repeatable.']
    ],
    process:[
      ['Workflow audit','Map current cloud AI spend, prompt practices, visual failures, review bottlenecks, and handoff gaps.'],
      ['Art direction system','Define the material library, style rules, acceptable variation, geometry-preservation needs, and client-ready output criteria.'],
      ['Agent instruction layer','Write the system prompts, task prompts, negative rules, naming rules, reference requirements, and QA checks that make AI agents respect 3D and construction constraints.'],
      ['Workflow plan','Specify how references, prompts, review states, structure guidance, and output logs should be organized before visuals are used for review.'],
      ['Implementation handoff','Coordinate handoff requirements around setup notes, agent behavior, training materials, and review checkpoints without naming unverified tools publicly.']
    ],
    deliverables:[
      ['Strategy package','Workflow map, visual standards, material-library taxonomy, generation rules, and client review criteria.'],
      ['Technical brief','Workflow assumptions, tool requirements where approved, prompt templates, logging rules, and 3D-aware review notes.'],
      ['Agent instructions','3D-aware prompts, rejection criteria, image-review rules, material naming rules, and client-ready response instructions.'],
      ['Measurement plan','Baseline cloud spend, residual tooling spend, break-even model, output consistency checks, and public-safe proof requirements.']
    ]
  },
  'santa-cruz-ai-visual-pipeline':{
    problemTitle:'The team had AI image experiments, but not a controlled visualization pipeline.',
    problems:[
      ['Buyer problem','A residential construction team needed better home visuals, material options, and progress presentations without chasing disconnected AI outputs.'],
      ['Workflow risk','Generated images can look useful while drifting away from real geometry, materials, site conditions, client comments, and implementation constraints.'],
      ['Solved direction','Lesly defined visual standards, local workflow requirements, review criteria, training needs, and developer-ready instructions so AI-assisted visualization could support real decisions.']
    ],
    process:[
      ['Workflow audit','Map the existing image-generation habits, reference sources, review bottlenecks, client feedback channels, and handoff gaps.'],
      ['Art direction system','Define material library, finish rules, structure-preservation needs, acceptable variation, and client-ready quality standards.'],
      ['Local pipeline plan','Translate references, prompts, seeds, structure guidance, output logs, and review notes into a repeatable local workflow plan.'],
      ['Implementation handoff','Prepare developer requirements, agent instructions, training notes, review checkpoints, and public-safe proof requirements.']
    ],
    deliverables:[
      ['Strategy package','Workflow map, visual standards, material-library taxonomy, review criteria, and controlled generation rules.'],
      ['Technical brief','Local workflow requirements, logging rules, and 3D-aware review notes where approved.'],
      ['Training and review','Prompt templates, rejection criteria, image-review standards, handoff instructions, and proof needed before public metrics are shown.']
    ]
  },
  'construction-client-progress-workflow':{
    problemTitle:'The team had progress evidence, but not one review system.',
    problems:[
      ['Buyer problem','Jobsite photos, homeowner comments, AI visual options, and team responses were easy to scatter across calls, texts, folders, and emails.'],
      ['Workflow risk','A progress photo does not automatically answer the client question, and an AI visual does not automatically connect to actual construction status.'],
      ['Solved direction','Lesly organized the review surface around visual evidence: phase, photo, status, comment, response, next action, and approved visual decision.']
    ],
    process:[
      ['Capture rules','Define which site photos, material references, client notes, and AI visuals belong in the review flow.'],
      ['Review model','Map each item to a clear state so the team knows what is captured, reviewed, approved, blocked, or waiting for response.'],
      ['Agent-assisted layer','Use AI where it helps: summaries, routing, decision extraction, response drafts, and connection between photos, comments, and visual options.'],
      ['Implementation brief','Prepare a portal-style workflow brief with redaction rules, reporting needs, client-facing language, and metrics that must be verified before publication.']
    ],
    deliverables:[
      ['Workflow package','Capture checklist, phase model, comment/response model, review states, and next-action rules.'],
      ['Client review material','Progress evidence board, redacted portal examples, before/after report format, and approval-state examples where approved.'],
      ['Measurement plan','Message count, admin time, response loop, repeated question rate, approval clarity, and rework signals to confirm before making public result claims.']
    ]
  },
  'print-startup-direction':{
    problemTitle:'The startup needed printable character products, not just attractive digital models.',
    problems:[
      ['Buyer problem','The 3D printing startup wanted different collectible characters, but early assets were inconsistent and needed heavy repair before printing.'],
      ['Production risk','A model can look good on screen while failing as a physical object because of thin parts, bad supports, hollowing issues, or non-watertight geometry.'],
      ['Solved direction','Lesly acted as design director: defining character families, agent instructions, printability rules, QA gates, file handoff standards, and a repeatable product library.']
    ],
    process:[
      ['Product brief','Define character audience, collectible scale, print process, product family, pose rules, base system, and handoff format.'],
      ['Agent instruction layer','Convert Lesly’s 3D judgment into prompts, rejection rules, geometry-risk checks, and task instructions that agents or developers can reuse.'],
      ['Style direction','Lock silhouette, face read, proportions, expression, accessory logic, and visual consistency across future character lines.'],
      ['Printability review','Move physical constraints earlier: wall thickness, supports, hollowing, drainage, fragile details, orientation, and slicer review.'],
      ['Production handoff','Package STL/3MF/OBJ files, thumbnails, print notes, QA checklist, naming rules, and startup-facing product metadata.']
    ],
    deliverables:[
      ['Design package','Character family boards, style guide excerpts, agent instructions, scale rules, pose/base standards, and accessory constraints.'],
      ['Print package','Printability checklist, slicer review notes, support/orientation guidance, file package structure, and test-print QA requirements.'],
      ['Measurement plan','Repair/rejection rate, prep time per character, successful print count, material waste, and startup approval metrics.']
    ]
  },
  'sculpt-to-retopo':{
    problemTitle:'Technical character work needs visible proof, not only a polished render.',
    problems:[
      ['Buyer problem','Art directors and recruiters need to see whether the forms, edge flow, UVs, and texture prep can survive real production review.'],
      ['Presentation risk','A portfolio can look finished while hiding missing topology, unclear turns, or weak sculpt structure.'],
      ['Solved direction','The project creates a dedicated process page for sculpt reads, retopo panels, turnaround strips, and technical capture slots.']
    ],
    process:[
      ['Sculpt read','Start with head, body, silhouette, facial planes, hair mass, costume forms, and clay-style inspection views.'],
      ['Retopo pass','Translate the sculpt into cleaner low-poly structure with visible edge flow, loop decisions, and optimization notes.'],
      ['UV and bake prep','Prepare UV layout, bake maps, normal/AO/curvature outputs, and texture-sheet presentation.'],
      ['Review format','Group sculpt, mesh, turnaround, and material evidence so a reviewer can inspect the pipeline without guessing.']
    ],
    deliverables:[
      ['Presentation assets','Sculpt board, face crop, retopo panel, turnaround strip, and process summary.'],
      ['Production package','Clay renders, low-poly wireframe, UV layout, bake maps, texture sheets, and source screenshots for review.'],
      ['Review notes','Topology decisions, optimization constraints, tool context, and public-safe technical notes.']
    ]
  },
  'avatar-character':{
    problemTitle:'An avatar has to work as a character identity, not just a pretty portrait.',
    problems:[
      ['Buyer problem','Creators need a character that reads clearly in thumbnails, profiles, streams, and expression sets.'],
      ['Presentation risk','A single face render does not show personality range, outfit logic, expression planning, or future rig needs.'],
      ['Solved direction','The project frames the avatar around portrait read, expression panels, hair/costume detail, and delivery notes for creator use.']
    ],
    process:[
      ['Identity brief','Define the creator persona, expression range, outfit attitude, face read, and platform use.'],
      ['Character direction','Refine hair shape, eye focus, costume silhouette, color accents, and thumbnail readability.'],
      ['Expression planning','Build expression panels, pose directions, and optional rig or blendshape requirements.'],
      ['Presentation','Package portrait, expression, costume, and file-format notes for a creator-facing handoff.']
    ],
    deliverables:[
      ['Presentation assets','Portrait board, expression panel, hair/costume crop, avatar summary, and use-case notes.'],
      ['Production package','Expression sheet, pose set, rig-ready notes, blendshape/viseme list, and VRM/FBX/BLEND files where scoped.'],
      ['Creator notes','Profile use, stream use, outfit variants, public naming, and licensing or platform limits.']
    ]
  },
  'mascot-character':{
    problemTitle:'A mascot must stay recognizable across poses, sizes, and brand uses.',
    problems:[
      ['Buyer problem','Startups, products, and creator brands need a character that can carry identity without becoming too complex or hard to reuse.'],
      ['Presentation risk','One mascot render leaves pose range, expression system, color consistency, and practical usage underdeveloped.'],
      ['Solved direction','The project organizes the mascot around appeal read, pose panels, material palette, and brand-use deliverables.']
    ],
    process:[
      ['Brand brief','Define audience, tone, product category, personality traits, color direction, and where the mascot will appear.'],
      ['Shape language','Refine proportions, face read, silhouette, accessory logic, and simple forms that work at small sizes.'],
      ['System planning','Build pose, expression, colorway, render, and usage slots so the mascot can become a repeatable brand asset.'],
      ['Presentation','Package the hero read with pose crops, palette notes, and asset handoff guidance.']
    ],
    deliverables:[
      ['Presentation assets','Mascot board, appeal crop, pose panels, material palette crop, and brand-character summary.'],
      ['Production package','Expression set, pose set, colorways, model views, render pack, source/export files, and usage examples where scoped.'],
      ['Brand notes','Intended use, naming restrictions, color rules, licensing notes, and public sharing limits.']
    ]
  },
  'outfits-accessories':{
    problemTitle:'Character add-ons need to match the base character and still show material detail.',
    problems:[
      ['Buyer problem','Outfits, skins, props, and accessories often fail when they do not match silhouette, scale, surface style, or platform constraints.'],
      ['Presentation risk','A costume concept can look good at a distance while hiding unclear trims, weak material separation, or missing export planning.'],
      ['Solved direction','The project presents front/back silhouette, trim/material crops, prop closeups, variation slots, and delivery planning.']
    ],
    process:[
      ['Scope definition','Confirm the base character, platform, outfit category, prop list, style rules, and file-format needs.'],
      ['Silhouette pass','Block front/back costume read, garment layers, accessory scale, and major color/material zones.'],
      ['Material pass','Refine fabric, trim, metal, leather, embroidery, props, and closeup readability.'],
      ['Handoff','Prepare outfit renders, material sheets, variation notes, and source/export capture slots.']
    ],
    deliverables:[
      ['Presentation assets','Outfit board, front/back silhouette crop, trim/material crop, prop/accessory crop, and variation notes.'],
      ['Production package','Garment mesh, accessory mesh, UV layout, texture maps, material sheets, platform notes, and export files where scoped.'],
      ['Style notes','Base-character fit, colorway rules, material references, naming, and platform constraints.']
    ]
  },
  'pbr-texturing':{
    problemTitle:'A flat idea needs a clear path into a finished character presentation.',
    problems:[
      ['Buyer problem','Clients often bring a sketch, reference image, moodboard, or short written idea but do not know what is needed to make it production-ready.'],
      ['Presentation risk','Before/after work can feel vague unless the starting input, direction decisions, final read, and handoff expectations are visible.'],
      ['Solved direction','The project shows starting input, design progression, final character read, and the technical checks needed for a complete concept-to-3D case.']
    ],
    process:[
      ['Input review','Review sketch, prompt image, written brief, moodboard, or existing concept and identify what must change for 3D.'],
      ['Direction pass','Clarify proportions, silhouette, costume, color, material intent, expression, and intended use.'],
      ['3D build path','Plan sculpt/model, retopo, UVs, texture maps, materials, final renders, and delivery formats around scope.'],
      ['Presentation','Show the transformation from starting point to final-read board with detail crops and production checks.']
    ],
    deliverables:[
      ['Presentation assets','Starting sketch crop, design progression crop, final character read, presentation board, and project summary.'],
      ['Production package','Sculpt/model captures, wireframe, UVs, textures, material sheets, final renders, and handoff files where scoped.'],
      ['Client notes','Use case, reference rights, style decisions, scope assumptions, and final deliverable list.']
    ]
  },
  'original-site-concept':{
    problemTitle:'A hero character needs to communicate quality before the viewer reads the details.',
    problems:[
      ['Buyer problem','Studios and clients need to see the character type, surface quality, pose, costume detail, and delivery thinking immediately.'],
      ['Presentation risk','A hero render can look decorative if it is not connected to process, material reads, technical checks, and deliverables.'],
      ['Solved direction','The project creates a reusable structure for hero art, process boards, detail crops, technical checks, case-study flow, and handoff planning.']
    ],
    process:[
      ['Brief','Define the offer: 3D character work for games, creators, brands, mascots, avatars, outfits, props, and production-ready assets.'],
      ['Visual system','Build a cinematic, character-first asset set with warm studio staging, readable silhouettes, and reusable board layouts.'],
      ['Content system','Map each visual category to a service, case-study page, process section, deliverable list, and contact path.'],
      ['Handoff plan','Keep the project organized so technical captures, source files, and final renders can be reviewed without hunting through a folder.']
    ],
    deliverables:[
      ['Presentation assets','Homepage hero, work-card thumbnails, case-study hero, presentation board, detail crops, and about/process visual.'],
      ['Case-study package','Hero render, project boards, detail crops, technical checklists, deliverable lists, and contact path.'],
      ['Handoff package','Source mesh, UV, texture, render, profile links, project notes, and contact details for the public launch version.']
    ]
  }
};

const FINAL_CASE_STUDY_UPGRADES={
  'game-hero':{
    lead:'A game-facing fantasy warrior presentation built around fast silhouette read, costume hierarchy, material contrast, weapon scale, and clear handoff planning.',
    whatCopy:'This case shows the character as a portfolio-ready game-facing asset: a full-body hero render, focused crops for face, costume, materials, and weapon read, plus the inspection categories needed before stronger production claims are made.',
    details:[
      ['Silhouette read','The stance, high ponytail, red scarf, cape shape, curved sword, and plinth stage give the character a fast full-body read.'],
      ['Costume hierarchy','Bronze armor, red cloth, leather straps, belt hardware, hair, skin, and sword materials are separated clearly enough for an art-director scan.'],
      ['Presentation stage','The dark studio background and restrained stone base support scale and grounding without turning the case into environment art.'],
      ['Handoff planning','The case identifies the next proof slots: neutral views, topology-style inspection, material organization, final render set, and delivery notes.']
    ],
    gallery:[
      ['assets/process/game-hero/presentation-board.webp','Presentation board with the full warrior read plus face, costume, material, and weapon crops.'],
      ['assets/process/game-hero/technical-proof.webp','Technical inspection and handoff planning board with topology-style, UV-inspired, material, and delivery panels.'],
      ['assets/process/game-hero/final-renders.webp','Final render board showing beauty, closeup, silhouette, material, and neutral inspection reads.'],
      ['assets/process/game-hero/deliverables.webp','Deliverables planning board for review views, material categories, render set, and handoff notes.'],
      ['assets/process/game-hero/face-read.webp','Face and upper-body read for expression, hair, armor, and silhouette.'],
      ['assets/process/game-hero/costume-material.webp','Costume hierarchy crop showing cloth, leather, metal, and belts.'],
      ['assets/process/game-hero/weapon-silhouette.webp','Weapon and lower-silhouette crop for prop scale and pose read.']
    ],
    proof:[
      ['Visible presentation proof','Hero render, presentation board, face crop, costume/material crop, and weapon crop show the current public asset clearly.'],
      ['Inspection planning','Generated inspection boards show the review categories a team should check: neutral views, topology-style planning, materials, and handoff categories.'],
      ['Technical boundary','Unity, Unreal, Marmoset, polycounts, texture sizes, actual UV layouts, rig-ready topology, and source-file claims stay out until repo evidence exists.'],
      ['Production next step','The case is ready for stronger technical proof when actual mesh, UV, texture, and export captures are available.']
    ],
    required:['assets/process/game-hero/technical-proof.webp','assets/process/game-hero/final-renders.webp','assets/process/game-hero/deliverables.webp']
  },
  'character-environment':{
    lead:'A character-first staging case that uses a restrained plinth, support props, warm lighting, and close camera crops to make the warrior feel grounded without turning the project into an environment-art showcase.',
    whatCopy:'This project focuses on presentation support for a finished character: base placement, contact shadows, scale cues, prop restraint, lighting mood, and crop selection. The stage exists to clarify the character silhouette, costume, weapon, boots, cloth, and material read.',
    details:[
      ['Character-first stage','The circular plinth, small rocks, vessel, and dark studio backdrop give the warrior scale and grounding while keeping the character dominant.'],
      ['Ground contact','Boot placement, cloth fall, plinth edge, and contact shadow make the pose feel physically placed instead of floating in a neutral render.'],
      ['Lighting direction','Warm key light and restrained background values separate the face, armor, fabric, weapon, and silhouette without competing with the character.'],
      ['Presentation crops','The gallery moves from full staged render to board view and detail crops so the viewer can read both the character and the staging choices.']
    ],
    gallery:[
      ['assets/process/character-environment/final-renders.webp','Final staged character render with plinth, rocks, contact shadow, sword silhouette, and restrained scale cues.'],
      ['assets/process/character-environment/blockout.webp','Stage blockout board for plinth placement, camera framing, prop restraint, and character-dominant composition.'],
      ['assets/process/character-environment/lighting-breakdown.webp','Lighting breakdown board for key, fill, rim, shadow direction, and warm studio mood.'],
      ['assets/process/character-environment/prop-assets.webp','Support-prop board showing the restrained stage assets and scale cues around the character.'],
      ['assets/process/character-environment/scene-handoff.webp','Scene handoff board for camera, lighting, base, support props, crops, and review notes.'],
      ['assets/process/character-environment/stage-grounding.webp','Grounding crop for boots, cloth fall, plinth contact, and restrained prop context.']
    ],
    proof:[
      ['Visible staging proof','Full staged render, presentation board, hero-stage crop, and grounding crop are present in the repo.'],
      ['Generated process boards','Blockout, lighting, support-prop, and handoff boards clarify the staging logic without claiming source-scene files.'],
      ['Scale and support cues','Plinth, rocks, vessel, ground plane, cloth contact, and warm studio lighting are visible in the current images.'],
      ['Claim boundary','This case supports character presentation, pitch renders, and portfolio staging. It does not claim full environment production or engine handoff.']
    ],
    required:['assets/process/character-environment/blockout.webp','assets/process/character-environment/lighting-breakdown.webp','assets/process/character-environment/prop-assets.webp','assets/process/character-environment/scene-handoff.webp']
  },
  'interior-props':{
    lead:'A prop-art and set-dressing case showing how an ornate interior shelf becomes an inspectable asset package: final render, process board, material studies, object-level wireframe, OBJ/MTL files, and manifest-backed handoff notes.',
    whatCopy:'This project organizes a carved shelf, storage boxes, glass bottles, brass hardware, ceramics, books, textiles, plants, candles, labels, and trim into a reusable interior prop set with warm lighting, clear material separation, named mesh objects, UV coordinates, and PBR-style material review values.',
    details:[
      ['Set dressing','The shelf, boxes, books, ceramics, glass, candle holders, textiles, hardware, and plants are arranged around focal hierarchy, negative space, scale, and warm interior mood.'],
      ['Modeled asset groups','The package documents carved shelf architecture, leather and wood boxes, glass bottles, ceramic vases, brass hardware, books, paper, textiles, fringe, and plant leaves.'],
      ['Material range','Aged brass, dark steel, clear and smoky glass, ceramic glaze, carved wood, leather, fabric, aged paper, candle wax, and plant materials each have a separate surface read.'],
      ['Technical checks','The source package includes 266 named objects, 29,860 vertices, 29,860 UV coordinates, 8,246 faces, 14 materials, OBJ/MTL files, a manifest, and a technical mesh sheet.']
    ],
    gallery:[
      ['assets/process/interior-props/presentation-board.webp','Interior prop board showing shelf composition, process, materials, and closeups.'],
      ['assets/3d/interior-props/interior-props-mesh-sheet.svg','Technical mesh sheet with object-level wireframe, material reads, UV planning, and source-file package.'],
      ['assets/process/interior-props/asset-handoff.webp','Generated asset handoff board for object groups, material families, wire-style checks, and package icons.'],
      ['assets/process/interior-props/prop-breakdown.webp','Generated prop breakdown board separating reusable shelf, vessel, book, textile, plant, and hardware groups.'],
      ['assets/process/interior-props/technical-proof.webp','Generated technical planning board connected to the OBJ/MTL/manifest package.'],
      ['assets/process/interior-props/material-study.webp','Material study for brass, glass, ceramic, wood, leather, fabric, paper, labels, and finish values.'],
      ['assets/process/interior-props/material-closeups.webp','Closeup material grid for hardware, ceramics, wood carving, fabric weave, leather, paper, and metal wear.']
    ],
    proof:[
      ['Source package','OBJ source mesh with named objects and material assignments, supported by an MTL material library and manifest.'],
      ['Mesh and UV evidence','The manifest records 266 named objects, 29,860 vertices, 29,860 UV coordinates, and 8,246 faces; UV packing is documented as refinable by object group.'],
      ['Material evidence','The MTL and manifest support PBR-style review values for base color, roughness, metallic, specular response, and transparent glass alpha.'],
      ['Presentation evidence','The gallery shows the shelf hero render, process board, object-level mesh sheet, material board, glass/metal render, and closeup detail grid.']
    ],
    required:['assets/3d/interior-props/interior-props-set.obj','assets/3d/interior-props/interior-props-materials.mtl','assets/3d/interior-props/interior-props-manifest.json','assets/3d/interior-props/interior-props-mesh-sheet.svg','assets/process/interior-props/asset-handoff.webp','assets/process/interior-props/prop-breakdown.webp','assets/process/interior-props/technical-proof.webp']
  },
  'ai-visual-pipeline':{
    image:'assets/process/ai-visual-pipeline/workflow-board-generated.png',
    alt:'Generated 3D visual pipeline board with cinematic reference cards, material review, and handoff packets.',
    lead:'A 3D visual pipeline case built around turning rough references, AI-assisted exploration, material studies, and production notes into a repeatable review and handoff system.',
    whatTitle:'A reusable visual standards system for 3D production.',
    whatCopy:'This case uses the interior-props package as the visual anchor: reference control, material-library thinking, output review criteria, and organized handoff rules. The goal is not to present AI as the product, but to show how Lesly connects visual exploration to real 3D craft, material consistency, and production-ready decisions.',
    details:[
      ['Visual direction','References, mood cues, and selected materials are organized before new outputs are treated as usable production direction.'],
      ['Material standards','Wood, brass, glass, ceramic, leather, fabric, paper, and plant surfaces are grouped into reusable finish rules instead of one-off image decisions.'],
      ['3D-aware review','Each visual output is checked against geometry, scale, lighting, material behavior, and whether it can guide real 3D production.'],
      ['Handoff logic','The case defines what a team needs to receive: reference boards, material notes, rejection criteria, selected visual direction, and production-ready follow-up tasks.']
    ],
    gallery:[
      ['assets/process/ai-visual-pipeline/workflow-board-generated.png','Workflow board showing references, selected direction, material review, and handoff logic.'],
      ['assets/process/ai-visual-pipeline/material-library-generated.png','Material-library board built from ornate prop surfaces, finish groups, and reusable review standards.'],
      ['assets/process/ai-visual-pipeline/review-criteria-generated.png','Review-criteria board showing material consistency, geometry respect, lighting, and client-ready clarity.'],
      ['assets/process/ai-visual-pipeline/handoff-system-generated.png','Handoff-system board showing organized reference packs, material rules, review notes, and delivery packets.']
    ],
    proof:[
      ['3D asset anchor','The interior-props package includes source OBJ, MTL materials, a manifest, a mesh sheet, named objects, UV coordinates, and material assignments.'],
      ['Material evidence','The visible boards show carved wood, aged brass, glass, ceramics, leather, fabric, books, paper, labels, and closeup finish studies.'],
      ['Workflow evidence','The case safely shows reference organization, material-library structure, review gates, and handoff planning without naming unverified clients, tools, or metrics.'],
      ['Boundary','AI supports reference exploration and workflow organization; the public claim remains Lesly art direction, 3D judgment, material review, and production handoff.']
    ],
    required:['assets/process/ai-visual-pipeline/workflow-board-generated.png','assets/process/ai-visual-pipeline/review-criteria-generated.png','assets/process/ai-visual-pipeline/material-library-generated.png','assets/process/ai-visual-pipeline/handoff-system-generated.png']
  },
  'santa-cruz-ai-visual-pipeline':{
    image:'assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp',
    alt:'Residential visualization workflow board with references, material standards, review gates, and handoff steps.',
    lead:'A residential visualization workflow study showing how Lesly turns references, material options, AI-assisted image outputs, and review notes into a controlled decision path for construction visuals.',
    whatTitle:'Visual standards before generation.',
    whatCopy:'This case focuses on direction and workflow structure: Lesly defines the reference inputs, material standards, review gates, and handoff notes a team needs before AI-assisted visuals are used for production review or client presentation.',
    details:[
      ['Visual inputs','Site-photo references, material swatches, finish options, rough image outputs, and review notes are organized as inputs, not treated as final design truth.'],
      ['Material consistency','Roof, siding, window, paint, tile, wood, fixture, and lighting references are grouped into reusable standards so each image can be judged across iterations.'],
      ['Review gates','Each visual pass is checked for geometry preservation, material match, lighting logic, construction plausibility, and client-readiness.'],
      ['Handoff direction','The workflow gives developers or operators clear requirements for reference structure, output logs, review states, training notes, and public-sharing limits.']
    ],
    gallery:[
      ['assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp','Workflow board showing references, material inputs, review gates, and controlled visualization flow.'],
      ['assets/process/santa-cruz-ai-visual-pipeline/material-standards.webp','Material standards board for finish options, acceptable variation, and visual consistency checks.'],
      ['assets/process/santa-cruz-ai-visual-pipeline/developer-handoff.webp','Handoff board showing review rules, output logging, training notes, and implementation-ready workflow requirements.']
    ],
    proof:[
      ['Visible proof','Current proof is a workflow board and supporting material studies, not verified software screenshots or client outcome data.'],
      ['Standards package','Reference structure, material library logic, acceptable-variation rules, review criteria, and rejection rules.'],
      ['Workflow package','Prompt/reference organization, output-log expectations, review checkpoints, training notes, and handoff requirements.'],
      ['Boundary','AI supports visual exploration and review; it does not replace human art direction, construction decisions, or verified project management.']
    ],
    required:['assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp','assets/process/santa-cruz-ai-visual-pipeline/material-standards.webp','assets/process/santa-cruz-ai-visual-pipeline/developer-handoff.webp']
  },
  'construction-client-progress-workflow':{
    image:'assets/process/construction-client-progress-workflow/progress-review-board.webp',
    alt:'Construction progress review board with abstract phase cards, evidence tiles, review states, and handoff markers.',
    lead:'A residential-construction review workflow case for organizing jobsite photos, client comments, visual options, response states, and next actions into a clearer evidence trail.',
    whatCopy:'This case shows Lesly applying visual production judgment to a client-review workflow: what should be captured, how updates should be grouped, where comments and responses belong, and how AI can assist summaries or routing without replacing human construction decisions.',
    details:[
      ['Visual evidence model','Progress photos, material references, AI visual options, comments, and status notes are organized around the client question each update needs to answer.'],
      ['Review states','Each item has a clear review role: captured, needs response, approved, blocked, ready for follow-up, or returned to the material/design library.'],
      ['Agent-assisted support','AI is framed as support for summaries, routing, missing-context flags, and response drafts while decisions stay with the team.'],
      ['Implementation boundary','The case documents a portal-style workflow brief and review model, not a claimed finished app or verified operational result.']
    ],
    gallery:[
      ['assets/process/construction-client-progress-workflow/progress-review-board.webp','Progress evidence board showing phases, photo inputs, review states, comments, and next actions.'],
      ['assets/process/construction-client-progress-workflow/agentic-summary-flow.webp','Agent-assisted summary flow showing how notes, visual options, and response drafts stay under human review.'],
      ['assets/process/construction-client-progress-workflow/client-handoff.webp','Client handoff board showing approval states, follow-up rules, and what the team needs before implementation.'],
      ['assets/process/santa-cruz-ai-visual-pipeline/material-standards.webp','Related material standards board showing how visual consistency supports client review.']
    ],
    proof:[
      ['Review model','Phase list, evidence tiles, client comments, response states, approval status, and next-action rules.'],
      ['Workflow brief','Capture checklist, comment model, summary requirements, redaction rules, and implementation notes.'],
      ['Public-safe evidence needed','Redacted portal captures, before/after report samples, time logs, message counts, or approved response data before metrics are shown.'],
      ['Boundary','AI supports visual review, summaries, and routing; it does not make construction decisions, replace project managers, or verify jobsite status.']
    ],
    required:['assets/process/construction-client-progress-workflow/progress-review-board.webp','assets/process/construction-client-progress-workflow/agentic-summary-flow.webp','assets/process/construction-client-progress-workflow/client-handoff.webp']
  },
  'print-startup-direction':{
    image:'assets/process/print-startup-direction/printability-board.webp',
    alt:'3D print character system board with mascot, printability inspection, family variations, and handoff icons.',
    lead:'A 3D print character system case showing how mascot appeal, collectible shape language, printability review, and handoff planning become a repeatable product direction.',
    whatCopy:'This case uses the fox mascot as the visual anchor for a small-batch character product system: consistent proportions, pose and accessory rules, base options, printability risk review, and source-package expectations before production proof is claimed.',
    details:[
      ['Product family','The mascot board establishes a repeatable head shape, ears, scarf, staff, base style, and rounded collectible proportions.'],
      ['Printability planning','The generated board calls out broad support-risk zones, fragile details, base stability, and inspection views without pretending to be a real slicer screenshot.'],
      ['System direction','Character-family, pose, base, accessory, and colorway decisions are organized so future figures can follow the same rules.'],
      ['Proof boundary','Real wall thickness, watertight checks, slicer settings, support tests, and test-print photos still need actual production evidence before public result claims.']
    ],
    gallery:[
      ['assets/process/print-startup-direction/printability-board.webp','Printability planning board for mascot proportions, inspection views, support-risk zones, and base logic.'],
      ['assets/process/print-startup-direction/character-family-system.webp','Character family board showing mascot variations, pose logic, material palette, and repeatable shape rules.'],
      ['assets/process/print-startup-direction/handoff-package.webp','Handoff package board for render thumbnails, part groups, base options, review cards, and delivery icons.'],
      ['assets/process/mascot-character/presentation-board.webp','Mascot presentation board used as the style anchor for the product system.'],
      ['assets/process/mascot-character/pose-panels.webp','Pose and expression panels used to explain repeatable character-family direction.']
    ],
    proof:[
      ['Visible direction proof','Mascot presentation, pose panels, generated printability board, family board, and handoff board are available.'],
      ['Print planning proof','The case shows support-risk planning, base logic, accessory constraints, and inspection categories as direction material.'],
      ['Production proof needed','Real slicer captures, wall-thickness checks, hollowing/drainage notes, support tests, repair logs, and test-print photos are not claimed.'],
      ['Boundary','This is character product direction and printability planning, not verified manufactured output.']
    ],
    required:['assets/process/print-startup-direction/printability-board.webp','assets/process/print-startup-direction/character-family-system.webp','assets/process/print-startup-direction/handoff-package.webp']
  },
  'sculpt-to-retopo':{
    lead:'A technical character-process case showing sculpt form, facial planes, turnaround thinking, topology-style inspection, and bake/material handoff planning.',
    whatCopy:'This project gives the portfolio a dedicated production-process story: rough sculpt structure, refined bust forms, inspection views, topology-style overlay, and material/bake planning boards that show how a polished character should be reviewed.',
    gallery:[
      ['assets/process/sculpt-to-retopo/presentation-board.webp','Presentation board assembled for the sculpt-to-retopo project.'],
      ['assets/process/sculpt-to-retopo/sculpt-model.webp','Broad-to-fine sculpt process board for primary forms, refined bust, and neutral inspection views.'],
      ['assets/process/sculpt-to-retopo/technical-proof.webp','Technical inspection board for topology-style overlay, UV-inspired planning, material tiles, and handoff icons.'],
      ['assets/process/sculpt-to-retopo/final-renders.webp','Final render board combining sculpt face, retopo-style panel, turnaround strip, and material planning reads.'],
      ['assets/process/sculpt-to-retopo/sculpt-face.webp','Sculpt-focused face crop for planes, hair mass, and clay presentation.'],
      ['assets/process/sculpt-to-retopo/retopo-panel.webp','Retopology-style crop for mesh structure, edge-flow review, and technical notes.']
    ],
    proof:[
      ['Visible process proof','Presentation board, sculpt face crop, retopo-style panel, turnaround strip, and generated process boards are available.'],
      ['Inspection planning','The generated boards show sculpt, turnaround, topology-style, UV-inspired, and bake/material review categories.'],
      ['Claim boundary','Actual polycounts, source topology, production UVs, bake maps, and tool screenshots are not claimed without source evidence.'],
      ['Review value','The case demonstrates how Lesly structures technical review material for art-director inspection.']
    ],
    required:['assets/process/sculpt-to-retopo/sculpt-model.webp','assets/process/sculpt-to-retopo/technical-proof.webp','assets/process/sculpt-to-retopo/final-renders.webp']
  },
  'avatar-character':{
    lead:'A creator-facing avatar case focused on thumbnail face read, expression range, outfit personality, and rig-readiness planning without claiming a finished rig.',
    whatCopy:'This page frames the avatar as a character identity system: portrait appeal, expression planning, hair and costume detail, material accents, mouth-shape direction, and delivery notes for creator or profile use.',
    gallery:[
      ['assets/process/avatar-character/hero.webp','Avatar hero board for portrait read, expression charm, material accents, and handoff planning.'],
      ['assets/process/avatar-character/expression-sheet.webp','Expression sheet board with portrait, expression panels, hair/costume crop, and readiness planning.'],
      ['assets/process/avatar-character/technical-proof.webp','Technical planning board for face controls, mouth-shape direction, material swatches, and turnaround needs.'],
      ['assets/process/avatar-character/deliverables.webp','Deliverables board for render set, expression planning, outfit notes, and creator handoff icons.'],
      ['assets/process/avatar-character/portrait-read.webp','Portrait crop for charm, eyes, hair shape, and identity read.'],
      ['assets/process/avatar-character/expression-panels.webp','Expression panel crop for direction and future rig or blendshape notes.']
    ],
    proof:[
      ['Visible avatar proof','Portrait board, expression panels, hair/costume crop, and generated expression and deliverable boards are available.'],
      ['Rig-readiness planning','Face control dots, mouth-shape thumbnails, turnarounds, and expression grids are planning visuals, not proof of a working rig.'],
      ['Creator use','The case supports profile, social, streamer, and avatar identity direction where scoped.'],
      ['Claim boundary','VRM, live rigging, blendshape lists, visemes, platform exports, and tracking tests need real proof before public claims.']
    ],
    required:['assets/process/avatar-character/hero.webp','assets/process/avatar-character/expression-sheet.webp','assets/process/avatar-character/technical-proof.webp','assets/process/avatar-character/deliverables.webp']
  },
  'mascot-character':{
    lead:'A mascot system case for product, startup, creator, or brand use, centered on recognizable shape language, pose range, palette, and reusable handoff planning.',
    whatCopy:'This project treats the mascot as a repeatable character system: hero appeal, expression and pose set, color and material rules, front/side/back planning, and delivery boards without inventing a brand or client.',
    gallery:[
      ['assets/process/mascot-character/hero.webp','Mascot hero board for appeal read, color/material swatches, pose thumbnails, and handoff planning.'],
      ['assets/process/mascot-character/pose-expression-set.webp','Pose and expression system board showing mascot variations, palette, and repeatable character reads.'],
      ['assets/process/mascot-character/technical-proof.webp','Technical planning board for turnaround, material, silhouette, and source-package review needs.'],
      ['assets/process/mascot-character/deliverables.webp','Deliverables board for render pack, pose set, colorway set, and handoff icons.'],
      ['assets/process/mascot-character/appeal-read.webp','Face and body crop focused on proportions, expression, and recognizability.'],
      ['assets/process/mascot-character/pose-panels.webp','Pose panel crop for gesture direction and future pose-pack detail.']
    ],
    proof:[
      ['Visible mascot proof','Presentation board, appeal crop, pose panels, material palette crop, and generated system boards are available.'],
      ['System planning','The case shows pose range, expression direction, palette, shape language, and handoff categories.'],
      ['Brand boundary','No invented brand names, logos, campaign metrics, testimonials, or client claims are used.'],
      ['Production proof needed','Actual source model, UVs, topology, rig, and export files need repo evidence before technical claims are added.']
    ],
    required:['assets/process/mascot-character/hero.webp','assets/process/mascot-character/pose-expression-set.webp','assets/process/mascot-character/technical-proof.webp','assets/process/mascot-character/deliverables.webp']
  },
  'outfits-accessories':{
    lead:'An outfit and accessory production case focused on front/back silhouette, material closeups, trim logic, prop detail, and variation-ready handoff planning.',
    whatCopy:'This project supports smaller paid character scopes: costumes, skins, props, and accessory packs that need to match the base character while showing fabric, leather, metal, trim, staff, pouch, boot, and hardware decisions clearly.',
    gallery:[
      ['assets/process/outfits-accessories/hero.webp','Outfit hero board for full-body costume read, material categories, and handoff planning.'],
      ['assets/process/outfits-accessories/material-closeups.webp','Material closeup board showing outfit views, trim, accessories, prop details, and texture planning.'],
      ['assets/process/outfits-accessories/technical-proof.webp','Technical planning board for garment silhouette, UV-inspired tiles, material groups, and export categories.'],
      ['assets/process/outfits-accessories/deliverables.webp','Deliverables board for outfit render set, accessory package, material notes, and review icons.'],
      ['assets/process/outfits-accessories/front-back-silhouette.webp','Front/back costume silhouette crop for outfit layer read.'],
      ['assets/process/outfits-accessories/trim-materials.webp','Trim and material crop for fabric, belt, metal, and embroidery direction.']
    ],
    proof:[
      ['Visible outfit proof','Presentation board, front/back silhouette, trim/material crop, prop/accessory crop, and generated proof boards are available.'],
      ['Material proof planning','Fabric, leather, metal, trim, staff, pouch, boot, and hardware categories are visually separated for review.'],
      ['Variation planning','The case supports colorway, skin, prop, and accessory variation discussions where scoped.'],
      ['Claim boundary','Platform constraints, exported files, actual UVs, texture maps, and mesh proof are not claimed without repo evidence.']
    ],
    required:['assets/process/outfits-accessories/hero.webp','assets/process/outfits-accessories/material-closeups.webp','assets/process/outfits-accessories/technical-proof.webp','assets/process/outfits-accessories/deliverables.webp']
  },
  'pbr-texturing':{
    lead:'A flagship concept-to-character case showing how an early sketch or rough visual direction can become a polished fantasy warrior presentation with process, material, inspection, and handoff boards.',
    whatTitle:'A complete direction path from early idea to polished 3D character.',
    whatCopy:'This project supports the core concept-to-3D offer: starting input, design progression, sculpt/model planning, final character read, technical inspection categories, and deliverables that make the transformation understandable to a buyer or recruiter.',
    gallery:[
      ['assets/process/pbr-texturing/presentation-board.webp','Board for the concept-to-character presentation flow.'],
      ['assets/process/concept-to-character/starting-point.webp','Generated starting-point board for rough sketch, visual direction, and early 3D planning.'],
      ['assets/process/concept-to-character/sculpt-model.webp','Generated sculpt/model planning board for broad forms, refined character read, and inspection panels.'],
      ['assets/process/concept-to-character/technical-proof.webp','Generated technical planning board for topology-style, UV-inspired, material, and handoff categories.'],
      ['assets/process/concept-to-character/final-renders.webp','Generated final render board for sketch-to-final transformation, crops, materials, and delivery planning.'],
      ['assets/process/concept-to-character/deliverables.webp','Generated deliverables board for final renders, review views, material notes, and handoff icons.']
    ],
    proof:[
      ['Visible transformation proof','Starting sketch crop, design progression, final character read, presentation board, and generated concept-to-character boards are available.'],
      ['Production planning','The case shows the steps a buyer expects: input review, silhouette, sculpt/model planning, material categories, technical inspection, and final presentation.'],
      ['Claim boundary','Actual source files, UVs, bake maps, texture maps, engine integration, and export formats are only named when scoped or backed by repo evidence.'],
      ['Buyer value','The project makes the path from rough idea to polished 3D character clear enough to support project inquiries.']
    ],
    required:['assets/process/concept-to-character/starting-point.webp','assets/process/concept-to-character/sculpt-model.webp','assets/process/concept-to-character/technical-proof.webp','assets/process/concept-to-character/final-renders.webp','assets/process/concept-to-character/deliverables.webp']
  },
  'original-site-concept':{
    required:['assets/process/original-site-concept/hero.webp','assets/process/original-site-concept/technical-proof.webp','assets/process/original-site-concept/final-renders.webp','assets/process/original-site-concept/deliverables.webp']
  }
};

const FINAL_NARRATIVE_UPGRADES={
  'game-hero':{
    deliverables:[
      ['Presentation set','Hero render, presentation board, face read, costume/material crop, weapon silhouette crop, and short project summary.'],
      ['Case-study proof set','Technical planning board, final render board, and deliverables board in assets/process/game-hero/.'],
      ['Handoff notes','Intended use, required views, material categories, public-sharing restrictions, and confirmed technical requirements without inventing file formats or engine targets.']
    ]
  },
  'character-environment':{
    deliverables:[
      ['Presentation assets','Final staged render, presentation board, mid-body stage crop, grounding crop, and short project summary.'],
      ['Staging notes','Character placement, plinth/base choice, restrained support props, lighting mood, camera crop, and scale-cue rationale.'],
      ['Process boards','Blockout board, lighting breakdown, support-prop board, and scene handoff board for stronger staging evidence.']
    ]
  },
  'interior-props':{
    deliverables:[
      ['Presentation set','Shelf hero render, presentation board, 2D-to-3D process board, material study, glass/metal render, and closeup detail grid.'],
      ['Source package','OBJ mesh, MTL material library, manifest, technical mesh sheet, named object groups, material assignments, and UV coordinates.'],
      ['Handoff notes','Object groups, material usage, source visuals, file paths, inspection notes, and the documented limitation that production UV packing can be refined by object group.']
    ]
  },
  'ai-visual-pipeline':{
    problemTitle:'A team needs repeatable visual standards before AI-assisted outputs can guide 3D production.',
    problems:[
      ['Buyer problem','References, AI-assisted exploration, material studies, and production notes can scatter quickly unless the team has review rules.'],
      ['Workflow risk','A generated image can look useful while failing material consistency, geometry, scale, lighting, or real production handoff.'],
      ['Solved direction','The case organizes references, material standards, review criteria, rejection rules, and handoff categories around real 3D judgment.']
    ],
    process:[
      ['Reference control','Organize input references, mood cues, material groups, and selected visual direction before expanding output volume.'],
      ['Material library','Group surfaces into reusable standards for wood, brass, glass, ceramic, leather, fabric, paper, and plant materials.'],
      ['3D-aware review','Check each visual output against geometry respect, scale, lighting, finish consistency, and client-ready clarity.'],
      ['Handoff system','Package reference boards, material notes, prompt/review guidance where appropriate, rejection rules, and production follow-up tasks.']
    ],
    deliverables:[
      ['Visual standards package','Reference board, selected direction board, material-library taxonomy, and quality-review criteria.'],
      ['Production review package','Geometry/material checks, finish consistency rules, lighting and scale review notes, and rejection criteria for unusable outputs.'],
      ['Handoff package','Organized visual references, material notes, prompt/review guidance where appropriate, and clear next steps for 3D production or implementation teams.']
    ]
  },
  'santa-cruz-ai-visual-pipeline':{
    deliverables:[
      ['Direction package','Workflow map, visual standards, material-library taxonomy, review criteria, and controlled-generation rules.'],
      ['Review package','Geometry, material, lighting, and client-readiness checks for judging AI-assisted construction visuals before they are shared.'],
      ['Handoff package','Developer-ready requirements, output-log rules, training notes, redaction boundaries, and proof needed before naming tools, metrics, or client facts publicly.']
    ]
  },
  'construction-client-progress-workflow':{
    deliverables:[
      ['Workflow package','Capture standards, phase model, comment/response model, review states, next-action rules, and handoff notes.'],
      ['Review materials','Progress evidence board, client review-state examples, summary-flow board, and public-safe handoff visuals.'],
      ['Measurement plan','Admin time, response loop, repeated questions, update completeness, approval clarity, and rework signals to verify before publishing result claims.']
    ]
  },
  'print-startup-direction':{
    deliverables:[
      ['Design package','Character family boards, style rules, pose/base standards, accessory constraints, and agent/review instructions where scoped.'],
      ['Print planning package','Printability board, support-risk review, base logic, handoff package board, and QA checklist for future production evidence.'],
      ['Proof needed','Slicer captures, wall-thickness notes, repair logs, successful test-print photos, and approved startup outcome data before result claims are shown.']
    ]
  },
  'sculpt-to-retopo':{
    deliverables:[
      ['Presentation assets','Sculpt board, face crop, retopo-style panel, turnaround strip, final render board, and process summary.'],
      ['Inspection package','Generated sculpt/model board, topology-style board, UV-inspired planning, bake/material tiles, and review categories.'],
      ['Proof needed','Actual source topology, polycount, UV layout, bake maps, texture maps, and tool screenshots before precise technical claims are added.']
    ]
  },
  'avatar-character':{
    deliverables:[
      ['Presentation assets','Avatar hero board, expression sheet board, portrait crop, expression panels, hair/costume crop, and creator-facing summary.'],
      ['Readiness package','Expression planning, mouth-shape direction, face-control planning, outfit/material notes, and turnaround needs.'],
      ['Proof needed','Working rig, blendshapes, visemes, VRM/FBX/BLEND files, and platform tests before live avatar claims are made.']
    ]
  },
  'mascot-character':{
    deliverables:[
      ['Presentation assets','Mascot hero board, pose/expression board, appeal crop, pose panels, material palette crop, and brand-character summary.'],
      ['System package','Pose range, expression direction, colorway/material rules, turnaround planning, render-pack expectations, and handoff icons.'],
      ['Proof needed','Source model, UVs, topology, rig, exports, usage mockups, and client/brand facts before technical or brand claims are added.']
    ]
  },
  'outfits-accessories':{
    deliverables:[
      ['Presentation assets','Outfit hero board, material closeup board, front/back silhouette crop, trim/material crop, prop/accessory crop, and variation notes.'],
      ['Production planning','Garment and accessory categories, UV-inspired tiles, material groups, prop details, colorway planning, and export categories.'],
      ['Proof needed','Actual garment mesh, accessory mesh, UV layout, texture maps, material sheets, and platform exports before precise technical claims are added.']
    ]
  },
  'pbr-texturing':{
    deliverables:[
      ['Presentation assets','Starting sketch crop, design progression crop, final character read, presentation board, generated render boards, and project summary.'],
      ['Production planning','Sculpt/model board, technical planning board, material categories, review views, final render board, and handoff board.'],
      ['Client notes','Use case, reference rights, style decisions, scope assumptions, and confirmed deliverables without inventing source-file or engine claims.']
    ]
  }
};

CASE_STUDIES.forEach(study=>{
  const upgrade=FINAL_CASE_STUDY_UPGRADES[study.id];
  if(upgrade)Object.assign(study,upgrade);
});

Object.keys(FINAL_NARRATIVE_UPGRADES).forEach(id=>{
  CASE_NARRATIVES[id]={...(CASE_NARRATIVES[id]||{}),...FINAL_NARRATIVE_UPGRADES[id]};
});

const fallbackStudy=CASE_STUDIES[0];
const params=new URLSearchParams(window.location.search);
const selectedId=params.get('id')||'game-hero';
const currentStudy=CASE_STUDIES.find(item=>item.id===selectedId)||fallbackStudy;

function setText(selector,value){
  const node=document.querySelector(selector);
  if(node)node.textContent=value;
}

function renderCards(selector,items){
  const node=document.querySelector(selector);
  if(!node)return;
  node.innerHTML=items.map(([title,copy])=>`<article><h3>${title}</h3><p>${copy}</p></article>`).join('');
}

function renderGallery(study){
  const node=document.querySelector('[data-case-gallery]');
  if(!node)return;
  node.innerHTML=study.gallery.map(([src,caption],index)=>`
    <figure class="${index===0?'is-wide':''}">
      <img src="${src}" width="${index===0?'1400':'900'}" height="${index===0?'900':'675'}" alt="${caption}">
      <figcaption>${caption}</figcaption>
    </figure>
  `).join('');
}

function renderRelated(study){
  const node=document.querySelector('[data-related-cases]');
  if(!node)return;
  node.innerHTML=CASE_STUDIES
    .filter(item=>item.id!==study.id)
    .slice(0,3)
    .map(item=>`
      <a class="work-card" href="case-study.html?id=${item.id}">
        <div class="thumb"><img src="${item.image}" width="1200" height="900" alt="${item.alt}"></div>
        <h3>${item.title}</h3>
        <p class="meta">${item.meta[0]} · Case study</p>
        <p>${item.lead}</p>
      </a>
    `).join('');
}

function renderStudy(study){
  const narrative=CASE_NARRATIVES[study.id]||CASE_NARRATIVES['game-hero'];
  document.title=`${study.title} · Lesly`;
  const hero=document.querySelector('[data-case-hero]');
  if(hero){
    hero.src=study.image;
    hero.alt=study.alt;
    hero.closest('.cs-hero')?.classList.remove('has-board-hero');
  }
  setText('[data-case-title]',study.title);
  setText('[data-case-lead]',study.lead);
  setText('[data-case-what-title]','Project direction.');
  setText('[data-case-what-copy]',study.whatCopy);
  setText('[data-case-problem-title]','Problem solved.');
  const meta=document.querySelector('[data-case-meta]');
  if(meta)meta.innerHTML=study.meta.map(item=>`<span>${item}</span>`).join('');
  renderGallery(study);
  renderCards('[data-case-problems]',narrative.problems);
  renderCards('[data-case-process]',narrative.process);
  renderCards('[data-case-details]',study.details);
  renderCards('[data-case-proof]',study.proof);
  renderCards('[data-case-deliverables]',narrative.deliverables);
  renderRelated(study);
}

renderStudy(currentStudy);
