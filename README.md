# Social App Backend – Starter

## Requirements
- Node.js LTS
- MongoDB running locally or a MongoDB connection URI

## Setup
1. Open this folder in VS Code.
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env`.
4. Update environment values, especially `MONGODB_URI`.
5. Make sure MongoDB is running.
6. Run: `npm run dev`
7. Open `http://localhost:3000/`.

Expected response:
`{ "success": true, "message": "Social App API is running" }`

## Scripts
- `npm run dev` – development server
- `npm run build` – compile TypeScript
- `npm start` – run compiled server

## Included
Express, TypeScript, environment example, MongoDB connection, starter route,
and folders prepared for Auth, User, Exceptions, Middleware, Services and Utils.

The remaining course topics will be implemented step by step.
