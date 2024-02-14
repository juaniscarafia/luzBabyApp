import 'mocha'
import app from '../app'
import request from 'supertest'

const token = String(process.env.TOKEN)
const codiusuario = String(process.env.USER)

describe('Combos [get]', () => {
  it('Devuelve 403, si se manda mal o no se manda el token', async () => {
    await request(app)
      .get('/api/combos/organismos')
      .set('Accept', 'application/json')
      // .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 403, si se manda mal o no se manda el codiusuario', async () => {
    await request(app)
      .get('/api/combos/organismos')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      // .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/organismos')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      // .set('busqueda', '1')
      .set('codiTipoCircuito', '1')
      .expect(404)
  })
  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/organismos')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .set('busqueda', '1')
      // .set('codiTipoCircuito', '1')
      .expect(404)
  })
  // Combo Motivos Rechazo
  it('Devuelve 403, si se manda mal o no se manda el token', async () => {
    await request(app)
      .get('/api/combos/motivosRechazo')
      .set('Accept', 'application/json')
      // .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 403, si se manda mal o no se manda el codiusuario', async () => {
    await request(app)
      .get('/api/combos/motivosRechazo')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      // .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/motivosRechazo')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      // .set('busqueda', '1')
      .set('codiTipoCircuito', '1')
      .expect(404)
  })
  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/motivosRechazo')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .set('busqueda', '1')
      // .set('codiTipoCircuito', '1')
      .expect(404)
  })

  // Combo Aprobadores
  it('Devuelve 403, si se manda mal o no se manda el token', async () => {
    await request(app)
      .get('/api/combos/aprobadores')
      .set('Accept', 'application/json')
      // .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 403, si se manda mal o no se manda el codiusuario', async () => {
    await request(app)
      .get('/api/combos/aprobadores')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      // .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/aprobadores')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      // .set('busqueda', '1')
      .set('codiTipoCircuito', '1')
      .expect(404)
  })
  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/aprobadores')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .set('busqueda', '1')
      // .set('codiTipoCircuito', '1')
      .expect(404)
  })

  // Combo Desarrolladores

  it('Devuelve 403, si se manda mal o no se manda el token', async () => {
    await request(app)
      .get('/api/combos/desarrolladores')
      .set('Accept', 'application/json')
      // .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 403, si se manda mal o no se manda el codiusuario', async () => {
    await request(app)
      .get('/api/combos/desarrolladores')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      // .set('codiusuario', codiusuario)
      .expect(403)
  })

  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/desarrolladores')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      // .set('busqueda', '1')
      .set('codiTipoCircuito', '1')
      .expect(404)
  })
  it('Devuelve 422, si no se envia la busqueda', async () => {
    await request(app)
      .post('/api/combos/desarrolladores')
      .set('Accept', 'application/json')
      .set('x-access-token', token)
      .set('codiusuario', codiusuario)
      .set('busqueda', '1')
      // .set('codiTipoCircuito', '1')
      .expect(404)
  })
})
