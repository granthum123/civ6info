angular.module('appControllers').controller('itemsCtrl', ['$scope', '$http', '$routeParams',function($scope, $http, $routeParams) {
    
	$http.get('https://api-civ6.rhcloud.com/' + $routeParams.category).success(function(response){
		console.log("I got the data I requested");
		console.log(response);
		$scope.items = response.response;
	})
}]);
