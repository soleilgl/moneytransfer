var express= require ('express');
var router = express.Router();
var User=require('../models/User');
var Category=require('../models/Category')


var responseData;
router.use(function(req,res,next){
  responseData ={
    code : 0,
    message :''
  }
  next();
})

router.post('/', function(req,res,next)
{
  var email = req.body.email;
  if(email=='')
     {
       responseData.code =1;
       responseData.message='invalid information'
       res.json(responseData);
       return;
     }
User.findOne({
  email:email
}).then(function(userInfo){
   if(!userInfo)
    {
     responseData.code=2;
     responseData.message='invalid email address';
     res.json(responseData);
     return;
   }else{
     responseData.code="";
     responseData.message=userInfo.name
     res.json(responseData);
     return;
        }
    })
})

router.post('/next', function(req,res)
{
  var newinfo
  var Cur=new Date()
  var Tday=(Cur.getMonth()+1)+"/"+(Cur.getDate())+"/"+(Cur.getFullYear());
  var receiverEmail=req.body.receiverEmail;
  var amount=req.body.amount;
  var message=req.body.message;
  var reason=req.body.reason
      User.findOne({
      email:receiverEmail
    }).then(function(userinfo){
      newinfo=new Category({
      receiver:userinfo.name,
      receiverEmail:req.body.receiverEmail,
      amount:req.body.amount,
      message:req.body.message,
      time:Tday
    }).save().then(function(){
              responseData.code="100";
              res.json(responseData);
              return;
      })
    })
})

router.get('/', function(req,res){
  Category.find().then(function(categories){
  res.render('pages/nodejs_pages/sendMoneyScreen.ejs', {categories: categories});
});
})


router.get('/success',function(req,res){
 res.render('pages/nodejs_pages/successScreen.ejs')
})

router.get('/clear', function(req,res)
{
  res.render('pages/nodejs_pages/sendMoneyScreen.ejs');
})

router.get('/transaction', function(req,res)
{
    res.render('pages/nodejs_pages/transactionhistorypage.ejs')
})

router.get('/resend', function(req,res,next)
{
  res.render('pages/nodejs_pages/sendMoneyScreen.ejs');
})

router.get('/back', function(req,res,next)
{
  res.render('pages/nodejs_pages/initialscreen.ejs');
})

module.exports = router;
