'use strict';

/* Controllers */
var classifiedControllers = angular.module('classifiedControllers', []);

classifiedControllers.controller("CategoryListCtrl", [ '$scope', 'Category',
		function($scope, Category) {
			console.info('CategoryListCtrl');
			$scope.categories = Category.query();

		} ]);

classifiedControllers.controller("SubCategoryListCtrl", [ '$scope',
		'$routeParams', 'SubCategory',
		function($scope, $routeParams, SubCategory) {
			console.info('SubCategoryListCtrl');
			console.info($routeParams);
			$scope.items = SubCategory.query();
		} ]);

classifiedControllers.controller("ItemDetailCtrl", [ '$scope', '$routeParams',
		'Item', function($scope, $routeParams, Item) {
			console.info('ItemDetailCtrl');
			console.info($routeParams);

			// Get Item Detail - service Call
			$scope.itemDetail = Item.get();

			// Tab start
			$scope.tab = 1;
			$scope.setTab = function(value) {
				$scope.tab = value;
			};

			$scope.isSet = function(value) {
				return ($scope.tab === value);
			}
			// End Tab

			// Contact Form
			$scope.contact = {};
			$scope.submitForm = function() {
				// TODO call service
				console.info("contactForm" + console);

			};

		}
]);
