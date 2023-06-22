import express from 'express';
// import routeCategory from './routes/Categories';
// import { routeProduct } from './routes/Products';
import routeC from './routes/Categories.js';
import routeP from './routes/Products.js';

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello world!');
});

//import routes
app.use('/api', routeC);
app.use('/api', routeP);

app.listen(3000, () => {
  console.log('server on port 3000');
});
