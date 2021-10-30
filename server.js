const http = require('http');
const port = 8000;

const requestHandler = (request, response) => {
    console.log(request.url);
    const parsedUrl = parse(request.url, true);

    const name = parsedUrl.query.name;
    const city = parsedUrl.query.city;

    if(name && city) {
      response.end(`Hello ${name} from ${city}`);
    } else {
      response.end('Please provide name and city parameters');
    }
  };

  const server = http.createServer(requestHandler);

  server.listen(port, (err) => {
    if (err) {
      console.error('Something bad happened');
    } else {
      console.log(`server is listening on ${port}`);
    }
  });