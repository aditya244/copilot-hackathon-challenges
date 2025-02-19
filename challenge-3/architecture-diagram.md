# Architectural Diagram

The following diagram illustrates the architecture of the Challenge 3 project:

```plaintext
+-------------------+       +-------------------+
|                   |       |                   |
|    Client (UI)    |       |    Client (UI)    |
|                   |       |                   |
+---------+---------+       +---------+---------+
          |                           |
          |                           |
          |                           |
          v                           v
+---------+---------------------------+---------+
|                   Express Server               |
|                                                 |
| +-------------------+   +-------------------+   |
| |                   |   |                   |   |
| |   API Endpoints   |   |   Static Files    |   |
| |                   |   |                   |   |
| +---------+---------+   +---------+---------+   |
|           |                       |             |
|           |                       |             |
|           v                       v             |
| +---------+---------+   +---------+---------+   |
| |                   |   |                   |   |
| |   CRUD Handlers   |   |   Public Folder   |   |
| |                   |   |                   |   |
| +---------+---------+   +---------+---------+   |
|           |                       |             |
|           v                       v             |
| +---------+-----------------------+---------+   |
| |                   File System (fs-extra)       |
| |                                                 |
| | +-------------------+   +-------------------+   |
| | |                   |   |                   |   |
| | |   items.json      |   |   index.html      |   |
| | |                   |   |                   |   |
| | +-------------------+   +-------------------+   |
| +-----------------------------------------------+ |
+---------------------------------------------------+
```

## Components

- **Client (UI)**: The user interface that interacts with the server.
- **Express Server**: The server that handles API requests and serves static files.
  - **API Endpoints**: Endpoints for CRUD operations.
  - **Static Files**: Serves static files from the public folder.
  - **CRUD Handlers**: Functions that handle create, read, update, and delete operations.
- **File System (fs-extra)**: Manages file operations.
  - **items.json**: Stores the data for the items.
  - **index.html**: The main HTML file served to the client.

## Data Flow

1. The client sends a request to the Express server.
2. The server processes the request through the appropriate API endpoint.
3. The CRUD handlers interact with the file system to read or write data.
4. The server responds to the client with the requested data or confirmation of the operation.

```

```
