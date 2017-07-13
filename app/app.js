var app = angular.module("cocktailApp",['wu.masonry','firebase','ngRoute','ngTagsInput']);

app.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl : "views/home.html",
		controller:"mainController as main"
	})
	.when('/edit',{
		templateUrl : "views/item.html",
		controller:"editController as edit"
	})

})

app.controller("editController", function($routeParams){
	console.log($routeParams);
})

app.controller("mainController",function($scope, $http, $firebaseArray, $location){

	var rec_cocktail = new Firebase('https://cocktails-394c7.firebaseio.com/');
	$scope.cocktails = $firebaseArray(rec_cocktail);

	/*this.itemClick = function(id)
	{
		$location.path('/edit/').search({id:'123'});
	}*/
	this.cocktailEdit = function()
	{
		console.log("edit");
	}
	/* $http({
	 		method:'GET',
	 		url:'https://cocktails-394c7.firebaseio.com/.json'
	 	}).then(function successCallback(response){
	 		$scope.cocktails = response.data;
	 	},function error(err){
	 	
	 	}) */
})


app.controller("formController",['$scope', '$firebaseArray',function($scope, $firebaseArray){
	
	var rec_cocktail = new Firebase('https://cocktails-394c7.firebaseio.com/');
	$scope.cocktails = $firebaseArray(rec_cocktail);
	console.log($scope.cocktails);

	this.addRecipe = function()
	{
				 var tagsval = this.tags.map( element => {
					return element.text;
				})

				 console.log(tagsval);
		
		$scope.cocktails.$add({
			
			  description : this.desc,
			  drink_name : this.cocktail_name,
			  ingredients : tagsval,
			  pic_url : this.url
			
		});
		this.dismiss="modal";
	}



}])