const Koa = require('koa')
const Router = require('koa-router')
const app = new Koa
const router = new Router

// 1. request, method, respond
// 2. api url => function, router
// 3. ctx, async
router.get('/', ctx => {
    console.log(ctx)
    console.log(ctx.request)
    ctx.body = 'Hello World!'
})

router.get('/api', ctx => {
    console.log(ctx)
    console.log(ctx.request)
    ctx.body = 'Hello API!'
})

app.use(router.routes())
    .use(router.allowedMethods)

app.listen(3000)
