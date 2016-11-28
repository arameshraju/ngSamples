var app=angular.module('hcApp',[]);
app.controller('hcCtrl',hcCtrl);

hcCtrl.$inject=['$scope'];
function hcCtrl($scope){
    console.log('calling hcCtrl');
    $scope.my"name"="Ramesh";
    $scope.m=[];
    $scope.t=[];
    $scope.addData=function(){
        $scope.m.push($scope.data.month);
        $scope.t.push($scope.data.temp);
    };
    
    $scope.displayChart=function(){
        Highcharts.chart('container', {
            type:'bar',
      title: {
        text: 'Temperature Data'
      },

      xAxis: {
        categories: $scope.m
      },

      series: [{
        data: $scope.t
      }]
    })     ; 
     
    }
    
    
};