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
    myApp.service("userProfileService",userProfileServiceFn);

    userProfileServiceFn.$inject = ['$http','$q','$log','HTTPRequestUtil','mockDataConstant'];

    function userProfileServiceFn($http,$q,$log,HTTPRequestUtil,mockDataConstant){




      this.getUserProfile = function(userLogin){
        var defered = $q.defer();
        if(userLogin !== null && userLogin !== undefined && userLogin !== ""){

          var url = mockDataConstant.SERVER_URL + mockDataConstant.GET_USER_PROFILE + userLogin;
          var data = HTTPRequestUtil.getData(url);
          defered.resolve(data);

        }else{
          defered.reject("Something is Wrong !!");
        }
        return defered.promise;
      }


      this.getUserFollowers = function(userLogin){
        var defered = $q.defer();
        if(userLogin !== null && userLogin !== undefined && userLogin !== ""){

          var url = mockDataConstant.SERVER_URL + mockDataConstant.GET_USER_PROFILE + userLogin
                      + mockDataConstant.GET_USER_FOLLOWERS;
          var data = HTTPRequestUtil.getData(url);
          defered.resolve(data);

        }else{
          defered.reject("Something is Wrong !!");
        }
        return defered.promise;
      }

      this.getUserFollowing = function(userLogin){
        var defered = $q.defer();
        if(userLogin !== null && userLogin !== undefined && userLogin !== ""){

          var url = mockDataConstant.SERVER_URL + mockDataConstant.GET_USER_PROFILE + userLogin
                      + mockDataConstant.GET_USER_FOLLOWING;
          var data = HTTPRequestUtil.getData(url);
          defered.resolve(data);

        }else{
          defered.reject("Something is Wrong !!");
        }
        return defered.promise;
      }


      this.getPinnedRepoList = function(url){
        var defered = $q.defer();
        if(url !== null && url !== undefined && url !== ""){
          var data = HTTPRequestUtil.getData(url);
          defered.resolve(data);

        }else{
          defered.reject("Something is Wrong !!");
        }
        return defered.promise;
      }

      this.getLanguages = function(languageUrl){
        var defered = $q.defer();
        if(languageUrl !== null && languageUrl !== undefined && languageUrl !== ""){

          var url = languageUrl;
          var data = HTTPRequestUtil.getData(url);
          defered.resolve(data);

        }else{
          defered.reject("Something is Wrong !!");
        }
        return defered.promise;
      }

    }

})();
