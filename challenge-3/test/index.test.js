const request = require("supertest");
const express = require("express");
const fs = require("fs-extra");
const path = require("path");

const app = require("../index"); // Assuming index.js exports the app

jest.mock("fs-extra");

const dataFilePath = path.join(__dirname, "..", "data", "items.json");

describe("API Endpoints", () => {
  let items;

  beforeEach(() => {
    items = [
      { id: "1", name: "Item 1" },
      { id: "2", name: "Item 2" },
    ];
    fs.readFile.mockResolvedValue(JSON.stringify(items));
    fs.writeFile.mockResolvedValue();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("GET /api/items should retrieve all items", async () => {
    const response = await request(app).get("/api/items");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(items);
  });

  test("GET /api/items/:id should retrieve an item by its ID", async () => {
    const response = await request(app).get("/api/items/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual(items[0]);
  });

  test("GET /api/items/:id should return 404 if item not found", async () => {
    const response = await request(app).get("/api/items/3");
    expect(response.status).toBe(404);
  });

  test("POST /api/items should create a new item", async () => {
    const newItem = { id: "3", name: "Item 3" };
    const response = await request(app).post("/api/items").send(newItem);
    expect(response.status).toBe(201);
    expect(response.body).toEqual(newItem);
    expect(fs.writeFile).toHaveBeenCalledWith(
      dataFilePath,
      JSON.stringify([...items, newItem], null, 2)
    );
  });

  test("PUT /api/items/:id should update an existing item", async () => {
    const updatedItem = { id: "1", name: "Updated Item 1" };
    const response = await request(app).put("/api/items/1").send(updatedItem);
    expect(response.status).toBe(200);
    expect(response.body).toEqual(updatedItem);
    expect(fs.writeFile).toHaveBeenCalledWith(
      dataFilePath,
      JSON.stringify([updatedItem, items[1]], null, 2)
    );
  });

  test("PUT /api/items/:id should return 404 if item not found", async () => {
    const updatedItem = { id: "3", name: "Updated Item 3" };
    const response = await request(app).put("/api/items/3").send(updatedItem);
    expect(response.status).toBe(404);
  });

  test("DELETE /api/items/:id should delete an item", async () => {
    const response = await request(app).delete("/api/items/1");
    expect(response.status).toBe(200);
    expect(response.body).toEqual([items[0]]);
    expect(fs.writeFile).toHaveBeenCalledWith(
      dataFilePath,
      JSON.stringify([items[1]], null, 2)
    );
  });

  test("DELETE /api/items/:id should return 404 if item not found", async () => {
    const response = await request(app).delete("/api/items/3");
    expect(response.status).toBe(404);
  });
});
