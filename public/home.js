angular.module('appControllers').controller('homeCtrl', ['$scope', '$http', function($scope, $http) {
    var deadline = "October 21 2016";
    initializeClock('clockdiv', deadline);
}]);
function initializeClock(id, endtime){
  var clock = document.getElementById(id);
  var timeinterval = setInterval(function(){
    var t = getTimeRemaining(endtime);
    clock.innerHTML = t.days + ' Days ' + t.hours + ' Hours ' + t.minutes + ' Minutes ' + t.seconds + ' Seconds ';
    //t.days + ':' + t.hours + ':' + t.minutes + ':' + t.seconds;
    if(t.total<=0){
      clearInterval(timeinterval);
    }
  },1000);
};
function getTimeRemaining(endtime){
  var t = Date.parse(endtime) - Date.parse(new Date());
  var seconds = Math.floor( (t/1000) % 60 );
  var minutes = Math.floor( (t/1000/60) % 60 );
  var hours = Math.floor( (t/(1000*60*60)) % 24 );
  var days = Math.floor( t/(1000*60*60*24) );
  return {
    'total': t,
    'days': days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
  };
}