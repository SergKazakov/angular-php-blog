'use strict';

angular.module('billboard')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'app/home/home.html',
        controller: 'HomeCtrl',
        controllerAs: 'home'
      });
  });
