angular.module('controllers').controller('mcategoryController', function ($scope, mcatSrv) {
	$scope.nodes = [
		{'label':'Adrenals'},
		{'label':'Liver'},
		{'label':'Bone'},
		{'label':'Other'},
	];
	$scope.catdata = mcatSrv;
	$scope.catdata.nodes = $scope.nodes;
});
