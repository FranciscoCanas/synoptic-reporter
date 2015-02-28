angular.module('controllers').controller('indexController', function ($scope, $location, $anchorScroll, $document, $parse) {
	$scope.test = {
		heading: 'Testing!'
	}
	$scope.tester = {
		heading: 'Favourite Song',
		display: $parse('item.song + \' by \' + item.name'),
		selection: 0,
		choices:
		[
		{ 	'id': 0,
		'name': 'Stephen Foster',
		'song': 'Oh! Susanna',
		'url': 'PZXvxOXXdCk'
	},
	{ 	'id':1,
	'name': 'Dink Roberts',
	'song': 'Coo Coo',
	'url': 'GkyZ555DHrI'
},
{	'id': 2,
'name': 'Blind Lemon Jefferson',
'song': 'Black Snake Moan',
'url': 'h3yd-c91ww8'
},
]
};

/* Scrolls to specified section id. */
$scope.goToSection = function(id) {
		$location.replace(); // Replace hash, instead of append.
		$location.hash(id);  // Set url hash to given id.
		$anchorScroll();	 // Scroll to current hash.
	};

	/* Runs after each ng-include is loaded.*/
	$scope.$on('$includeContentLoaded', function(event) {
		$("#clinical-info-text").focus();

  		/*
		* Center all input fields when user focuses on them.
		*/
		$(':input').focus(function(){
			var ele = $(this);
			var center = $(window).height() / 2;
			var top = $(this).offset().top ;
			ele.attr('test','la');
			if (top > center){
				$(window).scrollTop(top - center);
			}
		});
	});

	$scope.title = "CT Lung for Cancer Staging – Clinical Content";
	$scope.description = "Patient with high suspicion of cancer as per the PEBC document or radiological/laboratory tests suggesting cancer. Excluding: patients with synchronous lung primary, previous diagnosis of lung cancer, lung cancer surgery or therapy. New single lung primary only.";

	/* Ordered list sections */
	$scope.sections = [
	{
		'title': 'Clinical Information',
		'file': 'clinical-info',
	},
	{
		'title': 'Imaging Procedure Description',
		'file': 'protocols',
	},
	{
		'title': 'Findings',
		'file': 'findings'
	},
	{
		'title': 'T Category',
		'file': 'tcategory',
		'is_subsection': true,
	},
	{
		'title': 'N Category',
		'file': 'ncategory',
		'is_subsection': true,
	},
	{
		'title': 'M Category',
		'file': 'mcategory',
		'is_subsection': true,
	},
	{
		'title': 'Additional Findings',
		'file': 'additional',
		'is_subsection': true,
	},
	{
		'title': 'Impressions',
		'file': 'impressions',
	},
	];
});

angular.module('controllers').controller('musicController', function ($scope, $parse) {
	$scope.radio = {
		'heading': 'Favourite Song',
		'display': $parse('item.song + \' by \' + item.name'),
		'selection': 0,
		'choices':
		[
		{ 	'id': 0,
		'name': 'Stephen Foster',
		'song': 'Oh! Susanna',
		'url': 'PZXvxOXXdCk'
	},
	{ 	'id':1,
	'name': 'Dink Roberts',
	'song': 'Coo Coo',
	'url': 'GkyZ555DHrI'
},
{	'id': 2,
'name': 'Blind Lemon Jefferson',
'song': 'Black Snake Moan',
'url': 'h3yd-c91ww8'
},
]
};
});

angular.module('controllers').controller('filmController', function ($scope, $parse) {
	$scope.checkbox = {
		'heading': 'Have you watched any of the following films?',
		'display': $parse('item.film'),
		'choices':
		[
		{ 	'id': 0,
		'film': 'Reefer Madness',
		'url': 'PZXvxOXXdCk',
		'on': false,
	},
	{ 	'id':1,
	'film': 'Plan 9 From Outer Space',
	'url': 'GkyZ555DHrI',
	'on': false,
},
{	'id': 2,
'film': 'Manos: The Hands of Fate',
'url': 'h3yd-c91ww8',
'on': false,
},
],
};
});