const product = require('../models/product');
const mongoose = require('mongoose');

 
//connected to db
//connected to db
mongoose.connect('mongodb+srv://abdu:180daragaet7ol@abdu-xzn4y.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  },(error)=>{
    if(error)
    {console.log(error)}
    console.log('connected to db');
  });
  

const products = 
[
    new product({
        imgPath : "/images/Xiaomi-Mi-9T-Pro-1.jpg",
        productName : "Mi 9T",
        price: "5500"
     
    }),
    new product({
        imgPath : "/images/Xiaomi-Mi-9T-Pro-1.jpg",
        productName : "Mi 9T",
        price: "5500"
     
    }),
    new product({
        imgPath : "/images/Xiaomi-Mi-9T-Pro-1.jpg",
        productName : "Mi 9T",
        price: "5500"
     
    })
   
]
var done = 0;
for(var i=0 ;i<products.length;i++)
{
    products[i].save((error,doc)=>
    {
        if(error)
        {
            console.log(error)
        }
       
        done++
        if(done === products.length)
        {
            mongoose.disconnect();
        }
        console.log(doc)
    })
   
}



