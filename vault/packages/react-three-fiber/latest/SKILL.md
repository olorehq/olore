---
name: olore-react-three-fiber-latest
description: Local react-three-fiber documentation reference (latest). React Three Fiber (R3F) documentation. Use for 3D rendering in React, Three.js integration, Canvas, hooks, events, performance optimization, and WebGL scenes.
---

# react-three-fiber Documentation

React Three Fiber (R3F) is a React renderer for three.js. Build 3D scenes declaratively with reusable, self-contained components that react to state, are readily interactive, and participate in React's ecosystem.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/getting-started/introduction.mdx` | Introduction | What R3F is, limitations, performance, and compatibility with three.js |
| `contents/getting-started/installation.mdx` | Installation | Installing with npm, Vite, Next.js, CDN, and React Native |
| `contents/getting-started/your-first-scene.mdx` | Your First Scene | Setting up Canvas, adding meshes, lights, and scene basics |
| `contents/getting-started/examples.mdx` | Examples | Codesandbox showcase of R3F scenes |
| `contents/getting-started/community-r3f-components.mdx` | Community R3F Components | Community-contributed components outside of drei |
| `contents/API/canvas.mdx` | Canvas | Canvas component props: gl, camera, scene, frameloop, shadows, raycaster, etc. |
| `contents/API/objects.mdx` | Objects, Properties and Constructor Arguments | Declarative object syntax, args, attach, set, and constructor patterns |
| `contents/API/hooks.mdx` | Hooks | useFrame, useThree, useLoader, useGraph, useInstanceHandle |
| `contents/API/events.mdx` | Events | onClick, onPointerOver, onPointerMove, onPointerMissed, onUpdate |
| `contents/API/additional-exports.mdx` | Additional Exports | addEffect, invalidate, advance, extend, createPortal, createRoot, applyProps, act |
| `contents/API/typescript.mdx` | TypeScript | useRef typing, ThreeElements, extending JSX intrinsic elements |
| `contents/API/testing.mdx` | Testing | Unit testing with @react-three/test-renderer |
| `contents/tutorials/basic-animations.mdx` | Basic Animations | useFrame-based animation loops and ref mutation patterns |
| `contents/tutorials/events-and-interaction.mdx` | Events and Interaction | Attaching pointer/click handlers to meshes |
| `contents/tutorials/loading-models.mdx` | Loading Models | GLTF, FBX, OBJ loading with useLoader and GLTFLoader |
| `contents/tutorials/loading-textures.mdx` | Loading Textures | TextureLoader, useLoader for texture maps |
| `contents/tutorials/how-it-works.mdx` | How It Works | Reconciler internals, fiber nodes, scene graph construction |
| `contents/tutorials/v9-migration-guide.mdx` | v9 Migration Guide | React 19 compatibility, StrictMode changes, useLoader instance reuse |
| `contents/advanced/pitfalls.mdx` | Performance Pitfalls | Avoiding setState in loops, instancing, geometry/material sharing |
| `contents/advanced/scaling-performance.mdx` | Scaling Performance | On-demand rendering, frameloop modes, Suspense, LOD strategies |

## When to use

Use this skill when the user asks about:
- Setting up a 3D scene in React with Canvas, meshes, lights, and cameras
- R3F hooks: useFrame, useThree, useLoader, useGraph
- Handling pointer events, clicks, and interactions on 3D objects
- Loading 3D models (GLTF, FBX, OBJ) or textures in React
- Performance optimization: on-demand rendering, instancing, avoiding re-renders
- TypeScript usage with R3F refs and JSX intrinsic element extensions
- Migrating from R3F v8 to v9 / React 18 to React 19
- Testing R3F components with @react-three/test-renderer

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
