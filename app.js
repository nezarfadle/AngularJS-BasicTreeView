angular.module('app', [])

.controller("MainController", function($scope){

	var node = function(text, next, selected)
	{
		return {
			text: text,
			next: next == null ? [] : [ next ],
			selected: selected
		}
	}
	
	$scope.items = [];

	$scope.items[0] = new node("Prodcut 1", null, false);
	$scope.items[1] = new node("Prodcut 2", null, false);
	$scope.items[2] = new node("Prodcut 3", null, false);
	
	$scope.items[1].next[0] = new node("Prodcut 2.1", null, false);
	$scope.items[1].next[1] = new node("Prodcut 2.2", null, false);

	$scope.items[1].next[0].next[0] = new node("Prodcut 2.1.1", null, false);
	$scope.items[1].next[0].next[1] = new node("Prodcut 2.1.2", null, false);

	$scope.items[2].next[0] = new node("Prodcut 3.1", null, false);
	

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
				if(parent.next.length)
				{
					for(var i = 0; i < parent.next.length; i++ )
					{
						parent.next[i].selected = parent.selected;
						scope.selectAllChildren(parent.next[i]);
					}
				}
			}
		},
		templateUrl: function(elem, attrs)
		{
			return attrs.templateFile;
		}
	}

})