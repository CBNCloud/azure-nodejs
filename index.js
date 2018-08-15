var http = require('http');  
var url = require('url');  
var fs = require('fs');  
var server = http.createServer(function(request, response) {  
    var path = url.parse(request.url).pathname;  
    switch (path) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/html'  
            });  
			// response.write('<html><head></head><body>');
            // response.write("<h1>Welcome to CBNCloud Azure Stack Workshop.</h1><br/> <img src='https://i0.wp.com/technology.amis.nl/wp-content/uploads/2016/04/my-first-nodejs-service.png'>");  
			// response.write('</body></html>');
            
            fs.readFile('background.html', function(err, data){
                  
                if(err){
                  return console.log(err);
                }
              response.end(data);
              });

            //response.end();  
            break;  
        case '/html1.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/html2.html':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        case '/joy.php':  
            fs.readFile(__dirname + path, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/plain'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("halaman yang anda cari tidak ada - 404");  
            response.end();  
            break;  
    }  
});  



var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
