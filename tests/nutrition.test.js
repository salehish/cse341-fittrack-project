require("dotenv").config();
const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../server");

beforeAll(async () => {
  if (mongoose.connection.readyState === 0) {
    await mongoose.connect(process.env.MONGO_URI);
  }
});

afterAll(async () => {
  await mongoose.disconnect();
});

describe("Nutrition GET routes", () => {
  it("GET /nutrition returns 200 and an array", async () => {
    const res = await request(app).get("/nutrition");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /nutrition/:id returns 200 for an existing nutrition record", async () => {
    const all = await request(app).get("/nutrition");
    if (all.body.length === 0) {
      console.warn("No nutrition records in DB — skipping GET-by-id success check");
      return;
    }
    const id = all.body[0]._id;
    const res = await request(app).get(`/nutrition/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("_id", id);
  });

  it("GET /nutrition/:id returns 404 for a non-existent id", async () => {
    const res = await request(app).get("/nutrition/000000000000000000000000");
    expect(res.statusCode).toBe(404);
  });
});
