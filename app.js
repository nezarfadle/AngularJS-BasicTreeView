angular.module('app', [])

.controller("MainController", function($scope){

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
			products: "=",
			templateFile: "@"
		},
		link: function(scope)
		{
			
			scope.selectAllChildren = function(parent)
			{
				if(parent.next != null)
				{
					parent.next[0].selected = parent.selected;
					scope.selectAllChildren(parent.next[0]);
				}
			}
		},
		templateUrl: function(elem, attrs)
		{
			return attrs.templateFile;
		}
	}

})