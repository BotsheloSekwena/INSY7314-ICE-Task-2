# INSY7314 ICE Task 2 - Structured Backend API with Express - Activity 1

## Overview

A well-structured RESTful API built with Express.js for the Information Systems 3D module (INSY7314). This API demonstrates best practices in backend development including proper folder structure, input validation, CORS configuration, and centralized error handling.

**Assignment:** ICE Task 2 - Learning Unit 2 Theme 1 Activity  
**Module:** INSY7314 - Information Systems 3D

---

## Features

- ✅ Route, Controller, Middleware architecture
- ✅ Input validation using Joi with custom error messages
- ✅ Controlled CORS configuration
- ✅ Central error handler
- ✅ In-memory data storage with auto-generated IDs
- ✅ CRUD operations for Gadgets resource

---

## Technology Stack

| Technology | Purpose |
|------------|---------|
| Node.js | JavaScript runtime |
| Express.js | Web framework |
| Joi | Input validation |
| CORS | Cross-Origin Resource Sharing |
| Dotenv | Environment variables |
| Nodemon | Development auto-reload |

---

## Resource: Gadgets

Each gadget has **6 attributes** (5 + id):

| Attribute | Type | Description |
|-----------|------|-------------|
| `id` | string | Unique identifier (auto-generated) |
| `name` | string | Gadget name |
| `brand` | string | Manufacturer/brand |
| `price` | number | Price in USD |
| `category` | string | Product category |
| `stock` | number | Quantity in stock |

---

## API Endpoints

### 1. System Checks

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| GET | `/` | Root route - Welcome message | 200 OK |
| GET | `/health` | Server health check | 200 OK |

### 2. Resource Retrieval (GET)

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| GET | `/api/gadgets` | Fetch all gadgets | 200 OK |
| GET | `/api/gadgets/:id` | Fetch a gadget by ID | 200 OK / 404 Not Found |

### 3. Resource Creation (POST)

| Method | Endpoint | Description | Status |
|--------|----------|-------------|--------|
| POST | `/api/gadgets` | Add a new gadget (with validation) | 201 Created / 400 Bad Request |

---

## Validation Rules

| Field | Rules | Error Message |
|-------|-------|---------------|
| `name` | Required, string, min 1 character | "Name is required" |
| `brand` | Required, string, min 1 character | "Brand is required" |
| `price` | Required, positive number | "Price must be greater than 0" |
| `category` | Required, string, min 1 character | "Category is required" |
| `stock` | Required, non-negative integer | "Stock cannot be negative" |

---

## Sample Request Bodies (POST /api/gadgets)

### Add 5 New Gadgets to In-Memory Storage

#### Gadget 1: Gaming Laptop Pro

```json
{
  "name": "Gaming Laptop Pro",
  "brand": "GameTech",
  "price": 1599.99,
  "category": "Computers",
  "stock": 25
}
