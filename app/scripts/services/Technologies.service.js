(function(){
  'use strict';

  /**
   * @ngdoc function
   * @name techScanApp.controller:MainController
   * @description
   * # MainController
   * Controller of the techScanApp
   */
    var myApp = angular.module('techScanApp');
    myApp.controller("technologiesService",technologinesServiceFn);

    technologinesServiceFn.$inject = [];

    function technologinesServiceFn($http,$q){

    }

})()
