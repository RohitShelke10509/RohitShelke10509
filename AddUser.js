var myApp = angular.module('myApp', []);

myApp.controller('myController', function($scope){
	console.log("In myContoller...");
	
	$scope.newUser = {};
	$scope.checkedUser = {};
	$scope.message = "";

	$scope.users = 
	[
		{"index":"1","FNAME":"rohit","LNAME":"sharma","EMAIL":"rohit@gmail.com","PHONE":1234,"ROLE":"user","STATUS":"active","PASSWORD":"","CNFMPASSWORD":""},
		{"index":"2","FNAME":"amit","LNAME":"amit","EMAIL":"amit@gmail.com","PHONE":2144,"ROLE":"admin","STATUS":"active","PASSWORD":"","CNFMPASSWORD":""},
		{"index":"3","FNAME":"rahul","LNAME":"rahul","EMAIL":"rahul@gmail.com","PHONE":254,"ROLE":"user","STATUS":"inactive","PASSWORD":"","CNFMPASSWORD":""}
	];
	$scope.saveUser = function(){
		$scope.users.push($scope.newUser);
		$scope.newUser={};
		$scope.message = "User added Successful";
		$scope.user=$scope.newUser;
	};

	$scope.selectUser = function(user){
		console.log(user);
		$scope.clickedUser = user;
	};

	$scope.updateUser = function(user){

	};

	$scope.deleteUser = function(){
		$scope.users.splice($scope.users.indexOf($scope.clickedUser), 1);
	};
});