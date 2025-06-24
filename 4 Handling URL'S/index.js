// to build an http server there is a module called http in node.js
const http = require("http") ;
const fs = require("fs")
const url = require("url") ;
// it takes a callback function that will be called every time a request is made to the server
// the callback function takes two arguments: request and response
const myserver = http.createServer((req, res) => {
    const log = `${Date.now()} : New Req Received from ${req.url}\n`; // log file gets created
    const myUrl = url.parse(req.url, true);
    console.log(myUrl);
    // fs.appendFile is used to append data to a file
    fs.appendFile("log.txt", log, (err, data) => {
        if (err) {
            res.end("Internal Server Error");
            return;
        }
        switch (myUrl.pathname) {
            case '/':
                res.end("home page");
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi, ${username}`);
                break;
            default:
                res.end("404 Not found");
        }
    });
});
//to run server we need a port number
// a server can only run on one port at a time

myserver.listen(8000, () => {
    console.log("Server Started !");
});
