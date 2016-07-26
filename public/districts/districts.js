angular.module('appControllers').controller('districtsCtrl', ['$scope', '$http', function($scope, $http) {
	$scope.showAdBlock = false;
	//(adsbygoogle = window.adsbygoogle || []).push({});
	$http.get('https://api-civ6.rhcloud.com/districts').success(function(response){
		console.log("I got the data I requested");
		console.log(response);
		$scope.districts = response.response;
	})
}]);
