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

	$scope.catdata = ncatSrv;
	$scope.catdata.structures = $scope.nodes;
});
