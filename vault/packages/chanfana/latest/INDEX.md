# chanfana Documentation Index
19 files | Paths relative to contents/
@start:introduction,overview,features,CloudflareWorkers=introduction.md;installation,setup,quickstart,fromHono,fromIttyRouter=getting-started.md;OpenAPIRoute,schema,getValidatedData,getUnvalidatedData,validation=core-concepts.md
@adapters:fromHono,HonoOpenAPIRouterType,fromIttyRouter,adapter=router-adapters.md;RouterOptions,base,docsUrl,swaggerUI,redoc,openapi.json=openapi-configuration-customization.md
@endpoints:OpenAPIRoute,handle,schema,request,responses,contentJson=endpoints/defining-endpoints.md;params,query,body,headers,z.string,z.number,z.boolean,z.enum,z.array,z.object,z.email,z.uuid,z.url,openapi=endpoints/parameters.md;request-validation,contentJson,body,query,path,headers=endpoints/request-validation.md;responses,statusCode,contentJson,200,201,204,400,404=endpoints/response-definition.md
@auto:CreateEndpoint,ReadEndpoint,UpdateEndpoint,DeleteEndpoint,ListEndpoint,Meta=endpoints/auto/base.md;D1CreateEndpoint,D1ReadEndpoint,D1UpdateEndpoint,D1DeleteEndpoint,D1ListEndpoint,D1=endpoints/auto/d1.md
@errors:ApiException,InputValidationException,NotFoundException,ForbiddenException,UnauthorizedException,ConflictException,InternalServerErrorException,MultiException=error-handling.md;advanced,nested-routers,middleware,lifecycle=advanced-topics-patterns.md
@reference:examples,recipes,TaskAPI,CRUD=examples-and-recipes.md;cli,npx,openapi.json,x-ignore=cli.md;troubleshooting,FAQ,debugging=troubleshooting-and-faq.md;migration,v2,v3,Zod4,breaking-changes,Str,Num,Int,Bool=migration-to-chanfana-3.md
