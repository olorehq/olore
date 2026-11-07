---
name: olore-react-three-fiber-latest
description: Local react-three-fiber documentation reference (latest). React Three Fiber (R3F) documentation. Use for 3D rendering in React, Three.js integration, Canvas, hooks, events, performance optimization, and WebGL scenes.
---

# react-three-fiber Documentation

React Three Fiber (R3F) documentation. Use for 3D rendering in React, Three.js integration, Canvas, hooks, events, performance optimization, and WebGL scenes.

## Quick Reference

| File | Title | Description |
|------|-------|-------------|
| `contents/advanced/pitfalls.mdx` | Performance pitfalls | Common performance mistakes in R3F (setState in loops, re-renders, object creation) and how to avoid them |
| `contents/advanced/scaling-performance.mdx` | Scaling performance | Primer on scaling: on-demand rendering, instancing, LOD, performance regression, and baking |
| `contents/API/additional-exports.mdx` | Additional Exports | Extra exports such as addEffect, addAfterEffect, addTail, invalidate, advance, extend, createPortal, flushSync |
| `contents/API/canvas.mdx` | Canvas | Canvas component props: renderer, camera, shadows, gl, frameloop, dpr, events and defaults |
| `contents/API/events.mdx` | Events | Pointer events on meshes, event data, propagation, stopPropagation and pointer capture |
| `contents/API/hooks.mdx` | Hooks | useThree, useFrame, useLoader, useGraph and related hooks for state, render loop and loading |
| `contents/API/objects.mdx` | Objects, properties and constructor arguments | Declaring three.js objects in JSX: args, attach, dashed props, shortcuts, primitives and piercing |
| `contents/API/testing.mdx` | Testing | Unit testing R3F scenes with the react-three-test-renderer |
| `contents/API/typescript.mdx` | TypeScript | Typing refs, events, extend and custom elements with TypeScript |
| `contents/getting-started/community-r3f-components.mdx` | Community R3F Components | Showcase of community components not merged into drei or other pmndrs projects |
| `contents/getting-started/examples.mdx` | Examples | Gallery of example projects and sandboxes built with React Three Fiber |
| `contents/getting-started/installation.mdx` | Installation | Installing @react-three/fiber and three, framework setup (Next.js, React Native, Vite) |
| `contents/getting-started/introduction.mdx` | Introduction | Overview of R3F as a React renderer for three.js, its benefits and ecosystem |
| `contents/getting-started/your-first-scene.mdx` | Your first scene | Step-by-step building of a first scene with Canvas, meshes, lights and core concepts |
| `contents/tutorials/basic-animations.mdx` | Basic Animations | Using refs and useFrame for animations, delta time, and easing with libraries |
| `contents/tutorials/events-and-interaction.mdx` | Events and Interaction | Making meshes respond to hover and click with pointer events and state |
| `contents/tutorials/how-it-works.mdx` | How does it work? | Advanced guide to the reconciler internals and how R3F maps JSX to three.js |
| `contents/tutorials/loading-models.mdx` | Loading Models | Loading glTF models with useLoader, Suspense, gltfjsx and drei helpers |
| `contents/tutorials/loading-textures.mdx` | Loading Textures | Loading textures with useTexture / TextureLoader and applying them to materials |
| `contents/tutorials/v9-migration-guide.mdx` | v9 Migration Guide | Breaking changes and new features in v9 with React 19 |

## When to use

Use this skill when the user asks about:
- Setting up React Three Fiber and building a first 3D scene
- Canvas props, hooks (useFrame, useThree, useLoader), and JSX object props
- Pointer events and interaction on meshes
- Loading glTF models and textures, and basic animations
- Performance optimization and scaling R3F scenes
- TypeScript typing, testing, and migrating to v9 / React 19

## How to find information

1. Check Quick Reference above for the relevant file
2. Read specific files from `contents/{path}`
