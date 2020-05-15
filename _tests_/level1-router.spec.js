/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const request = require('supertest')
const server = require('../api/server')

describe('Post Endpoints', () => {
  it('should create a new post', async () => {
    const res = await request(server)
      .put('/api/level_1/update')
      .send({
        user_Id: 1
      })
    expect(res.statusCode).toEqual(500)
    //expect(res.body).toHaveProperty('put')
  })
})
