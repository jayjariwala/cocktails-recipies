var app = angular.module("cocktailApp",['ngRoute','ngTagsInput','wu.masonry']);

app.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl : "views/home.html",
		controller:"mainController as main"
	})

})


app.controller("mainController",function($scope, $http){
	this.tags = [
	   { text: 'Tag1' },
	   { text: 'Tag2' },
	   { text: 'Tag3' }
	 ];
	 $http({
	 		method:'GET',
	 		url:'https://cocktails-394c7.firebaseio.com/.json'
	 	}).then(function successCallback(response){
	 		$scope.cocktails = response.data;
	 	},function error(err){
	 	
	 	})
	 	

	
})