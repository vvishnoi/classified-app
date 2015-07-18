'use strict';

/* Controllers */
var classfiedControllers = angular.module('classfiedControllers' []);

classfiedControllers.controller('navCategoryCtrl', function(searchService) {

	this.categories = categoriesData;
	this.selectedCategory = 'Category';
	this.feeds = '';
	this.showfeeds = false;
	this.searchQ = '';

	this.setCategory = function(selectedCategory) {
		this.selectedCategory = selectedCategory;
	};

	this.getCategory = function() {
		return this.selectedCategory;
	};

	this.search = function() {
		// http call with selected category
		searchService.search('vishal');
		this.searchQ = '';
		this.showfeeds = true;
		this.feeds = feedsData;
	};
});