# Challenge 3

This project is a Node.js application that provides a simple API for CRUD operations on items. It uses Express for the server, `fs-extra` for file operations, and `supertest` for testing.

## Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd challenge-3
   ```

2. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the server:

   ```bash
   npm start
   ```

2. The server will be running on `http://localhost:3000`.

## API Endpoints

- `GET /api/items`: Retrieve all items.
- `GET /api/items/:id`: Retrieve an item by its ID.
- `POST /api/items`: Create a new item.
- `PUT /api/items/:id`: Update an existing item.
- `DELETE /api/items/:id`: Delete an item.

## Running Tests

To run the tests, use the following command:

```bash
npm test
```

## Project Structure

```
challenge-3/
├── data/
│   └── items.json
├── public/
│   └── index.html
├── test/
│   └── index.test.js
├── index.js
├── package.json
└── README.md
```

## License

This project is licensed under the MIT License.
