const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const port = process.env.PUBLIC_PORT || 3000;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true
};

const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors')
app.use(cors())

const laptopData = require('./models/laptops.js')

app.get('/laptops_api',async(req,res)=>{
  let value = await laptopData.find()
  res.send(value);
})

app.post('/add_laptop', async (req, res) => {
  let value = req.body;
  console.log(value);
  let data = await laptopData.create(value);
  res.status(200).json({ message: 'Laptop added successfully', data });
});

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, options);

const dbConnectStatus = () => mongoose.connection.readyState===1;


const routes = require('./routes');
app.use('/', routes);

app.get('/', (req, res) => {

  res.json({ "dbConnectStatus":dbConnectStatus() });

});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
}
module.exports = app;