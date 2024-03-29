const cacheableResponse = require('cacheable-response')
const express = require('express')
const next = require('next')

const port = process.env.PORT || 5000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })

const handle = app.getRequestHandler()

const ssrCache = cacheableResponse({
  ttl: 1000 * 60 * 60, // 1hour
  get: async ({ req, res }) => {
    const data = await app.renderToHTML(req, res, req.path, {
      ...req.query,
      ...req.params,
    })

    if (res.statusCode === 404) {
      res.end(data)
      return
    }

    return { data }
  },
  send: ({ data, res }) => res.send(data),
})

app.prepare().then(() => {
  const server = express()

  server.get('/', (req, res) =>ssrCache({ req, res }))

 
  server.get('*', (req, res) => {
   return handle(req, res)
  })


 

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})