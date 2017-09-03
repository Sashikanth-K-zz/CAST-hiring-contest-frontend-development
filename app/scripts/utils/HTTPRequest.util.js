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
    myApp.service("HTTPRequestUtil",HTTPRequestUtilFn);

    HTTPRequestUtilFn.$inject = ['$http','$q','$log','mockDataConstant'];

    function HTTPRequestUtilFn($http,$q,$log,mockDataConstant){

      function getData(url,config){
        var deffered = $q.defer();

      return  $http.get(url,config).then(function(data){
          if(data !== null && data !== undefined){
            if(data.status == "200"){
              deffered.resolve(data.data);
              return deffered.promise;
            }else{
              deffered.resolve("No Result");
              return deffered.promise;
            }
          }
        },function(){
          deffered.reject("No Result");
        });



      }

      return {
        getData : getData
      }

    }

})()
