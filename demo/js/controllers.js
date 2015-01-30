var controllers = angular.module('controllers', []);

controllers.controller('musicController', function ($scope) {
	$scope.songs = [
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
	];
});