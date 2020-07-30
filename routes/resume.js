var express = require('express');
var router = express.Router();
const fs = require("fs");

/* GET home page. */
router.get('/', function(request, response){
  var tempFile="/Users/jerrypeng/Desktop/PersonalWeb/public/pdf/JieruiPeng_Resume.pdf";
  fs.readFile(tempFile, function (err,data){
     response.contentType("application/pdf");
     response.send(data);
  });
});

module.exports = router;
