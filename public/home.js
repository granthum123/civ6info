angular.module('appControllers').controller('homeCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
  var deadline = "October 21 2016";
  initializeClock('clockdiv', deadline);

  $scope.search = function(query) {
    return $http.get('https://api-civ6.rhcloud.com/search/' + query).then(function(response) {
      $scope.items = response.data.response;
      $scope.results = [];
      for (var i = 0; i < $scope.items.length; i++) {
        if ($scope.items[i].civ_name === null) {
          $scope.items[i].formatted = $scope.items[i].name + " (" + $scope.items[i].type + ")";
        } else {
          $scope.items[i].formatted = $scope.items[i].name + " (" + $scope.items[i].civ_name + " Unique " + $scope.items[i].type + ")";
        }
      }
      return $scope.items;
    });
  };
  $scope.onSelect = function($item) {
    $scope.$item = $item;
    var type = $item.type.toLowerCase();
    $location.path('civilopedia/'+type+'s/'+$item.name);
  };
}]);

function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function() {
    var t = getTimeRemaining(endtime);
    clock.innerHTML = t.days + ' Days ' + t.hours + ' Hours ' + t.minutes + ' Minutes ' + t.seconds + ' Seconds ';
    //t.days + ':' + t.hours + ':' + t.minutes + ':' + t.seconds;
    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }, 1000);
};

function getTimeRemaining(endtime) {
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor((t / 1000) % 60);
  var minutes = Math.floor((t / 1000 / 60) % 60);
  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  var days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}