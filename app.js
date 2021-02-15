const express = require("express")
const gun = require("gun")
const app = express()
const port = 3000
const https = require('https')
const fs = require('fs')
const path = require('path')

const sslServer =https.createServer(

    {
        key: fs.readFileSync(path.join(__dirname, 'SSL Cert', 'server.key')),
        cert: fs.readFileSync(path.join(__dirname,'SSL Cert', 'server.cert')),
    },
   app
)

sslServer.listen(port,() =>{
    console.log("Gun server is listening at port 3000" )})


app.get('/', (req, res) =>{
    res.sendFile('.' + '/index.html', { root: __dirname});
})