'use strict';

angular.module('myApp', ['ionic', 'ngCordova', 'myApp.HomeCtrl']).config(config).run(init);

function config($stateProvider, $urlRouterProvider) {
  $stateProvider.state('index', {
    url: '/',
    templateUrl: 'templates/home.html',
    controller: 'HomeCtrl as vm'
  });

  $urlRouterProvider.otherwise('/');
}

function init() {}
'use strict';

angular.module('myApp.HomeCtrl', []).controller('HomeCtrl', HomeCtrl);

function HomeCtrl() {}