import express from 'express';
import data from './data';

const app = express();
const cors = require('cors');

app.use(cors());

app.get('/api/products', (req, res) => {
    console.log("Hey");
    res.send(data.products);
})

app.listen(5000, () => { console.log("Server started at http://localhost:5000") });