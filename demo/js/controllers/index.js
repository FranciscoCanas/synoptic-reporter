angular.module('controllers').controller('indexController', function ($scope) {
	$scope.title = "CT Lung for Cancer Staging – Clinical Content";
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
			'title': 'N Category',
			'file': 'ncategory',
		},
		{
			'title': 'M Category',
			'file': 'mcategory',
		},
		{
			'title': 'T Category',
			'file': 'tcategory',
		},
		{
			'title': 'Additional Findings',
			'file': 'additionals',
		},
		{
			'title': 'Conclusions/Recommendations',
			'file': 'conclusions',
		},
	];
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