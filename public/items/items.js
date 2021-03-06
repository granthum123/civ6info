angular.module('appControllers').controller('itemsCtrl', ['$scope', '$http', '$routeParams', '$location', function($scope, $http, $routeParams, $location) {
	$scope.showLoading = true;
	$scope.isCiv = false;
	$http.get('https://api-civ6.rhcloud.com/' + $routeParams.category).success(function(response) {
		$scope.category = $routeParams.category.charAt(0).toUpperCase() + $routeParams.category.slice(1);
		console.log("I got the data I requested");
		console.log(response);
		if ($routeParams.category === "civs") {
			$scope.image_folder = "civs";
			$scope.style = "cursor: pointer;";
			$scope.isCiv = true;
		}
		else {
			$scope.image_folder = "items";
			$scope.style = "";
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
		$scope.showLoading = true;
		if (typeof $routeParams.name != 'undefined') {
			for (var i = 0; i < $scope.items.length; i++) {
				if ($routeParams.name === $scope.items[i].name) {
					$scope.items[i].extraStyle = "background: #EEEEEE;"
				}
			}
			$scope.selectedItem = $routeParams.name;
		}
		else {
			$scope.selectedItem = $scope.items[0].name;
			$scope.items[0].extraStyle = "background: #EEEEEE;"
		}
		$http.get('https://api-civ6.rhcloud.com/' + $routeParams.category + '/' + $scope.selectedItem).success(function(response) {
			console.log(response);
			console.log("I got the data I requested");
			$scope.item = response.response[0];
			if ($routeParams.category === "civs") {
				$http.get('https://api-civ6.rhcloud.com/civs/' + $scope.item.id + "/items").success(function(response2) {
					console.log(response2);
					$scope.civItems = response2.response;
				})
			};
		});
	});
	$scope.setSelected = function() {
		$scope.selected = this.item;
		console.log($scope.selected);
		$location.path("civilopedia/" + $routeParams.category + "/" + $scope.selected.name)
	};

}]);
