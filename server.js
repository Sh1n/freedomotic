var http = require('http');
var fs = require('fs');
var url = require('url'),
    path = require('path');

var mimeTypes = {
    "html": "text/html",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "png": "image/png",
    "js": "text/javascript",
    "css": "text/css",
    "json": "text/json"};

http.createServer(function(req, res) {
    var uri = url.parse(req.url).pathname;
    var filename = path.join(process.cwd(), uri);
    fs.exists(filename, function(exists) {
        if(exists){
            var mimeType = mimeTypes[path.extname(filename).split(".")[1]];
            res.writeHead(200, mimeType);

            var fileStream = fs.createReadStream(filename);
            fileStream.pipe(res);
        }else {
            console.log("not exists: " + filename);
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.write('404 Not Found\n');
            res.end();
        }
        

    }); //end path.exists
}).listen(1337);

console.log('Server running at http://127.0.0.1:1337/');
