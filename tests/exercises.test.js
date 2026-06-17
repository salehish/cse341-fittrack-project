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

describe("Exercises GET routes", () => {
  it("GET /exercises returns 200 and an array", async () => {
    const res = await request(app).get("/exercises");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("GET /exercises/:id returns 200 for an existing exercise", async () => {
    const all = await request(app).get("/exercises");
    if (all.body.length === 0) {
      console.warn("No exercises in DB — skipping GET-by-id success check");
      return;
    }
    const id = all.body[0]._id;
    const res = await request(app).get(`/exercises/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("_id", id);
  });

  it("GET /exercises/:id returns 404 for a non-existent id", async () => {
    const res = await request(app).get("/exercises/000000000000000000000000");
    expect(res.statusCode).toBe(404);
  });
});
