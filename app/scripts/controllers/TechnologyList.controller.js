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
    myApp.controller("Technologies",TechnologiesFn);

    TechnologiesFn.$inject = ['$log','$scope','$rootScope','mockDataConstant','repositoryService','$location'];

    function TechnologiesFn($log,$scope,$rootScope,mockDataConstant,repositoryService,$location){
      this.technologies = mockDataConstant.technologies;

      this.navigateToRepoScreen = navigateToRepoScreenFn;

      function navigateToRepoScreenFn(Obj){
        //$log.log(Obj);
      //  repositoryService.setCurrentTechnology(Obj);
      //  $log.log(repositoryService.getCurrentTechnology());
        $location.path("/repo/"+Obj );
      }
    }

})()
