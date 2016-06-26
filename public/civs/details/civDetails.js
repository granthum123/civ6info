angular.module('appControllers').controller('civDetailsCtrl', ['$scope', '$http', "$routeParams", function($scope, $http, $routeParams){
	//Get URL Param (replace later with scoped civname)
	$http.get('https://api-civ6.rhcloud.com/civs/' + $routeParams.name).success(function(response){
		console.log(response);
		console.log("I got the data I requested");
		$scope.civ = response.response[0];
		if ($scope.civ.leader_image === "")
			$scope.civ.leader_image = "http://cliparts.co/cliparts/yTk/Ke9/yTkKe9ayc.jpg";
				
		$http.get('https://api-civ6.rhcloud.com/civs/' + $scope.civ.id + "/items").success(function(response2){
			console.log(response2);
			$scope.items = response2.response;
		})
	})
}]);