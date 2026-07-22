const CASE_STUDIES=[
  {id:'game-hero'},
  {id:'character-environment'},
  {id:'interior-props'},
  {id:'ai-visual-pipeline'},
  {id:'santa-cruz-ai-visual-pipeline'},
  {id:'construction-client-progress-workflow'},
  {id:'print-startup-direction'},
  {id:'sculpt-to-retopo'},
  {id:'avatar-character'},
  {id:'mascot-character'},
  {id:'outfits-accessories'},
  {id:'pbr-texturing'},
  {id:'original-site-concept'}
];
const APPROVED_MEDIA={
  forgeWardenHero:{
    src:'assets/rebuild/game-forge-warden/hero-4x3-v1.webp',
    alt:'Stocky silver-haired Forge Warden holding a square-headed two-handed hammer on a restrained studio plinth.',
    caption:'Forge Warden hero presentation establishing the older identity, stocky role silhouette, asymmetrical armor, material hierarchy, grounded stance, and long square-headed hammer direction.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  forgeWardenBack:{
    src:'assets/rebuild/game-forge-warden/back-construction-16x9-v1.webp',
    alt:'Rear presentation of the stocky silver-haired Forge Warden showing the quilted gambeson, crossed leather harness, asymmetrical armor, layered skirt panels, gloves, and boots.',
    caption:'Rear construction presentation showing how the fur collar, quilted gambeson, crossed harness, asymmetrical armor, belt, skirt panels, gloves, and boots complete the character from behind.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  forgeWardenGrip:{
    src:'assets/rebuild/game-forge-warden/grip-articulation-16x9-v1.webp',
    alt:'Forge Warden detail presentation showing the face, fur collar, shoulder armor, gloved hammer contact, layered waist, trousers, guards, and boots.',
    caption:'Surface and construction details bring the weathered face, fur, quilted cloth, aged steel, copper rivets, leather, wood, layered waist, gloves, and heavy boots into close view.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  frostlineStageHero:{
    src:'assets/rebuild/character-staging-frostline/hero-4x3-v1.webp',
    alt:'Older Frostline Ranger archer on a restrained black-stone stage with one milestone, frost stones, and cool studio lighting.',
    caption:'A compact stone base, one offset milestone, clear bow-side negative space, and a cool-key/warm-rim balance keep the ranger dominant.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  frostlineStageProgression:{
    src:'assets/rebuild/character-staging-frostline/stage-progression-16x9-v1.webp',
    alt:'Three Frostline Ranger staging directions comparing a plain gray plinth, a stone and milestone layout, and a cool-and-warm atmospheric treatment.',
    caption:'The comparison moves from a neutral plinth to one restrained scale cue, then adds the cool key, warm rim, mist, and contact shadow used in the final visual.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  frostlineCameraGrounding:{
    src:'assets/rebuild/character-staging-frostline/camera-grounding-16x9-v1.webp',
    alt:'Frostline Ranger eye-level and near-profile views plus a tight lower-body crop showing silhouette clearance, boots, stone contact, and bow placement.',
    caption:'Eye-level and near-profile views compare face read, silhouette, and bow clearance; the lower-body crop focuses on boot contact, coat fall, and the stone edge.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  emberDuelistHero:{
    src:'assets/rebuild/outfit-ember-duelist/hero-4x3-v1.webp',
    alt:'Young Ember Court Duelist wearing layered ivory, plum, black leather, and aged-gold costume pieces while holding a complete swept-hilt rapier.',
    caption:'The hero establishes the lean tailored silhouette, asymmetric protection, material hierarchy, swept-hilt rapier, and restrained studio mood.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  emberDuelistFrontBack:{
    src:'assets/rebuild/outfit-ember-duelist/front-back-accessories-16x9-v1.webp',
    alt:'Front- and rear-facing Ember Duelist costume presentations with rapier, shoulder armor, forearm guards, harness, belt, brooch, and boot accents.',
    caption:'Front and rear views compare the wrap closure, split coat tails, leather routing, armor asymmetry, waist structure, boots, brooch, and swept-hilt rapier.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  emberDuelistLayers:{
    src:'assets/rebuild/outfit-ember-duelist/layer-progression-16x9-v1.webp',
    alt:'Three Ember Duelist costume presentations: ivory foundation clothing, plum tailoring with leather structure, and the complete look with protection and rapier.',
    caption:'Three independent costume states isolate the ivory-and-charcoal foundation, plum tailoring and leather structure, then aged-gold protection and weapon direction.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  lyraSculptHero:{
    src:'assets/rebuild/sculpt-retopo-lyra/hero-4x3-v1.webp',
    alt:'Warm-gray Lyra bust with a tapered face, layered braided hair, diamond ornament, high collar, and neutral studio lighting.',
    caption:'The three-quarter portrait keeps Lyra’s facial planes, tapered jaw, braided silhouette, diamond ornament, high collar, and long neck in one calm read.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  lyraSculptDevelopment:{
    src:'assets/rebuild/sculpt-retopo-lyra/sculpt-development-16x9-v1.webp',
    alt:'Three Lyra bust presentations comparing faceted primary forms, refined facial and hair masses, and resolved warm-gray detail.',
    caption:'Faceted, refined, and resolved treatments compare which primary masses, secondary planes, and identity details carry the portrait.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  lyraFormStudy:{
    src:'assets/rebuild/sculpt-retopo-lyra/form-deformation-study-16x9-v1.webp',
    alt:'Lyra warm-gray bust study with neutral front, true profile, subtle smile, and open-mouth expression views.',
    caption:'Front, true profile, subtle smile, and open-mouth views compare facial proportion, profile rhythm, cheek volume, mouth shape, and jaw position.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  miraAvatarHero:{
    src:'assets/rebuild/avatar-mira/hero-4x3-v1.webp',
    alt:'Stylized young-adult Mira avatar with a high black ponytail, rust hooded layer, black foundation garment, and geometric gold jewelry.',
    caption:'The hero establishes Mira’s warm stylized face, high-ponytail silhouette, rust-and-black costume hierarchy, geometric jewelry, and restrained warm light.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  miraIdentityViews:{
    src:'assets/rebuild/avatar-mira/identity-views-16x9-v1.webp',
    alt:'Four Mira identity presentations comparing front, three-quarter, profile, and rear face, ponytail, hood, costume, and jewelry direction.',
    caption:'Front, three-quarter, profile, and rear views compare the face, ponytail, hood, costume silhouette, and jewelry from every side.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  miraExpressions:{
    src:'assets/rebuild/avatar-mira/expression-direction-16x9-v1.webp',
    alt:'Five Mira expression presentations showing calm, warm smile, delighted, surprised, and focused character reads.',
    caption:'Calm, warm smile, delighted, surprised, and focused reads compare how brows, eyelids, cheeks, lips, mouth corners, and jaw position carry the character.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  solPortrait:{
    src:'assets/rebuild/sol-mascot/sol-hero-4x5-v1.webp',
    alt:'Sol the fennec fox mascot direction with three forehead markings, one patterned tail, terracotta cape, compact animal paws, and a staff in a presentation holder.',
    caption:'The hero brings Sol’s fennec silhouette, three-mark identifier, warm costume hierarchy, patterned tail, compact paws, and leaf-topped staff into one immediate read.',
    aspect:'4/5',
    width:1120,
    height:1400
  },
  solIdentityViews:{
    src:'assets/rebuild/sol-mascot-system/identity-views-16x9-v1.webp',
    alt:'Four Sol mascot identity presentations comparing front, three-quarter, profile, and rear silhouette, costume, tail, paws, and staff direction.',
    caption:'Front, three-quarter, profile, and rear targets compare Sol’s muzzle, enormous ears, patterned tail, compact paws, costume layers, pouch, boots, and staff placement.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  solPoseExpressions:{
    src:'assets/rebuild/sol-mascot-system/pose-expression-16x9-v1.webp',
    alt:'Four Sol mascot character presentations showing a greeting, confident guide, delighted seated pose, and thoughtful moment.',
    caption:'Greeting, confident guide, delighted seated, and thoughtful moments compare posture, paw placement, eye direction, mouth shape, cape position, tail placement, and staff relationship.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  solPrint:{
    src:'assets/rebuild/sol-print/sol-collectible-4x3-v2.webp',
    alt:'Sol collectible presentation with coordinated color and warm-gray figures showing the fennec identity, costume, staff, patterned tail, and broad tiered base.',
    caption:'Color and warm-gray presentations compare Sol’s identity, costume hierarchy, staff relationship, broad base, and overall form.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  solPrintAssembly:{
    src:'assets/rebuild/sol-print-system/assembly-direction-16x9-v2.webp',
    alt:'Sol collectible visual-grouping study comparing the complete figure with conceptual groups for the head, scarf and cape, tail, body, paws, staff, holder, and base.',
    caption:'Conceptual visual groups make the head, cape, tail, body, paws, staff, holder, and base relationships easy to compare before any engineering decisions.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  solPrintContacts:{
    src:'assets/rebuild/sol-print-system/contact-views-16x9-v1.webp',
    alt:'Front three-quarter, profile, and rear three-quarter Sol collectible views with the base, staff, holder, cape, and tail visible.',
    caption:'Front, profile, and rear views keep the ears, muzzle, cape, patterned tail, paws, staff-and-holder relationship, and base footprint readable around the form.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  interiorShelf:{
    src:'assets/rebuild/interior-direction/shelf-hero-4x3-v1.webp',
    alt:'Warm-lit carved-wood shelf arranged with nested chests, patterned vessels, books, folded textiles, and aged-brass accents.',
    caption:'The carved frame and stacked chests establish the first read; vessels, books, textiles, and brass accents step down in scale through the warm-lit shelf.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  interiorPropFamily:{
    src:'assets/rebuild/interior-props-system/prop-family-16x9-v1.webp',
    alt:'Studio lineup of coordinated carved chests, patterned vessels, brass accents, books, folded textiles, and a carved-wood column.',
    caption:'The isolated family shows the scale rhythm between chest variations, tall vessels, brass accents, books, textiles, and carved wood.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  interiorStagingDevelopment:{
    src:'assets/rebuild/interior-props-system/staging-development-16x9-v1.webp',
    alt:'Three coordinated treatments of an ornate shelf exploring neutral form, separated materials, and warm interior atmosphere.',
    caption:'Three coordinated treatments explore form grouping, material separation, and warm lighting for the same ornate-shelf direction.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  conceptHero:{
    src:'assets/portfolio/work-concept-to-3d.webp',
    alt:'Fantasy-warrior presentation montage with line-focused, neutral-value, and polished color character directions.',
    caption:'The montage compares line-focused, neutral-value, and polished color reads for one fantasy-warrior identity.',
    aspect:'4/3',
    width:1200,
    height:900
  },
  conceptSculpt:{
    src:'assets/rebuild/concept-to-character/sculpt-development-16x9-v1.webp',
    alt:'Warm-gray fantasy-warrior form presentation with a facial close view and front, three-quarter, and rear character views.',
    caption:'Warm-gray views compare the face, ponytail, stance, silhouette, costume layers, boots, and front-to-rear read.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  conceptMaterials:{
    src:'assets/rebuild/concept-to-character/material-construction-16x9-v1.webp',
    alt:'Fantasy-warrior costume-and-material presentation with a full-body figure plus face, cloth, belt, bronze, embroidery, and boot close views.',
    caption:'The full costume and close views compare cloth, leather, bronze ornament, embroidery, weathered edges, and wrapped footwear.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  marshWardenHero:{
    src:'assets/rebuild/pbr-marsh-warden/hero-4x3-v1.webp',
    alt:'Full-body Marsh Warden material-study character with dark skin, a teal cloak, ivory linen, leather, oxidized bronze, and a lantern staff.',
    caption:'The full-body read keeps the face dominant while teal cloth, ivory linen, worn leather, oxidized bronze, carved wood, amber glass, and stone remain distinct.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  marshWardenMaterials:{
    src:'assets/rebuild/pbr-marsh-warden/material-inspection-16x9-v1.webp',
    alt:'Marsh Warden material presentation with color and warm-gray figures plus close views of the face, teal and ivory cloth, leather boot, aged bronze, carved staff, and amber lantern.',
    caption:'Color, coordinated warm-gray form, and close views compare surface separation, value hierarchy, weave scale, highlight character, and restrained wear.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  visualPipeline:{
    src:'assets/rebuild/tideglass-workflow/hero-4x3-v1.webp',
    alt:'Tideglass Courier presentation board with a resolved character target, coordinated sketch-style views, a gray-form figure, and material references.',
    caption:'The resolved character anchors a presentation of the lean silhouette, asymmetric costume, navigation staff, and restrained ivory, sea-green, charcoal, copper, and brass palette.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  visualPipelineSequence:{
    src:'assets/rebuild/tideglass-workflow/direction-sequence-16x9-v1.webp',
    alt:'Three coordinated Tideglass Courier presentations in sketch-style, gray-form, and color-and-material formats.',
    caption:'Three coordinated formats compare which silhouette, costume-asymmetry, staff, and stance decisions remain recognizable from line to form and color.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  visualPipelineReview:{
    src:'assets/rebuild/tideglass-workflow/review-handoff-16x9-v1.webp',
    alt:'Tideglass Courier detail board showing the face, staff grip, shoulder layers, satchel, rear silhouette, and coordinated material direction.',
    caption:'Close views bring the face, staff grip, layered shoulder, satchel connection, rear silhouette, and material family into one focused character read.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  residentialWorkflow:{
    src:'assets/rebuild/coastal-residential-workflow/hero-4x3-v1.webp',
    alt:'Editorial Coastal Residence board with a blue-hour exterior, an illustrative elevation, context views, and stone, timber, metal, and planting references.',
    caption:'The large blue-hour view establishes the low roofline, broad glazing, stone piers, rocky approach, restrained planting, and warm interior focus.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  residentialMaterialOptions:{
    src:'assets/rebuild/coastal-residential-workflow/material-options-16x9-v1.webp',
    alt:'Three coordinated Coastal Residence views comparing pale, warm, and cool exterior finish directions.',
    caption:'Pale, warm, and cool directions compare facade contrast, stone-and-timber balance, charcoal framing, glazing, and the relationship to the rocky landscape.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  residentialContextLighting:{
    src:'assets/rebuild/coastal-residential-workflow/context-lighting-16x9-v1.webp',
    alt:'Coastal Residence shown through distant coastal context, clear daylight, and blue-hour presentation views.',
    caption:'Distant context, clear daylight, and blue hour compare scale, silhouette, facade readability, interior glow, path-light rhythm, and foreground depth.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  constructionReview:{
    src:'assets/rebuild/northlight-workshop-progress/hero-4x3-v1.webp',
    alt:'Fictional Northlight Workshop interior with weathered red brick, arched windows, a pale timber roof, clerestory glazing, exposed services, and a black-steel courtyard opening.',
    caption:'Weathered brick, pale timber, black steel, concrete, and soft clerestory light establish the workshop’s adaptive-reuse identity.',
    aspect:'4/3',
    width:1448,
    height:1086
  },
  constructionPhaseSequence:{
    src:'assets/rebuild/northlight-workshop-progress/phase-sequence-16x9-v1.webp',
    alt:'Four coordinated Northlight Workshop presentations comparing an open brick shell, timber roof structure, clerestory enclosure, and a clear finished-room direction.',
    caption:'Four coordinated room treatments compare spatial openness, roof presence, enclosure, and finish level while preserving the brick, timber, and black-steel identity.',
    aspect:'16/9',
    width:1672,
    height:941
  },
  constructionDetailDirection:{
    src:'assets/rebuild/northlight-workshop-progress/evidence-hierarchy-16x9-v1.webp',
    alt:'Northlight Workshop shown from the full room through the courtyard opening to a close steel, brick, glazing, and concrete junction.',
    caption:'Wide, medium, and close views trace the workshop from overall spatial character through the courtyard opening to its steel, brick, glazing, and concrete junction.',
    aspect:'16/9',
    width:1672,
    height:941
  }
};

const RESPONSIVE_MEDIA_VARIANTS={
  forgeWardenBack:{small:'assets/rebuild/game-forge-warden/back-construction-16x9-v1-720.webp',medium:'assets/rebuild/game-forge-warden/back-construction-16x9-v1-1200.webp'},
  forgeWardenGrip:{small:'assets/rebuild/game-forge-warden/grip-articulation-16x9-v1-720.webp',medium:'assets/rebuild/game-forge-warden/grip-articulation-16x9-v1-1200.webp'},
  frostlineStageProgression:{small:'assets/rebuild/character-staging-frostline/stage-progression-16x9-v1-720.webp',medium:'assets/rebuild/character-staging-frostline/stage-progression-16x9-v1-1200.webp'},
  frostlineCameraGrounding:{small:'assets/rebuild/character-staging-frostline/camera-grounding-16x9-v1-720.webp',medium:'assets/rebuild/character-staging-frostline/camera-grounding-16x9-v1-1200.webp'},
  interiorPropFamily:{small:'assets/rebuild/interior-props-system/prop-family-16x9-v1-720.webp',medium:'assets/rebuild/interior-props-system/prop-family-16x9-v1-1200.webp'},
  interiorStagingDevelopment:{small:'assets/rebuild/interior-props-system/staging-development-16x9-v1-720.webp',medium:'assets/rebuild/interior-props-system/staging-development-16x9-v1-1200.webp'},
  visualPipelineSequence:{small:'assets/rebuild/tideglass-workflow/direction-sequence-16x9-v1-720.webp',medium:'assets/rebuild/tideglass-workflow/direction-sequence-16x9-v1-1200.webp'},
  visualPipelineReview:{small:'assets/rebuild/tideglass-workflow/review-handoff-16x9-v1-720.webp',medium:'assets/rebuild/tideglass-workflow/review-handoff-16x9-v1-1200.webp'},
  residentialMaterialOptions:{small:'assets/rebuild/coastal-residential-workflow/material-options-16x9-v1-720.webp',medium:'assets/rebuild/coastal-residential-workflow/material-options-16x9-v1-1200.webp'},
  residentialContextLighting:{small:'assets/rebuild/coastal-residential-workflow/context-lighting-16x9-v1-720.webp',medium:'assets/rebuild/coastal-residential-workflow/context-lighting-16x9-v1-1200.webp'},
  constructionDetailDirection:{small:'assets/rebuild/northlight-workshop-progress/evidence-hierarchy-16x9-v1-720.webp',medium:'assets/rebuild/northlight-workshop-progress/evidence-hierarchy-16x9-v1-1200.webp'},
  constructionPhaseSequence:{small:'assets/rebuild/northlight-workshop-progress/phase-sequence-16x9-v1-720.webp',medium:'assets/rebuild/northlight-workshop-progress/phase-sequence-16x9-v1-1200.webp'},
  solPrintContacts:{small:'assets/rebuild/sol-print-system/contact-views-16x9-v1-720.webp',medium:'assets/rebuild/sol-print-system/contact-views-16x9-v1-1200.webp'},
  solPrintAssembly:{small:'assets/rebuild/sol-print-system/assembly-direction-16x9-v2-720.webp',medium:'assets/rebuild/sol-print-system/assembly-direction-16x9-v2-1200.webp'},
  lyraFormStudy:{small:'assets/rebuild/sculpt-retopo-lyra/form-deformation-study-16x9-v1-720.webp',medium:'assets/rebuild/sculpt-retopo-lyra/form-deformation-study-16x9-v1-1200.webp'},
  lyraSculptDevelopment:{small:'assets/rebuild/sculpt-retopo-lyra/sculpt-development-16x9-v1-720.webp',medium:'assets/rebuild/sculpt-retopo-lyra/sculpt-development-16x9-v1-1200.webp'},
  miraIdentityViews:{small:'assets/rebuild/avatar-mira/identity-views-16x9-v1-720.webp',medium:'assets/rebuild/avatar-mira/identity-views-16x9-v1-1200.webp'},
  miraExpressions:{small:'assets/rebuild/avatar-mira/expression-direction-16x9-v1-720.webp',medium:'assets/rebuild/avatar-mira/expression-direction-16x9-v1-1200.webp'},
  solIdentityViews:{small:'assets/rebuild/sol-mascot-system/identity-views-16x9-v1-720.webp',medium:'assets/rebuild/sol-mascot-system/identity-views-16x9-v1-1200.webp'},
  solPoseExpressions:{small:'assets/rebuild/sol-mascot-system/pose-expression-16x9-v1-720.webp',medium:'assets/rebuild/sol-mascot-system/pose-expression-16x9-v1-1200.webp'},
  emberDuelistFrontBack:{small:'assets/rebuild/outfit-ember-duelist/front-back-accessories-16x9-v1-720.webp',medium:'assets/rebuild/outfit-ember-duelist/front-back-accessories-16x9-v1-1200.webp'},
  emberDuelistLayers:{small:'assets/rebuild/outfit-ember-duelist/layer-progression-16x9-v1-720.webp',medium:'assets/rebuild/outfit-ember-duelist/layer-progression-16x9-v1-1200.webp'},
  marshWardenMaterials:{small:'assets/rebuild/pbr-marsh-warden/material-inspection-16x9-v1-720.webp',medium:'assets/rebuild/pbr-marsh-warden/material-inspection-16x9-v1-1200.webp'},
  conceptSculpt:{small:'assets/rebuild/concept-to-character/sculpt-development-16x9-v1-720.webp',medium:'assets/rebuild/concept-to-character/sculpt-development-16x9-v1-1200.webp'},
  conceptMaterials:{small:'assets/rebuild/concept-to-character/material-construction-16x9-v1-720.webp',medium:'assets/rebuild/concept-to-character/material-construction-16x9-v1-1200.webp'}
};

Object.entries(RESPONSIVE_MEDIA_VARIANTS).forEach(([key,responsive])=>{
  APPROVED_MEDIA[key].responsive=responsive;
});

const PUBLIC_PRESENTATION={
  'game-hero':{
    hero:APPROVED_MEDIA.forgeWardenHero,
    gallery:[{...APPROVED_MEDIA.forgeWardenBack},{...APPROVED_MEDIA.forgeWardenGrip}]
  },
  'character-environment':{
    hero:APPROVED_MEDIA.frostlineStageHero,
    gallery:[{...APPROVED_MEDIA.frostlineStageProgression},{...APPROVED_MEDIA.frostlineCameraGrounding}]
  },
  'interior-props':{
    hero:APPROVED_MEDIA.interiorShelf,
    gallery:[{...APPROVED_MEDIA.interiorPropFamily},{...APPROVED_MEDIA.interiorStagingDevelopment}]
  },
  'ai-visual-pipeline':{
    hero:APPROVED_MEDIA.visualPipeline,
    gallery:[{...APPROVED_MEDIA.visualPipelineSequence},{...APPROVED_MEDIA.visualPipelineReview}]
  },
  'santa-cruz-ai-visual-pipeline':{
    hero:APPROVED_MEDIA.residentialWorkflow,
    gallery:[{...APPROVED_MEDIA.residentialMaterialOptions},{...APPROVED_MEDIA.residentialContextLighting}]
  },
  'construction-client-progress-workflow':{
    hero:APPROVED_MEDIA.constructionReview,
    gallery:[{...APPROVED_MEDIA.constructionDetailDirection},{...APPROVED_MEDIA.constructionPhaseSequence}]
  },
  'print-startup-direction':{
    hero:APPROVED_MEDIA.solPrint,
    gallery:[{...APPROVED_MEDIA.solPrintContacts},{...APPROVED_MEDIA.solPrintAssembly}]
  },
  'sculpt-to-retopo':{
    hero:APPROVED_MEDIA.lyraSculptHero,
    gallery:[{...APPROVED_MEDIA.lyraFormStudy},{...APPROVED_MEDIA.lyraSculptDevelopment}]
  },
  'avatar-character':{
    hero:APPROVED_MEDIA.miraAvatarHero,
    gallery:[{...APPROVED_MEDIA.miraIdentityViews},{...APPROVED_MEDIA.miraExpressions}]
  },
  'mascot-character':{
    hero:APPROVED_MEDIA.solPortrait,
    gallery:[{...APPROVED_MEDIA.solIdentityViews},{...APPROVED_MEDIA.solPoseExpressions}]
  },
  'outfits-accessories':{
    hero:APPROVED_MEDIA.emberDuelistHero,
    gallery:[{...APPROVED_MEDIA.emberDuelistFrontBack},{...APPROVED_MEDIA.emberDuelistLayers}]
  },
  'pbr-texturing':{
    hero:APPROVED_MEDIA.marshWardenHero,
    gallery:[{...APPROVED_MEDIA.marshWardenMaterials}]
  },
  'original-site-concept':{
    hero:APPROVED_MEDIA.conceptHero,
    gallery:[{...APPROVED_MEDIA.conceptSculpt},{...APPROVED_MEDIA.conceptMaterials}]
  }
};
const PUBLIC_COPY={
  'game-hero':{
    title:'Forge Warden — Character Direction',
    kicker:'Character direction study',
    meta:['Character direction by Lesly','Silhouette · costume · materials'],
    lead:'I developed the Forge Warden as a seasoned smith-warrior whose weight, protection, and working history read before any small detail.',
    heroCaption:'Portfolio presentation imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Written character brief'],
      ['Role','Character direction artist'],
      ['Focus','Silhouette, costume logic, materials, and prop relationship'],
      ['Final set','Hero, rear construction view, and detail study']
    ],
    storySections:[
      {
        label:'Starting point',
        title:'Weight before ornament.',
        paragraphs:[
          'Starting from a written brief, I treated the Forge Warden as a veteran craftsperson first and a fantasy fighter second. The character needed to feel capable of standing at a furnace, carrying tools, and holding ground without relying on spikes or oversized decoration. That pushed the design toward a compact torso, broad shoulders, planted boots, and a low center of gravity.',
          'My first decision was to make the hammer part of the body read rather than a separate accessory. Its long shaft creates a second strong axis across the pose, while the square head echoes the character’s blocky proportions. Even at thumbnail size, the tool, shoulder line, and stance work together to identify his role.'
        ]
      },
      {
        label:'Designing the imbalance',
        title:'One protected side keeps the body readable.',
        paragraphs:[
          'I concentrated the hard armor on one shoulder and forearm instead of wrapping the entire figure in plate. That asymmetry gives the silhouette a practical bias—the guarded side absorbs visual weight—while the open side reveals the quilted gambeson, leather harness, and hand position. The result feels equipped rather than buried.',
          'The material palette follows the same hierarchy. Indigo cloth carries the largest color field; gray fur frames the head; dark steel establishes protection; and muted copper rivets create small points of warmth. Worn leather and textured wood connect the armor to the hammer, so the prop belongs to the same working world as the costume.'
        ]
      },
      {
        placement:'after-media',
        label:'Reading the character in the round',
        title:'The back view carries the same logic without the hammer.',
        paragraphs:[
          'For the rear presentation, I removed the weapon from the composition so the costume construction could do the work. The crossed harness breaks up the broad quilted back, the fur collar keeps the head anchored, and the belt and split skirt panels step the eye down toward the guarded boots. Nothing on the rear view needs a new motif to feel complete.',
          'The close study brings the face, gloved contact, shoulder layering, waist, and footwear into one read. I used it to check whether the weathering stayed restrained and whether cloth, fur, leather, steel, copper, and wood remained distinct at a tighter scale. Those material changes support the character’s age and occupation without turning the surface into noise.'
        ]
      },
      {
        placement:'after-media',
        label:'Final read',
        title:'A clear character target from silhouette to surface.',
        paragraphs:[
          'The finished set presents one coherent Forge Warden across a grounded hero, a weapon-free rear view, and a focused detail study. Together, the images communicate the veteran identity, asymmetrical protection, costume hierarchy, and hammer relationship as a clear target for a later character build.',
          'What I value most in this study is its restraint. The character feels specific because the large decisions agree: his proportions carry the weight, the costume supports the job, and the materials reinforce use. It demonstrates how I approach character direction—establish the role early, protect the silhouette, and let detail earn its place.'
        ]
      }
    ],
    directionLabel:'Project brief',
    whatTitle:'A forge guardian built for instant role recognition.',
    whatCopy:'I shaped an older, compact defender whose weight comes from proportion and construction rather than oversized fantasy detail. Quilted indigo cloth, gray fur, dark steel, worn leather, and muted copper create a practical visual system around the long square-headed hammer.',
    problemLabel:'Creative challenge',
    problemTitle:'Make a heavily layered veteran feel powerful, readable, and built for his role.',
    problems:[
      ['Role read','Broad shoulders, a compact torso, heavy boots, and the horizontal hammer make the silhouette feel durable and work-worn.'],
      ['Asymmetry','Hard armor is concentrated on one shoulder and arm, giving the design a functional imbalance without losing the overall mass.'],
      ['Material hierarchy','Indigo cloth holds the largest color field while fur, leather, aged steel, copper, and wood separate the layers at a glance.']
    ],
    processLabel:'Direction process',
    processTitle:'From role silhouette to a complete costume system.',
    process:[
      ['Set the archetype','Start with age, stocky proportions, stance, and the long square-headed hammer so the character reads as a veteran forge guardian.'],
      ['Build the costume hierarchy','Layer the quilted gambeson, fur collar, leather harness, asymmetrical plate, belt, skirt panels, guards, and boots around one clear center mass.'],
      ['Resolve the back','Carry the quilted cloth, crossed harness, shoulder protection, waist structure, and boot language through a dedicated rear presentation.'],
      ['Refine the close read','Use face, shoulder, hand, waist, and boot details to tune wear, surface contrast, attachment logic, and prop contact.']
    ],
    mediaLabel:'Selected views',
    mediaTitle:'The design holds from full silhouette to back construction and close detail.',
    resultSummary:{
      label:'Final presentation',
      title:'One character, one material language, three complementary reads.',
      copy:'The finished direction package pairs a grounded hero with a weapon-free rear construction view and a focused detail study. Together they establish the Forge Warden’s role, costume logic, weathered surface language, and visual identity without crowding the presentation.'
    },
    detailsLabel:'Design decisions',
    detailsTitle:'A compact system built around weight, asymmetry, and wear.',
    details:[
      ['Role silhouette','Broad shoulders, compact proportions, heavy boots, and a square-headed hammer establish the Forge Warden at a glance.'],
      ['Armor logic','The protected shoulder and forearm carry the hard silhouette while the opposite side keeps the quilted body and leather structure readable.'],
      ['Back construction','The fur collar, crossed harness, broad waist belt, split skirt panels, and guarded boots make the design feel complete from behind.'],
      ['Surface character','Scuffed steel, muted copper, creased leather, textured wood, dense fur, and quilted cloth give the veteran a restrained, used-in-the-world finish.']
    ],
    relatedLead:'A veteran forge guardian developed through silhouette, costume hierarchy, back construction, and material detail.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'character-environment':{
    title:'Frostline Ranger — Staging Direction',
    kicker:'Character staging study',
    meta:['Staging direction by Lesly','Scale · grounding · light'],
    lead:'I staged the Frostline Ranger around a simple question: how little environment could I use while still giving her weight, place, and atmosphere?',
    heroCaption:'Portfolio presentation imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Written character-staging brief'],
      ['Role','Character staging and presentation'],
      ['Focus','Character priority, scale, ground contact, camera, and light'],
      ['Final set','Hero, stage comparison, and camera study']
    ],
    storySections:[
      {
        label:'Staging premise',
        title:'Give her a world, not a backdrop.',
        paragraphs:[
          'The Frostline Ranger already carries a strong identity: an older archer with a compact build, short silver hair, a slate-blue coat, pale leather, and a complete horn bow. My job was to create enough context for that identity to feel situated without turning the image into an environment piece. I kept the stage small, low, and visually quiet so her face, bow, hands, coat, quiver, and boots remain the first read.',
          'My approach was to make every supporting element answer a practical visual need. The stone gives the boots something convincing to press into, the milestone introduces scale, the frost locates the climate, and the lighting separates the layered costume. If an element did not strengthen weight, silhouette, or atmosphere, it did not need to stay.'
        ]
      },
      {
        label:'Choosing the scale cue',
        title:'One milestone does more than a larger set.',
        paragraphs:[
          'The comparison sheet makes the tradeoff visible. A plain gray plinth protects the anatomy read, but it leaves the ranger floating outside any sense of place. A broad scenic base would solve that problem by creating another one: the character would have to compete with the set. I chose a compact broken-stone platform with one offset milestone as the middle ground.',
          'Placing the milestone away from the bow side preserves a clean pocket of negative space around the weapon and upper body. Its vertical shape also counters the long diagonal of the bow without creating a second focal point. Small frost stones and an irregular edge add terrain information at foot level, where they can support the pose instead of interrupting the face.'
        ]
      },
      {
        placement:'after-media',
        label:'Camera and contact',
        title:'The bow decides where the air has to stay open.',
        paragraphs:[
          'The camera study tests the presentation from eye level, near profile, and a tighter grounding view. I kept the face and chest readable in the main angle, then used the profile to check whether the bow, quiver, coat hem, and body still separate cleanly. The bow is a large shape, so the surrounding air is part of the design; crowding that space would make the pose feel accidental.',
          'At the lower-body scale, the important read is contact. Both boots need to feel planted on the irregular stone, the coat must fall without hiding the stance, and the edge of the base should reinforce rather than cut through the silhouette. A soft contact shadow and restrained frost help join the figure to the stage without turning the ground into texture noise.'
        ]
      },
      {
        placement:'after-media',
        label:'Atmosphere with a light hand',
        title:'Cool structure, warm separation.',
        paragraphs:[
          'I used a cool key to shape the weathered face and slate-blue wool while keeping the pale leather and silver hair distinct. A narrow warm rim adds separation along the hair, bow, quiver, and shoulder without changing the wintry palette. The mist stays behind the silhouette, and the darkest values remain close to the character so the lighting never washes out her age or costume hierarchy.',
          'The final set gives the ranger a believable visual territory with very few pieces: one compact stage, one scale cue, controlled negative space, and a focused cool-warm light relationship. What this study demonstrates for me is that staging is an editing discipline. The character feels more present because the surrounding choices are specific, useful, and deliberately restrained.'
        ]
      }
    ],
    mediaLabel:'Staging comparisons',
    mediaTitle:'Scale, silhouette clearance, contact, and atmosphere remain character-first.',
    relatedLead:'A restrained character stage built through one scale cue, bow-side negative space, grounded contact, and controlled cool-warm light.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'interior-props':{
    title:'Ornate Interior — Prop Study',
    kicker:'Prop-family and set-dressing study',
    meta:['Visual direction by Lesly','Hierarchy · materials · set dressing'],
    lead:'I developed this ornate interior study around a dense carved-wood shelf, asking how a collection of chests, vessels, books, textiles, and brass accents could feel abundant without losing its hierarchy.',
    heroCaption:'Portfolio presentation imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Ornate shelf direction'],
      ['Role','Prop-family visual direction and presentation'],
      ['Focus','Scale rhythm, repeated ornament, material separation, and negative space'],
      ['Final set','Shelf hero, isolated lineup, and three-treatment study']
    ],
    storySections:[
      {
        label:'Composition premise',
        title:'The shelf has to read before the collection.',
        paragraphs:[
          'I treated the carved cabinet as more than a backdrop. Its heavy outer frame, floral band, and broad horizontal shelves establish the first shapes in the composition, while the dark recesses give every smaller object a common visual home. That enclosure lets the image feel like one interior arrangement instead of a row of unrelated props.',
          'Density was the main design question. I placed the broadest chest near the upper center as the first focal mass, then balanced it with a lower chest and a stack of folded textiles. Patterned vessels and slender brass forms bridge those larger shapes. Pockets of shadow around the groups keep the carving, lids, and vessel profiles from merging into one noisy surface.'
        ]
      },
      {
        label:'Variation inside the family',
        title:'Shared ornament, different silhouettes.',
        paragraphs:[
          'The isolated lineup separates the family into clear large, medium, and small reads. Chests provide the broad horizontal masses; tall vessels, candlesticks, and the carved column interrupt that rhythm with vertical accents; books and folded cloth create lower, softer shapes near the front. The range makes the collection flexible enough to dress a shelf without giving every object equal weight.',
          'Repeated floral and geometric borders connect the chests, vessels, book covers, textiles, and carved wood, but I varied their proportions and detail density. The largest chest carries a broad decorated band, while the smaller boxes rely on simpler corner pieces and latches. That balance keeps the collection related without making it look cloned.'
        ]
      },
      {
        placement:'after-media',
        label:'Material separation',
        title:'Dark materials still need distinct behavior.',
        paragraphs:[
          'Most of the palette sits in a dark, warm range, so the visible surface response has to do the separating. Brass catches small, bright highlights; glazed vessels carry broader reflections; carved wood breaks the light with grain and relief; paper and woven cloth remain softer and more diffuse. Teal, ivory, and muted red accents add contrast without pulling the collection out of its aged interior palette.',
          'The three-treatment sheet tests the same shelf direction as neutral form, separated surface families, and warm atmosphere. I use the neutral treatment to judge the large grouping before color becomes dominant, then look at the surfaced version to see whether wood, ceramic, metal, books, and textiles remain distinct. The warm treatment is a mood decision, not a production chronology; its job is to reinforce a hierarchy that already works.'
        ]
      },
      {
        placement:'after-media',
        label:'Set-dressing rhythm',
        title:'Quiet space keeps abundance intentional.',
        paragraphs:[
          'I kept the prop placement asymmetric so the shelves would not settle into a uniform grid. The upper chest holds the center, a vessel cluster carries weight to the left, and tall brass shapes pull the eye back across the right side. On the lower shelf, folded textiles form one calm block while books and vessels create narrow pauses around the final chest.',
          'The finished presentation turns one ornate-shelf direction into a coherent prop family and a readable room story. What I value most is the balance between abundance and restraint: each object can carry its own silhouette and surface character, but the composition still needs one focal order. This study shows how I use scale, repetition, material contrast, light, and negative space to make a dense set feel collected rather than crowded.'
        ]
      }
    ],
    mediaLabel:'Prop-family views',
    mediaTitle:'Scale, ornament, material contrast, and warm light hold the collection together.',
    relatedLead:'An ornate interior study organized through scale rhythm, repeated detail, material contrast, negative space, and warm set dressing.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'ai-visual-pipeline':{
    title:'Tideglass Courier — Visual Direction',
    kicker:'Character identity study',
    meta:['Character direction by Lesly','Silhouette · costume · prop · materials'],
    lead:'Starting from a written brief, I shaped Tideglass Courier into a clear character identity built around a lean silhouette, asymmetric outerwear, a navigation staff, and a restrained maritime palette.',
    heroCaption:'Portfolio presentation imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Written Tideglass Courier brief'],
      ['Role','Character visual direction and presentation'],
      ['Focus','Identity, costume, prop relationship, and material hierarchy'],
      ['Final set','Character target, three-format comparison, and detail study']
    ],
    storySections:[
      {
        label:'Identity premise',
        title:'A courier who reads at a glance.',
        paragraphs:[
          'The written brief gave me a role and atmosphere, but the character still needed a decisive first read. I used the long ivory coat and upright navigation staff to create two strong verticals around a lean adult figure. Cropped dark hair, a raised collar, and an open stance keep the face visible, while the divided coat hem gives the lower silhouette movement without making it theatrical.',
          'The asymmetry carries much of the identity. A single copper shoulder guard creates weight on one side, while the cross-body satchel, belts, and staff pull the eye along different angles through the torso. I kept the largest shapes simple so those accents could suggest travel, protection, and navigation without making the courier feel assembled from unrelated parts.'
        ]
      },
      {
        label:'Costume continuity',
        title:'The large shapes have to survive every format.',
        paragraphs:[
          'The coordinated sketch-style, gray-form, and color presentations let me compare which choices stay recognizable as the rendering language changes. The tall collar, one-sided guard, fitted charcoal layers, long coat panels, satchel, belts, and heavy boots carry the identity at thumbnail scale. Those recurring masses matter more than matching every seam or buckle.',
          'The coat creates a useful tradeoff. Its length gives the courier a memorable profile, but too much uninterrupted fabric would hide the stance and flatten the back view. I kept the front open and the hem divided so the legs remain readable, then used the rear presentation to check the shoulder guard, crossing straps, satchel placement, coat fall, and long staff from the opposite side.'
        ]
      },
      {
        placement:'after-media',
        label:'Prop and material language',
        title:'The staff belongs to both the hand and the world.',
        paragraphs:[
          'The navigation staff has to read as more than a decorative pole. Its glass head creates a clear top weight, the brass cage connects it to the costume hardware, and the long shaft reinforces the courier’s upright proportion. In the close view, the gloved hand wraps the lower fitting firmly enough that the prop feels carried rather than placed beside the character.',
          'I kept the palette weathered and practical. The ivory coat carries the largest light value, sea-green lining appears in controlled flashes, and charcoal leather anchors the center of the body. Oxidized copper and warm brass concentrate harder highlights near the shoulder and staff, while cloth and leather stay broader and quieter. The contrast makes the glass head legible without turning the prop into a separate visual family.'
        ]
      },
      {
        placement:'after-media',
        label:'Detail in service of identity',
        title:'Consistency comes from priorities, not perfect duplication.',
        paragraphs:[
          'The closer images focus on the areas most likely to lose the design: face, grip, shoulder assembly, coat layering, satchel connection, and rear silhouette. I compare the coordinated views through the decisions that must remain stable—the lean proportion, pale split coat, one guarded shoulder, cross-body equipment, vertical staff, and restrained palette—even when smaller features shift.',
          'The final study presents one recognizable courier identity through full-figure, form, material, rear, and close-detail lenses. My main takeaway is that continuity depends on a short list of disciplined choices: a readable silhouette, a stable costume hierarchy, a prop with a clear visual role, and materials that reinforce the setting. When those priorities hold, the character feels specific before extra complexity is added.'
        ]
      }
    ],
    mediaLabel:'Character-direction views',
    mediaTitle:'Silhouette, costume hierarchy, prop integration, and material contrast carry the identity across formats.',
    relatedLead:'A lean courier identity developed through a split ivory coat, one-sided copper guard, cross-body equipment, navigation staff, and restrained maritime palette.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'santa-cruz-ai-visual-pipeline':{
    title:'Coastal Residence — Visual Direction',
    kicker:'Fictional residential visualization study',
    meta:['Visualization direction by Lesly','Massing · finish · context · light'],
    lead:'I shaped this fictional coastal-residence study around a low horizontal silhouette, a clear material hierarchy, and a rocky landscape, then compared how finish, viewing distance, daylight, and blue hour change its visual character.',
    heroCaption:'Portfolio visualization imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Fictional coastal-residence brief'],
      ['Role','Residential visualization direction and presentation'],
      ['Focus','Massing, finish hierarchy, rocky context, and light'],
      ['Final set','Editorial hero, finish comparison, and context-and-light study']
    ],
    storySections:[
      {
        label:'Massing and approach',
        title:'A low silhouette against the coast.',
        paragraphs:[
          'The residence needed enough presence to hold its own against the rock and mature trees without becoming a vertical landmark. I used low-slope roof planes, broad overhangs, and offset upper volumes to stretch the silhouette horizontally. Tall stone piers break that span into readable bays, while dark-framed glazing keeps the facade open and gives the heavier masonry room to breathe.',
          'For the main view, I favored a front three-quarter composition that reveals the roofline, stone anchors, broad glazing, terraces, and stepped approach in one image. The camera stays close enough to compare the material relationships but leaves a generous foreground of boulders and planting. That foreground gives the residence scale and makes the approach part of the composition instead of treating the landscape as a border.'
        ]
      },
      {
        label:'Finish comparison',
        title:'Three temperatures, one visual identity.',
        paragraphs:[
          'The finish comparison explores pale, warm, and cool tendencies without naming a winner. The pale direction creates the strongest edge contrast against the charcoal frames, but it feels more separate from the rocky setting. The warmer version connects stone and timber more naturally to the landscape. The cooler direction settles into the gray rock and overcast sky, though some facade separation is lost.',
          'I kept the material hierarchy stable across those shifts. Stone carries visual weight at the piers, timber warms the soffits and protected areas, charcoal metal defines the roof and glazing, and glass adds depth through reflection and interior value. The goal was not to make every surface equally expressive; it was to let each material perform a distinct role in the overall read.'
        ]
      },
      {
        placement:'after-media',
        label:'Context and camera distance',
        title:'The landscape sets the scale.',
        paragraphs:[
          'The distant context view changes the residence from an isolated object into one element within a larger coastal composition. Wind-shaped trees interrupt the horizon, exposed boulders establish the terrain, and low planting keeps the building visible without clearing the slope into a blank platform. From that distance, the long roofline and warm glazing become the main identifiers.',
          'There is a useful tradeoff between the wide and close views. The wide image explains scale, exposure, and the relationship to the water, but it gives up facade detail. The closer approach restores the stone, timber, glazing rhythm, and entry sequence, though the setting becomes less dominant. Using both distances keeps context and material character from competing for the same frame.'
        ]
      },
      {
        placement:'after-media',
        label:'Lighting hierarchy',
        title:'Daylight explains; blue hour invites.',
        paragraphs:[
          'Clear daylight gives me the most direct read of the facade hierarchy. Roof edges, stone planes, glazing divisions, steps, planting, and boulder shapes remain distinct without atmosphere carrying the image. Blue hour shifts the emphasis toward silhouette and depth: warm interiors pull attention through the glass, path lights trace the stepped approach, and the cool sky separates the roofline from the trees.',
          'These are coordinated visual targets rather than views from one documented scene, so I judge continuity by the priorities that survive: low roof planes, broad glazing, stone anchors, timber warmth, charcoal framing, rocky grade, and restrained planting. The finished study reinforced something I value in architectural visualization: atmosphere is most convincing when the massing, material hierarchy, camera purpose, and landscape relationship are already doing their work.'
        ]
      }
    ],
    mediaLabel:'Visualization studies',
    mediaTitle:'Finish, camera distance, coastal context, and time of day reveal different parts of the same visual identity.',
    relatedLead:'A fictional coastal residence explored through low horizontal massing, pale-to-cool finish directions, rocky context, clear daylight, and blue-hour atmosphere.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'construction-client-progress-workflow':{
    title:'Northlight Workshop — Spatial Study',
    kicker:'Fictional adaptive-reuse visualization',
    meta:['Environment direction by Lesly','Space · material · camera · light'],
    lead:'I shaped this fictional workshop study around the contrast between a weathered brick shell and a restrained layer of pale timber, black steel, clerestory glazing, and exposed services.',
    heroCaption:'Portfolio environment imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Fictional adaptive-reuse workshop brief'],
      ['Role','Environment visualization direction and presentation'],
      ['Focus','Spatial identity, material hierarchy, framing, and daylight'],
      ['Final set','Interior hero, four-room comparison, and wide-to-detail study']
    ],
    storySections:[
      {
        label:'Environment identity',
        title:'Old character, new structure.',
        paragraphs:[
          'What interested me most was the conversation between the existing brick volume and the cleaner contemporary insertions. I kept the three tall arched openings as the strongest inherited rhythm, then used the pale timber roof and black clerestory frame to create a lighter horizontal layer above them. The broad courtyard portal repeats that black framing at room scale and gives the far wall a clear focal point.',
          'I composed the main view from the opposite corner so the eye can travel along the arched wall, across the roof joists, and out through the courtyard opening. That angle reveals the room’s length without flattening it into a straight elevation. The concrete floor stays quiet and open, allowing brick, timber, glazing, and steel to establish the hierarchy.'
        ]
      },
      {
        label:'Comparing spatial character',
        title:'Four ways to read the room.',
        paragraphs:[
          'The four coordinated treatments let me compare how much of Northlight’s identity comes from each architectural layer. The open brick shell emphasizes height and exposure. Adding the pale timber roof changes the proportions immediately, while the clerestory and arched glazing introduce a more controlled relationship between enclosure and daylight.',
          'The challenge was to make every treatment distinct without losing the workshop. I held onto the brick bay rhythm, roof direction, courtyard opening, and concrete floor as recurring anchors. Against those constants, timber structure, black steel, upper glazing, and the cleaner room treatment can change the atmosphere without turning the comparison into four unrelated spaces. Together, they read as alternate visual studies centered on one architectural identity.'
        ]
      },
      {
        placement:'after-media',
        label:'Camera distance',
        title:'From room scale to one junction.',
        paragraphs:[
          'I treated the wide, medium, and detail views as a spatial zoom. The wide frame establishes the arched windows, roof, floor, and courtyard opening together. The middle view removes most of the room but keeps enough brick return, portal frame, and exterior doorway to preserve orientation.',
          'At close range, the black-steel edge, irregular brick, glazing frame, and concrete threshold become the subject. There is a real framing tradeoff: move too close and the junction loses its place; remain too wide and the material transition becomes incidental. The three views give the eye a clear path from atmosphere to contact without asking one image to explain both.'
        ]
      },
      {
        placement:'after-media',
        label:'Restraint and light',
        title:'Let the architecture remain visible.',
        paragraphs:[
          'The strongest materials already carry a lot of texture, so I kept the supporting objects sparse. Timber stacks, a toolbox, a trestle, conduit, and floor markings provide scale and suggest activity, but they stay low in the frame. Soft clerestory daylight washes across the brick and timber, while the linear fixture reinforces the roof direction without becoming the focus.',
          'The finished study holds one workshop identity across alternate room treatments and changing viewing distances. It reminded me that environment storytelling often depends on a few repeated relationships: old brick against new timber, warm structure against black framing, and high daylight over an open floor. When those relationships remain clear, the space stays recognizable from the full room down to a single material junction.'
        ]
      }
    ],
    mediaLabel:'Environment views',
    mediaTitle:'Alternate room treatments and a wide-to-detail camera sequence keep the workshop identity legible at every scale.',
    relatedLead:'A fictional workshop environment shaped through weathered brick, pale timber, black-steel insertions, clerestory light, and room-to-detail framing.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'print-startup-direction':{
    title:'Sol — Collectible Direction',
    kicker:'Character collectible study',
    meta:['Collectible direction by Lesly','Identity · silhouette · contact · form'],
    lead:'Starting from Sol’s existing mascot identity, I adapted the character for a collectible presentation, concentrating on silhouette, base footprint, staff relationship, and the way the cape and patterned tail read around the body.',
    heroCaption:'Portfolio collectible imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Existing Sol mascot identity'],
      ['Role','Collectible visual direction and presentation'],
      ['Focus','Identity, silhouette, contact, and component questions'],
      ['Final set','Color-and-gray hero, around-form views, and visual-grouping study']
    ],
    storySections:[
      {
        label:'Identity first',
        title:'The ears and face have to survive the format.',
        paragraphs:[
          'Sol’s oversized fennec ears are the first silhouette cue, but the identity depends on more than size. I kept the short muzzle, wide amber eyes, exactly three forehead marks, compact paws, and small rounded body working as one friendly read. If the eyes become too narrow or the muzzle grows too long, the character stops feeling like Sol even when the costume remains recognizable.',
          'The costume supports that face rather than competing with it. An ivory foundation keeps the body light, the terracotta scarf and cape frame the head, and the bronze sun buckle creates one clear center accent. The patterned tail repeats the terracotta language at the back, so the character remains recognizable even when the face is turned away.'
        ]
      },
      {
        label:'Color and form',
        title:'The two hero treatments answer different questions.',
        paragraphs:[
          'The color presentation carries personality and material hierarchy: warm fur, amber eyes, ivory cloth, terracotta fabric, leather, bronze, wood, and carved stone. Beside it, the warm-gray treatment removes that palette so I can judge the ear spacing, head-to-body ratio, cape mass, tail volume, staff height, and base silhouette without color doing the work.',
          'The broad tiered base gives the small body enough visual territory, while the tall staff creates a second vertical beside the ears. That relationship is delicate. If the staff moves too close, it crowds the head; too far away, it stops belonging to the figure. The holder keeps the prop visually connected to the base, and the tail and cape counterbalance the empty side of the composition.'
        ]
      },
      {
        placement:'after-media',
        label:'Reading around the figure',
        title:'Contact has to make sense from more than the front.',
        paragraphs:[
          'The front, profile, and rear presentations test the areas that disappear in a single beauty view. From the side, I can see whether the muzzle stays short, the ears remain open, and the cape clears the tail. From behind, the cape split, patterned tail, paw placement, staff holder, and full base footprint become part of the identity instead of hidden support.',
          'The key tradeoff is between charm and stability of the visual read. Large ears, a wide tail, a flowing cape, and a separate staff give Sol personality, but they also pull the silhouette in several directions. I kept the feet planted inside the broad upper tier and used the tail, cape, and staff as controlled outer accents so the figure still feels centered in the presentation.'
        ]
      },
      {
        placement:'after-media',
        label:'Planning the next pass',
        title:'Visual groups can expose questions before engineering.',
        paragraphs:[
          'The spaced presentation separates the head, cape, tail, body, paws, staff, holder, and base as conceptual groups. I use that view to ask where forms overlap, which identity features must remain uninterrupted, and where the staff and cape need clear visual space. Those openings turn the character read into focused questions for a later engineering pass.',
          'The finished study carries Sol from mascot identity into a collectible target without losing the face, costume, tail pattern, staff relationship, or base rhythm. What I value most is that the presentation makes both the appeal and the unanswered physical-design questions visible. Strong collectible direction should protect the character first, then give a later production pass a clear set of priorities to solve.'
        ]
      }
    ],
    mediaLabel:'Collectible views',
    mediaTitle:'Color, neutral form, around-view silhouette, and conceptual grouping keep Sol recognizable while exposing the next design questions.',
    relatedLead:'Sol’s mascot identity adapted for a collectible presentation through a clear face, oversized ears, terracotta-and-ivory costume, patterned tail, staff relationship, and broad carved base.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'sculpt-to-retopo':{
    title:'Lyra — Facial Form Study',
    kicker:'Character portrait direction',
    meta:['Facial-form direction by Lesly','Planes · profile · hair · expression'],
    lead:'Using an earlier Lyra bust as the identity anchor, I developed a portrait study around a tapered jaw, straight nose, full lips, long neck, high braided mass, and a restrained diamond motif.',
    heroCaption:'Portfolio portrait imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Earlier Lyra clay-bust reference'],
      ['Role','Character facial-form direction and presentation'],
      ['Focus','Facial planes, profile, grouped hair, ornament, and expression'],
      ['Final set','Three-quarter hero, orientation-and-expression study, and form comparison']
    ],
    storySections:[
      {
        label:'Facial structure',
        title:'Planes before polish.',
        paragraphs:[
          'I treated Lyra’s identity as a relationship between a few stable forms: an elongated forehead, wide-set almond eyes, a straight nose, full lips, a tapered jaw, and a long neck flowing into a high collar. The brows and upper lids carry most of the alertness, while the softer cheek and mouth shapes keep the portrait calm rather than severe.',
          'The three-quarter hero is useful because it reveals both the front read and enough profile to judge projection. I kept the lighting neutral across the face so the brow ridge, nose bridge, cheek turn, lips, chin, and jaw do not disappear into beauty lighting. A narrow warm rim separates the braids and collar from the dark background without flattening those planes.'
        ]
      },
      {
        label:'Profile and expression',
        title:'The side view is the identity check.',
        paragraphs:[
          'In profile, small proportion changes become much harder to hide. I looked at the rhythm from forehead to nose, the projection of the lips and chin, the jaw angle, ear placement, bun depth, and the transition from neck into collar. The face still needs to feel like Lyra when the frontal eye shape and symmetry are no longer doing most of the recognition work.',
          'The smile and open-mouth views add a second test: can the expression change without replacing the character? I kept the eye spacing, nose, jaw width, hair, ornament, and collar stable while allowing the cheeks, mouth corners, lips, and jaw to shift. Together, the expression shapes make the facial areas that need special care visually explicit.'
        ]
      },
      {
        placement:'after-media',
        label:'Hair and ornament',
        title:'Build the braid as a silhouette, not noise.',
        paragraphs:[
          'The high bun is the largest secondary mass in the portrait, so I treated it as a stacked volume before considering individual strands. Broad swept sections wrap into braided bands, smaller braids lock the bun to the skull, and two loose front pieces break the symmetry around the face. That grouping keeps the hair readable from both three-quarter and profile views.',
          'The diamond motif gives the portrait a quiet structural rhythm. The forehead ornament anchors the center line, long earrings carry the shape beside the jaw, and the chest emblem terminates the collar. I kept those accents thin and separated from the face so they support the vertical design without competing with the eyes or turning the bust into a jewelry display.'
        ]
      },
      {
        placement:'after-media',
        label:'Form hierarchy',
        title:'Broad-to-fine is a way of asking better questions.',
        paragraphs:[
          'I use the faceted, refined, and resolved treatments as three independent ways of examining the same direction. The faceted version makes cranial mass, cheek plane, jaw, neck, bun, and shoulder slope easiest to see. The middle treatment tests secondary transitions. The resolved portrait asks whether those forms still hold once eyelids, lips, braids, ornament, and collar detail return.',
          'The finished study presents one Lyra identity across a calm hero, a true profile, controlled expression changes, and a broad-to-fine form comparison. What I value most is the discipline of returning to the large relationships whenever detail becomes distracting. A convincing portrait depends on stable structure first; hair, ornament, expression, and finish only work when that foundation remains recognizable.'
        ]
      }
    ],
    mediaLabel:'Portrait studies',
    mediaTitle:'Orientation, expression, grouped hair, and broad-to-fine form keep Lyra’s identity legible beyond a single beauty angle.',
    relatedLead:'A stylized portrait study built through stable facial planes, a true profile, controlled expression shapes, grouped braids, and a restrained diamond motif.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'avatar-character':{
    title:'Mira — Avatar Identity Study',
    kicker:'Stylized avatar direction',
    meta:['Avatar direction by Lesly','Identity · view · costume · expression'],
    lead:'Starting from an earlier Mira portrait, I developed an avatar identity study around a warm stylized face, high black ponytail, terracotta wrap and hood, matte-black foundation, and geometric gold jewelry.',
    heroCaption:'Portfolio avatar imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Earlier Mira portrait direction'],
      ['Role','Avatar identity and expression direction'],
      ['Focus','Face, hair silhouette, costume continuity, and expression'],
      ['Final set','Hero portrait, front-to-rear identity study, and five-expression study']
    ],
    storySections:[
      {
        label:'Identity anchors',
        title:'The face has to survive more than one angle.',
        paragraphs:[
          'I built Mira’s recognition around a small group of stable proportions: large dark-brown eyes with clear spacing, a soft straight nose, full lips, a tapered jaw, and warm skin. The proportions stay deliberately stylized, but the jaw, neck, and calm expression keep the portrait reading as a young adult rather than drifting into a childlike face.',
          'The high ponytail is the largest secondary shape and the strongest rear-view identifier. I used the terracotta wrap to separate it from the black hair mass, then let side-swept bangs and a few loose locks soften the frame around the eyes. The profile and rear views test whether the nose, lips, chin, ear, ponytail root, and hood still belong to the same direction once the hero angle is gone.'
        ]
      },
      {
        label:'Costume as framing',
        title:'Rust, black, and gold create a clear hierarchy.',
        paragraphs:[
          'I treated the rust sleeveless hooded layer as a warm frame around the matte-black high-neck foundation. Black anchors the torso and connects back to the hair, while the rust cloth keeps the costume from collapsing into one dark shape. A horizontal belt gives the layered silhouette a clean stopping point below the portrait crop.',
          'The diamond earrings, pendant, and belt buckle repeat one angular accessory language. I kept the aged-gold accents small and concentrated near the face and center line, where they can guide the eye without becoming the subject. The contrast between matte cloth, dense hair, warm skin, and restrained metal also gives the palette enough material separation to hold at thumbnail scale.'
        ]
      },
      {
        placement:'after-media',
        label:'Expression range',
        title:'The eyes lead; the mouth completes the read.',
        paragraphs:[
          'I arranged the expression study from calm to warm smile, delighted, surprised, and focused. The smile begins in the mouth corners and lower lids; delight adds lifted cheeks and a wider jaw opening; surprise raises the brows, opens the eyes, and rounds the lips; focus lowers the brows and firms the mouth. Those coordinated changes make each emotion legible before small facial detail is noticed.',
          'The tradeoff is that Mira’s large eyes can amplify every adjustment and quickly change her age or identity. I kept returning to the eye spacing, nose, jaw width, hair frame, and costume anchors while the brows, eyelids, cheeks, lips, and jaw changed. Those character-read targets establish a useful emotional range without turning each frame into a different person.'
        ]
      },
      {
        placement:'after-media',
        label:'Continuity priorities',
        title:'Recognition depends on a short list of stable choices.',
        paragraphs:[
          'The individual views vary in small facial, hair, and costume details, so I judge the direction by the features that must survive: the warm oval face, eye spacing, high ponytail and terracotta wrap, rust-over-black hierarchy, and diamond-shaped gold accents. Front view checks symmetry, three-quarter carries the hero appeal, profile exposes the nose–lip–chin rhythm, and rear view clarifies the hair and hood relationship.',
          'The finished study holds Mira’s identity across a hero portrait, four orientations, and five emotional reads. It reinforced a practical lesson for me: avatar direction becomes convincing through repeated relationships, not detail count. Once the face, silhouette, color hierarchy, and accessory rhythm agree, expression can broaden the personality without losing recognition.'
        ]
      }
    ],
    mediaLabel:'Selected views',
    mediaTitle:'Front-to-rear identity, costume continuity, and five expression reads keep Mira recognizable beyond the hero portrait.',
    relatedLead:'An earlier Mira portrait developed into an avatar identity study through stable facial anchors, a high-ponytail silhouette, rust-and-black costume framing, geometric jewelry, and controlled expression range.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'mascot-character':{
    title:'Sol — Mascot Range Study',
    kicker:'Fennec mascot direction',
    meta:['Mascot direction by Lesly','Identity · view · gesture · expression'],
    lead:'Starting from the existing Sol mascot identity, I developed a character-range study around the fennec silhouette, three forehead marks, patterned tail, terracotta-and-ivory costume, compact paws, and leaf-topped staff.',
    heroCaption:'Portfolio mascot imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Existing Sol mascot identity'],
      ['Role','Mascot identity and character-range direction'],
      ['Focus','Species, silhouette, identifiers, costume, gesture, and expression'],
      ['Final set','Hero portrait, four perspective targets, and four character moments']
    ],
    storySections:[
      {
        label:'Instant recognition',
        title:'The ears establish the species; the markings establish Sol.',
        paragraphs:[
          'I kept Sol’s identity concentrated in features that survive at a small scale: a short fox muzzle, enormous upright ears, amber eyes, cream fur, and exactly three terracotta marks on the forehead. The ears create the dominant fennec silhouette, while the compact body, animal paws, and full single tail keep the design from drifting toward a human child in costume.',
          'The main proportion tradeoff is between charm and clarity. Oversized ears and eyes make Sol approachable, but they can overwhelm the muzzle and body. I used the dark eye rims, small nose, clear cheek fur, and broad ear spacing to hold the face together, then gave the torso enough costume structure that the character still reads below the head.'
        ]
      },
      {
        label:'Costume and prop rhythm',
        title:'Terracotta carries the identity through the whole figure.',
        paragraphs:[
          'I repeated terracotta from the forehead marks into the scarf, cape, and geometric tail band, using the ivory tunic and cream fur as quieter support. Dark leather belts, bracers, boots, strap, and pouch create a middle-value structure, while aged bronze is reserved for the shoulder pieces, buckle, and staff ornament. That hierarchy keeps the warm palette rich without turning every surface into an accent.',
          'The leaf-topped staff is taller than Sol, so it can easily compete with the face and ears. I kept its shaft narrow, placed the warm emblem near head height, and echoed the leaf-and-diamond geometry in the forehead mark and costume hardware. When the staff is not being held, the low presentation holder gives it a stable visual home beside the character rather than making it look like a floating prop.'
        ]
      },
      {
        placement:'after-media',
        label:'Reading around the character',
        title:'Profile and rear views reveal what the hero hides.',
        paragraphs:[
          'The perspective targets test a different recognition problem at each angle. Front view checks the ear spacing, three forehead marks, eye placement, and compact stance. Profile makes the short muzzle, chest depth, cape fall, and tail volume more exposed. From the rear, the face disappears and the read depends on the ear triangle, terracotta cape, broad banded tail, boots, pouch, and staff relationship.',
          'I kept the cape and tail as separate outer masses so they do not merge into one large shape. The cape falls from the neck and breaks into a pointed hem; the tail stays low, full, and offset, with its patterned band remaining visible. Together, the coordinated views clarify which silhouette and costume relationships matter from every side.'
        ]
      },
      {
        placement:'after-media',
        label:'Personality through gesture',
        title:'Small pose changes should feel like the same character thinking.',
        paragraphs:[
          'I used four moments to expand Sol’s personality without changing the identifier set. The greeting opens one paw toward the viewer; the guide pose plants the feet and uses the staff as a calm vertical; delight widens the arms, opens the mouth, and exposes the paw pads in a seated silhouette; the thoughtful pose closes inward through the chin paw, tilted head, and quieter mouth.',
          'The finished study carries Sol from an immediate hero read into orientation, gesture, and expression range while keeping the ears, muzzle, three marks, tail band, costume palette, and staff family recognizable. It reinforced that a mascot does not need constant redesign to show personality. Stable identifiers create trust; controlled changes in posture, eyes, mouth, paws, cape, and tail provide the performance.'
        ]
      }
    ],
    mediaLabel:'Selected views',
    mediaTitle:'Perspective, silhouette, costume rhythm, gesture, expression, and staff relationship keep Sol recognizable beyond the hero pose.',
    relatedLead:'The existing Sol mascot identity expanded through a clear fennec silhouette, disciplined identifier set, warm costume hierarchy, front-to-rear view logic, and four distinct character moments.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'outfits-accessories':{
    title:'Ember Duelist — Costume Study',
    kicker:'Layered character-costume direction',
    meta:['Costume direction by Lesly','Silhouette · layers · accessories'],
    lead:'Starting from a written Ember Court Duelist brief, I developed a costume study that balances courtly tailoring, agile movement, asymmetric protection, and a complete swept-hilt rapier.',
    heroCaption:'Portfolio costume imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Written Ember Court Duelist costume brief'],
      ['Role','Costume and accessory direction'],
      ['Focus','Silhouette, layer hierarchy, front-to-rear read, and accessory family'],
      ['Final set','Full-body hero, front/rear study, accessory lineup, and layer comparison']
    ],
    storySections:[
      {
        label:'Role silhouette',
        title:'A duelist before the detail.',
        paragraphs:[
          'The character needed to read as a duelist before any ornament became visible. I used a lean vertical silhouette, close charcoal trousers, tall boots, and long split plum tails to keep the body line narrow and mobile. The rapier extends that rhythm into a fine diagonal, giving the pose reach without adding the weight of a larger weapon.',
          'The central tradeoff was elegance versus protection. Too much metal would make the character feel like a soldier; too little would weaken the Ember Court status. I concentrated the aged-gold protection on one shoulder and the forearms, then used smaller fasteners and the brooch to carry that language through the rest of the costume.'
        ]
      },
      {
        label:'Layer hierarchy',
        title:'A quiet foundation under the tailoring.',
        paragraphs:[
          'The foundation view is deliberately restrained. A high ivory collar and gathered shirt frame the face and hands, while charcoal trousers and black boots keep the lower half visually continuous. That simple value structure makes the proportions readable before the richer plum, leather, and metal accents enter the composition.',
          'The plum wrap introduces the costume’s main directional movement. Its diagonal closure turns across the torso, the high waist keeps the legs long, and the divided tails open around the stance instead of hiding it. Dark leather straps and waist pieces contain the overlap, giving the softer tailoring a firm visual center.'
        ]
      },
      {
        placement:'after-media',
        label:'Front-to-rear logic',
        title:'The rear view has its own hierarchy.',
        paragraphs:[
          'The front carries the brooch, wrap closure, and rapier, so I used the back view to clarify different information. A broad plum field establishes the main shape, then the diagonal harness, central seam, split tails, belt, and one-sided shoulder protection break it into readable zones. The rear stays related to the front without simply repeating it.',
          'The accessory lineup lets me compare the design language at a smaller scale. Pointed and floral motifs recur across the shoulder guard, forearm pieces, buckle, brooch, and boot accent. The swept guard of the rapier belongs to the same courtly family, but its thin blade and open hilt remain lighter than the armor so the weapon does not overpower the figure.'
        ]
      },
      {
        placement:'after-media',
        label:'Material finish',
        title:'Each surface carries a different visual weight.',
        paragraphs:[
          'I kept the ivory cloth soft and relatively matte, used plum tailoring for the dominant color mass, and gave the black leather tighter highlights so it reads as structure. Aged gold catches controlled accents around the shoulder, wrists, waist, and weapon. The polished blade is the brightest linear element, which helps it remain legible against the dark studio ground.',
          'The finished study holds one Ember Duelist identity across the hero, front, rear, accessory focus, and three independent costume states. What I value most is the economy of the hierarchy: ivory protects the body read, plum defines the role silhouette, leather organizes the overlap, and metal finishes the status. Every layer either clarifies the character or earns its place through silhouette.'
        ]
      }
    ],
    mediaLabel:'Costume views',
    mediaTitle:'Hero silhouette, front-to-rear construction, accessory language, and three independent costume states make the visual hierarchy easy to read.',
    relatedLead:'A written Ember Court Duelist brief shaped into a costume study through an ivory-and-charcoal foundation, plum wrap tailoring, dark leather structure, asymmetric protection, and a swept-hilt rapier.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'pbr-texturing':{
    title:'Marsh Warden — Material Study',
    kicker:'Character material direction',
    meta:['Material direction by Lesly','Surface hierarchy · wear · close detail'],
    lead:'Starting from a written Marsh Warden character-and-material brief, I developed a face-first study that separates nine surface families without letting the character disappear beneath the finish.',
    heroCaption:'Portfolio character imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Written Marsh Warden character-and-material brief'],
      ['Role','Character material direction and presentation'],
      ['Focus','Value, surface scale, highlight character, edge treatment, and restrained wear'],
      ['Final set','Full-body hero, coordinated color and warm-gray figures, and five close views']
    ],
    storySections:[
      {
        label:'Focal hierarchy',
        title:'The character has to arrive before the materials.',
        paragraphs:[
          'I kept the face as the first read, using deep-brown skin and tightly coiled hair against the large teal-and-ivory costume masses. The cloak creates the dominant color field, the linen opens a lighter vertical through the torso, and the darker leather harness keeps those soft layers organized. Bronze, wood, glass, and stone step down into progressively smaller accents.',
          'Nine surface families can easily turn a character into a material sampler. I avoided that by assigning each one a different scale and visual job. Skin and hair hold the identity, teal and ivory establish the costume, leather carries structure, bronze marks protection and hardware, the staff and lantern carry the prop read, and the stone base stays low and quiet.'
        ]
      },
      {
        label:'Soft-surface separation',
        title:'Scale does more work than color alone.',
        paragraphs:[
          'The face uses broad, restrained highlights so the planes remain readable without looking polished. The coiled hair absorbs more light and breaks into a tighter pattern. Ivory linen carries the coarsest visible weave and frayed edge, while the teal cloth uses a denser surface, softer folds, and a narrow decorative border. Those differences keep adjacent soft materials distinct even in warm-gray presentation.',
          'I treated the dark leather as the bridge between cloth and metal. Straps, belt, bracers, pouches, and boots use firmer edges and tighter highlights than the textiles, but they do not shine like the bronze. Wear is concentrated around folds, toe and sole contact, strap edges, and handled areas, which gives the surface history without coating the entire figure in uniform grime.'
        ]
      },
      {
        placement:'after-media',
        label:'Hard accents and the prop',
        title:'Bronze, wood, glass, and stone need separate voices.',
        paragraphs:[
          'Oxidized bronze carries the hardest edges and the brightest broken highlights, with green-brown patina settling into recesses around the shoulder, clasps, and lantern frame. The staff moves in the opposite direction: its carved dark wood follows long directional grain and recessed ornament. The stone base remains dry, rough, and low contrast so it grounds the figure instead of becoming another decorated object.',
          'The amber lantern is the smallest but most saturated accent in the study. I placed it beside the upper body so the warm glow can answer the face without replacing it as the focal point. The narrow staff keeps that light separated from the costume, and the metal cage gives the glass enough dark structure to read clearly against the charcoal ground.'
        ]
      },
      {
        placement:'after-media',
        label:'Full figure to close read',
        title:'Distance changes which material decisions matter.',
        paragraphs:[
          'The coordinated warm-gray figure removes hue as the main separator and makes value, edge quality, weave scale, and form easier to compare. The close views then return to the areas most likely to collapse at normal viewing distance: skin against hair, teal cloth over linen and leather, layered boot wear, oxidized fittings, carved wood, and the lantern’s glass-and-metal boundary.',
          'The finished study holds a clear Marsh Warden identity from full silhouette to face, cloth, boot, and prop detail. What I value most is the restraint: no single surface needs maximum contrast or damage to feel distinct. A convincing material hierarchy comes from controlled differences in scale, value, edge, highlight, and wear, all serving the character rather than competing with him.'
        ]
      }
    ],
    mediaLabel:'Material views',
    mediaTitle:'Full-body hierarchy, coordinated neutral form, and close inspection keep nine surface families distinct without losing the character read.',
    relatedLead:'A written Marsh Warden brief shaped into a face-first material study across skin, coiled hair, ivory linen, teal cloth, worn leather, oxidized bronze, carved wood, amber glass, and dry stone.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  },
  'original-site-concept':{
    title:'Fantasy Warrior Study',
    kicker:'Character identity and costume direction',
    meta:['Character direction by Lesly','Identity · form · costume · materials'],
    lead:'Using an existing fantasy-warrior montage as the starting point, I developed a character-direction study around an angular face, high ponytail, terracotta scarf, layered charcoal costume, bronze ornament, and grounded stance.',
    heroCaption:'Portfolio character imagery developed with AI workflow support.',
    facts:[
      ['Starting point','Existing fantasy-warrior montage'],
      ['Role','Character identity and costume direction'],
      ['Focus','Face, ponytail, silhouette, costume layers, bronze rhythm, and material hierarchy'],
      ['Final set','Identity montage, warm-gray form study, and costume-and-material detail study']
    ],
    storySections:[
      {
        label:'Identity anchors',
        title:'Recognition has to survive the presentation mode.',
        paragraphs:[
          'I centered the character on a few repeatable cues: an angular adult face, high dark ponytail, terracotta scarf, charcoal-and-ivory layers, bronze ornament, wrapped leather boots, and a wide grounded stance. The opening montage uses line, neutral value, and color as three ways to test those relationships, with the curved sword acting as a clear hero-role cue rather than the whole identity.',
          'The largest silhouette tradeoff comes from the ponytail, scarf, and long trailing cloth all competing for movement. I kept the torso and legs relatively vertical, pushed the ponytail high behind the head, and let the scarf and lower panels travel outward at different heights. That separation gives the figure energy without turning the outer contour into one tangled mass.'
        ]
      },
      {
        label:'Form and orientation',
        title:'Warm gray makes structure harder to hide.',
        paragraphs:[
          'Without color carrying the read, the face depends on the brow, nose, lips, jaw, and the relationship between the neck and scarf. I used the portrait crop to check that the ponytail begins as a clear mass behind the skull rather than a cloud of strands, and that the scarf frames the face without swallowing the shoulders.',
          'The front, three-quarter, and rear targets expose how the costume sits around the body. From the front, the long central panel and circular waist ornament organize the stance. Three-quarter view tests the overlap of scarf, chest straps, hip layers, and boots. From the rear, the ponytail, scarf, back straps, hanging panels, and leg spacing have to carry recognition after the face disappears.'
        ]
      },
      {
        placement:'after-media',
        label:'Costume hierarchy',
        title:'Terracotta leads; bronze gives the costume its rhythm.',
        paragraphs:[
          'I used the terracotta scarf and central hanging cloth as the dominant warm fields against charcoal trousers and darker outer panels. A narrow ivory insert opens a lighter path through the layers. Leather straps cross the torso and hips to give the soft cloth a structural center, while the wrapped boots keep the lower silhouette rugged and comparatively quiet.',
          'The waist is the densest area, with a large circular medallion, layered belts, pouches, hanging ornaments, and embroidered edges. To keep that detail from fragmenting the figure, I concentrated the brightest bronze around the chest, center waist, wrists, and a few pendants. The outer legs and large cloth panels stay darker, giving the eye places to rest between accents.'
        ]
      },
      {
        placement:'after-media',
        label:'Material and close detail',
        title:'Detail should confirm the hierarchy, not replace it.',
        paragraphs:[
          'The close views focus on the places where the material story matters most: warm skin against dark hair, worn terracotta cloth over charcoal and ivory layers, tight leather straps around the waist, engraved bronze, embroidered borders, and wrapped boots. Matte cloth carries softer broken edges, leather uses firmer highlights, and bronze takes the sharpest light so each family keeps a distinct role.',
          'The three studies vary in small facial, costume, and ornament details, so I judge the direction by the priorities that remain stable rather than exact repetition. The finished presentation holds one readable warrior family across identity, form, orientation, costume, and close material detail. It reinforced that character continuity is a hierarchy of face, silhouette, color, and rhythm before it is a collection of ornaments.'
        ]
      }
    ],
    mediaLabel:'Character views',
    mediaTitle:'Line, neutral form, orientation, costume hierarchy, and close material detail keep the fantasy-warrior identity readable across three visual lenses.',
    relatedLead:'An existing fantasy-warrior montage developed into a character-direction study through an angular face, high-ponytail silhouette, terracotta-and-charcoal costume, bronze ornament, and grounded material hierarchy.',
    visibleSections:{direction:false,problem:false,process:false,media:true,result:false,details:false}
  }
};

const SEO_DESCRIPTIONS={
  'game-hero':'Forge Warden character direction by Lesly, focused on a compact silhouette, asymmetrical armor, readable costume construction, and a long smithing hammer.',
  'character-environment':'Frostline Ranger staging direction by Lesly, using a restrained stone base, scale cues, camera coverage, and cool studio lighting to keep the character dominant.',
  'interior-props':'Ornate interior prop study by Lesly, organizing carved wood, chests, ceramics, books, textiles, and brass through scale, material contrast, and set-dressing rhythm.',
  'ai-visual-pipeline':'Tideglass Courier character direction by Lesly, developing a lean silhouette, asymmetric outerwear, navigation staff, maritime palette, and focused review views.',
  'santa-cruz-ai-visual-pipeline':'A fictional coastal-residence visual study by Lesly, comparing massing, material hierarchy, rocky context, daylight, and blue-hour presentation.',
  'construction-client-progress-workflow':'A fictional Northlight Workshop spatial study by Lesly, balancing weathered brick with pale timber, black steel, clerestory glazing, and exposed services.',
  'print-startup-direction':'Sol collectible direction by Lesly, adapting an existing mascot identity through silhouette, base footprint, staff placement, cape, tail, and contact views.',
  'sculpt-to-retopo':'Lyra facial-form study by Lesly, exploring a tapered jaw, straight nose, braided hair mass, profile consistency, expression, and restrained ornament.',
  'avatar-character':'Mira avatar identity direction by Lesly, developing a consistent stylized face, high ponytail, terracotta wrap, dark costume foundation, jewelry, and expressions.',
  'mascot-character':'Sol mascot range direction by Lesly, preserving the fennec silhouette, forehead marks, patterned tail, costume, staff, gestures, and expressive character moments.',
  'outfits-accessories':'Ember Duelist costume direction by Lesly, balancing courtly tailoring, agile movement, layered plum and ivory cloth, asymmetric protection, and a swept-hilt rapier.',
  'pbr-texturing':'Marsh Warden material direction by Lesly, separating skin, hair, linen, teal cloth, leather, oxidized bronze, carved wood, amber glass, and dry stone.',
  'original-site-concept':'Fantasy Warrior character direction by Lesly, developing an angular face, high ponytail, terracotta scarf, layered charcoal costume, bronze ornament, and grounded stance.'
};

CASE_STUDIES.forEach(study=>{
  const presentation=PUBLIC_PRESENTATION[study.id];
  const publicCopy=PUBLIC_COPY[study.id];
  if(!presentation||!publicCopy)return;
  Object.assign(study,publicCopy,{
    seoDescription:SEO_DESCRIPTIONS[study.id],
    hero:presentation.hero,
    image:presentation.hero?.src||'',
    alt:presentation.hero?.alt||'',
    gallery:presentation.gallery.filter(media=>media.src!==presentation.hero?.src)
  });
});

const fallbackStudy=CASE_STUDIES[0];
const params=new URLSearchParams(window.location.search);
const selectedId=document.body.dataset.caseId||params.get('id')||'game-hero';
const selectedStudy=CASE_STUDIES.find(item=>item.id===selectedId);
const currentStudy=selectedStudy||fallbackStudy;
const SEO_SITE_ORIGIN='https://leslyyankauskas.com';
const PUBLIC_ASSET_VERSION='__PUBLIC_ASSET_VERSION__';

function caseStudyHref(id){
  return document.body.hasAttribute?.('data-static-case')
    ?`work/${encodeURIComponent(id)}/`
    :`case-study.html?id=${encodeURIComponent(id)}`;
}

function caseStudyCanonicalUrl(id){
  return `${SEO_SITE_ORIGIN}/work/${encodeURIComponent(id)}/`;
}

function versionedAssetUrl(value){
  if(!value||!value.startsWith('assets/'))return value;
  const separator=value.includes('?')?'&':'?';
  return `${value}${separator}v=${PUBLIC_ASSET_VERSION}`;
}

function setMetaContent(selector,value){
  const node=document.querySelector(selector);
  if(node)node.setAttribute('content',value);
}

function conciseSeoDescription(value,maxLength=180){
  const normalized=(value||'').replace(/\s+/g,' ').trim();
  if(normalized.length<=maxLength)return normalized;
  const shortened=normalized.slice(0,maxLength-1);
  const lastSpace=shortened.lastIndexOf(' ');
  return `${shortened.slice(0,lastSpace>120?lastSpace:maxLength-1).replace(/[,:;\s]+$/,'')}…`;
}

function renderSeo(study,isValidStudy){
  const pageTitle=`${study.title} | Lesly`;
  const description=conciseSeoDescription(study.seoDescription||study.lead);
  const canonicalUrl=caseStudyCanonicalUrl(study.id);
  const imageUrl=new URL(study.hero?.src||study.image||'',`${SEO_SITE_ORIGIN}/`).href;
  const isStaticCase=Boolean(document.body.hasAttribute?.('data-static-case'));

  document.title=pageTitle;
  setMetaContent('[data-seo-description]',description);
  setMetaContent('[data-seo-robots]',isValidStudy&&isStaticCase
    ? 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    : 'noindex, follow');
  setMetaContent('[data-seo-og-title]',pageTitle);
  setMetaContent('[data-seo-og-description]',description);
  setMetaContent('[data-seo-og-url]',canonicalUrl);
  setMetaContent('[data-seo-og-image]',imageUrl);
  setMetaContent('[data-seo-og-image-width]',String(study.hero?.width||''));
  setMetaContent('[data-seo-og-image-height]',String(study.hero?.height||''));
  setMetaContent('[data-seo-og-image-alt]',study.hero?.alt||study.alt||'');
  setMetaContent('[data-seo-twitter-title]',pageTitle);
  setMetaContent('[data-seo-twitter-description]',description);
  setMetaContent('[data-seo-twitter-image]',imageUrl);
  setMetaContent('[data-seo-twitter-image-alt]',study.hero?.alt||study.alt||'');

  let canonical=document.querySelector('link[rel="canonical"]');
  if(!canonical){
    canonical=document.createElement('link');
    canonical.setAttribute('rel','canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href',canonicalUrl);

  let structuredData=document.querySelector('#case-structured-data');
  if(!structuredData){
    structuredData=document.createElement('script');
    structuredData.id='case-structured-data';
    structuredData.type='application/ld+json';
    document.head.appendChild(structuredData);
  }
  structuredData.textContent=JSON.stringify({
    '@context':'https://schema.org',
    '@type':'CreativeWork',
    '@id':`${canonicalUrl}#creativework`,
    name:study.title,
    description,
    url:canonicalUrl,
    image:imageUrl,
    genre:study.kicker||'3D character art',
    inLanguage:'en-US',
    creator:{
      '@type':'Person',
      '@id':`${SEO_SITE_ORIGIN}/#lesly`,
      name:'Lesly',
      jobTitle:'3D Character Artist'
    }
  });
}

function setText(selector,value){
  const node=document.querySelector(selector);
  if(node)node.textContent=value;
}

function renderCards(selector,items){
  const node=document.querySelector(selector);
  if(!node)return;
  node.innerHTML=(items||[]).map(([title,copy])=>`<article><h3>${title}</h3><p>${copy}</p></article>`).join('');
}

function renderFacts(study){
  const facts=document.querySelector('[data-case-facts]');
  if(!facts)return;
  const items=study.facts||[];
  facts.toggleAttribute('hidden',items.length===0);
  facts.innerHTML=items.map(([label,value])=>`<div><dt>${label}</dt><dd>${value}</dd></div>`).join('');
}

function applySectionVisibility(study){
  const defaults={direction:true,problem:true,process:true,media:true,result:Boolean(study.resultSummary),details:true};
  const visibility={...defaults,...(study.visibleSections||{})};
  Object.entries(visibility).forEach(([name,visible])=>{
    document.querySelector(`[data-case-${name}-section]`)?.toggleAttribute('hidden',!visible);
  });
  return visibility;
}

function renderStorySections(study){
  const story=study.storySections||study.narrative||study.story||[];
  const sections=Array.isArray(story)?story:[];
  const renderGroup=(selector,placement)=>{
    const node=document.querySelector(selector);
    if(!node)return;
    const items=sections.filter(section=>
      placement==='after-media'
        ? section.placement==='after-media'
        : section.placement!=='after-media'
    );
    node.toggleAttribute('hidden',items.length===0);
    node.innerHTML=items.map(section=>{
      const paragraphs=Array.isArray(section.paragraphs)
        ? section.paragraphs
        : [section.copy||section.body||''].filter(Boolean);
      return `
      <section class="cs-section case-story-section">
        <div class="container case-story-layout">
          <header class="case-story-heading">
            ${section.label?`<p class="cs-eyebrow">${section.label}</p>`:''}
            <h2>${section.title||''}</h2>
          </header>
          <div class="case-story-copy">
            ${paragraphs.map(paragraph=>`<p>${paragraph}</p>`).join('')}
          </div>
        </div>
      </section>`;
    }).join('');
  };
  renderGroup('[data-case-story-before]','before-media');
  renderGroup('[data-case-story-after]','after-media');
}

function renderGallery(study){
  const node=document.querySelector('[data-case-gallery]');
  if(!node)return;
  const mediaSection=document.querySelector('[data-case-media-section]');
  mediaSection?.toggleAttribute('hidden',study.gallery.length===0);
  node.classList.toggle('is-single',study.gallery.length===1);
  node.innerHTML=study.gallery.map(media=>{
    const aspectClass=`case-media--${media.aspect.replace('/','x')}`;
    const isWide=media.aspect==='16/9';
    const srcset=media.responsive
      ?` srcset="${versionedAssetUrl(media.responsive.small)} 720w, ${versionedAssetUrl(media.responsive.medium)} 1200w, ${versionedAssetUrl(media.src)} ${media.width}w" sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1200px) calc(100vw - 4rem), 900px"`
      :'';
    return `
    <figure class="case-media ${isWide?'is-wide ':''}${aspectClass}">
      <img src="${versionedAssetUrl(media.src)}"${srcset} width="${media.width}" height="${media.height}" alt="${media.alt}" loading="lazy" decoding="async" data-progressive-image>
      <figcaption>${media.caption}</figcaption>
    </figure>`;
  }).join('');
  window.prepareProgressiveImages?.(node);
}

function renderResult(study,isVisible=true){
  const result=study.resultSummary;
  const section=document.querySelector('[data-case-result-section]');
  section?.toggleAttribute('hidden',!result||!isVisible);
  if(!result||!isVisible)return;
  setText('[data-case-result-label]',result.label||'Final presentation');
  setText('[data-case-result-title]',result.title||'Project result.');
  setText('[data-case-result-copy]',result.copy||'');
}

const CASE_VISUAL_FAMILY={
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

const CURATED_RELATED_CASES={
  'game-hero':['original-site-concept','sculpt-to-retopo','pbr-texturing'],
  'original-site-concept':['game-hero','sculpt-to-retopo','pbr-texturing'],
  'pbr-texturing':['outfits-accessories','interior-props','game-hero']
};

function getRelatedCases(study){
  const preferredIds=CURATED_RELATED_CASES[study.id]||[];
  const preferred=preferredIds
    .map(id=>CASE_STUDIES.find(item=>item.id===id))
    .filter(Boolean);
  const ordered=[...preferred,...CASE_STUDIES];
  const seenIds=new Set([study.id]);
  const seenFamilies=new Set([CASE_VISUAL_FAMILY[study.id]||study.id]);
  const seenMedia=new Set(study.hero?.src?[study.hero.src]:[]);
  const related=[];

  ordered.forEach(item=>{
    const family=CASE_VISUAL_FAMILY[item.id]||item.id;
    const media=item.hero?.src||item.image||'';
    if(related.length>=3||seenIds.has(item.id)||seenFamilies.has(family)||seenMedia.has(media))return;
    seenIds.add(item.id);
    seenFamilies.add(family);
    if(media)seenMedia.add(media);
    related.push(item);
  });

  return related;
}

function renderRelated(study){
  const node=document.querySelector('[data-related-cases]');
  if(!node)return;
  node.innerHTML=getRelatedCases(study)
    .map(item=>{
      const relatedScope=item.kicker||'Selected work';
      const relatedLead=item.relatedLead||'Explore the project story and final presentation.';
      const responsiveSrc=item.hero?.src.endsWith('.webp')
        ?item.hero.src.replace(/\.webp$/, '-800.webp')
        :'';
      const responsiveSrcLarge=item.hero?.src.endsWith('.webp')
        ?item.hero.src.replace(/\.webp$/, '-960.webp')
        :'';
      const srcset=responsiveSrc
        ?` srcset="${versionedAssetUrl(responsiveSrc)} 800w, ${versionedAssetUrl(responsiveSrcLarge)} 960w, ${versionedAssetUrl(item.hero.src)} ${item.hero.width}w" sizes="(max-width: 767px) calc(100vw - 2rem), (max-width: 1100px) calc(50vw - 2rem), 360px"`
        :'';
      const thumb=item.hero?`<img src="${versionedAssetUrl(item.hero.src)}"${srcset} width="${item.hero.width}" height="${item.hero.height}" alt="" loading="lazy" decoding="async" data-progressive-image>`:`<span class="thumb-label">${relatedScope}<small>Project story</small></span>`;
      return `
      <a class="work-card" data-related-case="${item.id}" data-visual-family="${CASE_VISUAL_FAMILY[item.id]||item.id}" href="${caseStudyHref(item.id)}">
        <div class="thumb${item.hero?'':' thumb--text'}">${thumb}</div>
        <h3>${item.title}</h3>
        <p class="meta">${relatedScope}</p>
        <p>${relatedLead}</p>
      </a>
    `}).join('');
  window.prepareProgressiveImages?.(node);
}

function renderStudy(study){
  renderSeo(study,Boolean(selectedStudy));
  document.body.dataset.caseId=study.id;
  document.body.classList.toggle('is-polished-case',Boolean(study.facts));
  const hero=document.querySelector('[data-case-hero]');
  if(hero){
    const heroSection=hero.closest('.cs-hero');
    const heroFigure=hero.closest('.cs-hero-bg');
    heroSection?.classList.remove('has-board-hero','has-portrait-hero','has-four-three-hero','is-text-only');
    if(study.hero){
      heroFigure?.removeAttribute('hidden');
      hero.removeAttribute('hidden');
      hero.src=versionedAssetUrl(study.hero.src);
      hero.alt=study.hero.alt;
      hero.width=study.hero.width;
      hero.height=study.hero.height;
      if(study.hero.aspect==='4/5')heroSection?.classList.add('has-portrait-hero');
      if(study.hero.aspect==='4/3')heroSection?.classList.add('has-four-three-hero');
    }else{
      heroFigure?.setAttribute('hidden','');
      heroSection?.classList.add('is-text-only');
      hero.remove();
    }
  }
  const heroCaption=document.querySelector('[data-case-hero-caption]');
  if(heroCaption){
    heroCaption.textContent=study.heroCaption||'';
    heroCaption.toggleAttribute('hidden',!study.heroCaption);
  }
  setText('[data-case-title]',study.title);
  setText('[data-case-kicker]',study.kicker||'Selected work');
  setText('[data-case-lead]',study.lead);
  setText('[data-case-direction-label]',study.directionLabel||'Project direction');
  setText('[data-case-what-title]',study.whatTitle||'Project direction.');
  setText('[data-case-what-copy]',study.whatCopy);
  setText('[data-case-problem-label]',study.problemLabel||'Problem solved');
  setText('[data-case-problem-title]',study.problemTitle||'Problem solved.');
  setText('[data-case-process-label]',study.processLabel||'Process');
  setText('[data-case-process-title]',study.processTitle||'Process structure.');
  setText('[data-case-media-label]',study.mediaLabel||'Selected project media');
  setText('[data-case-media-title]',study.mediaTitle||'Visual direction.');
  setText('[data-case-details-label]',study.detailsLabel||'Visual read');
  setText('[data-case-details-title]',study.detailsTitle||'Visual read.');
  const meta=document.querySelector('[data-case-meta]');
  if(meta)meta.innerHTML=study.meta.map(item=>`<span>${item}</span>`).join('');
  renderFacts(study);
  const visibility=applySectionVisibility(study);
  renderStorySections(study);
  renderGallery(study);
  renderResult(study,visibility.result);
  renderCards('[data-case-problems]',study.problems||[]);
  renderCards('[data-case-process]',study.process||[]);
  renderCards('[data-case-details]',study.details);
  renderRelated(study);
}

renderStudy(currentStudy);
