from pathlib import Path
import math
import os
import random

if os.environ.get("ALLOW_LEGACY_PROCEDURAL_BOARDS") != "1":
    raise SystemExit(
        "Refusing to generate public portfolio images with the legacy "
        "Python/PIL board generator. Use approved source assets or direct "
        "image generation such as Creative Production/imagegen instead. "
        "Set ALLOW_LEGACY_PROCEDURAL_BOARDS=1 only for intentional legacy "
        "asset recovery, never for public image production."
    )

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
OUT_W, OUT_H = 1600, 900

COLORS = {
    "bg": (18, 15, 12),
    "panel": (35, 29, 23),
    "panel2": (50, 42, 33),
    "line": (177, 123, 61),
    "line2": (222, 185, 126),
    "muted": (105, 85, 66),
    "cream": (229, 216, 194),
    "ink": (30, 25, 20),
    "green": (118, 139, 102),
    "blue": (98, 119, 144),
    "red": (140, 72, 56),
}


def load(path):
    return Image.open(ROOT / path).convert("RGB")


def cover(img, size):
    w, h = img.size
    tw, th = size
    scale = max(tw / w, th / h)
    nw, nh = int(w * scale), int(h * scale)
    img = img.resize((nw, nh), Image.Resampling.LANCZOS)
    x = (nw - tw) // 2
    y = (nh - th) // 2
    return img.crop((x, y, x + tw, y + th))


def contain(img, size, bg=COLORS["panel"]):
    w, h = img.size
    tw, th = size
    scale = min(tw / w, th / h)
    nw, nh = int(w * scale), int(h * scale)
    resized = img.resize((nw, nh), Image.Resampling.LANCZOS)
    out = Image.new("RGB", size, bg)
    out.paste(resized, ((tw - nw) // 2, (th - nh) // 2))
    return out


def rounded_mask(size, radius=22):
    mask = Image.new("L", size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle((0, 0, size[0] - 1, size[1] - 1), radius=radius, fill=255)
    return mask


def paste_card(canvas, img, box, radius=20, border=True):
    x, y, w, h = box
    mask = rounded_mask((w, h), radius)
    canvas.paste(img, (x, y), mask)
    d = ImageDraw.Draw(canvas)
    if border:
        d.rounded_rectangle((x, y, x + w, y + h), radius=radius, outline=COLORS["line"], width=2)


def background(anchor=None, light=False):
    if light:
        base = Image.new("RGB", (OUT_W, OUT_H), (224, 212, 190))
        d = ImageDraw.Draw(base, "RGBA")
        for i in range(0, OUT_W, 80):
            d.line((i, 0, i - 320, OUT_H), fill=(95, 72, 47, 24), width=1)
        return base
    if anchor:
        bg = cover(load(anchor), (OUT_W, OUT_H)).filter(ImageFilter.GaussianBlur(26))
        overlay = Image.new("RGBA", (OUT_W, OUT_H), (13, 11, 9, 205))
        bg = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB")
    else:
        bg = Image.new("RGB", (OUT_W, OUT_H), COLORS["bg"])
    d = ImageDraw.Draw(bg, "RGBA")
    for i in range(0, OUT_W, 64):
        alpha = 18 if i % 128 == 0 else 9
        d.line((i, 0, i - 260, OUT_H), fill=(177, 123, 61, alpha), width=1)
    d.rectangle((40, 40, OUT_W - 40, OUT_H - 40), outline=(177, 123, 61, 90), width=2)
    return bg


def blank_bar(draw, x, y, w, h=14, fill=None):
    fill = fill or (217, 183, 126, 160)
    draw.rounded_rectangle((x, y, x + w, y + h), radius=h // 2, fill=fill)


def swatches(draw, x, y, colors, size=44, gap=12):
    for i, c in enumerate(colors):
        xx = x + i * (size + gap)
        draw.rounded_rectangle((xx, y, xx + size, y + size), radius=10, fill=c, outline=(230, 200, 155, 120), width=2)


def wire_panel(size, seed=1, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (41, 35, 30) if not light else (214, 204, 188))
    d = ImageDraw.Draw(bg, "RGBA")
    step = 38
    color = (215, 176, 112, 120) if not light else (103, 78, 49, 130)
    for x in range(-size[1], size[0] + size[1], step):
        d.line((x, 0, x + size[1], size[1]), fill=color, width=1)
        d.line((x, size[1], x + size[1], 0), fill=color, width=1)
    for _ in range(9):
        cx = random.randint(40, size[0] - 40)
        cy = random.randint(40, size[1] - 40)
        r = random.randint(22, 62)
        d.ellipse((cx - r, cy - r, cx + r, cy + r), outline=color, width=2)
    return bg


def uv_panel(size, seed=2, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (38, 32, 27) if not light else (218, 208, 190))
    d = ImageDraw.Draw(bg, "RGBA")
    color = (216, 182, 123, 140) if not light else (91, 69, 48, 150)
    for _ in range(14):
        x = random.randint(18, size[0] - 90)
        y = random.randint(18, size[1] - 70)
        w = random.randint(42, 120)
        h = random.randint(26, 92)
        d.rounded_rectangle((x, y, min(x + w, size[0] - 16), min(y + h, size[1] - 16)), radius=12, outline=color, width=2)
    return bg


def icon_panel(size, seed=3, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (42, 35, 28) if not light else (221, 211, 192))
    d = ImageDraw.Draw(bg, "RGBA")
    color = (220, 182, 115, 155) if not light else (92, 69, 45, 150)
    x0, y0 = 28, 32
    for row in range(2):
        for col in range(4):
            x = x0 + col * 82
            y = y0 + row * 82
            if col % 3 == 0:
                d.rounded_rectangle((x, y, x + 46, y + 46), radius=10, outline=color, width=3)
            elif col % 3 == 1:
                d.ellipse((x, y, x + 48, y + 48), outline=color, width=3)
            else:
                d.polygon([(x + 24, y), (x + 49, y + 46), (x, y + 46)], outline=color)
            blank_bar(d, x - 2, y + 58, 52, 8, fill=color)
    return bg


def material_grid(size, seed=4, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (42, 35, 28) if not light else (218, 207, 189))
    d = ImageDraw.Draw(bg, "RGBA")
    palette = [
        (98, 54, 42), (146, 98, 52), (192, 147, 80), (58, 44, 35),
        (118, 108, 90), (213, 190, 151), (73, 91, 78), (104, 39, 34),
    ]
    cols = 4
    pad = 18
    cell_w = (size[0] - pad * (cols + 1)) // cols
    cell_h = (size[1] - pad * 3) // 2
    for i, c in enumerate(palette):
        col = i % cols
        row = i // cols
        x = pad + col * (cell_w + pad)
        y = pad + row * (cell_h + pad)
        d.rounded_rectangle((x, y, x + cell_w, y + cell_h), radius=14, fill=c, outline=(225, 192, 137, 120), width=2)
        for k in range(7):
            yy = y + 12 + k * max(8, cell_h // 9)
            d.line((x + 10, yy, x + cell_w - 10, yy + random.randint(-4, 4)), fill=(255, 255, 255, 24), width=2)
    return bg


def add_label_strips(canvas, boxes, light=False):
    d = ImageDraw.Draw(canvas, "RGBA")
    fill = (112, 82, 45, 130) if light else (222, 185, 126, 120)
    for x, y, w in boxes:
        blank_bar(d, x, y, w, 12, fill=fill)
        blank_bar(d, x, y + 24, int(w * 0.62), 8, fill=fill)


def full_render_board(out, anchor, accents, seed):
    canvas = background(anchor)
    d = ImageDraw.Draw(canvas, "RGBA")
    hero = contain(load(anchor), (690, 760), (24, 20, 17))
    paste_card(canvas, hero, (70, 80, 690, 760), 26)
    panels = [
        (810, 80, 260, 230, wire_panel((260, 230), seed)),
        (1100, 80, 260, 230, uv_panel((260, 230), seed + 1)),
        (810, 345, 550, 250, material_grid((550, 250), seed + 2)),
        (810, 630, 550, 210, icon_panel((550, 210), seed + 3)),
    ]
    for x, y, w, h, img in panels:
        paste_card(canvas, img, (x, y, w, h), 20)
    swatches(d, 840, 370, accents, 38)
    add_label_strips(canvas, [(840, 110, 155), (1130, 110, 145), (840, 650, 230)])
    save(canvas, out)


def progression_board(out, anchor, seed, light=False):
    canvas = background(anchor, light=light)
    d = ImageDraw.Draw(canvas, "RGBA")
    source = load(anchor)
    boxes = [(70, 90, 330, 250), (430, 90, 330, 250), (790, 90, 330, 250), (1150, 90, 330, 250)]
    for i, box in enumerate(boxes):
        x, y, w, h = box
        img = contain(source if i == 3 else source.filter(ImageFilter.GaussianBlur(max(0, 6 - i * 2))), (w, h), (43, 36, 29) if not light else (216, 205, 185))
        if i == 0:
            img = wire_panel((w, h), seed + i, light)
        elif i == 1:
            img = contain(source.convert("L").convert("RGB"), (w, h), (45, 39, 34) if not light else (217, 207, 190))
        paste_card(canvas, img, box, 22)
    for x in [400, 760, 1120]:
        d.line((x + 18, 215, x + 62, 215), fill=(177, 123, 61, 180), width=4)
        d.polygon([(x + 62, 215), (x + 48, 205), (x + 48, 225)], fill=(177, 123, 61, 180))
    lower = [(110, 430, 250, 190, material_grid((250, 190), seed + 4, light)),
             (405, 430, 250, 190, wire_panel((250, 190), seed + 5, light)),
             (700, 430, 250, 190, uv_panel((250, 190), seed + 6, light)),
             (995, 430, 250, 190, icon_panel((250, 190), seed + 7, light)),
             (1290, 430, 250, 190, material_grid((250, 190), seed + 8, light))]
    for x, y, w, h, img in lower:
        paste_card(canvas, img, (x, y, w, h), 18)
    paste_card(canvas, contain(source, (720, 215), (34, 28, 23) if not light else (217, 207, 190)), (440, 675, 720, 215), 22)
    add_label_strips(canvas, [(90, 360, 210), (450, 360, 210), (810, 360, 210), (1170, 360, 210)], light)
    save(canvas, out)


def multi_panel_board(out, anchors, seed, light=False):
    canvas = background(anchors[0] if anchors else None, light=light)
    d = ImageDraw.Draw(canvas, "RGBA")
    imgs = [load(a) for a in anchors]
    slots = [(70, 80, 690, 490), (810, 80, 260, 230), (1100, 80, 260, 230), (810, 345, 260, 230), (1100, 345, 260, 230)]
    for i, box in enumerate(slots):
        if i < len(imgs):
            img = cover(imgs[i], (box[2], box[3]))
        else:
            fn = [wire_panel, uv_panel, material_grid, icon_panel][i % 4]
            img = fn((box[2], box[3]), seed + i, light)
        paste_card(canvas, img, box, 22)
    bottom = [(70, 625, 330, 230, wire_panel((330, 230), seed + 10, light)),
              (430, 625, 330, 230, uv_panel((330, 230), seed + 11, light)),
              (790, 625, 330, 230, material_grid((330, 230), seed + 12, light)),
              (1150, 625, 330, 230, icon_panel((330, 230), seed + 13, light))]
    for x, y, w, h, img in bottom:
        paste_card(canvas, img, (x, y, w, h), 20)
    add_label_strips(canvas, [(95, 600, 230), (830, 600, 175), (1130, 600, 170)], light)
    save(canvas, out)


def workflow_board(out, seed, construction=False):
    light = construction
    canvas = background(light=light)
    d = ImageDraw.Draw(canvas, "RGBA")
    ink = (50, 38, 26, 180) if light else (220, 185, 124, 170)
    panel_fill = (235, 226, 207) if light else COLORS["panel"]
    columns = [(70, 90, 390, 690), (535, 90, 500, 690), (1110, 90, 420, 690)]
    for ci, (x, y, w, h) in enumerate(columns):
        d.rounded_rectangle((x, y, x + w, y + h), radius=24, fill=panel_fill, outline=(177, 123, 61, 130), width=2)
        for r in range(4 if ci != 1 else 5):
            tx = x + 36 + (r % 2) * 145
            ty = y + 48 + r * 112
            tw = 112 if ci != 1 else 155
            th = 76
            color = [(118, 94, 65), (154, 118, 72), (87, 103, 91), (117, 92, 108), (137, 72, 58)][(r + seed + ci) % 5]
            d.rounded_rectangle((tx, ty, tx + tw, ty + th), radius=16, fill=color + (190,) if len(color) == 3 else color, outline=ink, width=2)
            if r % 3 == 0:
                d.ellipse((tx + 12, ty + 12, tx + 48, ty + 48), outline=ink, width=3)
            elif r % 3 == 1:
                d.rectangle((tx + 14, ty + 16, tx + 56, ty + 50), outline=ink, width=3)
            else:
                d.polygon([(tx + 30, ty + 10), (tx + 58, ty + 50), (tx + 6, ty + 50)], outline=ink)
            blank_bar(d, tx + 70, ty + 18, min(58, tw - 82), 8, fill=ink)
            blank_bar(d, tx + 70, ty + 36, min(42, tw - 82), 7, fill=ink)
    for x in [475, 1050]:
        d.line((x, 420, x + 75, 420), fill=ink, width=5)
        d.polygon([(x + 75, 420), (x + 56, 407), (x + 56, 433)], fill=ink)
    swatches(d, 116, 700, [(84, 70, 55), (142, 103, 66), (202, 184, 150), (88, 108, 93), (130, 78, 61)], 42)
    add_label_strips(canvas, [(105, 805, 235), (570, 805, 280), (1150, 805, 260)], light)
    save(canvas, out)


def textured_tile(size, palette, seed=1):
    random.seed(seed)
    bg = Image.new("RGB", size, palette[0])
    d = ImageDraw.Draw(bg, "RGBA")
    for _ in range(90):
        x = random.randint(0, size[0])
        y = random.randint(0, size[1])
        c = random.choice(palette)
        alpha = random.randint(20, 80)
        d.line((x - 80, y, x + 80, y + random.randint(-18, 18)), fill=c + (alpha,), width=random.randint(1, 3))
    if size[0] > 42 and size[1] > 42:
        for _ in range(18):
            x = random.randint(8, max(9, size[0] - 28))
            y = random.randint(8, max(9, size[1] - 28))
            r = random.randint(6, min(28, max(8, size[0] // 3, size[1] // 3)))
            d.ellipse((x, y, x + r, y + r), outline=random.choice(palette) + (80,), width=2)
    return bg


def review_matrix_card(size, palette, seed=1, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (39, 32, 26) if not light else (224, 214, 194))
    d = ImageDraw.Draw(bg, "RGBA")
    line = (224, 186, 124, 155) if not light else (96, 72, 45, 150)
    muted = (224, 186, 124, 72) if not light else (96, 72, 45, 64)
    pad = max(18, size[0] // 14)
    row_h = (size[1] - pad * 2) // 4
    for i in range(4):
        y = pad + i * row_h
        color = palette[i % len(palette)]
        d.rounded_rectangle((pad, y + 4, pad + 28, y + 32), radius=8, fill=color, outline=line, width=1)
        d.line((pad + 48, y + 16, size[0] - pad - 42, y + 16), fill=muted, width=8)
        d.line((pad + 48, y + 32, size[0] - pad - 88, y + 32), fill=muted, width=5)
        cx = size[0] - pad - 18
        cy = y + 20
        d.ellipse((cx - 12, cy - 12, cx + 12, cy + 12), outline=line, width=2)
        d.line((cx - 6, cy, cx - 1, cy + 6), fill=line, width=2)
        d.line((cx - 1, cy + 6, cx + 8, cy - 7), fill=line, width=2)
    return bg


def material_strip_card(size, palette, seed=1, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (40, 33, 27) if not light else (222, 212, 193))
    d = ImageDraw.Draw(bg, "RGBA")
    line = (224, 186, 124, 135) if not light else (96, 72, 45, 145)
    pad = max(16, size[0] // 16)
    cols = 5
    gap = max(8, size[0] // 34)
    cell = (size[0] - pad * 2 - gap * (cols - 1)) // cols
    for i in range(cols):
        x = pad + i * (cell + gap)
        tile = textured_tile((cell, size[1] - pad * 2 - 32), palette, seed + i)
        paste_card(bg, tile, (x, pad, cell, size[1] - pad * 2 - 32), 10, border=False)
        d.rounded_rectangle((x, pad, x + cell, size[1] - pad - 32), radius=10, outline=line, width=2)
        blank_bar(d, x, size[1] - pad - 18, int(cell * random.uniform(.55, .95)), 6, fill=line)
    return bg


def handoff_packet_card(size, palette, seed=1, light=False):
    random.seed(seed)
    bg = Image.new("RGB", size, (38, 31, 25) if not light else (226, 216, 197))
    d = ImageDraw.Draw(bg, "RGBA")
    line = (224, 186, 124, 145) if not light else (96, 72, 45, 145)
    muted = (224, 186, 124, 70) if not light else (96, 72, 45, 64)
    x0 = max(20, size[0] // 12)
    y0 = max(16, size[1] // 10)
    for i in range(3):
        x = x0 + i * int(size[0] * .16)
        y = y0 + i * int(size[1] * .07)
        w = int(size[0] * .34)
        h = int(size[1] * .5)
        d.rounded_rectangle((x, y, x + w, y + h), radius=12, fill=palette[(i + seed) % len(palette)] + (74,), outline=line, width=2)
        blank_bar(d, x + 14, y + 20, int(w * .62), 7, fill=muted)
        blank_bar(d, x + 14, y + 38, int(w * .42), 5, fill=muted)
    for i in range(3):
        y = int(size[1] * .66) + i * 22
        blank_bar(d, int(size[0] * .52), y, int(size[0] * (.34 - i * .05)), 7, fill=line)
    return bg


def refined_pipeline_board(out, anchor_paths, seed=1, construction=False, review=False):
    light = construction
    canvas = background(anchor_paths[0] if anchor_paths else None, light=light)
    d = ImageDraw.Draw(canvas, "RGBA")
    ink = (55, 40, 27, 185) if light else (224, 186, 124, 170)
    panel_fill = (236, 227, 209) if light else (33, 27, 22)
    texture_palettes = [
        [(88, 72, 55), (128, 93, 61), (200, 176, 136), (72, 88, 76)],
        [(143, 131, 109), (210, 199, 178), (94, 91, 83), (155, 116, 78)],
        [(103, 74, 51), (177, 134, 80), (217, 197, 155), (83, 101, 88)],
    ]

    left = (70, 85, 420, 710)
    mid = (535, 85, 500, 710)
    right = (1080, 85, 450, 710)
    for box in [left, mid, right]:
        x, y, w, h = box
        d.rounded_rectangle((x, y, x + w, y + h), radius=24, fill=panel_fill, outline=(177, 123, 61, 125), width=2)

    # Left: real visual/reference anchor plus swatches.
    if anchor_paths:
        hero = cover(load(anchor_paths[0]), (360, 270))
        paste_card(canvas, hero, (100, 125, 360, 270), 18)
    for i in range(3):
        tile = textured_tile((106, 82), texture_palettes[i % len(texture_palettes)], seed + i)
        paste_card(canvas, tile, (105 + i * 120, 430, 106, 82), 12)
    swatches(d, 110, 560, [(89, 69, 48), (151, 109, 61), (211, 194, 159), (82, 101, 86), (126, 72, 58)], 36)
    add_label_strips(canvas, [(110, 630, 250), (110, 678, 185)], light)

    # Middle: selected direction and review path.
    if len(anchor_paths) > 1:
        main = cover(load(anchor_paths[1]), (410, 245))
    else:
        main = textured_tile((410, 245), texture_palettes[1], seed + 20)
    paste_card(canvas, main, (580, 120, 410, 245), 18)
    middle_cards = [
        cover(load(anchor_paths[2]), (190, 120)) if len(anchor_paths) > 2 else material_strip_card((190, 120), texture_palettes[0], seed + 30, light),
        review_matrix_card((190, 120), texture_palettes[1], seed + 31, light),
        material_strip_card((190, 120), texture_palettes[2], seed + 32, light),
        handoff_packet_card((190, 120), texture_palettes[0], seed + 33, light),
    ]
    for i, panel in enumerate(middle_cards):
        x = 585 + (i % 2) * 220
        y = 405 + (i // 2) * 150
        paste_card(canvas, panel, (x, y, 190, 120), 14)
    d.line((500, 440, 545, 440), fill=ink, width=5)
    d.polygon([(545, 440), (527, 428), (527, 452)], fill=ink)
    d.line((1035, 440, 1070, 440), fill=ink, width=5)
    d.polygon([(1070, 440), (1052, 428), (1052, 452)], fill=ink)

    # Right: handoff/review board with varied evidence cards.
    for i in range(6):
        x = 1120 + (i % 2) * 195
        y = 125 + (i // 2) * 170
        w, h = 160, 118
        if i == 0 and len(anchor_paths) > 2:
            card = cover(load(anchor_paths[2]), (w, h))
        elif i % 3 == 0:
            card = material_strip_card((w, h), texture_palettes[i % len(texture_palettes)], seed + 45 + i, light)
        elif i % 3 == 1:
            card = review_matrix_card((w, h), texture_palettes[i % len(texture_palettes)], seed + 45 + i, light)
        else:
            card = handoff_packet_card((w, h), texture_palettes[i % len(texture_palettes)], seed + 45 + i, light)
        paste_card(canvas, card, (x, y, w, h), 14)
    add_label_strips(canvas, [(1125, 655, 250), (1125, 704, 185)], light)
    save(canvas, out)


def refined_construction_board(out, seed=1):
    canvas = background(light=True)
    d = ImageDraw.Draw(canvas, "RGBA")
    ink = (56, 42, 28, 175)
    panel_fill = (237, 228, 209)
    cols = [(70, 85, 400, 710), (520, 85, 520, 710), (1090, 85, 460, 710)]
    for x, y, w, h in cols:
        d.rounded_rectangle((x, y, x + w, y + h), radius=24, fill=panel_fill, outline=(177, 123, 61, 130), width=2)

    construction_palettes = [
        [(187, 173, 148), (130, 122, 104), (220, 213, 195), (101, 94, 83)],
        [(118, 89, 61), (174, 132, 84), (218, 190, 147), (88, 105, 91)],
        [(92, 111, 117), (203, 211, 205), (69, 83, 90), (164, 140, 105)],
    ]
    # Jobsite/photo evidence placeholders with material textures.
    for i in range(4):
        tile = textured_tile((160, 110), construction_palettes[i % 3], seed + i)
        paste_card(canvas, tile, (105 + (i % 2) * 185, 125 + (i // 2) * 165, 160, 110), 14)
        blank_bar(d, 110 + (i % 2) * 185, 250 + (i // 2) * 165, 100, 8, fill=ink)
    swatches(d, 110, 500, [(83, 72, 55), (145, 111, 71), (211, 199, 170), (90, 111, 98), (135, 82, 63)], 42)
    add_label_strips(canvas, [(110, 610, 225), (110, 662, 170)], True)

    for i in range(6):
        x = 565 + (i % 3) * 155
        y = 125 + (i // 3) * 245
        tile = textured_tile((125, 125), construction_palettes[(i + 1) % 3], seed + 20 + i)
        paste_card(canvas, tile, (x, y, 125, 125), 14)
        marker = [(86, 105, 92), (150, 105, 67), (139, 82, 68), (105, 91, 114)][i % 4]
        d.rounded_rectangle((x + 78, y + 90, x + 116, y + 116), radius=10, fill=marker + (185,), outline=ink, width=2)
        blank_bar(d, x, y + 145, 105, 8, fill=ink)
        blank_bar(d, x, y + 165, 75, 7, fill=ink)

    for i in range(5):
        x = 1130 + (i % 2) * 190
        y = 130 + (i // 2) * 155
        d.rounded_rectangle((x, y, x + 155, y + 95), radius=16, fill=[(150, 113, 73), (91, 113, 100), (135, 83, 68), (111, 98, 122), (104, 89, 70)][i] + (185,), outline=ink, width=2)
        if i % 2:
            d.ellipse((x + 18, y + 22, x + 55, y + 59), outline=ink, width=3)
        else:
            d.rectangle((x + 18, y + 24, x + 58, y + 58), outline=ink, width=3)
        blank_bar(d, x + 74, y + 25, 55, 8, fill=ink)
        blank_bar(d, x + 74, y + 45, 38, 7, fill=ink)
    add_label_strips(canvas, [(1130, 620, 245), (1130, 672, 185)], True)

    d.line((480, 435, 515, 435), fill=ink, width=5)
    d.polygon([(515, 435), (497, 423), (497, 447)], fill=ink)
    d.line((1040, 435, 1085, 435), fill=ink, width=5)
    d.polygon([(1085, 435), (1067, 423), (1067, 447)], fill=ink)
    save(canvas, out)


def save(img, out):
    path = ROOT / out
    path.parent.mkdir(parents=True, exist_ok=True)
    img.save(path, "WEBP", quality=88, method=6)


def main():
    warrior = "assets/portfolio/work-game-ready-character.webp"
    stage = "assets/process/character-environment/final-renders.webp"
    props = "assets/portfolio/work-interior-props.webp"
    mascot = "assets/portfolio/work-mascot-character.webp"
    sculpt = "assets/portfolio/work-sculpt-retopo.webp"
    avatar = "assets/portfolio/work-avatar-character.webp"
    outfit = "assets/portfolio/work-outfits-accessories.webp"
    concept = "assets/portfolio/work-concept-to-3d.webp"

    full_render_board("assets/process/game-hero/hero.webp", warrior, [(126, 42, 35), (181, 116, 52), (216, 189, 151), (63, 50, 44), (45, 38, 33)], 1)
    full_render_board("assets/process/game-hero/technical-proof.webp", warrior, [(126, 42, 35), (181, 116, 52), (216, 189, 151), (63, 50, 44), (45, 38, 33)], 2)
    multi_panel_board("assets/process/game-hero/final-renders.webp", [warrior, "assets/process/game-hero/face-read.webp", "assets/process/game-hero/costume-material.webp", "assets/process/game-hero/weapon-silhouette.webp"], 3)
    full_render_board("assets/process/game-hero/deliverables.webp", warrior, [(126, 42, 35), (181, 116, 52), (216, 189, 151), (63, 50, 44), (45, 38, 33)], 4)

    progression_board("assets/process/character-environment/blockout.webp", stage, 10)
    multi_panel_board("assets/process/character-environment/lighting-breakdown.webp", [stage, "assets/process/character-environment/hero-stage.webp", "assets/process/character-environment/stage-grounding.webp"], 11)
    multi_panel_board("assets/process/character-environment/prop-assets.webp", [stage, "assets/process/character-environment/stage-grounding.webp"], 12)
    full_render_board("assets/process/character-environment/scene-handoff.webp", stage, [(94, 79, 67), (145, 97, 55), (211, 185, 136), (88, 71, 58), (41, 35, 30)], 13)

    multi_panel_board("assets/process/interior-props/asset-handoff.webp", [props, "assets/process/interior-props/shelf-hero.webp", "assets/process/interior-props/material-study.webp", "assets/process/interior-props/glass-metal.webp"], 20)
    multi_panel_board("assets/process/interior-props/prop-breakdown.webp", [props, "assets/process/interior-props/material-closeups.webp", "assets/process/interior-props/two-d-to-three-d.webp"], 21)
    full_render_board("assets/process/interior-props/technical-proof.webp", props, [(60, 38, 25), (126, 82, 45), (194, 144, 78), (184, 179, 154), (76, 91, 73)], 22)

    refined_pipeline_board("assets/process/ai-visual-pipeline/workflow-board.webp", [props, "assets/process/interior-props/material-study.webp", "assets/process/interior-props/material-closeups.webp"], 30)
    refined_pipeline_board("assets/process/ai-visual-pipeline/review-criteria.webp", [props, "assets/process/interior-props/glass-metal.webp", "assets/process/interior-props/two-d-to-three-d.webp"], 31, review=True)
    refined_pipeline_board("assets/process/ai-visual-pipeline/material-library.webp", [props, "assets/process/interior-props/material-study.webp", "assets/process/interior-props/material-closeups.webp"], 32)
    refined_pipeline_board("assets/process/ai-visual-pipeline/handoff-system.webp", [props, "assets/process/interior-props/presentation-board.webp", "assets/process/interior-props/technical-proof.webp"], 33)

    refined_construction_board("assets/process/santa-cruz-ai-visual-pipeline/workflow-board.webp", 40)
    refined_construction_board("assets/process/santa-cruz-ai-visual-pipeline/material-standards.webp", 41)
    refined_construction_board("assets/process/santa-cruz-ai-visual-pipeline/developer-handoff.webp", 42)

    refined_construction_board("assets/process/construction-client-progress-workflow/progress-review-board.webp", 50)
    refined_construction_board("assets/process/construction-client-progress-workflow/agentic-summary-flow.webp", 51)
    refined_construction_board("assets/process/construction-client-progress-workflow/client-handoff.webp", 52)

    progression_board("assets/process/print-startup-direction/printability-board.webp", mascot, 60)
    multi_panel_board("assets/process/print-startup-direction/character-family-system.webp", [mascot, "assets/process/mascot-character/pose-panels.webp", "assets/process/mascot-character/material-palette.webp"], 61)
    full_render_board("assets/process/print-startup-direction/handoff-package.webp", mascot, [(226, 201, 166), (219, 113, 54), (116, 64, 45), (74, 54, 39), (166, 122, 62)], 62)

    progression_board("assets/process/sculpt-to-retopo/sculpt-model.webp", sculpt, 70)
    full_render_board("assets/process/sculpt-to-retopo/technical-proof.webp", sculpt, [(141, 126, 112), (207, 180, 137), (100, 72, 56), (68, 62, 59), (44, 39, 35)], 71)
    multi_panel_board("assets/process/sculpt-to-retopo/final-renders.webp", [sculpt, "assets/process/sculpt-to-retopo/sculpt-face.webp", "assets/process/sculpt-to-retopo/retopo-panel.webp", "assets/process/sculpt-to-retopo/turnaround-strip.webp"], 72)

    full_render_board("assets/process/avatar-character/hero.webp", avatar, [(38, 30, 28), (128, 39, 36), (224, 169, 74), (235, 207, 174), (79, 48, 44)], 80)
    multi_panel_board("assets/process/avatar-character/expression-sheet.webp", [avatar, "assets/process/avatar-character/portrait-read.webp", "assets/process/avatar-character/expression-panels.webp", "assets/process/avatar-character/hair-costume.webp"], 81)
    full_render_board("assets/process/avatar-character/technical-proof.webp", avatar, [(38, 30, 28), (128, 39, 36), (224, 169, 74), (235, 207, 174), (79, 48, 44)], 82)
    full_render_board("assets/process/avatar-character/deliverables.webp", avatar, [(38, 30, 28), (128, 39, 36), (224, 169, 74), (235, 207, 174), (79, 48, 44)], 83)

    full_render_board("assets/process/mascot-character/hero.webp", mascot, [(226, 201, 166), (219, 113, 54), (116, 64, 45), (74, 54, 39), (166, 122, 62)], 90)
    multi_panel_board("assets/process/mascot-character/pose-expression-set.webp", [mascot, "assets/process/mascot-character/appeal-read.webp", "assets/process/mascot-character/pose-panels.webp", "assets/process/mascot-character/material-palette.webp"], 91)
    full_render_board("assets/process/mascot-character/technical-proof.webp", mascot, [(226, 201, 166), (219, 113, 54), (116, 64, 45), (74, 54, 39), (166, 122, 62)], 92)
    full_render_board("assets/process/mascot-character/deliverables.webp", mascot, [(226, 201, 166), (219, 113, 54), (116, 64, 45), (74, 54, 39), (166, 122, 62)], 93)

    full_render_board("assets/process/outfits-accessories/hero.webp", outfit, [(135, 36, 32), (214, 188, 143), (82, 52, 37), (174, 121, 55), (45, 38, 31)], 100)
    multi_panel_board("assets/process/outfits-accessories/material-closeups.webp", [outfit, "assets/process/outfits-accessories/front-back-silhouette.webp", "assets/process/outfits-accessories/trim-materials.webp", "assets/process/outfits-accessories/prop-accessories.webp"], 101)
    full_render_board("assets/process/outfits-accessories/technical-proof.webp", outfit, [(135, 36, 32), (214, 188, 143), (82, 52, 37), (174, 121, 55), (45, 38, 31)], 102)
    full_render_board("assets/process/outfits-accessories/deliverables.webp", outfit, [(135, 36, 32), (214, 188, 143), (82, 52, 37), (174, 121, 55), (45, 38, 31)], 103)

    progression_board("assets/process/concept-to-character/starting-point.webp", concept, 110)
    progression_board("assets/process/concept-to-character/sculpt-model.webp", concept, 111)
    full_render_board("assets/process/concept-to-character/technical-proof.webp", concept, [(128, 37, 31), (212, 176, 116), (239, 216, 181), (66, 50, 39), (164, 116, 62)], 112)
    multi_panel_board("assets/process/concept-to-character/final-renders.webp", [concept, "assets/process/pbr-texturing/starting-sketch.webp", "assets/process/pbr-texturing/design-progression.webp", "assets/process/pbr-texturing/final-character-read.webp"], 113)
    full_render_board("assets/process/concept-to-character/deliverables.webp", concept, [(128, 37, 31), (212, 176, 116), (239, 216, 181), (66, 50, 39), (164, 116, 62)], 114)


if __name__ == "__main__":
    main()
