var http = require('http');

module.exports = function(config, data, callback){

    if (typeof config !== "object") return callback("config is not an object");
    if (typeof data !== "object") return callback("data is not an object");
    if (undefined == config.host) return callback("API host not configured");
    if (undefined == config.port) config.port = 80;
    if (undefined == config.path) config.path = '/';

    var http_data = JSON.stringify(data);

    console.log(data);

    var http_options = {
        host: config.host,
        port: config.port,
        path: config.path,
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Content-Lenght': Buffer.byteLength(http_data)
        }
    };

    var http_request = http.request(http_options, function(res){
        res.setEncoding('utf8');
        res.on('data', function(chunk){
            console.log('Response:', chunk);
        });
        res.on('end', function(){
            console.log('Request end');
        });
    });

    http_request.write(http_data);
    http_request.end();

};
