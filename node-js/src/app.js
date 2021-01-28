import express from 'express'
import config from 'config'
import helmet from 'helmet'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
const {
  port
} = config.get('api')

import doscg from '../routes/doscg'

app.use(express.json())

app.use(cors())
app.use(helmet())
app.use(bodyParser.json())

app.use('/doscg', doscg)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})