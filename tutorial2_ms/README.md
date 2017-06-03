
# tutorial2_ms 6/3/2017
## Angular.js

### Front End Frameworks
- not a library
- JQuery is a library with functions that makes javascript interactions less painful
- Angular.js is an MVC framework. You use it to structure our your application looks(view) from your data (model) and the logic and functions that are executed (controller). its also extremely test driven.
- Angular isn't the only one out there. There's a whole ecosystem
  - React.js
  - Ember.js
  - Backbone.js

### Directives
- Angular-only HTML attributes
- Attaches some specific behavior to the element
- Usually begins with 'ng-' or 'data-ng'

### Models and Controller
Module
- A container for your application
```
var myModule = angular.module('myApp', []);
```
Controller
- Contains the business logic for a part of your application
- Sets up your data to be viewed in your HTML
```
myModule.controller('myController', function($scope) {
);
```
Dependency Injection
- How we specify the dependencies that an Angular component will need.
Templates
- The Angularized HTML we're created
- Used to render the View (What the end-user will see)
$scope
- Links your controller to your view (what the user sees)
- Created through as an injectable parameter in controllers
- Configured within controller logic
- Contains the models for our data
Displaying and Binding Data
- Display using double braces {{}}
- Bind data using directives:
  - ng-model for two way data binding
  - ng-bind for one way data binding
