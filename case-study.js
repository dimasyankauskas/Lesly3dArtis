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
    title:'Local AI Visualization Pipeline Case Study',
    image:'assets/portfolio/work-ai-visual-pipeline.svg',
    alt:'AI visualization workflow case-study board with material library, local generation, client review, and cost metrics.',
    meta:['Consulting','AI workflow','Visual pipeline'],
    lead:'A strategic workflow case for replacing inconsistent cloud AI experiments with local generation standards, material libraries, client review checkpoints, and cost-control planning.',
    whatTitle:'A visual pipeline plan for a residential construction team.',
    whatCopy:'This case positions Lesly as a visual-pipeline and art-direction partner: she defined the look, material library, local generation standards, review criteria, and developer handoff for a small construction team using AI visualization.',
    details:[
      ['Strategic role','Lesly was not positioned as a hands-on renderer only; her role was visual standards, workflow definition, AI tool direction, team training, and implementation guidance.'],
      ['Local generation','The pipeline moved repeated cloud experiments toward a local Apple Silicon / ComfyUI / Stable Diffusion workflow with prompt, seed, reference, and output logging.'],
      ['Material library','Siding, stone, tile, wood, fixtures, paint, landscape, and lighting options were organized into reusable visual rules.'],
      ['Economics model','The project modeled a $2,000/month cloud baseline, $10.4k local setup, $300/month residual tooling, and about a 6.1-month break-even.']
    ],
    gallery:[
      ['assets/process/ai-visual-pipeline/presentation-board.svg','Workflow board showing brief intake, material library, ComfyUI graph, local workstation, and client review loop.'],
      ['assets/process/ai-visual-pipeline/economics-board.svg','Economics board comparing modeled cloud generation spend against a local hybrid workflow.'],
      ['assets/portfolio/work-ai-visual-pipeline.svg','Case-study overview card with material library, local AI workflow, client review, and cost-control metrics.']
    ],
    proof:[
      ['Cost baseline','Cloud AI invoices, token/credit reports, and monthly generation spend before local workflow planning.'],
      ['Workflow proof','ComfyUI graph screenshots, prompt templates, seed logs, reference boards, QA checklist, and local generation notes.'],
      ['Implementation proof','Developer brief, MCP/3D tool notes, team training materials, hardware receipts, and local workstation specs.'],
      ['Review proof','Material library screenshots, client review examples, generated-output comparisons, and approved public-safe outcome metrics.']
    ],
    current:['assets/portfolio/work-ai-visual-pipeline.svg','assets/process/ai-visual-pipeline/presentation-board.svg','assets/process/ai-visual-pipeline/economics-board.svg'],
    required:['baseline cloud AI spend report','hardware receipt and workstation specs','ComfyUI workflow screenshot','material library screenshot','developer implementation brief','training notes and approved outcome metrics']
  },
  {
    id:'print-startup-direction',
    title:'3D Printing Character Startup Design Direction',
    image:'assets/portfolio/work-3d-print-startup.svg',
    alt:'3D printed character startup design-direction board with character families, print rules, and handoff metrics.',
    meta:['Design direction','3D printing','Character system'],
    lead:'A design-director case for helping a small 3D printing startup turn collectible character ideas into a printable product system with style rules, printability checks, and STL/3MF handoff standards.',
    whatTitle:'A product-ready character system for small-batch 3D printing.',
    whatCopy:'This case connects directly to Lesly’s 3D character authority: character style, printable form, collectible appeal, print QA, production handoff, and repeatable startup workflow.',
    details:[
      ['Design director role','Lesly defined the character families, style rules, product scale, pose constraints, base system, accessory logic, and production-readiness gates.'],
      ['Printability rules','The workflow brought physical constraints earlier: wall thickness, watertight geometry, supports, hollowing, drainage, fragile details, orientation, and file package checks.'],
      ['Startup system','Instead of treating each character as a one-off, the project created a repeatable library for future collectible lines.'],
      ['Economics model','The draft models repair/rejection dropping from 28% to 9%, prep time dropping from 6h to 2.5h, and about $2,310/month in avoided prep labor.']
    ],
    gallery:[
      ['assets/process/3d-print-startup/presentation-board.svg','Presentation board showing character families, print rules, slicer QA, handoff package, and modeled production metrics.'],
      ['assets/process/3d-print-startup/printability-board.svg','Printability board showing wall thickness, supports, drainage, orientation, watertight geometry, and file package checks.'],
      ['assets/portfolio/work-3d-print-startup.svg','Case-study overview card with character families, printability rules, and STL/3MF handoff metrics.']
    ],
    proof:[
      ['Design system','Style guide excerpts, character family boards, pose rules, accessory rules, and base-system standards.'],
      ['Print QA','Slicer screenshots, support/orientation tests, wall-thickness notes, hollowing/drainage checks, and failed-print logs.'],
      ['Handoff','STL/3MF/OBJ package examples, print notes, thumbnails, product metadata, naming rules, and startup restrictions.'],
      ['Outcome proof','Before/after model-prep time, repair/rejection counts, successful prototype photos, and approved labor-savings data.']
    ],
    current:['assets/portfolio/work-3d-print-startup.svg','assets/process/3d-print-startup/presentation-board.svg','assets/process/3d-print-startup/printability-board.svg'],
    required:['style guide excerpt','slicer screenshots','failed-print or repair log','STL/3MF/OBJ handoff package','successful prototype photos','approved startup outcome metrics']
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
    required:['assets/process/[project-slug]/hero.webp','assets/process/[project-slug]/technical-proof.webp','assets/process/[project-slug]/final-renders.webp','assets/process/[project-slug]/deliverables.webp']
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
    problemTitle:'The team had AI outputs, but not a repeatable visual production workflow.',
    problems:[
      ['Buyer problem','The construction team was using online AI tools for home visuals, but the outputs were inconsistent and the spend was hard to control.'],
      ['Presentation risk','Generated images can look impressive while failing geometry, material consistency, client approval, or real project constraints.'],
      ['Solved direction','Lesly defined the visual standards, material library, local generation workflow, cost model, and developer brief needed to make AI visualization repeatable.']
    ],
    process:[
      ['Workflow audit','Map current cloud AI spend, prompt practices, visual failures, review bottlenecks, and handoff gaps.'],
      ['Art direction system','Define the material library, style rules, acceptable variation, geometry-preservation needs, and client-ready output criteria.'],
      ['Local AI plan','Specify a local ComfyUI / Stable Diffusion workflow with prompt, seed, reference, ControlNet-style structure guidance, and output logging.'],
      ['Implementation handoff','Coordinate with developers or an AI agency around tool setup, MCP/3D application connections, training materials, and review checkpoints.']
    ],
    deliverables:[
      ['Strategy package','Workflow map, visual standards, material-library taxonomy, generation rules, and client review criteria.'],
      ['Technical brief','Local workstation assumptions, ComfyUI graph requirements, model/tool list, prompt templates, logging rules, and MCP/3D tool notes.'],
      ['Measurement plan','Baseline cloud spend, residual tooling spend, break-even model, output consistency checks, and public-safe proof requirements.']
    ]
  },
  'print-startup-direction':{
    problemTitle:'The startup needed printable character products, not just attractive digital models.',
    problems:[
      ['Buyer problem','The 3D printing startup wanted different collectible characters, but early assets were inconsistent and needed heavy repair before printing.'],
      ['Production risk','A model can look good on screen while failing as a physical object because of thin parts, bad supports, hollowing issues, or non-watertight geometry.'],
      ['Solved direction','Lesly acted as design director: defining character families, printability rules, QA gates, file handoff standards, and a repeatable product library.']
    ],
    process:[
      ['Product brief','Define character audience, collectible scale, print process, product family, pose rules, base system, and handoff format.'],
      ['Style direction','Lock silhouette, face read, proportions, expression, accessory logic, and visual consistency across future character lines.'],
      ['Printability review','Move physical constraints earlier: wall thickness, supports, hollowing, drainage, fragile details, orientation, and slicer review.'],
      ['Production handoff','Package STL/3MF/OBJ files, thumbnails, print notes, QA checklist, naming rules, and startup-facing product metadata.']
    ],
    deliverables:[
      ['Design package','Character family boards, style guide excerpts, scale rules, pose/base standards, and accessory constraints.'],
      ['Print package','Printability checklist, slicer review notes, support/orientation guidance, file package structure, and prototype QA requirements.'],
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

const fallbackStudy=CASE_STUDIES[0];
const params=new URLSearchParams(window.location.search);
const selectedId=params.get('id')||'game-hero';
const currentStudy=CASE_STUDIES.find(item=>item.id===selectedId)||fallbackStudy;

function setText(selector,value){
  const node=document.querySelector(selector);
  if(node)node.textContent=value;
}

function renderList(selector,items){
  const node=document.querySelector(selector);
  if(!node)return;
  node.innerHTML=items.map(item=>{
    const isPath=/^assets\//.test(item)&&!item.includes('[');
    return `<li>${isPath?`<a href="${item}"><code>${item}</code></a>`:`<code>${item}</code>`}</li>`;
  }).join('');
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
    hero.closest('.cs-hero')?.classList.toggle('has-board-hero',study.image.endsWith('.svg'));
  }
  setText('[data-case-title]',study.title);
  setText('[data-case-lead]',study.lead);
  setText('[data-case-what-title]',study.whatTitle);
  setText('[data-case-what-copy]',study.whatCopy);
  setText('[data-case-problem-title]',narrative.problemTitle);
  const meta=document.querySelector('[data-case-meta]');
  if(meta)meta.innerHTML=study.meta.map(item=>`<span>${item}</span>`).join('');
  renderGallery(study);
  renderCards('[data-case-problems]',narrative.problems);
  renderCards('[data-case-process]',narrative.process);
  renderCards('[data-case-details]',study.details);
  renderCards('[data-case-proof]',study.proof);
  renderCards('[data-case-deliverables]',narrative.deliverables);
  renderList('[data-case-current-assets]',[`${study.image}`,...study.gallery.map(([src])=>`${src}`)]);
  renderList('[data-case-required-assets]',study.required);
  renderRelated(study);
}

renderStudy(currentStudy);
