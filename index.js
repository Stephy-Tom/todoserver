const jsonServer = require('json-server');
const todoserver =jsonServer.create();
const router=jsonServer.router('db.json')
const middleware = jsonServer.defaults()
todoserver.use(middleware)
todoserver.use(router)
const port =5000;
todoserver.listen(port, () => {
  console.log(`Server is up and running in port ${port}`)
})
