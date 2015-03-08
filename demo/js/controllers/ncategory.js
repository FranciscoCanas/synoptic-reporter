angular.module('controllers').controller('ncategoryController', function ($scope, ncatSrv) {
	$scope.nodes = {
		items: [
		{'label':'N1 Nodes'},
		{'label':'Prevascular (3a) lymph node'},
		{'label':'Retrotracheal (3p)  lymph node'},
		{'label':'N2 Nodes'},
		{'label':'N3 Nodes'},
		{'label':'Other Nodes (axilla,sub-diaphragmatic)'}
	]};

	$scope.n1 = {
		label: 'N1',
		items:[
			{label: 'Hilar', n: 10},
			{label: 'Interlobar', n: 11},
			{label: 'Lobar', n: 12},
			{label: 'Segmental', n:13},
			{label: 'Subsegmental', n:13},
		]
	};

	$scope.n2 = {
		label: 'N2',
		items:[
			{label: 'Upper Paratracheal (right)', n: '2R'},
			{label: 'Upper paratracheal (left)', n: '2L'},
			{label: 'Pre-vascular', n: '3a'},
			{label: 'Retrotracheal', n:'3p'},
			{label: 'Lower paratracheal (right)', n:'4R'},
			{label: 'Upper paratracheal (left)', n:'4L'},
			{label: 'Subaortic', n:'5'},
			{label: 'Para-aortic (ascending aorta or phrenic)', n:'6'},
			{label: 'Subcarinal', n:'7'},
			{label: 'Paraesophageal (below carina)', n:'8'},
			{label: 'Pulmonary ligament', n:'9'},
		]
	};

	$scope.n3 = {
		label: 'N3',
		items: [
			{label: 'Low cervical, supraclavicular, and sternal notch nodes ', n: '1'},
			{label: 'Upper Paratracheal (right) [contralateral]', n: '2R'},
			{label: 'Upper paratracheal (left) [contralateral]', n: '2L'},
			{label: 'Pre-vascular [contralateral]', n: '3a'},
			{label: 'Retrotracheal [contralateral]', n: '3p'},
			{label: 'Lower paratracheal (right) [contralateral]', n: '4R'},
			{label: 'Upper paratracheal (left) [contralateral]', n: '4L'},
			{label: 'Subaortic [contralateral]', n: '5'},
			{label: 'Para-aortic (ascending aorta or phrenic) [contralateral]', n: '6'},
			{label: 'Subcarinal [contralateral]', n: '7'},
			{label: 'Paraesophageal (below carina) [contralateral]', n: '8'},
			{label: 'Pulmonary ligament [contralateral]', n: '9'},
		]
	}

	$scope.catdata = ncatSrv;
	$scope.catdata.structures = $scope.nodes;
});


