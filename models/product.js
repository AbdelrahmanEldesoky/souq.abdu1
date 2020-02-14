const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    imgPath : {
        type : String,
        require : true
    },
    productName : {
        type : String,
        require : true
    },
    price : {
        type : String,
        require : true
    }
});

module.exports = mongoose.model('product',productSchema);


