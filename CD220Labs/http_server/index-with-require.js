const http = require('http');
const today = require('./today');

const requestListener = function (req, res) {
  res.writeHead(200);
  let dateVal = today.getDate();
  let time = dateVal.getHours()
  let greeting = "It is certainly a time"

  switch (true) {
    case time > 6 && time < 12:
        greeting = 'Good Morning!';
        break;
    case time > 12 && time < 18:
        greeting = 'Good Afternoon!';
        break;
    case time > 18 && time < 20:
        greeting = 'Good Evening!';
        break;
    case time > 20 && time < 24:
        greeting = 'Good Night!';
        break;
    default:
        break;
    }

  res.end(`Hello, World! ${greeting}`);
}



const port = 8080;
const server = http.createServer(requestListener);
console.log('server listening on port: ' + port);
server.listen(port);