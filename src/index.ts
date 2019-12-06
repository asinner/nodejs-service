import 'reflect-metadata'
import express from 'express'
import yargs from 'yargs'
import bodyParser from 'body-parser'

const PORT = yargs.argv.port || 3000
const app = express()

app.use(bodyParser.json())

app.get('/', (_, res) => {
    res.send('Hello, world')
})

app.listen(PORT, () => {
    console.log(`Listening on 127.0.0.1:${PORT}`)
})