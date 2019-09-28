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
  ctx.body = [
    {
      id: 1,
      user: 'Ea mollit quis veniam occaecat et mollit voluptate ullamco eu aliquip magna incididunt.'
    },
    {
      id: 2,
      user: 'Occaecat labore aliquip ex aliqua do sit veniam quis nisi dolore.'
    },
    {
      id: 3,
      user: 'Dolore aliqua consequat laborum quis ullamco culpa Lorem commodo nulla ea velit culpa reprehenderit.'
    }
  ]
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(PORT, '0.0.0.0', () => {
  console.log(`[Users-Service] Server running on port -> ${PORT}`)
})
