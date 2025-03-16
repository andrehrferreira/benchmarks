import cmmv from "@cmmv/server";

const app = cmmv.default()

app.get('/', function (req, res) {
  res.json({ hello: 'world' })
})

app.listen(3000)
