var controllers = angular.module('controllers', []);

controllers.controller('musicController', function ($scope, $parse) {
	$scope.radio = {
		'heading': 'Favourite Song',
		'display': $parse('item.song + \' by \' + item.name'),
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
	}
});