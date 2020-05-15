/*
**Contributors:
**Seth Cox
**David Isakson
**April - May 2020
*/
const server = require("../api/server");
const request = require('supertest');
const db = require("../data/dbconfig.js");
//const request = supertest(server);

describe("POST /register", () => {
  describe("adds user", () => {
    beforeEach(async () => {
      await db("users").truncate();
    });

    it("validates", async () => {
      const res = await request(server)
        .post("/api/auth/register")
        .send({
          email: "email777@email.com",
          password: "password"
        });
      expect(res.status).toBe(500);
    });
  });
});

describe("POST /login", () => {
  describe("log in user", () => {
    //  it("returns 442", async () => {
    //   const res = await request(server)
    //     .post("/api/auth/login")
    //     .send({
    //       username: "email777@email.com",
    //       password: "password"
    //     });
    //   expect(res.status).toBe(442);
    // });

    it("returns json", async () => {
      const res = await request(server)
        .post("/api/auth/login")
        .send({
          username: "email@email.com",
          password: "password"
        });
      expect(res.type).toMatch(/json/i);
    });
  });
});//end POST /
