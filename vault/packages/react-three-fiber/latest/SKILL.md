---
name: olore-react-three-fiber-latest
description: Local react-three-fiber documentation reference (latest). React Three Fiber (R3F) documentation. Use for 3D rendering in React, Three.js integration, Canvas, hooks, events, performance optimization, and WebGL scenes.
---

# react-three-fiber Documentation

React Three Fiber (R3F) documentation. Use for 3D rendering in React, Three.js integration, Canvas, hooks, events, performance optimization, and WebGL scenes.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/advanced/pitfalls.mdx` | Performance Pitfalls | Avoid expensive object creation in render loops; use instancing, shared materials/geometries, and mutate in useFrame |
| `contents/advanced/scaling-performance.mdx` | Scaling Performance | On-demand rendering, demand frameloop, adaptive device performance for WebGL |
| `contents/API/additional-exports.mdx` | Additional Exports | API exports: addEffect, buildGraph, invalidate, extend, createPortal, createRoot, applyProps, act |
| `contents/API/canvas.mdx` | Canvas | Canvas component: the portal into three.js; all Canvas props and configuration |
| `contents/API/events.mdx` | Events | Pointer events, clicks, wheel scroll on raycasting objects; onPointerMissed; event data structure |
| `contents/API/hooks.mdx` | Hooks | useFrame, useThree, useLoader, useGraph — fiber hooks that must be used inside Canvas |
| `contents/API/objects.mdx` | Objects, Properties and Constructor Arguments | Declarative three.js object patterns, attach prop, constructor args, set and non-primitive props |
| `contents/API/testing.mdx` | Testing | Unit testing R3F components with @react-three/test-renderer |
| `contents/API/typescript.mdx` | TypeScript | Typing useRef, extending JSX intrinsics for custom three.js objects, common TypeScript patterns |
| `contents/getting-started/community-r3f-components.mdx` | Community R3F Components | Third-party R3F components: renderers, physics engines, UI, data loaders not in drei |
| `contents/getting-started/examples.mdx` | Examples | Showcase of demo scenes built with React Three Fiber |
| `contents/getting-started/installation.mdx` | Installation | Setup for Vite, Next.js, CDN without build tools, and React Native |
| `contents/getting-started/introduction.mdx` | Introduction | Overview of R3F: declarative 3D, React ecosystem integration, zero overhead over three.js |
| `contents/getting-started/your-first-scene.mdx` | Your First Scene | Step-by-step: Canvas setup, mesh, geometry, material, lights, and animation |
| `contents/tutorials/basic-animations.mdx` | Basic Animations | Animation with useFrame and refs; continuous render loop patterns |
| `contents/tutorials/events-and-interaction.mdx` | Events and Interaction | Click handlers, pointer events, interactive meshes responding to user input |
| `contents/tutorials/how-it-works.mdx` | How It Works | R3F internals: JSX to THREE object mapping, reconciler, scene graph lifecycle |
| `contents/tutorials/loading-models.mdx` | Loading Models | Load GLTF, FBX, OBJ models using useLoader and three.js loaders |
| `contents/tutorials/loading-textures.mdx` | Loading Textures | Load textures with TextureLoader and useLoader; apply color, normal, roughness maps |
| `contents/tutorials/v9-migration-guide.mdx` | v9 Migration Guide | React 19 compatibility: useLoader instance reuse, StrictMode changes, breaking changes |

## When to use

Use this skill when the user asks about:
- Setting up a 3D scene in React with Canvas and mesh components
- Using R3F hooks: useFrame, useThree, useLoader, useGraph
- Handling pointer events, clicks, and interactions on 3D objects
- Loading GLTF, FBX, OBJ models and textures
- Performance optimization: on-demand rendering, instancing, avoiding re-renders
- TypeScript types for React Three Fiber components and refs
- Migrating from R3F v8 to v9 (React 19 compatibility)
- Testing three.js React components with @react-three/test-renderer

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{filename}`
