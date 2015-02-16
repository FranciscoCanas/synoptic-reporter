angular.module('controllers').controller('tcategoryController', function ($scope) {
	$scope.structures = [
		{'label': 'Pleura'},
		{'label': 'Brachial Plexus'},
		{'label': 'Diaphragm'},
		{'label': 'Mediastinal fat'},
		{'label': 'Aorta'},
		{'label': 'Pericardium or Heart'},
		{'label': 'Mediastinal Vessels'},
		{'label': 'Trachea'},
		{'label': 'Esophagus'},
		{'label': 'Trachea esophageal groove'},
		{'label': 'Vertebral Body'},
		{'label': 'hest wall & Ribs'},
	];

	$scope.nodules=[
		{'label':'In the same lobe'},
		{'label':'In a different lobe, same lung'},
		{'label':'In the opposite lung (M1a)'},
	];
});

