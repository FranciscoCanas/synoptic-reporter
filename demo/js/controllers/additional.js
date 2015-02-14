angular.module('controllers').controller('additionalController', function ($scope) {
	$scope.findings = [
		{'label':'Emphysema'},
		{'label':'Fibrosis'},
		{'label':'Coronary artery disease'},
		{'label':'Asbestos related pleural disease'},
		{'label':'Interstitial lung disease'},
		{'label':'Atherosclerosis'},
		{'label':'Pulmonary Embolism'},
		{'label':'Other'},
	]
});
