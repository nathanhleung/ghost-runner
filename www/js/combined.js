'use strict';

/* global angular */

angular.module('ghostApp', ['ionic', 'ngCordova', 'ghostApp.home']).config(config);

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
    templateUrl: 'templates/pace.html'
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