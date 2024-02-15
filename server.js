const express = require('express')
const app = express()
const port = process.env.PUBLIC_PORT || 3000

app.use(express.json())
app.get('/',(req,res)=>{
    res.json({message:"HI"})
})

if (require.main === module) {
    app.listen(port,() => {
      console.log(`Server running on port: ${port}`);
    });
}
  
module.exports = app;