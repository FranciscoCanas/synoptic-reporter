angular.module('controllers').controller('impressionsController', function ($scope, mcatSrv, ncatSrv, tcatSrv) {
	$scope.mcat = mcatSrv;
	$scope.ncat = ncatSrv;
	$scope.tcat = tcatSrv;
	$scope.findings = {
		items:[
	{'label':'Primary Tumour (T):', 'text': '', 'items':['T1a', 'T1b','T2','T2a','T2b','T3','T4']},
	{'label':'Regional Lymph Nodes (N):', 'text':'', 'items':['NX','N0','N1','N2','N3']},
	{'label':'Distant Metastasis (M):', 'text': '', 'items':['M0','M1','M1a','M1b']},
	],
};

});
