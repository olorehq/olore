# vite Documentation Index
37 files | Paths relative to contents/
@start:getting-started,installation,create-vite,scaffold,quickstart=guide/index.md;features,hmr,typescript,css,jsx,json,wasm,workers=guide/features.md;why,overview=guide/index.md
@cli:vite,vite-dev,vite-build,vite-preview,vite-optimize,--host,--port,--mode,--force,--config=guide/cli.md
@javascript-api:createServer,build,preview,ViteDevServer,InlineConfig,resolveConfig,mergeConfig,loadConfigFromFile,searchForWorkspaceRoot=guide/api-javascript.md
@hmr:import.meta.hot,accept,dispose,prune,invalidate,on,send,hotUpdate,ViteHotContext=guide/api-hmr.md
@plugins:definePlugin,resolveId,load,transform,configureServer,configResolved,buildStart,buildEnd,closeBundle,handleHotUpdate,plugin-authoring=guide/api-plugin.md;using-plugins,plugin-config=guide/using-plugins.md;plugins-list=plugins/index.md
@config:defineConfig,vite.config,configFile,root,base,mode,define,plugins,resolve,alias,conditions,css,assetsInclude,logLevel,clearScreen,envDir,envPrefix,future=config/shared-options.md;config-overview=config/index.md
@server:server.host,server.port,server.strictPort,server.https,server.open,server.proxy,server.cors,server.hmr,server.watch,server.middlewareMode,server.origin,server.headers,server.fs=config/server-options.md
@build:build.target,build.outDir,build.assetsDir,build.assetsInlineLimit,build.cssCodeSplit,build.sourcemap,build.rollupOptions,build.minify,build.terserOptions,build.lib,build.manifest,build.ssr,build.modulePreload=config/build-options.md;production-build,library-mode,multi-page-app,public-base-path=guide/build.md
@assets:static-assets,public-dir,url-imports,import-url,?url,?raw,?inline,assetsInclude,glob-import,import.meta.glob=guide/assets.md;env-variables,import.meta.env,VITE_,dotenv,.env,modes=guide/env-and-mode.md
@optimization:dep-pre-bundling,optimizeDeps,optimizeDeps.include,optimizeDeps.exclude,optimizeDeps.esbuildOptions,optimizeDeps.force,esbuild=config/dep-optimization-options.md;pre-bundling=guide/dep-pre-bundling.md
@ssr:ssr,server-side-rendering,ssrLoadModule,ssrFixStacktrace,ssrTransform,ModuleRunner,ssr.external,ssr.noExternal=guide/ssr.md;ssr-options=config/ssr-options.md;modulerunner=changes/ssr-using-modulerunner.md
@environment-api:Environment,DevEnvironment,BuildEnvironment,createEnvironment,environments,this.environment,hotUpdate-hook=guide/api-environment.md;environment-instances=guide/api-environment-instances.md;environment-plugins=guide/api-environment-plugins.md;environment-frameworks=guide/api-environment-frameworks.md;environment-runtimes=guide/api-environment-runtimes.md
@misc:backend-integration=guide/backend-integration.md;static-deploy=guide/static-deploy.md;performance=guide/performance.md;troubleshooting=guide/troubleshooting.md;migration,v7,v8=guide/migration.md;worker-options=config/worker-options.md;preview-options=config/preview-options.md;breaking-changes=changes/index.md
