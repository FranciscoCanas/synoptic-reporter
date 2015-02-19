angular.module('controllers').controller('tcategoryController', function ($scope, tcatSrv) {
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
		{'label': 'Chest wall & Ribs'},
	];

	$scope.nodules=[
		{'label':'In the same lobe'},
		{'label':'In a different lobe, same lung'},
		{'label':'In the opposite lung (M1a)'},
	];

	$scope.catdata = tcatSrv;
	$scope.catdata.structures = $scope.structures;
	$scope.catdata.nodules = $scope.nodules;
});

