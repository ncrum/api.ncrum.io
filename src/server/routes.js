import Router from 'koa-router'
import Blog from './schema/Blog'
import restgo from './util/restgo'

export default function(app) {
  // Create rest api for Blog's
  app.use(restgo(Blog, '/'))

  // render index page welcoming to our api
  const router = new Router()

  router.get('/', function*() {
    this.body = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>api.ncrum.io</title>
      </head>
      <body>
        <h2>Hello! Welcome to our API.</h2>
        <hr/>
        <table style="width:100%">
          <tr>
            <th>Method</th>
            <th>Route</th>
            <th>Description</th>
          </tr>
          <tr>
            <td>GET</td>
            <td>/blog</td>
            <td>Returns a JSON array of Blog's. Optional params <strong>fl</strong> specifies the returned fields, and <strong>conditions</strong> only returns Blog's that meet the given conditions.</td>
          </tr>
          <tr>
            <td>POST</td>
            <td>/blog</td>
            <td>Creates a new Blog.</td>
          </tr>
        </table>
      </body>
    </html>
    `
  })

  app.use(router.middleware());
}
