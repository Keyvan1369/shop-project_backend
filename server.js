const express = require('express')
const authRouter = require('./routes/authRouter')
const indexRouter = require('./routes/indexRouter')
const app = express()
const port = 5020
app.use(express.json())



app.use(authRouter)
app.use(indexRouter)
               //user



app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})
