const express = require('express');
const app = express();
const fs = require("fs");
const port = process.env.PORT || 3000;
app.use(express.static(__dirname + '/public'));
app.get("/",(req,res)=>{
  res.sendFile(`${__dirname}/public/index.html`);
});
app.listen(port, () => console.log(`Server is running on port ${port}`));
