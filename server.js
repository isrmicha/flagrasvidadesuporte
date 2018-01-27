const express = require('express')
const app = express()
var path    = require("path");
app.use(express.static('public'));
app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port '+process.env.PORT || 3000))