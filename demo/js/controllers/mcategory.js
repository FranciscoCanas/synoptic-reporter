angular.module('controllers').controller('mcategoryController', function ($scope, mcatSrv) {
	$scope.nodes = {items: [
		{'label':'Adrenals'},
		{'label':'Liver'},
		{'label':'Bone'},
		{'label':'Other'},
	]};

	$scope.bone = {label: 'Bones'};
	$scope.liver = {label: 'Liver'};
	$scope.adrenals = {label: 'Adrenals'};

	$scope.catdata = mcatSrv;
	$scope.catdata.nodes = $scope.nodes;
});
