import express from 'express'
import middleware from './src/middleware/middleware.js';
const app = new express();

middleware(app);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Listening on port ${port}...`));