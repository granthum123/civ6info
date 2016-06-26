angular.module('appControllers').controller('civsCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('https://api-civ6.rhcloud.com/civs').success(function(response){
		console.log("I got the data I requested");
		console.log(response);
		$scope.civlist = response.response;
	})
}]);