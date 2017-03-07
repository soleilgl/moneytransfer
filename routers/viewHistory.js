var express= require ('express');
var router = express.Router();
var User=require('../models/User');
var Category=require('../models/Category')

router.get('/', function(req,res){
  Category.find().sort({_id:-1}).then(function(categories){
  res.render('pages/nodejs_pages/transactionhistorypage.ejs', {categories: categories});
});
})

module.exports = router;
