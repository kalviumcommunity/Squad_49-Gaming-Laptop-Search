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
  const {Username}= req.query
  const users = Username ? {Username}:{}
  let value = await laptopData.find(users)
  res.send(value);
})

app.post('/add_laptop', async (req, res) => {
  let value = req.body;
  // console.log(value);
  let data = await laptopData.create(value);
  res.status(200).json({ message: 'Laptop added successfully', data });
});

app.delete('/laptops_api/:id',(req,res)=>{
  const id = req.params.id
  laptopData.findByIdAndDelete({_id : id}).then(i=>res.json(i))
})


app.get('/update/:id',(req,res)=>{
  const id = req.params.id
  laptopData.findById(id).then(i=>res.json(i)).catch(e=>console.log(e))
})

app.put('/update/:id', (req, res) => {
  const id = req.params.id;
  const updateData = {
    ModelName: req.body.ModelName,
    Processor: req.body.Processor,
    Ram: req.body.Ram,
    Storage: req.body.Storage,
    InternalGraphicCard: req.body.InternalGraphicCard,
    Price: req.body.Price,
    ImageLink: req.body.ImageLink,
  };
  laptopData.findByIdAndUpdate({ _id: id},updateData)
    .then(()=>res.json({message:'Laptop updated successfully'}))
});


app.use(express.json());

mongoose.connect(process.env.MONGO_URI, options);

const dbConnectStatus = () => mongoose.connection.readyState===1;


const routes = require('./routes');
app.use('/', routes);

app.get('/', (req, res) => {

  res.json({ "dbConnectStatus":dbConnectStatus() });

});

const logins = require('./models/login.js')

app.get("/login_data",async(req,res)=>{
  let value = await logins.find()
  res.send(value);
})

const cookieParser = require('cookie-parser')
app.use(cookieParser()) 

const jwt = require('jsonwebtoken')
const key = process.env.SECRET_KEY

app.post('/logins', async (req, res) => {
    let val = req.body;
    let loginData = await logins.create({
      Username: val.Username,
      Password: val.Password
    });
    const token = jwt.sign({ userId: loginData._id, email: loginData.Username }, key,{expiresIn:"24h"});
    res.cookie('token', token);
    res.json({ message: "Add Login Credentials",token });
});


app.get('/login_data/username',async(req,res)=>{
  const username = await logins.distinct('Username')
  const users = username.filter(Username=>Username)
  res.json({Usernames: users})
})

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
  });
}
module.exports = app;