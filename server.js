const express = require('express');
const app = express()
var request = require('request');
setInterval(()=>{
	request('http://flagrasvidadesuporte.herokuapp.com/', function (error, response, body) {
  console.log('Pingando em ' + new Date());
});
},15 * 60 * 1000);

app.use(express.static('public'));
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port  '+ 3000))