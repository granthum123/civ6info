angular.module('appControllers').controller('itemsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {

	$http.get('https://api-civ6.rhcloud.com/' + $routeParams.category).success(function(response) {
		$scope.category = $routeParams.category.charAt(0).toUpperCase() + $routeParams.category.slice(1);
		console.log("I got the data I requested");
		console.log(response);
		if ($routeParams.category === "civs") {
			$scope.image_folder = "civs";
		}
		else {
			$scope.image_folder = "items";
		}
		$scope.items = response.response;
		for (var i = 0; i < $scope.items.length; i++) {
			switch ($routeParams.category) {
				case 'civs':
					$scope.items[i].columns = [$scope.items[i].name, $scope.items[i].leader, $scope.items[i].ability_name, , $scope.items[i].ability_info];
					break;
				case 'units':
					$scope.items[i].columns = [$scope.items[i].name, $scope.items[i].attack, $scope.items[i].type, $scope.items[i].info];
					break;
				default:
					$scope.items[i].columns = [$scope.items[i].name, $scope.items[i].info];
			}
		}
	});
	$scope.setSelected = function() {
        $scope.selected = this.item;
        console.log($scope.selected);
        if ($routeParams.category === "civs")
        	$location.path("civs/"+$scope.selected.name)
    };
}]);
angular.module('appControllers').controller('itemDetailsCtrl', ['$scope', '$http', "$routeParams", function($scope, $http, $routeParams) {
	//Get URL Param (replace later with scoped civname)
	$http.get('https://api-civ6.rhcloud.com/items/' + $routeParams.name).success(function(response) {
		console.log(response);
		console.log("I got the data I requested");
		$scope.item = response.response[0];
		$http.get('https://api-civ6.rhcloud.com/civs/' + $scope.civ.id + "/items").success(function(response2) {
			console.log(response2);
			$scope.items = response2.response;
		})
	})
}]);
