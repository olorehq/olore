# react-three-fiber Documentation Structure

## Files

| File | Description |
|------|-------------|
| `contents/advanced/pitfalls.mdx` | Common performance mistakes in R3F (setState in loops, re-renders, object creation) and how to avoid them |
| `contents/advanced/scaling-performance.mdx` | Primer on scaling: on-demand rendering, instancing, LOD, performance regression, and baking |
| `contents/API/additional-exports.mdx` | Extra exports such as addEffect, addAfterEffect, addTail, invalidate, advance, extend, createPortal, flushSync |
| `contents/API/canvas.mdx` | Canvas component props: renderer, camera, shadows, gl, frameloop, dpr, events and defaults |
| `contents/API/events.mdx` | Pointer events on meshes, event data, propagation, stopPropagation and pointer capture |
| `contents/API/hooks.mdx` | useThree, useFrame, useLoader, useGraph and related hooks for state, render loop and loading |
| `contents/API/objects.mdx` | Declaring three.js objects in JSX: args, attach, dashed props, shortcuts, primitives and piercing |
| `contents/API/testing.mdx` | Unit testing R3F scenes with the react-three-test-renderer |
| `contents/API/typescript.mdx` | Typing refs, events, extend and custom elements with TypeScript |
| `contents/getting-started/community-r3f-components.mdx` | Showcase of community components not merged into drei or other pmndrs projects |
| `contents/getting-started/examples.mdx` | Gallery of example projects and sandboxes built with React Three Fiber |
| `contents/getting-started/installation.mdx` | Installing @react-three/fiber and three, framework setup (Next.js, React Native, Vite) |
| `contents/getting-started/introduction.mdx` | Overview of R3F as a React renderer for three.js, its benefits and ecosystem |
| `contents/getting-started/your-first-scene.mdx` | Step-by-step building of a first scene with Canvas, meshes, lights and core concepts |
| `contents/tutorials/basic-animations.mdx` | Using refs and useFrame for animations, delta time, and easing with libraries |
| `contents/tutorials/events-and-interaction.mdx` | Making meshes respond to hover and click with pointer events and state |
| `contents/tutorials/how-it-works.mdx` | Advanced guide to the reconciler internals and how R3F maps JSX to three.js |
| `contents/tutorials/loading-models.mdx` | Loading glTF models with useLoader, Suspense, gltfjsx and drei helpers |
| `contents/tutorials/loading-textures.mdx` | Loading textures with useTexture / TextureLoader and applying them to materials |
| `contents/tutorials/v9-migration-guide.mdx` | Breaking changes and new features in v9 with React 19 |
