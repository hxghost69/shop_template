//引入mongoose
var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var productSechema=new Schema({
    "productId":{type:String},
    "productName":String,
    "salePrice":Number,
    "checked":String,
    "productNum":Number,
    "productImage":String
});
module.exports=mongoose.model('Good',productSechema);