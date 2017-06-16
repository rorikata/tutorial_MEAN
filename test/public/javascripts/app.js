var app = angular.module('app', ['angularFileUpload'])

app.directive('attachable', function(FileUploader) {
	return {
		restrict: 'E',
		replace: true,
		templateUrl: 'attachable.html',
		link: function(scope, element, attrs) {
			scope.uploader = new FileUploader();
		}
	}
})