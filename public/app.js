angular.module('appControllers', []);
var myApp = angular.module('myApp', ['ngRoute', 'ui.bootstrap', 'appControllers']);

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
          .when('/civilopedia/:category', {
           	templateUrl:'public/items/item-details.html'
          })
          .when('/civilopedia/:category/:name', {
           	templateUrl:'public/items/item-details.html'
          })
          .when('/civilopedia', {
            redirectTo:'/civilopedia/civs'
          })
          .otherwise({ redirectTo:'/'})
}]);