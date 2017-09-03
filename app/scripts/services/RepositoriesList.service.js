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
    myApp.service("repositoryService",repositoryServiceFn);

    repositoryServiceFn.$inject = ['$http','$q','$log','HTTPRequestUtil','mockDataConstant','$routeParams'];

    function repositoryServiceFn($http,$q,$log,HTTPRequestUtil,mockDataConstant,$routeParams){




      this.getRepos = function(currentTechnology){

        var defered = $q.defer();
        if(currentTechnology !== null && currentTechnology !== undefined && currentTechnology !== ""){

          var url = mockDataConstant.SERVER_URL + mockDataConstant.GET_REPO + currentTechnology;
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

})()
