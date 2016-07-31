angular.module('appControllers', []);
var myApp = angular.module('myApp', ['ngRoute', 'appControllers']);

//Setting Domain to get around CORS
myApp.config(['$routeProvider', function($routeProvider){
      $routeProvider
          .when('/', {
            templateUrl:'public/home.html'
          })
          .when('/news', {
            templateUrl:'public/news.html'
          })
          .when('/strategy', {
           	templateUrl:'public/coming-soon.html'
          })
          .when('/:category', {
           	templateUrl:'public/items/item-details.html'
          })
          .when('/:category/:name', {
           	templateUrl:'public/items/item-details.html'
          })
          .otherwise({ redirectTo:'/'})
}]);