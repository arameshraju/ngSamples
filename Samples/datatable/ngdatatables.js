var app=angular.module('myApp',['datatables', 'ngResource' ]);
app.controller('myCtrl',myCtrl);

myCtrl.$inject=['$scope','$resource'];
function myCtrl($scope,$resource){
// var vm = this;
    $resource('data.json').query().$promise.then(function(persons) {
        $scope.persons = persons;
    });
   
};