# FullStack Development

FullStack freelance task from malaysia tech company using MERN (MYSQL, EXPRESS, REACT, NODE).

## Command App

```json
"scripts": {
  "cstart": "npm start --prefix client",
  "cbuild": "npm run build --prefix client",
  "build": "npm run cleanup && npm run compiler",
  "test": "cross-env NODE_ENV=test jest --runInBand --forceExit",
  "dev": "tsnd --poll --respawn --watch src/**/*.{ts} src/server.ts""
}
```