angular.module('appControllers', []);
var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

//Setting Domain to get around CORS
myApp.config(['$routeProvider', function($routeProvider){
      $routeProvider
          .when('/', {
              templateUrl:'public/home.html'
          })
          .when('/civs', {
              templateUrl:'public/civs/civs.html'
          })
          .when('/strategy',{
              templateUrl:'public/strategy.html'
          })
          .when('/tiles',{
              templateUrl:'public/tiles.html'
          })
		  .when('/civs/:name', {
           		templateUrl:'public/civs/details/civDetails.html'
          })
          .otherwise({ redirectTo:'/'})
}]);