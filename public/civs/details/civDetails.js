angular.module('myApp', []).controller('civDetailsCtrl', ['$scope', '$http', function($scope, $http){
	$http.get(':8081/api/civs/:name').success(function(response){
		console.log("I got the data I requested");
		$scope.civs = response;
	})
}]);