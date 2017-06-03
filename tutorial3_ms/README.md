
# tutorial3_ms 6/3/2017
## Node.js and Express

Node.js
- Based on Chromium's V8 Javascript Runtime
- Single Threaded Runtime
- Optimized for I/O
Express
- Privides higher-level 'Routing' functionality over the raw http server
- Interact with HTTP requests and responses more easily with higher-level apis for headers and response bodies
- Minimalistic fast and unopinionated
Node Package Manager(npm)
- Command-line package manager for useful libraries
- Akin to pip for python or gem for Ruby
- Comes bundled with node.js installation
Package.json
- Manifest for all required packages to run project
- Specifies developer dependencies as well as production dependencies
- Defines Entrypoint for CI Tests
What is routing?
- Provides a path to your server for clients to use like:
```
GET - http://chirp.azurewebsites.net/auth/login
```
Adding Authentication
- Using Passport authentication library
- Implementing Signup, Login and Logout routes
- In-memory for now...
Testing the APIs
- Advanced Rest Client for Chrome
- Postman Client for Chrome
Express Routing Features
- Create 'mini' routers for each major section in your api, linking the URL request with the code to handle it
- Easily implement RESTful conventions using ':' notation to specify models/objects base on URL
- Easily respond with all types of data such as JSON, xml etc.
Middleware
- Code that can be put in the 'middle' of your client making a request and the route-specific code the handles the response
- For example, you can have middleware to ensure that certain subsets of your API are authenticated
