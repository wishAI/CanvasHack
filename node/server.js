var http = require("http");
var url = require("url");

var URL = 'https://canvas.ubc.ca';
var TOKEN = '11224~pIuXX8MsO8QLNmHvmr1lFOIgd3FqM6YGYMyf52qOQIj98veX39kbhcyho5d2JUmB'
var TOKEN_QUERY = 'access_token=' + TOKEN;


const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
  'Access-Control-Max-Age': 2592000, // 30 days
  'Content-Type': 'application/json'
  /** add other headers as per requirement */
};

function start(route) {
  async function onRequest(req, res) {
    var path = url.parse(req.url).path;

    console.log(path);

    res.writeHead(200, headers);
    var p = route(path, res);
    var data = await p;
    res.write(data);
    res.end();
  }

  http.createServer(onRequest).listen(8888);
}

exports.start = start;
