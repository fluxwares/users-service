const Koa = require('koa')
const Router = require('koa-router')
const Bodyparser = require('koa-bodyparser')
const Helmet = require('koa-helmet')

const PORT = process.env.PORT || 8080

const app = new Koa()
const router = new Router()

app.use(Helmet())
app.use(Bodyparser())

router.get('/api/users', async ctx => {
  ctx.body = '<h1>Staging - /api/users</h1>'
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Users-Service] Server running on port -> ${PORT}`)
})
