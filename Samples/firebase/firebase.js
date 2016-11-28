var app=angular.module('myApp',['firebase']);
app.config(function() {
  con ={ apiKey: "AIzaSyBzmIl7fq6wloZnRS9pUyuFcrHuljTqgRA",
    authDomain: "testproject-4f2e6.firebaseapp.com",
    databaseURL: "https://testproject-4f2e6.firebaseio.com",
    storageBucket: "testproject-4f2e6.appspot.com",
    messagingSenderId: "390674072393"

  };
  firebase.initializeApp(con);
});

app.controller('myCtrl',myCtrl);

myCtrl.$inject=['$scope','$firebaseObject','$firebaseAuth','$firebaseArray'];
function myCtrl($scope,$firebaseObject,$firebaseAuth,$firebaseArray){
var auth = $firebaseAuth();
    auth.$signInWithEmailAndPassword("alluri.ramesh@gmail.com", "ramesh").then(function(firebaseUser) {
  console.log("Signed in as:", firebaseUser.uid);
}).catch(function(error) {
  console.error("Authentication failed:", error);
});

//This part of the code will read all of the doucment objects in firebase    
$scope.getObjectData=function(){
    
    var ref = firebase.database().ref();
    console.log(ref);
  $scope.o=  $firebaseObject(ref);;  
};    
$scope.getObjectData();    
    
// This Part of the code will save data into firebase object
$scope.createNewObject=function(){
    
var ref = firebase.database().ref();
var obj = $firebaseObject(ref);
//obj.Test = "myData";
    obj.color=$scope.o.color;
    obj.flower=$scope.o.flower;
    
obj.$save().then(function(ref) {
  ref.key === obj.$id; // true
    console.log('Data Saved ' + ref.key);
}, function(error) {
  console.log("Error:", error);
});
};

//code to Read firebaseArray
    $scope.getMeeting=function(){
        var ref = firebase.database().ref().child("users");
         var list = $firebaseArray(ref);
        
         $scope.meeting=list;
    };
     $scope.getMeeting();
    $scope.addMeeting=function(){
           var ref = firebase.database().ref().child("users");
          var list = $firebaseArray(ref);
        list.$add($scope.m).then(function(ref) {
            var id = ref.key;
        console.log("added record with id " + id);
            list.$indexFor(id); // returns location in the array
        });
    };
    
};