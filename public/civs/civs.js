angular.module('appControllers').controller('civsCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
	$http.get('https://api-civ6.rhcloud.com/civs').success(function(response){
		console.log("I got the data I requested");
		console.log(response);
		$scope.civlist = response.response;
	});
	$scope.setSelected = function() {
	$scope.selected = this.civ;
        console.log($scope.selected);
        	$location.path("civs/"+$scope.selected.name)
	};
}]);