angular.module('appControllers').controller('itemsCtrl', ['$scope', '$http', '$routeParams',function($scope, $http, $routeParams) {
    
	$http.get('https://api-civ6.rhcloud.com/' + $routeParams.category).success(function(response){
	    $scope.category = $routeParams.category.charAt(0).toUpperCase() + $routeParams.category.slice(1);
		console.log("I got the data I requested");
		console.log(response);
		$scope.items = response.response;
	})
}]);
angular.module('appControllers').controller('itemDetailsCtrl', ['$scope', '$http', "$routeParams", function($scope, $http, $routeParams){
	//Get URL Param (replace later with scoped civname)
	$http.get('https://api-civ6.rhcloud.com/items/' + $routeParams.name).success(function(response){
		console.log(response);
		console.log("I got the data I requested");
		$scope.item = response.response[0];
		$http.get('https://api-civ6.rhcloud.com/civs/' + $scope.civ.id + "/items").success(function(response2){
			console.log(response2);
			$scope.items = response2.response;
		})
	})
}]);
