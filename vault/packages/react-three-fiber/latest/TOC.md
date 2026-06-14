# react-three-fiber Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/advanced/pitfalls.mdx` | Performance pitfalls and tips: avoid creating objects in loops, use instancing, mutate in useFrame instead of setState |
| `contents/advanced/scaling-performance.mdx` | Scaling WebGL performance: on-demand rendering, demand frameloop, battery and fan optimization |
| `contents/API/additional-exports.mdx` | Additional exports reference: addEffect, buildGraph, invalidate, extend, createPortal, createRoot, applyProps, act |
| `contents/API/canvas.mdx` | Canvas component reference: the entry point for defining a React Three Fiber scene and its properties |
| `contents/API/events.mdx` | Events API: pointer events, clicks, wheel scroll on raycasting objects; onPointerMissed on canvas |
| `contents/API/hooks.mdx` | Hooks reference: useFrame, useThree, useLoader, useGraph and other fiber hooks used inside Canvas |
| `contents/API/objects.mdx` | Objects, properties and constructor arguments: declarative three.js object usage and prop patterns |
| `contents/API/testing.mdx` | Testing React Three Fiber with @react-three/test-renderer; unit test setup and examples |
| `contents/API/typescript.mdx` | TypeScript usage: typing useRef, extending JSX intrinsic elements, common TS patterns with R3F |
| `contents/getting-started/community-r3f-components.mdx` | Community R3F components not in drei: renderers, physics, UI, data sources, and third-party integrations |
| `contents/getting-started/examples.mdx` | Showcase of example scenes and demos built with React Three Fiber |
| `contents/getting-started/installation.mdx` | Installation guide for Vite, Next.js, CDN, and React Native setups |
| `contents/getting-started/introduction.mdx` | Introduction to React Three Fiber: declarative 3D scenes, React ecosystem integration, no overhead over three.js |
| `contents/getting-started/your-first-scene.mdx` | Tutorial for setting up the first R3F scene with Canvas, mesh, geometry, material, and useFrame |
| `contents/tutorials/basic-animations.mdx` | Basic animation tutorial using useFrame refs and continuous render loop |
| `contents/tutorials/events-and-interaction.mdx` | Events and interaction tutorial: click handlers, pointer events, making meshes respond to user input |
| `contents/tutorials/how-it-works.mdx` | Advanced guide on R3F internals: how JSX maps to THREE objects, reconciler behavior, scene graph |
| `contents/tutorials/loading-models.mdx` | Loading GLTF, FBX, and OBJ 3D models using useLoader and three.js loaders |
| `contents/tutorials/loading-textures.mdx` | Loading textures with TextureLoader and useLoader; applying maps to materials |
| `contents/tutorials/v9-migration-guide.mdx` | v9 migration guide: React 19 compatibility, useLoader loader instance support, StrictMode changes |
