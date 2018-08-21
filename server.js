const jsonServer = require('json-server')
const server = json Server.create()
const router = jsonServer.router('db.json')
const middlewares = json Server.defaults()
server.use(middlewares)
server.use(router)
server.listen(3000, () => {
console.log('JSON Server is running')
});