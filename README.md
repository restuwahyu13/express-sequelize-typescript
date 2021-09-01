# FullStack Development

FullStack freelance task from malaysia tech company using MERN (MYSQL, EXPRESS, REACT, NODE).

## Command App

```json
"scripts": {
  "cinstall": "cd client && npm install",
  "cstart": "npm start --prefix client",
  "cbuild": "npm run build --prefix client",
  "build": "npm run cleanup && npm run compiler",
  "test": "cross-env NODE_ENV=test jest --runInBand --forceExit",
  "start": "node dist/server.js",
  "dev": "cross-env NODE_ENV=development tsnd --poll --respawn --watch src/**/*.{ts} src/server.ts",
}
```
