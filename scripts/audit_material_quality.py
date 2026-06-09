from pathlib import Path
import json
from PIL import Image, ImageDraw, ImageFont


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "reserch" / "material-quality-audit"
OUT.mkdir(parents=True, exist_ok=True)

GROUPS = {
    "portfolio": sorted((ROOT / "assets" / "portfolio").glob("*.*")),
    "case_boards": sorted(p for p in (ROOT / "assets" / "process").glob("*/*") if p.suffix.lower() in {".webp", ".png", ".svg"}),
}

CASE_FOCUS = {
    "director_generated": [
        "assets/process/game-hero/technical-proof.webp",
        "assets/process/character-environment/blockout.webp",
        "assets/process/interior-props/asset-handoff.webp",
        "assets/process/ai-visual-pipeline/workflow-board.webp",
        "assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp",
        "assets/process/construction-client-progress-workflow/progress-review-board.webp",
        "assets/process/print-startup-direction/printability-board.webp",
        "assets/process/sculpt-to-retopo/sculpt-model.webp",
        "assets/process/avatar-character/hero.webp",
        "assets/process/mascot-character/hero.webp",
        "assets/process/outfits-accessories/hero.webp",
        "assets/process/concept-to-character/final-renders.webp",
    ]
}


def load_image(path, size):
    if path.suffix.lower() == ".svg":
        return None
    try:
        img = Image.open(path).convert("RGB")
    except Exception:
        return None
    w, h = img.size
    tw, th = size
    scale = min(tw / w, th / h)
    nw, nh = int(w * scale), int(h * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    tile = Image.new("RGB", size, (24, 21, 18))
    tile.paste(img, ((tw - nw) // 2, (th - nh) // 2))
    return tile


def contact_sheet(name, paths, cols=3, tile=(420, 260)):
    font = ImageFont.load_default()
    label_h = 54
    rows = (len(paths) + cols - 1) // cols
    sheet = Image.new("RGB", (cols * tile[0], rows * (tile[1] + label_h)), (14, 12, 10))
    draw = ImageDraw.Draw(sheet)
    for idx, path in enumerate(paths):
        x = (idx % cols) * tile[0]
        y = (idx // cols) * (tile[1] + label_h)
        img = load_image(path, tile)
        if img:
            sheet.paste(img, (x, y))
        else:
            draw.rectangle((x, y, x + tile[0] - 1, y + tile[1] - 1), fill=(38, 32, 27), outline=(176, 123, 62))
            draw.text((x + 16, y + 110), "SVG / unreadable by sheet", fill=(230, 210, 180), font=font)
        rel = str(path.relative_to(ROOT))
        draw.rectangle((x, y + tile[1], x + tile[0] - 1, y + tile[1] + label_h), fill=(28, 24, 20))
        draw.text((x + 10, y + tile[1] + 8), rel[:64], fill=(230, 210, 180), font=font)
        draw.text((x + 10, y + tile[1] + 28), f"{idx+1:02d}", fill=(180, 125, 65), font=font)
    out = OUT / f"{name}.jpg"
    sheet.save(out, "JPEG", quality=92)
    return out


def metrics(path):
    if path.suffix.lower() == ".svg":
        return {"path": str(path.relative_to(ROOT)), "type": "svg"}
    try:
        with Image.open(path) as img:
            return {
                "path": str(path.relative_to(ROOT)),
                "width": img.width,
                "height": img.height,
                "mode": img.mode,
                "bytes": path.stat().st_size,
            }
    except Exception as exc:
        return {"path": str(path.relative_to(ROOT)), "error": str(exc)}


all_metrics = []
outputs = []
for name, paths in GROUPS.items():
    paths = [p for p in paths if p.suffix.lower() in {".webp", ".png", ".svg"}]
    all_metrics.extend(metrics(p) for p in paths)
    if name == "case_boards":
        for i in range(0, len(paths), 18):
            outputs.append(str(contact_sheet(f"{name}_{i//18+1}", paths[i:i+18]).relative_to(ROOT)))
    else:
        outputs.append(str(contact_sheet(name, paths, cols=3).relative_to(ROOT)))

focus_paths = [ROOT / p for p in CASE_FOCUS["director_generated"]]
outputs.append(str(contact_sheet("director_generated_focus", focus_paths, cols=3).relative_to(ROOT)))

(OUT / "asset-metrics.json").write_text(json.dumps({"sheets": outputs, "assets": all_metrics}, indent=2))
print(json.dumps({"out": str(OUT), "sheets": outputs, "asset_count": len(all_metrics)}, indent=2))
