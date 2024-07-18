# Simple CRUD Application

This is a basic CRUD (Create, Read, Update, Delete) application built with Node.js, Express.js, and MongoDB.

## Features
- Create new items
- Read existing items
- Update items
- Delete items

## Requirements
- [Node.js](https://nodejs.org/)

## Setup

1. Clone the repository:
    ```bash
    git clone [https://github.com/SamuelPiasecki/learning-node-express-mongo.git]
    cd learning-node-express-mongo
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm run dev
    ```

The app will run at `http://localhost:3000`.

## API Endpoints

- **Create:** `POST /api/products`
- **Read All:** `GET /api/products`
- **Read One:** `GET /api/products/:id`
- **Update:** `PUT /api/products/:id`
- **Delete:** `DELETE /api/products/:id`
