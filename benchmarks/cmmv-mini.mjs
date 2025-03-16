import cmmv from "@cmmv/http-mini";
const app = cmmv.default()

app.get('/', function (req, res) {
  res.json({ hello: 'world' })
})

app.listen({ port: 3000, host: "127.0.0.1" })
