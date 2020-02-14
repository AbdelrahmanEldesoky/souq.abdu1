var express = require('express');
var router = express.Router();
const product = require('../models/product');
const productinit =require('../init/productInt')
/* GET home page. */
router.get('/', function(req, res, next) {
  product.find({} ,(error,doc)=>
 {
   if(error)
   {console.log(error)}
    console.log(doc)
   const productArr =[];   
   const cheak = 3;
   for(var i=0 ; i < doc.length ; i += cheak) //// [[{},{},{}][{},{},{}]]
   {
     
     productArr.push(doc.slice(0,i)); 
   }
   res.render('index', { title: 'souq.Abdu' , products : productArr}); 
   })
});

module.exports = router;
