const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
    console.log(request.url);
    response.end('Hello, <name> from <city>!');
  };

  const server = http.createServer(requestHandler);

  server.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });