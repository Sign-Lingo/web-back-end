const request = require("supertest");

const server = require("../api/server");
//const db = require("../data/dbConfig.js");



describe("SERVER ", () => {
  it("should return 200 OK", function() {
    return request(server)
      .get("/")
      .then(res => {
        expect(res.status).toBe(200);
      });
  });

  it("should set db ENV to testing", function() {
    expect(process.env.DB_ENV).toBe("development");
  });
});