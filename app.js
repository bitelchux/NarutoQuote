var express=require('express');
var path=require('path');
var app=express();

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'/views/index.html'));
})

var server = app.listen(3000,function(){
  console.log('Listening on Port 3000');
})
