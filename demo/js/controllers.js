var controllers = angular.module('controllers', []);

controllers.controller('indexController', function ($scope) {
	$scope.sections = [
		{
			'title': 'Relevant Clinical Information',
			'file': 'relevant-clinical-info',
		},
		{
			'title': 'Protocols',
			'file': 'protocols',
		},
		{
			'title': 'T Category',
			'file': 'tcategory',
		},
		{
			'title': 'N Category',
			'file': 'ncategory',
		},
		{
			'title': 'M Category',
			'file': 'mcategory',
		},
		{
			'title': 'Film',
			'file': 'film',
		},
		{
			'title': 'Music',
			'file': 'music',
		},
		{
			'title': 'Television',
			'file': 'television',
		},
	];
});

controllers.controller('protocolController', function ($scope) {
});

controllers.controller('tcategoryController', function ($scope) {
});

controllers.controller('ncategoryController', function ($scope) {
});

controllers.controller('mcategoryController', function ($scope) {
});

controllers.controller('musicController', function ($scope, $parse) {
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

controllers.controller('filmController', function ($scope, $parse) {
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