const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs-extra");
const cors = require("cors");
const path = require("path");

const app = express();
const PORT = 3000;
const dataFilePath = path.join(__dirname, "data", "items.json");

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

/**
 * Reads data from the JSON file.
 * @returns {Promise<Object[]>} A promise that resolves to the data.
 */
const readData = async () => {
  try {
    const data = await fs.readFile(dataFilePath, "utf8");
    return JSON.parse(data);
  } catch (err) {
    console.error("Error reading data:", err);
    return [];
  }
};

/**
 * Writes data to the JSON file.
 * @param {Object[]} data - The data to write.
 * @returns {Promise<void>}
 */
const writeData = async (data) => {
  try {
    await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));
  } catch (err) {
    console.error("Error writing data:", err);
  }
};

// GET /api/items: Retrieve all items
app.get("/api/items", async (req, res) => {
  const items = await readData();
  res.json(items);
});

// GET /api/items/:id: Retrieve an item by its ID
app.get("/api/items/:id", async (req, res) => {
  const items = await readData();
  const item = items.find((i) => i.id === req.params.id);
  if (item) {
    res.json(item);
  } else {
    res.status(404).send("Item not found");
  }
});

// POST /api/items: Create a new item
app.post("/api/items", async (req, res) => {
  const items = await readData();
  const newItem = req.body;
  items.push(newItem);
  await writeData(items);
  res.status(201).json(newItem);
});

// PUT /api/items/:id: Update an existing item
app.put("/api/items/:id", async (req, res) => {
  const items = await readData();
  const index = items.findIndex((i) => i.id === req.params.id);
  if (index !== -1) {
    items[index] = req.body;
    await writeData(items);
    res.json(items[index]);
  } else {
    res.status(404).send("Item not found");
  }
});

// DELETE /api/items/:id: Delete an item
app.delete("/api/items/:id", async (req, res) => {
  const items = await readData();
  const index = items.findIndex((i) => i.id === req.params.id);
  if (index !== -1) {
    const deletedItem = items.splice(index, 1);
    await writeData(items);
    res.json(deletedItem);
  } else {
    res.status(404).send("Item not found");
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err.stack);
  if (err.code === "ETARGET") {
    res.status(400).send("Invalid package version specified.");
  } else {
    res.status(500).send("Something broke!");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
