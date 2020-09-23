!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n){e.exports=require("express")},function(e,n){e.exports=require("mongoose")},function(e,n){e.exports=require("bcryptjs")},function(e,n,t){var r=t(1),o=r.Schema({name:String,email:String,password:String});e.exports=r.model("User",o)},function(e,n,t){var r=t(0),o=t(1);t(5);var i=t(6),u=t(7),s=t(3),a=t(8),c=(t(2),t(9)(u)),f=t(10),l=t(11);t(12)(f,e=>s.find({email:e}).exec().then(e=>e).catch(e=>console.log(e)),e=>s.find({_id:e}).exec().then(e=>e).catch(e=>console.log(e)));var d=r(),v=t(14),p=t(16),y=t(18),h=t(20);d.use(i.json()),d.use(i.urlencoded({extended:!0})),d.use((function(e,n,t){n.setHeader("Access-Control-Allow-Origin","http://localhost:3000"),n.setHeader("Access-Control-Allow-Methods","GET,POST,OPTIONS,PUT,PATCH,DELETE"),n.setHeader("Access-Control-Allow-Headers","X-Requested-With,Content-Type"),n.setHeader("Access-Control-Allow-Credentials",!0),t()})),d.use("/statistics",v),d.use("/temperature",p),d.use("/reports",y),d.use("/machine",h),o.connect(process.env.DB_CONNECT,{useNewUrlParser:!0,useUnifiedTopology:!0},()=>console.log("DB Connected!"));var g=o.connection;d.use(u({name:"sid",resave:!1,saveUninitialized:!1,secret:"secretcookie$%^",cookie:{maxAge:72e4,sameSite:!0,secure:!1},store:new c({mongooseConnection:g})})),d.use(f.initialize()),d.use(f.session()),d.use(l()),d.use("/user",a),d.get("/isAuthenticated",(e,n)=>{e.isAuthenticated()?n.json({isAuthenticated:!0}):n.json({isAuthenticated:!1})}),d.post("/login",(function(e,n,t){f.authenticate("local",(function(r,o,i){if(r&&n.json(r),!o)return n.json(i);e.logIn(o,(function(e){return e?t(e):n.json({user:o})}))}))(e,n,t)})),d.listen(3e3)},function(e,n){e.exports=require("dotenv/config")},function(e,n){e.exports=require("body-parser")},function(e,n){e.exports=require("express-session")},function(e,n,t){function r(e,n,t,r,o,i,u){try{var s=e[i](u),a=s.value}catch(e){return void t(e)}s.done?n(a):Promise.resolve(a).then(r,o)}var o=t(0).Router(),i=t(3);t(2);o.get("/",function(){var e,n=(e=function*(e,n){try{var t=yield i.find();n.json(t)}catch(e){n.json("Nie ma usera")}},function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function s(e){r(u,o,i,s,a,"next",e)}function a(e){r(u,o,i,s,a,"throw",e)}s(void 0)}))});return function(e,t){return n.apply(this,arguments)}}()),e.exports=o},function(e,n){e.exports=require("connect-mongo")},function(e,n){e.exports=require("passport")},function(e,n){e.exports=require("connect-flash")},function(e,n,t){function r(e,n,t,r,o,i,u){try{var s=e[i](u),a=s.value}catch(e){return void t(e)}s.done?n(a):Promise.resolve(a).then(r,o)}var o=t(13).Strategy,i=t(2);e.exports=function(e,n,t){e.use(new o({usernameField:"email"},function(){var e,t=(e=function*(e,t,r){var o=yield n(e);if(!o.length)return r(null,!1,{message:"No user with that email"});if(o.length)try{i.compare(t,o[0].password).then(e=>!0===e?r(null,o):r(null,!1,{message:"Password incorrect"}))}catch(e){return r(e)}},function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function s(e){r(u,o,i,s,a,"next",e)}function a(e){r(u,o,i,s,a,"throw",e)}s(void 0)}))});return function(e,n,r){return t.apply(this,arguments)}}())),e.serializeUser((e,n)=>{n(null,e[0]._id)}),e.deserializeUser((e,n)=>{n(null,t(e))})}},function(e,n){e.exports=require("passport-local")},function(e,n,t){function r(e,n,t,r,o,i,u){try{var s=e[i](u),a=s.value}catch(e){return void t(e)}s.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function s(e){r(u,o,i,s,a,"next",e)}function a(e){r(u,o,i,s,a,"throw",e)}s(void 0)}))}}var i=t(0).Router(),u=t(15);i.get("/",function(){var e=o((function*(e,n){try{var t=yield u.find();n.json(t)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),i.post("/",function(){var e=o((function*(e,n){var t=new u({day:e.body.day,week:e.body.week,year:e.body.year,temperature:e.body.temperature,humidity:e.body.humidity,energy:e.body.energy});try{var r=yield t.save();n.json(r)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),e.exports=i},function(e,n,t){var r=t(1),o=r.Schema({day:String,week:String,year:String,temperature:String,humidity:String,energy:String});e.exports=r.model("Statistics",o)},function(e,n,t){function r(e,n,t,r,o,i,u){try{var s=e[i](u),a=s.value}catch(e){return void t(e)}s.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function s(e){r(u,o,i,s,a,"next",e)}function a(e){r(u,o,i,s,a,"throw",e)}s(void 0)}))}}var i=t(0).Router(),u=t(17);i.get("/",function(){var e=o((function*(e,n){try{var t=yield u.find();n.json(t)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),i.post("/",function(){var e=o((function*(e,n){var t=new u({temperature:e.body.temperature,date:e.body.date});try{var r=yield t.save();n.json(r)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),e.exports=i},function(e,n,t){var r=t(1),o=r.Schema({temperature:String,date:{type:Date,default:Date.now}});e.exports=r.model("Temperature",o)},function(e,n,t){function r(e,n,t,r,o,i,u){try{var s=e[i](u),a=s.value}catch(e){return void t(e)}s.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function s(e){r(u,o,i,s,a,"next",e)}function a(e){r(u,o,i,s,a,"throw",e)}s(void 0)}))}}var i=t(0).Router(),u=t(19);i.get("/",function(){var e=o((function*(e,n){try{var t=yield u.find();n.json(t)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),i.post("/",function(){var e=o((function*(e,n){var t=new u({quarter:e.body.quarter,savedEnergy:e.body.savedEnergy,savedMoney:e.body.savedMoney});try{var r=yield t.save();n.json(r)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),e.exports=i},function(e,n,t){var r=t(1),o=r.Schema({quarter:String,savedEnergy:String,savedMoney:String});e.exports=r.model("Reports",o)},function(e,n,t){function r(e,n,t,r,o,i,u){try{var s=e[i](u),a=s.value}catch(e){return void t(e)}s.done?n(a):Promise.resolve(a).then(r,o)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(o,i){var u=e.apply(n,t);function s(e){r(u,o,i,s,a,"next",e)}function a(e){r(u,o,i,s,a,"throw",e)}s(void 0)}))}}var i=t(0).Router(),u=t(21);i.get("/",function(){var e=o((function*(e,n){try{var t=yield u.find();n.json(t)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),i.post("/",function(){var e=o((function*(e,n){var t=new u({energy:e.body.energy,warranty:e.body.warranty,working:e.body.working,service:e.body.service});try{var r=yield t.save();n.json(r)}catch(e){n.json({message:e})}}));return function(n,t){return e.apply(this,arguments)}}()),e.exports=i},function(e,n,t){var r=t(1),o=r.Schema({energy:String,warranty:String,working:String,service:String});e.exports=r.model("Machine",o)}]);