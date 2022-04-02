const express = require("express");
const app = express()
const bodyParser = require("body-parser")
const proxy = require("./router/proxy")
const cors= require("cors");
// const { json } = require("body-parser");
// const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./swagger.json');
// const expressOasGenerator = require('express-oas-generator')
const PORT = 4500 || process.env.PORT
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors())
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// expressOasGenerator.init(app, {});

app.use('/proxy',proxy);


app.listen(PORT,(req,res)=>{

    console.log("You are listening at port : "+PORT)
})
