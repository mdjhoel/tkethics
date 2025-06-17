var app = angular.module('parts',[]);

app.config(function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  $httpProvider.defaults.headers.get = {};
});
 
app.controller('PartsCtrl',function($rootScope,$http){
	
  $rootScope.main = 'includes/main.html';
  $rootScope.nav = 'includes/nav.html';
  $rootScope.footer = 'includes/footer.html';
  $rootScope.getstart = 'includes/getstart.html';
  $rootScope.levelup = 'includes/levelup.html';

  $rootScope.SelectType = function (type) {
    if (type == 'mission') {
      $rootScope.main = 'includes/mission.html';
    } else if (type == 'home') {
      $rootScope.main = 'includes/main.html';
    } else if (type == 'incubate') {
      $rootScope.main = 'includes/idea.html';
    } else if (type == 'events') {
      $rootScope.main = 'includes/events.html';
    } else if (type == 'research') {
      $rootScope.main = 'includes/research.html';
    } 
  }
  
});

