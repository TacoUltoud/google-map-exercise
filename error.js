// app.use(function(req,res,next){
//   var err = new Error("something error");
//   err.code = 519;
//   next(new Error("something error"));
//   next(err);
// })


// app.get("/me", function(req, res, next){
//   return next("something error");
//   // var b = 12;
//   // var result = a + b;
//   // a = result;
//   // res.send(result.toString());
// });

// app.use(function(error,req,res,next){      // 錯誤處理  4xx serial error espically 404
//   res.redirect("https://github.com/aaa/bbb");
// });

// app.use(function(error,req,res,next){      // 5xx serial error  拋錯盡量使用next 而不是try catch
//   console.log(error);
//   res.send("error");                       // 不要在每個middleware拋錯
// });