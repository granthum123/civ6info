angular.module('appControllers').controller('unitsCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.showAdBlock = false;
	if( window.canRunAds === undefined ){
        // adblocker detected, show fallback
        console.log("adblock detected");
        $scope.showAdBlock = false;
      }
	$http.get('https://api-civ6.rhcloud.com/units').success(function(response){
		console.log("I got the data I requested");
		console.log(response);
		$scope.units = response.response;
	})
}]);
angular.module('appControllers').controller('unitDetailsCtrl', ['$scope', '$http', "$routeParams", function($scope, $http, $routeParams){
	//Get URL Param (replace later with scoped civname)
	$http.get('https://api-civ6.rhcloud.com/units/' + $routeParams.name).success(function(response){
		console.log(response);
		console.log("I got the data I requested");
		$scope.unit = response.response[0];
	})
}]);