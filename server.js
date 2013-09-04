var http = require("http");
var url = require("url");

function start(route, handle) { // the function start calls route and handle
    function onRequest(request, response) { // the onRequest function will hellp start the server.
        var pathname = url.parse(request.url).pathname;
        console.log("Let's keep it going with " + pathname);

        response.writeHead(200, {"Content-Type": "text/plain"}); // This assigns the type and text
        var content = route(handle, pathname);
        response.write("Hello World and all that Jazz!"); // This writes our the text on the web page.
        response.end(); // This ends the server. There is no more information to be received.
    }
    http.createServer(onRequest).listen(8888); // The server is created and we can access it locally at localhost:8888
    console.log("Engines are starting up now!"); // This prints out in the terminal and lets me know the server has started and works correctly. 
}

exports.start = start;


