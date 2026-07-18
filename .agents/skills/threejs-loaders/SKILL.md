---
name: threejs-loaders
description: Three.js asset loading - GLTF, textures, images, models, async patterns. Use when loading 3D models, textures, HDR environments, or managing loading progress.
---

# Three.js Loaders

## Quick Start

```javascript
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

// Load GLTF model
const loader = new GLTFLoader();
loader.load("model.glb", (gltf) => {
  scene.add(gltf.scene);
});

// Load texture
const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load("texture.jpg");
```

## LoadingManager

Coordinate multiple loaders and track progress.

```javascript
const manager = new THREE.LoadingManager();

manager.onStart = (url, loaded, total) => console.log(`Started loading: ${url}`);
manager.onLoad = () => console.log("All loaded!");
manager.onProgress = (url, loaded, total) => console.log(`${loaded}/${total}`);
manager.onError = (url) => console.error(`Error loading: ${url}`);

const textureLoader = new THREE.TextureLoader(manager);
const gltfLoader = new GLTFLoader(manager);
```

## Texture Loading

### TextureLoader

```javascript
const loader = new THREE.TextureLoader();

loader.load(
  "texture.jpg",
  (texture) => {
    material.map = texture;
    material.needsUpdate = true;
  },
  undefined,
  (error) => {
    console.error("Error loading texture", error);
  },
);
```

### Texture Configuration

```javascript
const texture = loader.load("texture.jpg", (tex) => {
  tex.colorSpace = THREE.SRGBColorSpace; // For color/albedo maps
  tex.wrapS = THREE.RepeatWrapping;
  tex.wrapT = THREE.RepeatWrapping;
  tex.repeat.set(2, 2);
  tex.offset.set(0.5, 0.5);
  tex.anisotropy = renderer.capabilities.getMaxAnisotropy();
  tex.flipY = true;
  tex.needsUpdate = true;
});
```

### CubeTextureLoader

For environment maps and skyboxes.

```javascript
const cubeTexture = new THREE.CubeTextureLoader().load([
  "px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg",
]);

scene.background = cubeTexture;
scene.environment = cubeTexture;
```

### HDR/EXR Loading

```javascript
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";

new RGBELoader().load("environment.hdr", (texture) => {
  texture.mapping = THREE.EquirectangularReflectionMapping;
  scene.environment = texture;
  scene.background = texture;
});
```

## GLTF/GLB Loading

The most common 3D format for web.

```javascript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

const loader = new GLTFLoader();

loader.load("model.glb", (gltf) => {
  const model = gltf.scene;
  scene.add(model);

  // Animations
  const animations = gltf.animations;
  if (animations.length > 0) {
    const mixer = new THREE.AnimationMixer(model);
    animations.forEach((clip) => {
      mixer.clipAction(clip).play();
    });
  }

  // Asset info
  console.log(gltf.asset);
});
```

### GLTF with Draco Compression

```javascript
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath(
  "https://www.gstatic.com/draco/versioned/decoders/1.5.6/",
);
dracoLoader.preload();

const gltfLoader = new GLTFLoader();
gltfLoader.setDRACOLoader(dracoLoader);

gltfLoader.load("compressed-model.glb", (gltf) => {
  scene.add(gltf.scene);
});
```

### Process GLTF Content

```javascript
loader.load("model.glb", (gltf) => {
  const model = gltf.scene;

  model.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  const head = model.getObjectByName("Head");

  model.traverse((child) => {
    if (child.isMesh && child.material) {
      child.material.envMapIntensity = 0.5;
    }
  });

  // Center and scale
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  model.position.sub(center);
  const maxDim = Math.max(size.x, size.y, size.z);
  model.scale.setScalar(1 / maxDim);

  scene.add(model);
});
```

## Other Model Formats

### OBJ + MTL

```javascript
import { OBJLoader } from "three/addons/loaders/OBJLoader.js";
import { MTLLoader } from "three/addons/loaders/MTLLoader.js";

const mtlLoader = new MTLLoader();
mtlLoader.load("model.mtl", (materials) => {
  materials.preload();
  const objLoader = new OBJLoader();
  objLoader.setMaterials(materials);
  objLoader.load("model.obj", (object) => {
    scene.add(object);
  });
});
```

### FBX

```javascript
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const loader = new FBXLoader();
loader.load("model.fbx", (object) => {
  object.scale.setScalar(0.01);

  const mixer = new THREE.AnimationMixer(object);
  object.animations.forEach((clip) => {
    mixer.clipAction(clip).play();
  });
});
```

## Async/Promise Loading

```javascript
function loadModel(url) {
  return new Promise((resolve, reject) => {
    loader.load(url, resolve, undefined, reject);
  });
}

async function init() {
  try {
    const gltf = await loadModel("model.glb");
    scene.add(gltf.scene);
  } catch (error) {
    console.error("Failed to load model:", error);
  }
}
```

## Caching

```javascript
THREE.Cache.enabled = true;
THREE.Cache.clear();
```

## Error Handling

```javascript
async function loadWithFallback(primaryUrl, fallbackUrl) {
  try {
    return await loadModel(primaryUrl);
  } catch (error) {
    console.warn(`Primary failed, trying fallback: ${error}`);
    return await loadModel(fallbackUrl);
  }
}
```

## Performance Tips

1. **Use compressed formats**: DRACO for geometry, KTX2/Basis for textures
2. **Load progressively**: Show placeholders while loading
3. **Lazy load**: Only load what's needed
4. **Self-host runtime assets**: Keep the portfolio's no-external-JavaScript contract
5. **Enable cache**: `THREE.Cache.enabled = true`

## See Also

- `threejs-fundamentals` - Scene, camera, renderer, hierarchy, and transforms
