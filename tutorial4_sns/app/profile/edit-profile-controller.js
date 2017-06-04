(function() {
	angular.module('TimeWaste')
	.controller('EditProfileController', ['Upload', '$scope', '$state', '$http',
		function(	Upload,		$scope,		$state,		$http) {

			$scope.user = JSON.parse(localStorage['User-Data']) || undefined;

			$scope.$watch(function() {
				return $scope.file
			}, function () {
				$scope.upload($scope.file);
			});

			$scope.upload = function(file) {
				if(file) {
					Upload.upload({
						url: 'api/profile/editPhoto',
						method: 'POST',
						data: {userId: $scope.user.data._id},
						file: file
					}).progress(function(evt) {
						console.log("firing");
					}).then(function(data) {

					}).catch(function(error) {
						console.log(error);
					})
				}
			};

			$scope.updateUsername = function() {
				var request = {
					userId: $scope.user.data._id,
					username: $scope.user.data.username
				}
				$http.post('api/profile/updateUsername', request).then(function() {
					console.log("success");
				}).catch(function(error) {
					console.log("error");
				})
			}

			$scope.updateBio = function() {
				var request = {
					userId: $scope.user.data._id,
					bio: $scope.user.data.bio
				}

				$http.post('api/profile/updateBio', request).then(function() {
					console.log("success")
				}).catch(function() {
					console.log(error);
				});
			}
		}]);
}());