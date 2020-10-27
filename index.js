const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Hello From CPAT 9:53am!')
})

app.listen(port, () => {
  console.log(`1022am, Example app listening at http://localhost:${port}`)
})
