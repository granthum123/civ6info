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
		      .when('/civs/:name', {
           	templateUrl:'public/civs/details/civDetails.html'
          })
          .when('/news', {
            templateUrl:'public/news.html'
          })
          .when('/strategy', {
           	templateUrl:'public/coming-soon.html'
          })
          .when('/:category', {
           	templateUrl:'public/items/items.html'
          })
          .otherwise({ redirectTo:'/'})
}]);