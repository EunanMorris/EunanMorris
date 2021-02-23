const express = require("express")
const gun = require("gun")
const app = express()
const port = 3000
const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

    server.listen(process.env.PORT,() =>{
    console.log("Gun server is listening at port 3000" )})


app.get('/', (req, res) =>{
    res.sendFile('.' + '/index.html', { root: __dirname});
})