angular.module('controllers').controller('impressionsController', function ($scope, mcatSrv, ncatSrv, tcatSrv) {
	$scope.mcat = mcatSrv;
	$scope.ncat = ncatSrv;
	$scope.tcat = tcatSrv;
	$scope.findings = [
	{'label':'Primary Tumour (T):', 'text': ''},
	{'label':'Regional Lymph Nodes (N):', 'text':''},
	{'label':'Distant Metastasis (M):', 'text': ''},
	]
});
