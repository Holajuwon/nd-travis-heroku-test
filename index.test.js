const request = require("supertest");

describe("Index", () => {
  let server;
  beforeEach(() => {
    server = require("./index");
  });

  afterEach(async () => {
    await server.close();
  });

  afterAll(async () => {
    await server.close();
    await new Promise((resolve) => setTimeout(() => resolve(), 500));
  });
  describe("GET /", () => {
    it("should return status off 200", async () => {
      const res = await request(server).get("/");
      expect(res.status).toBe(200);
    });
  });

  describe("GET /app", () => {
    it("should return status off 200", async () => {
      const res = await request(server).get("/app");
      expect(res.status).toBe(200);
    });
  });
});
