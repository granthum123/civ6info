angular.module('appControllers').controller('buildingsCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('https://api-civ6.rhcloud.com/buildings').success(function(response){
		console.log("GET buildings success");
		console.log(response);
		$scope.buildings = response.response;
	})
}]);
angular.module('appControllers').controller('buildingsDetailsCtrl', ['$scope', '$http', "$routeParams", function($scope, $http, $routeParams){
	//Get URL Param (replace later with scoped civname)
	$http.get('https://api-civ6.rhcloud.com/buildings/' + $routeParams.name).success(function(response){
		console.log(response);
		console.log("I got the data I requested");
		$scope.unit = response.response[0];
	})
}]);