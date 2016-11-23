var app=angular.module('ncApp',['ngCookies']);
app.controller('ncCtrl',ncCtrl);

ncCtrl.$inject=['$scope','$cookies'];
function ncCtrl($scope,$cookies){
    console.log('cookiees Started');
  $scope.addData=function(){
    $cookies.put( $scope.dataKey,$scope.dataValue);
      $scope.dataKey='';
      $scope.dataValue='';
  }

  $scope.getValues=function(){
      $scope.cookieValues=$cookies.getAll();
  };
      $scope.getValues();
    $scope.searchKeys=function(){
        $scope.searchKey=$scope.search;
        $scope.serchVal=$cookies.get($scope.search);
    }
};