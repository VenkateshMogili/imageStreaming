const express = require('express');
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;
app.get("/test",(req,res)=>{
  const path = `${__dirname}/img/background.png`;
  //static loading
  // res.sendFile(path);

  // stream loading
  res.writeHead(200,{'content-type':'image/png'});
  fs.createReadStream(path).pipe(res);
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
