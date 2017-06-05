
# tutorial5_ms 6/4/2017

Routing
- Create app with multiple views
- Must pass 'ngRoute' module to app
- Detects url and uses the appropriate template
Creating Partials
- Sections of the page to be rendered as-needed
- Rendered inside ng-view
$http
- Core Angular service
- Returns a promise with success and error callbacks
- $http.get('/someUrl').success(successCallback);
  - $http.get
  - $http.head
  - $http.post
  - $http.put
  - $http.delete
Saving authentication status
- Save authentication through $rootScope variables
- Logging users out form anywhere
- Showing and hiding elements based on authentication
Redirecting the user
- Check the authentication status
- Use $location to change the URL and redirect user
Services
- Organizes logic
- Persists data outside of controllers
- Share data between controllers
- Injected as you need them
Various Services
- Factory
  - Receive the value returned
  - Useful for reusing logic different controllers
- Service
  - Receive a new instance of created object
  - Useful for sharing information between objects
- Provider
  - Versatile but verbose
  - Useful for an API that needs to be configured before app starts
$resource
- No need for manual $http interactions
- Easiest way to interact with RESTful endpoints
- Requires the ngResource module


  
