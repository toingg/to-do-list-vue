import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req: express.Request, res: express.Response) => {
  res.send('Hello Modern TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
