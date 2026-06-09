from pathlib import Path
import re

root = Path(__file__).resolve().parents[1]
required = [
    'site/index.html',
    'docs/02_TECHNICAL_ANALYSIS_BAR_WINDOW.md',
    'docs/14_CLIENT_MATERIAL_INTAKE_AUDIT.md',
    'site/alignment-questionnaire.html',
    'assets/source_docs/25_1022_S_Ranch_Bar_Window_Details.pdf',
    'assets/client_updates/2026-06-09/updated_2d_sketch_2026-06-09.png',
    'assets/client_updates/2026-06-09/luxury_bar_closed_front.png',
    'assets/client_updates/2026-06-09/luxury_bar_closed_angled.png',
    'assets/client_updates/2026-06-09/luxury_bar_wide_lounge.png',
    'assets/client_updates/2026-06-09/luxury_bar_lifestyle_with_clients.png',
    'assets/video/s_ranch_cinematic_warm_contrast.mp4',
    'assets/video/s_ranch_cinematic_poster.png',
    'assets/client_intake/2026-06-09/rail_hardware_client_notes.jpg',
    'assets/client_intake/2026-06-09/client_msg_colors_lattice.jpg',
    'assets/visuals/accepted/hero_closed_bar_wall_concept.png',
    'assets/visuals/accepted/left_pair_open_shallow_niche_concept.png',
]
missing = [p for p in required if not (root / p).exists()]
if missing:
    print('Missing required files:')
    for p in missing:
        print('-', p)
    raise SystemExit(1)

site_files = [
    root / 'site/index.html',
    root / 'site/client_room_example.html',
    root / 'site/client_proposal.html',
    root / 'site/alignment-questionnaire.html',
]
blocked_patterns = [
    'assets/visuals/rejected_or_caution/',
    'non_photoreal_boards_2026-06-09',
    'invalid_non_photoreal',
]
violations = []
for path in site_files:
    if not path.exists():
        continue
    text = path.read_text(encoding='utf-8')
    for pattern in blocked_patterns:
        if pattern in text:
            violations.append(f'{path.relative_to(root)} references blocked visual asset marker: {pattern}')

send_ready_files = [
    root / 'site/index.html',
    root / 'site/client_room_example.html',
]
old_active_visual_patterns = [
    'assets/visuals/accepted/hero_closed_bar_wall_concept.png',
    'assets/visuals/accepted/left_pair_open_shallow_niche_concept.png',
    'assets/visuals/accepted/right_45_closed_concept.png',
    'assets/visuals/accepted/open_door_corrected_top_from_closed_concept.png',
    'assets/source_images/technical_sheet_highlighted_dimensions_clean.png',
    'assets/source_images/linear_rail_hardware_notes.png',
    'assets/client_intake/2026-06-09/client_msg_',
    'assets/client_intake/2026-06-09/surfcam_',
]
for path in send_ready_files:
    if not path.exists():
        continue
    text = path.read_text(encoding='utf-8')
    for pattern in old_active_visual_patterns:
        if pattern in text:
            violations.append(f'{path.relative_to(root)} still uses old active visual/source reference: {pattern}')

accepted_dir = root / 'assets/visuals/accepted'
if accepted_dir.exists():
    for asset in accepted_dir.iterdir():
        if asset.is_file() and re.search(r'(invalid|non[_-]?photoreal|placeholder|procedural)', asset.name, re.I):
            violations.append(f'accepted asset has blocked/non-final filename: {asset.relative_to(root)}')

if violations:
    print('Blocked visual asset references found:')
    for item in violations:
        print('-', item)
    raise SystemExit(1)

print('OK: required assets present.')
