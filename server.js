// // console.log("server file is running");

// // function add(a,b){
// //     return a+b;
// // }

// // var result = add(2,7);
// // console.log(result);

// // var add = function(a,b){
// //     return a+b;
// // }

// // var add = (a,b) => {return a+b}

// var add = (a,b) =>a+b;

// var result = add(3,4);
// console.log(result);

// (function(a,b){
//     console.log('prince is added')
// })();   // self run function 

// //call back is a function calling another function 

// function callback(){

//     console.log('this is callback after printing result');
// }

// //callback can be named anything 

// const add = function(a,b,callback){
//     var result = a+b;
//     console.log('result: '+result); //main function work complete 
//     callback();
// }

// add(3,4,callback);


//another way of writing callback function

// const add = function(a,b,ankit){
//     var result = a+b;
//     console.log('result: '+result);
//     ankit();
// }

// // add(2,4,function(){
// //     console.log('inside callback ankit...')
// // })
// //OR 

// add(2,3,() => console.log('Add complete'));

// using OS and fs inbuild functions 

// var fs = require('fs');
// var os = require('os');

// var user = os.userInfo();
// console.log(user.username);

// fs.appendFile('greeting.txt','Hi '+user.username+'!\n',()=>{
//     console.log('file is created');
// });

// console.log(fs);

// const notes = require('./notes.js');
// console.log('server file is available');
// var age = notes.age;
// var result = notes.addNumber(age+18,10);


// console.log(age)
// console.log('result is now ',result);


// var _ = require('lodash');

// var data = ["person","person",1,2,2,1,'name','age']
// var filter = _.uniq(data);
// console.log(filter)
