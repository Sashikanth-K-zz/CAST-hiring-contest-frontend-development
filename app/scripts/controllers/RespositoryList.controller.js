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
    myApp.controller("Repositories",RepositoriesFn);

    RepositoriesFn.$inject = ['$scope','$log','repositoryService','$location','userProfileService','$routeParams'];

    function RepositoriesFn($scope,$log,repositoryService,$location,userProfileService,$routeParams){

      $scope.repoList = [];
      $scope.totalCount = "";
      $scope.isDataCollected = false;
      $scope.navigateToUserProfile = navigateToUserProfileFn;

      $scope.currentTechnology = "";





      $scope.getCurrentTechnology = function (){
        return $scope.currentTechnology;
      }

      $scope.setCurrentTechnology = function(){
        $scope.currentTechnology = $routeParams.currentTechnology;
        $log.log($scope.currentTechnology);
      }

      init();

      function init(){
        $scope.setCurrentTechnology();
        if($scope.currentTechnology != null && $scope.currentTechnology !== undefined &&
          $scope.currentTechnology !== ""){
            repositoryService.getRepos($scope.currentTechnology).then(function(data){
              $scope.repoList = data.items;
              $scope.totalCount = data.total_count;
              $scope.isDataCollected = true;

            },function(err){
              $scope.isDataCollected = false;
            });
        }else{
          $location.path("/technologies");
        }

      }

      function getlanguages(){

      }

      function navigateToUserProfileFn(login){
      //  userProfileService.setUserLogin(login);
        $location.path("/users/" + login);
      }

    }

})()
