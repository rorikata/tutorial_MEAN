# tutorial #1 ~ Introduction to AngularJS ~

## What is AngularJS?
- MVC style JavaScript framework for createing single page apps
- Write our code in the way AngularJS wants us to, so we can use it's features in our projects

## Features
- 2 way data binding
- templating
- DOM interaction
- filters
- directives
- many mroe...

## Single page apps
- AngularJS primarily used to make single page, data-driven applications
- additional content brought into the web page without the need to refresh
- Use 'views' (the V in MVC) to achieve this

## What to learn...
- MVC (or MVW) overview
- 2-Way data binding
- Filters, directives and expressions
- Controllers and how to use them
- Views and Routing
- Animations
- Form validation
- Create a to-do-list applications

## Requirements
- JavaScript (essential)
- HTML (essential)
- CSS (optional)
- JSON (optional)

# tutorial #2 ~ MVC architecture ~

## Model
- think of the model as data
- JSON, database data etc

## View
- used to display content & data to a user in a browser
- HTML
- use expressions to insert data into views
```
<html tag> {{data}}</html tag>
```

##  Controller
- controller the functionality of our views
- performs the interaction between our models and our views
- different controllers for different areas in our application

## Example
1. user clicks a 'show users' button in a views
2. the 'UserController' recognises the button click event and performs a function
3. the function communicates with the 'users' model and retrieves all the user data
4. the controller passes accessibility to this data to the view, which then displays it to the end user via expressions

## MVW
- MVC = Model, View, controller
- MVW = Model, View, Whatever
UNDERLYING PRINCIPLE is separation of concerns

# tutorial #3 ~ Downloading AngularJS ~

Go to AngularJS webiste
```
https://angularjs.org
```
We can either download or using CDN.

# tutorial #22,23 ~ Form Validation ~

## Form Classes
- ng-pristine: when form/input not used yet
- ng-dirty: when form/input has been used
- ng-untouched: when input has not been touched
- ng-touched: when input has been touched
- ng-valid: when a form field is validation
- ng-invalid: when a form field is not validation

## Form Properties
 Class                  Property
 ng-pristine    <->     $pristine
 ng-dirty       <->     $dirty
 ng-touched     <->     $touched
 ng-valid       <->     $valid
 ng-invalid     <->     $invalid
