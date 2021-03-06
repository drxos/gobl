import ctrl from '../controllers/posts'

module.exports = (app) => {
  app.get('/gobl/v1/posts', ctrl.list)
  app.post('/gobl/v1/posts', ctrl.create)

  app.get('/gobl/v1/posts/:id', ctrl.read)
  app.put('/gobl/v1/posts/:id', ctrl.update)
  app.delete('/gobl/v1/posts/:id', ctrl.delete)
}
