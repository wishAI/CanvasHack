
var URL = 'https://canvas.ubc.ca/api/v1';
var TOKEN = '11224~pIuXX8MsO8QLNmHvmr1lFOIgd3FqM6YGYMyf52qOQIj98veX39kbhcyho5d2JUmB'
var TOKEN_QUERY = 'access_token=' + TOKEN;

const https = require('https');
const bl = require('bl');

function route(path, res) {

  var options = {
    host: URL, 
    port: 80,
    path: '/api/v1' + path + '&' + TOKEN_QUERY,
    method: 'GET'
  }

  console.log(URL + path + TOKEN_QUERY);


    // r.on('end', function() {
    //   res.end();
    // });

    return new Promise((resolve, reject) => {
      var req= https.get(URL + path + '&' + TOKEN_QUERY, function(r) {
        r.setEncoding('utf8');
        r.pipe(bl((err, data) => {
          if(err) {
            reject(err);
          }
          resolve(data);
        }))  
        r.on('data', function(chuck) {
          // res.writeHead(200, {'Content-Type': 'application/json'});
          // res.end();
      });
    })

  });
  
  req.end();
  
  
  // res.write('dhfjf');
  // res.end();
}

exports.route = route;