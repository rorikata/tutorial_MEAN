# tutorial6 6/3/2017

basic use of angular.js


```
<html ng-app>
  <head>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
  </head>
  <body>
    <div>
      <label>Name:</label>
      <input type="text" ng-model="yourName" placeholder="Enter a name here">
      <hr>
      <h1>Hello {{yourName}}!</h1>
    </div>
  </body>
</html>
```

light weight node.js server
```
var http = require('http');
http.createServer(function (req, res) {
  // res: send as response
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}.listen(1337, '127.0.01'); // run on this port
Console.log('Server running at http://127.0.0.1:1337/');
```

Express
- "minimal and flexible node.js web application framework"
- Abstracts away a lot of low level logic (e.g. for HTTP requests)
- Helps organize your Node app into an MVC structure

install express
```
npm install -g express
```

MongoDB
- The top NoSQL Database
- Open source, maintained by MongoDB(formerly 10gen)
- JSON like syntax
- Key-value stores
