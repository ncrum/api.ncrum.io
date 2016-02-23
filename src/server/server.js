import 'babel-polyfill'
import path from 'path'
import koa from 'koa'
import bodyParser from 'koa-bodyparser'
import koaError from 'koa-err'
import koaCors from 'koa-cors'
import morgan from 'koa-morgan'
import routes from './routes'

import mongoose from 'mongoose'
mongoose.connect(process.env.MONGO_URL || '127.0.0.1:27017')

const app = koa()

app.use(bodyParser())
app.use(koaError())
app.use(koaCors())
app.use(morgan.middleware('dev'))

routes(app)

app.listen(process.env.PORT || 3000)
