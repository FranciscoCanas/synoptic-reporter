angular.module('controllers').controller('tcategoryController', function ($scope, tcatSrv) {
	$scope.structures = {
		items: [
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
	],
};

	$scope.nodules={
		items: [
		{'label':'In the same lobe'},
		{'label':'In a different lobe, same lung'},
		{'label':'In the opposite lung (M1a)'},
	]};

	$scope.peripheral_nodules = {
		panels: [
			{	
				heading: 'RUL',
				items: [{label:'Apical'}, {label:'Posterior'}, {label:'Anterior'}],
			},
			{	
				heading: 'RML',
				items: [{label:'Lateral'}, {label:'Medial'}],
			},
			{	
				heading: 'RLL',
				items: [
				{label:'Superior'}, {label:'Medial Basal'}, {label:'Anterior Basal'},
					{label:'Lateral Basal'}, {label:'Posterior Basal'},
				],
			},
			{	
				heading: 'LINGUAL',
				items: [{label:'Superior'}, {label:'Inferior'}],
			},
			{	
				heading: 'LUL',
				items: [{label:'Apico-Posterior'}, {label:'Anterior'}],
			},
			{	
				heading: 'LLL',
				items: [{label:'Superior'}, {label:'Anterior Medial Basal'},
				{label:'Lateral Basal'}, {label:'Posterior Basal'},],
			},
		]
	};

	$scope.catdata = tcatSrv;
	$scope.catdata.structures = $scope.structures;
	$scope.catdata.nodules = $scope.nodules;
});

