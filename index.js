require('dotenv').config()

const express = require("express")
const app = express()

const port = 3000
const pingRouter = require("./routes/ping")
const allikadRouter = require("./routes/allikad")
const persoonidRouter = require("./routes/persoonid")
app.use(express.json())
app.use(
  express.urlencoded({
    extended: true,
  })
)
app.get("/", (req, res) => {
  res.json({ RepisAPI: "ok" })
})

app.use("/ping", pingRouter)
app.use("/allikad", allikadRouter)
app.use("/persoonid", persoonidRouter)

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    console.error(err.message, err.stack)
    res.status(statusCode).json({ message: err.message })
    return
  })
  
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
