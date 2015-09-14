angular.module('app', [])

.controller("MainController", function($scope){

	var node = {
		title: "",
		next: node
	}

	$scope.items = 
	[

		{
			title: "Prodcut 1",
			next: null
		},
		{
			title: "product 2",
			next: [
				{
					title: "product 2-1",
					next: [
						{
							title: "Prodcut 2-1-1",
							next: null
						}
					]
				}	
			]
		}


	];

})

.directive("treeView", function(){

	return {
		restrict: 'E',
		scope:{
			products: "="
		},
		link: function(scope)
		{
			scope.selectAllChild = function(parent)
			{
				if(parent.next != null)
				{
					parent.next[0].selected = parent.selected;
					scope.selectAllChild(parent.next[0]);
				}
			}
		},
		templateUrl: "template.html"
	}


})