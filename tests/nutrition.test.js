const request = require("supertest");

const API_URL = "https://TU-RENDER.onrender.com";

describe("Nutrition Collection", () => {

  test("GET /nutrition returns 200", async () => {
    const response = await request(API_URL).get("/nutrition");
    expect(response.statusCode).toBe(200);
  });

  test("GET /nutrition returns JSON", async () => {
    const response = await request(API_URL).get("/nutrition");
    expect(response.headers["content-type"]).toMatch(/json/);
  });

  test("GET /nutrition returns array", async () => {
    const response = await request(API_URL).get("/nutrition");
    expect(Array.isArray(response.body)).toBe(true);
  });

  test("GET /nutrition not 404", async () => {
    const response = await request(API_URL).get("/nutrition");
    expect(response.statusCode).not.toBe(404);
  });

});