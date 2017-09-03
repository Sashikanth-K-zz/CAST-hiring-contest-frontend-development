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
    myApp.controller("UserProfile",UserProfileFn);

    UserProfileFn.$inject = ['$scope','$log','userProfileService','$location','$routeParams'];

    function UserProfileFn($scope,$log,userProfileService,$location,$routeParams){
      $scope.userProfile = {};

      $scope.isDataCollected = false;

      $scope.pinnedRepoList = null;

      $scope.followers = null;

      $scope.following = null;
      $scope.followersTotalCount = 0;
      $scope.followingTotalCount = 0;
      $scope.repoTotalCount = 0;
      $scope.userLogin = "";

      $scope.getUserLogin = function (){
        return $scope.userLogin;
      }

      $scope.setUserLogin = function(login){
        $scope.userLogin = $routeParams.userLogin;
        $log.log($scope.userLogin);
      }


      init();

      function init(){
        $scope.setUserLogin();
        if($scope.userLogin != null && $scope.userLogin !== undefined &&
          $scope.userLogin !== ""){
            userProfileService.getUserProfile($scope.userLogin).then(function(data){
              $scope.userProfile = data;
              //$scope.totalCount = data.total_count;
              $scope.isDataCollected = true;
              getPinnedRepoList();
              getFollowers();
              getFollowing();
            },function(err){
              $scope.isDataCollected = false;
            });
        }else{
          //$location.path("/technologies");
        }

      }

      function getFollowers(){
        if($scope.userLogin != null && $scope.userLogin !== undefined &&
          $scope.userLogin !== ""){
            userProfileService.getUserFollowers($scope.userLogin).then(function(data){
              $scope.followers = data;
              $scope.followersTotalCount =   $scope.followers.length;
            },function(err){

            });
        }else{
          //$location.path("/technologies");
        }
      }

      function getFollowing(){
        if($scope.userLogin != null && $scope.userLogin !== undefined &&
          $scope.userLogin !== ""){
            userProfileService.getUserFollowing($scope.userLogin).then(function(data){
              $scope.following = data;
              $scope.followingTotalCount =   $scope.following.length;
            },function(err){

            });
        }else{
          //$location.path("/technologies");
        }
      }


      function getPinnedRepoList(){
        userProfileService.getPinnedRepoList($scope.userProfile.repos_url).then(function(data){
          $scope.pinnedRepoList = data;
          $scope.repoTotalCount = $scope.pinnedRepoList.length;
        },function(err){
            $log.log(err);
        });
      }



      $scope.tab = 1;

        $scope.setTab = function (tabId) {
            $scope.tab = tabId;
        };

        $scope.isSet = function (tabId) {
            return $scope.tab === tabId;
        };
    }

})()
