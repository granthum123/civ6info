angular.module('appControllers').controller('civsCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('https://civinfoapp-granthum.c9users.io:8081/api/civs').success(function(response){
		console.log("I got the data I requested");
		$scope.civlist = response;
	})
}]);