angular.module('controllers').controller('impressionsController', function ($scope) {
	$scope.findings = [
		{'label':'Primary Tumour (T):'},
		{'label':'Regional Lymph Nodes (N):'},
		{'label':'Distant Metastasis (M):'},
	]
});
