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
    myApp.service('mockDataConstant',mockDataConstantFn);

    mockDataConstantFn.$inject = [];

    function mockDataConstantFn(){
      var serviceObj = {};

      serviceObj.technologies = ['django','java','javascript','python','php','c++','c','sql','html','ruby','css','go'];

      serviceObj.SERVER_URL = "https://api.github.com"
      serviceObj.CONTEXT = '';
      serviceObj.GET_REPO = "/search/repositories?q=";
      serviceObj.GET_USER_DETAILS_SEARCH = "/search/users?q=";
      serviceObj.GET_USER_PROFILE = "/users/"
      serviceObj.GET_USER_FOLLOWERS = '/followers';
      serviceObj.GET_USER_FOLLOWING = '/following';

      return serviceObj;
    }

})()
