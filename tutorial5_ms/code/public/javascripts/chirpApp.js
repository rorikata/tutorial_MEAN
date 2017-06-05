var app = angular.module('chirpApp', ['ngRoute', 'ngResource']).run(function($http, $rootScope) {
	$rootScope.authenticated = false;
	$rootScope.current_user = 'Guest';

	$rootScope.signout = function() {
		$http.get('auth/signout');
		$rootScope.authenticated = false;
		$rootScope.current_user = 'Guest';
	};
});

app.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'main.html',
			controller: 'mainController'
		})
		.when('/login', {
			templateUrl: 'login.html',
			controller: 'authController'
		})
		.when('/register', {
			templateUrl: 'register.html',
			controller: 'authController'
		});
});

app.factory('postService', function($resource) {
	return $resource('/api/posts/:id');
});

app.controller('mainController', function($scope, $rootScope, postService) {
	$scope.posts = postService.query();
	$scope.newPost = {created_by: '', text: '', created_at: ''};

	$scope.post = function() {
		$scope.newPost.created_by = $rootScope.current_user;
		$scope.newPost.created_at = Date.now();
		postService.save($scope.newPost, function() {
			$scope.posts = postService.query();
			$scope.newPost = {created_by: '', text: '', created_at: ''};
		});
	};
	$scope.delete = function(post) {
		postService.delete({id: post._id});
		$scope.posts = postService.query();
	}
});

app.controller('authController', function($scope, $http, $rootScope, $location) {
	$scope.user = {username: '', password: ''};
	$scope.error_message = '';

	$scope.login = function() {
		$http.post('./auth/login', $scope.user).then(function(data) {

			if(data.data.state == 'success') {
				$rootScope.authenticated = true;
				$rootScope.current_user = data.data.user.username;
				$location.path('/');
			} else {
				$scope.error_message = data.message;
			}
		});
	};

	$scope.register = function() {
		$http.post('/auth/signup', $scope.user).then(function(data) {
			if(data.datastate == 'success') {
				$rootScope.authenticated = true;
				$rootScope.current_user = data.user.username;
				$location.path('/');
			} else {
				$scope.error_message = data.message;
			}
		});
	};
});







