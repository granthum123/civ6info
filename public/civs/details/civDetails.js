angular.module('appControllers').controller('civDetailsCtrl', ['$scope', '$http', function($scope, $http){
	//Get URL Param (replace later with scoped civname)
	var param = location.hash;
	var index = param.lastIndexOf('/');
	var civName = param.substring(index+1);
	$http.get('https://civinfoapp-granthum.c9users.io:8081/api/civs/' + civName).success(function(response){
		console.log(civName);
		console.log("I got the data I requested");
		$scope.civDetail = response;
	})
}]);