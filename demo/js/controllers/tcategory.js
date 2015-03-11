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

		$scope.right_bronchi = {
			items: [
			{'label': 'Right Upper Lobe'},
			{'label': 'Bronchus Intermedius'},
			{'label': 'Right Middle Lobe'},
			{'label': 'Lower Lobe Bronchi'},
			],
		}
		$scope.right_bronchi_selected = function() {return $scope.right_bronchi.items.some(function(element){ return element.selected; })};

		$scope.left_bronchi = {
			items: [
			{'label': 'Left Upper Lobe'},
			{'label': 'Lingula'},
			{'label': 'Left Lower Lobe'},
			],
		}
		$scope.left_bronchi_selected = function() {return $scope.left_bronchi.items.some(function(element){ return element.selected; })};
		

		$scope.catdata = tcatSrv;
		$scope.catdata.structures = $scope.structures;
		$scope.catdata.nodules = $scope.nodules;

		$scope.ipsilateral_anatomical_structures = {
			ab_items: [
			{label: 'Brachial Plexus (direct involvement by superior sulcus tumours)'},
			{label: 'Diaphragm'},
			{label: 'Mediastinal fat'},
			{label: 'Aorta'},
			{label: 'Trachea'},
			{label: 'Esophagus'},
			],

			mediastinal_vessels: {
				items: [
				{label: 'Right internal jugular vein'},
				{label: 'Right brachiocephalic vein'},
				{label: 'Right subclavian vein'},
				{label: 'Superior Vena Cava'},
				{label: 'Azygous Vein'},
				{label: 'Brachiocephalic Trunk'},
				{label: 'Left Internal Jugular Vein'},
				{label: 'Left  brachiocephalic vein'},
				{label: 'Left subclavian vein'},
				{label: 'Left common carotid artery'},
				{label: 'Left subclavian artery '},
				{label: 'Inferior Vena Cava'},
				],
			},

			vertebral_body: {
				items: [
				{label: 'T1'},
				{label: 'T2'},
				{label: 'T3'},
				{label: 'T4'},
				{label: 'T5'},
				{label: 'T6'},
				{label: 'T7'},
				{label: 'T8'},
				{label: 'T9'},
				{label: 'T10'},
				{label: 'T11'},
				{label: 'T12'},
				],
			},

			spinal_compromise: {
				items: [
				{label: 'T1'},
				{label: 'T2'},
				{label: 'T3'},
				{label: 'T4'},
				{label: 'T5'},
				{label: 'T6'},
				{label: 'T7'},
				{label: 'T8'},
				{label: 'T9'},
				{label: 'T10'},
				{label: 'T11'},
				{label: 'T12'},
				],
			},

			chest_number_and_side: {
				items: [
				{label: '1R'},
				{label: '2R'},
				{label: '3R'},
				{label: '4R'},
				{label: '5R'},
				{label: '6R'},
				{label: '7R'},
				{label: '8R'},
				{label: '9R'},
				{label: '10R'},
				{label: '11R'},
				{label: '12R'},
				{label: '1L'},
				{label: '2L'},
				{label: '3L'},
				{label: '4L'},
				{label: '5L'},
				{label: '6L'},
				{label: '7L'},
				{label: '8L'},
				{label: '9L'},
				{label: '10L'},
				{label: '11L'},
				{label: '12L'},
				],
			},
		}
	});

