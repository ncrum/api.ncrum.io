import path from 'path'
import koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaError from 'koa-err'
import morgan from 'koa-morgan'
import routes from './routes'

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_URL || '127.0.0.1:27017')

const app = koa()

app.use(bodyParser())
app.use(koaError())
app.use(morgan.middleware('dev'))

routes(app)

app.listen(process.env.PORT || 3000)
