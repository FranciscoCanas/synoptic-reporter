angular.module('controllers').controller('additionalController', function ($scope) {
	$scope.findings = {items:[
		{'label':'Emphysema'},
		{'label':'Fibrosis'},
		{'label':'Coronary Artery Disease'},
		{'label':'Asbestos related pleural disease'},
		{'label':'Interstitial lung disease'},
		{'label':'Atherosclerosis'},
		{'label':'Pulmonary Embolism'},
	]};
});
