angular.module('controllers').controller('mcategoryController', function ($scope, mcatSrv) {
	$scope.nodes = {items: [
		{'label':'Adrenals'},
		{'label':'Liver'},
		{'label':'Bone'},
		{'label':'Other'},
	]};
	$scope.catdata = mcatSrv;
	$scope.catdata.nodes = $scope.nodes;
});
