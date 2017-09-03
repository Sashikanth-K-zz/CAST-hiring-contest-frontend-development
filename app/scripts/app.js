'use strict';

/**
 * @ngdoc overview
 * @name castHiringContestFrontendDevelopmentApp
 * @description
 * # castHiringContestFrontendDevelopmentApp
 *
 * Main module of the application.
 */
angular
  .module('techScanApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })
      .when('/technologies', {
        templateUrl: 'views/TechnologiesList.html',
        controller: 'Technologies',
        controllerAs: 'techno'
      })
      .when('/repo/:currentTechnology', {
          templateUrl: 'views/RepositoryList.html',
          controller: 'Repositories',
          controllerAs: 'repo'
      })
      .when('/users/:userLogin', {
          templateUrl: 'views/UserProfile.html',
          controller: 'UserProfile',
          controllerAs: 'user'
      })
      .otherwise({
        redirectTo: '/technologies'
      });
  });
