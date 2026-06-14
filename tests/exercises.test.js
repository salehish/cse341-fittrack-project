const request = require("supertest");

const API_URL = "https://TU-RENDER.onrender.com";

describe("Exercise Collection", () => {

  test("GET /exercises returns 200", async () => {
    const response = await request(API_URL).get("/exercises");
    expect(response.statusCode).toBe(200);
  });

  test("GET /exercises returns JSON", async () => {
    const response = await request(API_URL).get("/exercises");
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("GET /exercises returns array", async () => {
    const response = await request(API_URL).get("/exercises");
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /exercises not 404", async () => {
    const response = await request(API_URL).get("/exercises");
    expect(response.statusCode).not.toBe(404);
  });

});