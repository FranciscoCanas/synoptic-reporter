angular.module('controllers').controller('ncategoryController', function ($scope, ncatSrv) {
	$scope.nodes = [
		{'label':'Suspicious N1 Nodes'},
		{'label':'Suspicious Prevascular (3a) lymph node'},
		{'label':'Suspicious Retrotracheal (3p)  lymph node'},
		{'label':'Suspicious N2 Nodes'},
		{'label':'Suspicious N3 Nodes'},
		{'label':'Other Nodes (axilla,sub-diaphragmatic)'}
	]

	$scope.catdata = ncatSrv;
	$scope.catdata.structures = $scope.nodes;
});
