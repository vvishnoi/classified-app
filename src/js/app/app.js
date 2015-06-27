//closure
(function() {
	var classfiedApp = angular.module('classfiedApp', []);
	// categories from service
	var categoriesData = [{
		id : 1,
		name : 'Property'
	}, {
		id : 2,
		name : 'Auto'
	}, {
		id : 3,
		name : 'Adults'
	}, {
		id : 4,
		name : 'Services'
	}];

	var feedsData = [{
		id : 1,
		title : 'I am using twitter bootstrap on a theme I downloaded, and my custom html in my. ',
		details : 'Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus',
		location : 'Philadelphia',
		State : 'PA',
		country : 'USA',
		datetime : '12.06.2014 5:20 pm',
		price : '150',
		category : 'Auto',
		subCategory : 'Cars',
		images : {
			thumbnail : 'http://lorempixel.com/64/64/sports',
			image1 : 'http://lorempixel.com/600/200/people',
			image2 : 'http://lorempixel.com/600/200/people',
			image3 : 'http://lorempixel.com/600/200/people'
		}
	}];

	classfiedApp.directive('headnav', function() {
		var directive = {};
		directive.restrict = 'E';
		/* restrict this directive to elements */
		directive.templateUrl = "templates/headnav-template.html";
		return directive;
	});
	
	classfiedApp.directive('itemsthumblist', function() {
		var directive = {};
		directive.restrict = 'E';
		/* restrict this directive to elements */
		directive.templateUrl = "templates/itemsthumblist-template.html";
		return directive;
	});

	classfiedApp.service("searchService", SearchService);

	classfiedApp.controller('navCategoryCtrl', function(searchService) {

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




//Services
	function SearchService(){
		this.search = function(criteria){
			console.log(criteria);
			
		};
		
	}





})(); 