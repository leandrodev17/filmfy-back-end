import { Request, Response, } from 'express';

const express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')
const app = express()

const port = 3000

const routes = require('./src/router')

app.use(cors());
app.use(bodyParser.json())
// app.use((req: Request , res: Response, next: any) => {
//   console.log('caiu no meio');
  
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');

//   app.use(cors());
//   next();
// })


// Api's
app.use(routes)


app.listen(port, () => {
  console.log(`Back-End Online http://localhost:${port}`)
})