#!/usr/bin/env python3
"""Generate a production-style interior prop set mesh package.

The output is intentionally simple enough to inspect in plain OBJ form, but it
contains real named mesh objects, material assignments, UV coordinates, and a
technical sheet for the portfolio case study.
"""

from __future__ import annotations

import json
import math
from dataclasses import dataclass, field
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "3d" / "interior-props"
OBJ_PATH = OUT / "interior-props-set.obj"
MTL_PATH = OUT / "interior-props-materials.mtl"
MANIFEST_PATH = OUT / "interior-props-manifest.json"
SVG_PATH = OUT / "interior-props-mesh-sheet.svg"


MATERIALS = {
    "carved_dark_wood": {"kd": (0.28, 0.14, 0.07), "ks": (0.22, 0.16, 0.10), "roughness": 0.62, "metallic": 0.0},
    "aged_brass": {"kd": (0.78, 0.51, 0.19), "ks": (0.85, 0.72, 0.42), "roughness": 0.28, "metallic": 1.0},
    "dark_steel": {"kd": (0.12, 0.12, 0.12), "ks": (0.50, 0.48, 0.44), "roughness": 0.38, "metallic": 1.0},
    "smoky_glass": {"kd": (0.38, 0.52, 0.50), "ks": (0.92, 0.95, 0.90), "roughness": 0.05, "metallic": 0.0, "alpha": 0.38},
    "clear_glass": {"kd": (0.72, 0.86, 0.82), "ks": (1.00, 1.00, 0.95), "roughness": 0.02, "metallic": 0.0, "alpha": 0.25},
    "cream_ceramic": {"kd": (0.78, 0.64, 0.46), "ks": (0.45, 0.36, 0.26), "roughness": 0.32, "metallic": 0.0},
    "green_glaze": {"kd": (0.17, 0.37, 0.29), "ks": (0.52, 0.55, 0.40), "roughness": 0.24, "metallic": 0.0},
    "red_leather": {"kd": (0.49, 0.16, 0.10), "ks": (0.35, 0.18, 0.12), "roughness": 0.54, "metallic": 0.0},
    "dark_leather": {"kd": (0.20, 0.11, 0.07), "ks": (0.22, 0.12, 0.08), "roughness": 0.58, "metallic": 0.0},
    "woven_fabric": {"kd": (0.50, 0.24, 0.16), "ks": (0.12, 0.08, 0.06), "roughness": 0.82, "metallic": 0.0},
    "green_fabric": {"kd": (0.19, 0.32, 0.24), "ks": (0.11, 0.09, 0.06), "roughness": 0.84, "metallic": 0.0},
    "aged_paper": {"kd": (0.70, 0.58, 0.42), "ks": (0.12, 0.10, 0.08), "roughness": 0.92, "metallic": 0.0},
    "candle_wax": {"kd": (0.86, 0.76, 0.58), "ks": (0.18, 0.16, 0.14), "roughness": 0.70, "metallic": 0.0},
    "plant_green": {"kd": (0.10, 0.34, 0.12), "ks": (0.08, 0.12, 0.06), "roughness": 0.68, "metallic": 0.0},
}


@dataclass
class ObjectRecord:
    name: str
    material: str
    kind: str
    center: tuple[float, float, float]
    size: tuple[float, float, float]
    faces: int = 0


@dataclass
class Mesh:
    vertices: list[tuple[float, float, float]] = field(default_factory=list)
    uvs: list[tuple[float, float]] = field(default_factory=list)
    faces: list[tuple[str, str, list[tuple[int, int]]]] = field(default_factory=list)
    objects: list[ObjectRecord] = field(default_factory=list)

    def add_vertex(self, vertex: tuple[float, float, float]) -> int:
        self.vertices.append(vertex)
        return len(self.vertices)

    def add_uv(self, uv: tuple[float, float]) -> int:
        self.uvs.append(uv)
        return len(self.uvs)

    def add_face(self, object_name: str, material: str, verts: list[tuple[float, float, float]], uvs: list[tuple[float, float]] | None = None) -> None:
        if uvs is None:
            uvs = [(0, 0), (1, 0), (1, 1), (0, 1)]
        face = []
        for vertex, uv in zip(verts, uvs):
            face.append((self.add_vertex(vertex), self.add_uv(uv)))
        self.faces.append((object_name, material, face))

    def cuboid(self, name: str, center: tuple[float, float, float], size: tuple[float, float, float], material: str) -> None:
        x, y, z = center
        sx, sy, sz = (v / 2 for v in size)
        p = {
            "lbf": (x - sx, y - sy, z - sz), "rbf": (x + sx, y - sy, z - sz),
            "rtf": (x + sx, y + sy, z - sz), "ltf": (x - sx, y + sy, z - sz),
            "lbb": (x - sx, y - sy, z + sz), "rbb": (x + sx, y - sy, z + sz),
            "rtb": (x + sx, y + sy, z + sz), "ltb": (x - sx, y + sy, z + sz),
        }
        before = len(self.faces)
        self.add_face(name, material, [p["lbf"], p["rbf"], p["rtf"], p["ltf"]])
        self.add_face(name, material, [p["rbb"], p["lbb"], p["ltb"], p["rtb"]])
        self.add_face(name, material, [p["lbb"], p["lbf"], p["ltf"], p["ltb"]])
        self.add_face(name, material, [p["rbf"], p["rbb"], p["rtb"], p["rtf"]])
        self.add_face(name, material, [p["ltf"], p["rtf"], p["rtb"], p["ltb"]])
        self.add_face(name, material, [p["lbb"], p["rbb"], p["rbf"], p["lbf"]])
        self.objects.append(ObjectRecord(name, material, "cuboid", center, size, len(self.faces) - before))

    def cylinder(self, name: str, center: tuple[float, float, float], radius: float, height: float, material: str, segments: int = 24, axis: str = "y") -> None:
        x, y, z = center
        before = len(self.faces)
        rings = []
        for offset in (-height / 2, height / 2):
            ring = []
            for i in range(segments):
                angle = 2 * math.pi * i / segments
                ca, sa = math.cos(angle), math.sin(angle)
                if axis == "y":
                    ring.append((x + radius * ca, y + offset, z + radius * sa))
                else:
                    ring.append((x + offset, y + radius * ca, z + radius * sa))
            rings.append(ring)
        c1 = (x, y - height / 2, z) if axis == "y" else (x - height / 2, y, z)
        c2 = (x, y + height / 2, z) if axis == "y" else (x + height / 2, y, z)
        for i in range(segments):
            j = (i + 1) % segments
            self.add_face(name, material, [rings[0][i], rings[0][j], rings[1][j], rings[1][i]], [(i / segments, 0), (j / segments, 0), (j / segments, 1), (i / segments, 1)])
            self.add_face(name, material, [c1, rings[0][j], rings[0][i]], [(0.5, 0.5), (1, 0), (0, 0)])
            self.add_face(name, material, [c2, rings[1][i], rings[1][j]], [(0.5, 0.5), (0, 1), (1, 1)])
        sx, sy, sz = (radius * 2, height, radius * 2) if axis == "y" else (height, radius * 2, radius * 2)
        self.objects.append(ObjectRecord(name, material, "cylinder", center, (sx, sy, sz), len(self.faces) - before))

    def ellipsoid(self, name: str, center: tuple[float, float, float], radii: tuple[float, float, float], material: str, lat: int = 8, lon: int = 18) -> None:
        x, y, z = center
        rx, ry, rz = radii
        before = len(self.faces)
        grid = []
        for a in range(lat + 1):
            theta = math.pi * a / lat
            row = []
            for b in range(lon):
                phi = 2 * math.pi * b / lon
                row.append((x + rx * math.sin(theta) * math.cos(phi), y + ry * math.cos(theta), z + rz * math.sin(theta) * math.sin(phi)))
            grid.append(row)
        for a in range(lat):
            for b in range(lon):
                c = (b + 1) % lon
                self.add_face(name, material, [grid[a][b], grid[a][c], grid[a + 1][c], grid[a + 1][b]], [(b / lon, a / lat), (c / lon, a / lat), (c / lon, (a + 1) / lat), (b / lon, (a + 1) / lat)])
        self.objects.append(ObjectRecord(name, material, "ellipsoid", center, (rx * 2, ry * 2, rz * 2), len(self.faces) - before))


mesh = Mesh()


def add_box_set(prefix: str, x: float, y: float, z: float, mat: str, sx: float, sy: float, sz: float) -> None:
    mesh.cuboid(f"{prefix}_body", (x, y, z), (sx, sy, sz), mat)
    mesh.cuboid(f"{prefix}_brass_latch", (x, y + sy * 0.05, z - sz / 2 - 0.018), (sx * 0.18, sy * 0.22, 0.035), "aged_brass")
    mesh.cuboid(f"{prefix}_front_label", (x - sx * 0.24, y + sy * 0.02, z - sz / 2 - 0.02), (sx * 0.18, sy * 0.18, 0.025), "aged_paper")
    for ix in (-1, 1):
        for iy in (-1, 1):
            mesh.cuboid(f"{prefix}_corner_{ix}_{iy}", (x + ix * sx * 0.42, y + iy * sy * 0.36, z - sz / 2 - 0.018), (sx * 0.12, sy * 0.12, 0.03), "aged_brass")
    for ix in (-1, 1):
        mesh.cuboid(f"{prefix}_hinge_{ix}", (x + ix * sx * 0.30, y + sy * 0.40, z - sz / 2 - 0.018), (sx * 0.12, sy * 0.05, 0.03), "aged_brass")


def add_bottle(prefix: str, x: float, y: float, z: float, material: str, scale: float = 1.0) -> None:
    mesh.cylinder(f"{prefix}_body", (x, y, z), 0.13 * scale, 0.42 * scale, material, 28)
    mesh.cylinder(f"{prefix}_neck", (x, y + 0.28 * scale, z), 0.055 * scale, 0.22 * scale, material, 24)
    mesh.cylinder(f"{prefix}_lip", (x, y + 0.40 * scale, z), 0.075 * scale, 0.035 * scale, material, 24)
    mesh.ellipsoid(f"{prefix}_stopper", (x, y + 0.46 * scale, z), (0.07 * scale, 0.055 * scale, 0.07 * scale), "clear_glass", 6, 16)
    for i in range(8):
        ang = i * math.pi / 4
        mesh.cuboid(f"{prefix}_fluted_rib_{i:02}", (x + math.cos(ang) * 0.132 * scale, y, z + math.sin(ang) * 0.132 * scale), (0.014 * scale, 0.37 * scale, 0.018 * scale), material)


def add_vase(prefix: str, x: float, y: float, z: float, material: str, scale: float = 1.0) -> None:
    mesh.ellipsoid(f"{prefix}_belly", (x, y, z), (0.18 * scale, 0.28 * scale, 0.18 * scale), material, 10, 24)
    mesh.cylinder(f"{prefix}_neck", (x, y + 0.24 * scale, z), 0.08 * scale, 0.22 * scale, material, 24)
    mesh.cylinder(f"{prefix}_rim", (x, y + 0.37 * scale, z), 0.11 * scale, 0.035 * scale, "aged_brass", 24)
    for band, yy in enumerate((-0.09, 0.03, 0.15)):
        mesh.cylinder(f"{prefix}_painted_band_{band}", (x, y + yy * scale, z), 0.184 * scale, 0.018 * scale, "aged_brass", 24)


def add_books(prefix: str, x: float, y: float, z: float, count: int, vertical: bool = True) -> None:
    for i in range(count):
        mat = ["red_leather", "dark_leather", "green_glaze", "aged_paper"][i % 4]
        if vertical:
            bx = x + i * 0.075
            mesh.cuboid(f"{prefix}_book_{i:02}_cover", (bx, y, z), (0.06, 0.50 + 0.04 * (i % 3), 0.22), mat)
            mesh.cuboid(f"{prefix}_book_{i:02}_pages", (bx, y, z - 0.116), (0.052, 0.42, 0.012), "aged_paper")
            mesh.cuboid(f"{prefix}_book_{i:02}_gold_spine", (bx, y + 0.13, z - 0.125), (0.05, 0.035, 0.012), "aged_brass")
        else:
            by = y + i * 0.055
            mesh.cuboid(f"{prefix}_stack_book_{i:02}", (x, by, z), (0.48, 0.045, 0.25), mat)
            mesh.cuboid(f"{prefix}_stack_pages_{i:02}", (x + 0.005, by, z - 0.132), (0.44, 0.035, 0.012), "aged_paper")


def add_textile_roll(prefix: str, x: float, y: float, z: float, material: str) -> None:
    mesh.cylinder(f"{prefix}_roll", (x, y, z), 0.105, 0.62, material, 24, axis="x")
    for i in range(6):
        mesh.cylinder(f"{prefix}_thread_band_{i:02}", (x - 0.27 + i * 0.105, y, z), 0.109, 0.012, "aged_brass", 24, axis="x")


def add_candle(prefix: str, x: float, y: float, z: float) -> None:
    mesh.cylinder(f"{prefix}_brass_base", (x, y, z), 0.12, 0.08, "aged_brass", 24)
    mesh.cylinder(f"{prefix}_stem", (x, y + 0.18, z), 0.045, 0.28, "aged_brass", 20)
    mesh.cylinder(f"{prefix}_cup", (x, y + 0.35, z), 0.10, 0.07, "aged_brass", 24)
    mesh.cylinder(f"{prefix}_wax", (x, y + 0.48, z), 0.07, 0.25, "candle_wax", 20)
    mesh.ellipsoid(f"{prefix}_flame", (x, y + 0.64, z), (0.035, 0.08, 0.025), "aged_brass", 6, 12)


# Shelf architecture.
mesh.cuboid("carved_shelf_back_panel", (0, 1.42, 0.42), (5.4, 2.65, 0.12), "carved_dark_wood")
for yy in (0.28, 1.18, 2.08, 2.78):
    mesh.cuboid(f"carved_shelf_slab_y_{yy:.2f}", (0, yy, 0), (5.8, 0.16, 1.00), "carved_dark_wood")
for xx in (-2.9, 2.9):
    mesh.cuboid(f"carved_side_column_{xx}", (xx, 1.48, 0.02), (0.20, 2.85, 1.08), "carved_dark_wood")
for i, xx in enumerate([v * 0.34 - 2.38 for v in range(15)]):
    mesh.cuboid(f"carved_trim_upper_block_{i:02}", (xx, 2.91, -0.54), (0.11, 0.12, 0.08), "carved_dark_wood")
for i, xx in enumerate([v * 0.42 - 2.32 for v in range(12)]):
    mesh.cuboid(f"lower_carved_rosette_{i:02}", (xx, 0.18, -0.54), (0.16, 0.11, 0.08), "carved_dark_wood")

# Main prop placement.
add_box_set("red_leather_box_lower_left", -1.55, 0.55, -0.20, "red_leather", 0.78, 0.36, 0.46)
add_box_set("green_travel_box_lower_center", -0.35, 0.55, -0.16, "green_glaze", 0.80, 0.34, 0.44)
add_box_set("dark_wood_box_mid", 0.25, 1.45, -0.18, "dark_leather", 0.86, 0.35, 0.44)
add_box_set("small_table_box_front", -2.10, 0.15, -0.78, "dark_leather", 0.52, 0.20, 0.34)

add_books("vertical_book_row_left", -1.70, 1.45, -0.14, 8, True)
add_books("vertical_book_row_right", 1.45, 1.44, -0.15, 7, True)
add_books("horizontal_book_stack", 0.82, 0.35, -0.19, 5, False)

for n, x, y, z, mat, scale in [
    ("cream_vase_top", -1.40, 2.42, -0.12, "cream_ceramic", 0.95),
    ("green_vase_top", -0.82, 2.42, -0.10, "green_glaze", 0.75),
    ("terracotta_vase_mid", 0.98, 1.43, -0.18, "red_leather", 0.72),
    ("cream_pot_mid", 1.48, 1.43, -0.20, "cream_ceramic", 0.82),
    ("small_green_vase_mid", 2.00, 1.42, -0.15, "green_glaze", 0.55),
]:
    add_vase(n, x, y, z, mat, scale)

for n, x, y, z, mat, scale in [
    ("clear_decanter_front", -0.85, 1.32, -0.46, "clear_glass", 0.78),
    ("smoky_jar_mid", 1.94, 0.58, -0.33, "smoky_glass", 0.72),
    ("small_glass_bottle", -1.18, 0.44, -0.45, "clear_glass", 0.45),
    ("dark_glass_apothecary", 2.30, 1.42, -0.36, "smoky_glass", 0.60),
]:
    add_bottle(n, x, y, z, mat, scale)

add_candle("left_brass_candle", -2.35, 0.52, -0.42)
add_candle("center_small_candle", 0.55, 1.30, -0.44)
add_textile_roll("red_woven_roll", 0.70, 0.58, -0.48, "woven_fabric")
add_textile_roll("green_woven_roll", 1.35, 0.42, -0.48, "green_fabric")

# Flat draped cloth and labels.
mesh.cuboid("draped_red_textile_panel", (1.96, 2.12, -0.55), (0.42, 0.72, 0.035), "woven_fabric")
for i in range(7):
    mesh.cuboid(f"draped_textile_fringe_{i:02}", (1.78 + i * 0.06, 1.72, -0.59), (0.018, 0.22, 0.02), "aged_brass")
for i, x in enumerate([-2.24, -2.04, -1.84, -0.52, -0.30, -0.08, 0.13]):
    mesh.cuboid(f"loose_brass_key_stem_{i:02}", (x, 0.10, -0.75), (0.16, 0.018, 0.035), "aged_brass")
    mesh.cylinder(f"loose_brass_key_ring_{i:02}", (x - 0.10, 0.10, -0.75), 0.045, 0.012, "aged_brass", 18, axis="y")

# Plants as simple leaf ellipsoids.
for i in range(16):
    angle = i * math.pi * 0.55
    radius = 0.08 + 0.015 * (i % 4)
    x = -2.42 + math.cos(angle) * radius
    y = 1.25 + i * 0.045
    z = -0.50 + math.sin(angle) * radius
    mesh.ellipsoid(f"plant_leaf_{i:02}", (x, y, z), (0.05, 0.018, 0.025), "plant_green", 5, 10)
mesh.cylinder("plant_brass_vase", (-2.42, 0.96, -0.48), 0.10, 0.28, "aged_brass", 20)


def write_mtl() -> None:
    lines = ["# Interior prop material library", "# Values chosen for PBR-style review notes and OBJ preview compatibility."]
    for name, material in MATERIALS.items():
        kd = material["kd"]
        ks = material["ks"]
        lines += [
            f"newmtl {name}",
            f"Kd {kd[0]:.4f} {kd[1]:.4f} {kd[2]:.4f}",
            f"Ks {ks[0]:.4f} {ks[1]:.4f} {ks[2]:.4f}",
            f"Pr {material['roughness']:.4f}",
            f"Pm {material['metallic']:.4f}",
        ]
        if "alpha" in material:
            lines += [f"d {material['alpha']:.4f}", "illum 4"]
        else:
            lines += ["d 1.0000", "illum 2"]
        lines.append("")
    MTL_PATH.write_text("\n".join(lines), encoding="utf-8")


def write_obj() -> None:
    lines = [
        "# Interior Props & Set Dressing mesh package",
        "# Procedural source mesh generated for Lesly portfolio case study.",
        f"mtllib {MTL_PATH.name}",
    ]
    current_object = None
    current_material = None
    for v in mesh.vertices:
        lines.append(f"v {v[0]:.5f} {v[1]:.5f} {v[2]:.5f}")
    for uv in mesh.uvs:
        lines.append(f"vt {uv[0]:.5f} {uv[1]:.5f}")
    for object_name, material, face in mesh.faces:
        if object_name != current_object:
            lines.append(f"o {object_name}")
            current_object = object_name
            current_material = None
        if material != current_material:
            lines.append(f"usemtl {material}")
            current_material = material
        lines.append("f " + " ".join(f"{vi}/{ui}" for vi, ui in face))
    OBJ_PATH.write_text("\n".join(lines) + "\n", encoding="utf-8")


def write_manifest() -> None:
    material_usage: dict[str, int] = {}
    for record in mesh.objects:
        material_usage[record.material] = material_usage.get(record.material, 0) + 1
    manifest = {
        "title": "Interior Props & Set Dressing Mesh Package",
        "source_visuals": [
            "assets/process/interior-props/presentation-board.webp",
            "assets/process/interior-props/glass-metal.webp",
            "assets/process/interior-props/material-study.webp",
            "assets/process/interior-props/shelf-hero.webp",
        ],
        "files": {
            "obj": str(OBJ_PATH.relative_to(ROOT)),
            "mtl": str(MTL_PATH.relative_to(ROOT)),
            "technical_sheet": str(SVG_PATH.relative_to(ROOT)),
        },
        "mesh_summary": {
            "objects": len(mesh.objects),
            "vertices": len(mesh.vertices),
            "uvs": len(mesh.uvs),
            "faces": len(mesh.faces),
            "materials": len(MATERIALS),
        },
        "modeled_asset_groups": [
            "carved shelf architecture",
            "leather and wood storage boxes with latches, labels, hinges, and corner plates",
            "clear and smoky glass bottles with necks, lips, stoppers, and fluted ribs",
            "ceramic vases with glaze bands",
            "aged brass candle holders, keys, hinges, and hardware",
            "book rows, paper pages, leather covers, and gold spine bands",
            "woven textile rolls, draped fabric, fringe, and plant leaves",
        ],
        "material_usage": material_usage,
        "pipeline_notes": [
            "OBJ uses named objects and material assignments so the asset set can be inspected in Blender, Maya, Marmoset, Unity, or Unreal.",
            "UV coordinates are included per face for technical visibility; production UV packing can be refined by object group.",
            "Materials include PBR review values for base color, roughness, metallic, specular, and transparent glass alpha.",
        ],
    }
    MANIFEST_PATH.write_text(json.dumps(manifest, indent=2) + "\n", encoding="utf-8")


def write_svg() -> None:
    width, height = 1600, 1100
    swatches = [
        ("carved_dark_wood", "#472412"), ("aged_brass", "#c78330"), ("dark_steel", "#222222"),
        ("smoky_glass", "#6a8781"), ("clear_glass", "#b7dad1"), ("cream_ceramic", "#c8a474"),
        ("green_glaze", "#2b5e4a"), ("red_leather", "#7d291a"), ("woven_fabric", "#803d29"),
        ("aged_paper", "#b39469"),
    ]
    def sx(x: float) -> float:
        return 140 + (x + 3.05) / 6.1 * 920
    def sy(y: float) -> float:
        return 820 - y / 3.1 * 600
    rects = []
    for record in mesh.objects:
        x, y, _ = record.center
        w, h, _ = record.size
        if record.kind in {"cuboid", "cylinder", "ellipsoid"}:
            rects.append(
                f'<rect x="{sx(x - w/2):.1f}" y="{sy(y + h/2):.1f}" width="{max(1, sx(x + w/2)-sx(x - w/2)):.1f}" '
                f'height="{max(1, sy(y - h/2)-sy(y + h/2)):.1f}" fill="none" stroke="#d8c7aa" stroke-width="1" opacity=".45"/>'
            )
    swatch_svg = []
    for i, (name, color) in enumerate(swatches):
        x = 1120
        y = 160 + i * 64
        swatch_svg.append(f'<rect x="{x}" y="{y}" width="42" height="42" fill="{color}" stroke="#d8c7aa" stroke-width="1"/>')
        swatch_svg.append(f'<text x="{x+58}" y="{y+18}" class="label">{name}</text>')
        swatch_svg.append(f'<text x="{x+58}" y="{y+38}" class="small">roughness {MATERIALS[name]["roughness"]:.2f} · metallic {MATERIALS[name]["metallic"]:.2f}</text>')
    uv_svg = []
    for i, record in enumerate(mesh.objects[:48]):
        col = i % 12
        row = i // 12
        x = 155 + col * 72
        y = 910 + row * 36
        uv_svg.append(f'<rect x="{x}" y="{y}" width="50" height="22" fill="none" stroke="#c4664a" stroke-width="1" opacity=".8"/>')
    svg = f'''<svg xmlns="http://www.w3.org/2000/svg" width="{width}" height="{height}" viewBox="0 0 {width} {height}">
  <style>
    .bg{{fill:#11100f}} .panel{{fill:#181513;stroke:#514235;stroke-width:1}}
    .title{{font-family:Georgia,serif;font-size:42px;letter-spacing:4px;fill:#f0e8d8}}
    .h{{font-family:Georgia,serif;font-size:25px;letter-spacing:2px;fill:#f0e8d8}}
    .label{{font-family:Menlo,monospace;font-size:15px;letter-spacing:1px;fill:#f0e8d8}}
    .small{{font-family:Menlo,monospace;font-size:12px;letter-spacing:.5px;fill:#a89e8a}}
    .accent{{fill:#c4664a}}
  </style>
  <rect class="bg" width="1600" height="1100"/>
  <text x="90" y="88" class="title">INTERIOR PROPS MESH SHEET</text>
  <text x="92" y="125" class="small">OBJ source package · {len(mesh.objects)} named objects · {len(mesh.vertices)} vertices · {len(mesh.faces)} faces · {len(MATERIALS)} materials</text>
  <rect x="90" y="155" width="1010" height="700" class="panel"/>
  <text x="120" y="200" class="h">Front elevation / object-level wireframe</text>
  <g>{''.join(rects[:320])}</g>
  <rect x="1115" y="155" width="395" height="700" class="panel"/>
  <text x="1145" y="120" class="h">Material reads</text>
  <g>{''.join(swatch_svg)}</g>
  <rect x="90" y="880" width="1010" height="150" class="panel"/>
  <text x="120" y="930" class="h">UV island planning</text>
  <g>{''.join(uv_svg)}</g>
  <rect x="1115" y="880" width="395" height="150" class="panel"/>
  <text x="1145" y="930" class="h">Deliverables</text>
  <text x="1145" y="970" class="small">interior-props-set.obj</text>
  <text x="1145" y="995" class="small">interior-props-materials.mtl</text>
  <text x="1145" y="1020" class="small">interior-props-manifest.json</text>
</svg>
'''
    SVG_PATH.write_text(svg, encoding="utf-8")


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    write_mtl()
    write_obj()
    write_manifest()
    write_svg()
    print(json.dumps({
        "obj": str(OBJ_PATH.relative_to(ROOT)),
        "mtl": str(MTL_PATH.relative_to(ROOT)),
        "manifest": str(MANIFEST_PATH.relative_to(ROOT)),
        "technical_sheet": str(SVG_PATH.relative_to(ROOT)),
        "objects": len(mesh.objects),
        "vertices": len(mesh.vertices),
        "faces": len(mesh.faces),
        "materials": len(MATERIALS),
    }, indent=2))


if __name__ == "__main__":
    main()
