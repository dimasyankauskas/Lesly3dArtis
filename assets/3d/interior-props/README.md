# Interior Props & Set Dressing Mesh Package

This folder contains the source mesh package for the Interior Props & Set Dressing portfolio case.

## Files

- `interior-props-set.obj` - source mesh with named objects and UV coordinates.
- `interior-props-materials.mtl` - material library with PBR-style review values.
- `interior-props-manifest.json` - counts, modeled groups, source visuals, and pipeline notes.
- `interior-props-mesh-sheet.svg` - technical sheet used in the public case-study gallery.

## Modeled Groups

- Carved shelf architecture.
- Leather and wood boxes with latches, labels, hinges, and corner plates.
- Clear and smoky glass bottles with necks, lips, stoppers, and fluted ribs.
- Ceramic vases with glaze bands.
- Aged brass candle holders, keys, hinges, and hardware.
- Book rows, paper pages, leather covers, and gold spine bands.
- Woven textile rolls, draped fabric, fringe, and plant leaves.

## Regeneration

Run from the repo root:

```bash
python3 tools/generate_interior_props_mesh.py
```

