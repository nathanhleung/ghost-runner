'use strict';

/* global angular */

angular.module('ghostApp', ['ionic', 'ngCordova', 'ghostApp.home', 'ghostApp.pace']).config(config);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('landing', {
    url: '/',
    templateUrl: 'templates/landing.html'
  }).state('home', {
    url: '/home',
    templateUrl: 'templates/home.html'
  }).state('run', {
    url: '/run',
    templateUrl: 'templates/run.html'
  }).state('pace', {
    url: '/pace',
    templateUrl: 'templates/pace.html',
    controller: 'PaceCtrl as vm'
  }).state('route', {
    url: '/route',
    templateUrl: 'templates/route.html'
  }).state('music', {
    url: '/music',
    templateUrl: 'templates/music.html'
  }).state('find', {
    url: '/find',
    templateUrl: 'templates/find.html'
  }).state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html'
  });

  $urlRouterProvider.otherwise('/');
}
'use strict';

angular.module('ghostApp.home', []).controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {}
'use strict';

angular.module('ghostApp.pace', []).controller('PaceCtrl', PaceCtrl);

function PaceCtrl() {
  // Actual pace = 600 - this.pace
  this.pace = 600 - 300;
  this.getTimeString = function (pace) {
    var minutes = Math.floor(pace / 60).toString();
    var seconds = (pace % 60).toString();
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    return minutes + ':' + seconds;
  };
}