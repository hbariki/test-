// app.js
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import treeRoutes from './src/api/routes/treeRoutes.js';

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = 3000;

app.use('/api', treeRoutes);

app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});

export default app;
