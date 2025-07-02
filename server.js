import express from 'express';
import bodyParser from 'body-parser';

const app = express();
const PORT = process.env.PORT || 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.get('/', (req, res) => {
  res.send('Hello, World!');
}
);
app.post('/data', (req, res) => {
  const data = req.body;
  console.log('Received  response:', data);
  res.status(200).send('Data received successfully');
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}
);
