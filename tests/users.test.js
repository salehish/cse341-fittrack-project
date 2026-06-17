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

describe("Users GET routes", () => {
  // GET all
  it("GET /users returns 200 and an array", async () => {
    const res = await request(app).get("/users");
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // GET one (by an id that exists)
  it("GET /users/:id returns 200 for an existing user", async () => {
    const all = await request(app).get("/users");
    if (all.body.length === 0) {
      console.warn("No users in DB — skipping GET-by-id success check");
      return;
    }
    const id = all.body[0]._id;
    const res = await request(app).get(`/users/${id}`);
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("_id", id);
  });

  // GET one (id is valid format but does not exist)
  it("GET /users/:id returns 404 for a non-existent id", async () => {
    const res = await request(app).get("/users/000000000000000000000000");
    expect(res.statusCode).toBe(404);
  });
});
