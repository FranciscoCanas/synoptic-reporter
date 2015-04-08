angular.module('controllers').controller('impressionsController', function ($scope, mcatSrv, ncatSrv, tcatSrv) {
	$scope.mcat = mcatSrv;
	$scope.ncat = ncatSrv;
	$scope.tcat = tcatSrv;
	$scope.findings = {
		items:[
	{'label':'Primary Tumour (T):', 'text': '', 'items':['T1', 'T1a', 'T1b','T2','T2a','T2b','T3','T4']},
	{'label':'Regional Lymph Nodes (N):', 'text':'', 'items':['NX','N0','N1','N2','N3']},
	{'label':'Distant Metastasis (M):', 'text': '', 'items':['M0','M1','M1a','M1b']},
	],
};
	$scope.TNMGuide = {
		'T1': 'Tumor 3 cm or less in greatest dimension, surrounded by lung or visceral pleura, without bronchoscopic evidence of invasion more proximal than the lobar bronchus',
		'T1a': 'Tumor 2 cm or less in greatest dimension',
		'T1b': 'Tumor more than 2 cm but 3 cm or less in greatest dimension',
		'T2': 'Tumor more than 3 cm but 7 cm or less or tumor with any of the following features (T2 tumors with these features are classified T2a if 5 cm or less): involves main bronchus, 2 cm or more distal to the carina; invades visceral pleura (PL1 or PL2); associated with atelectasis or obstructive pneumonitis that extends to the hilar region but does not involve the entire lung',
		'T2a': 'Tumor more than 3 cm but 5 cm or less in greatest dimension',
		'T2b': 'Tumor more than 5 cm but 7 cm or less in greatest dimension',
		'T3': 'Tumor more than 7 cm or one that directly invades any of the following: parietal pleural (PL3), chest wall (including superior sulcus tumors), diaphragm, phrenic nerve, mediastinal pleura, parietal pericardium; or tumor in the main bronchus less than 2 cm distal to the carina1of the carina; or associated atelectasis or obstructive pneumonitis of the entire lung or separate tumor nodule(s) in the same lobebut without involvement',
		'T4': 'Tumor of any size that invades any of the following: mediastinum, heart, great vessels, trachea, recurrent laryngeal nerve, esophagus, vertebral body, carina, separate tumor nodule(s) in a different ipsilateral lobe',
		'M0': 'No distant metastasis',
		'M1': 'Distant metastasis',
		'M1a': 'Separate tumor nodule(s) in a contralateral lobe, tumor with pleural nodules or malignant pleural (or pericardial) effusion',
		'M1b': 'Distant metastasis (in extrathoracic organs)',
		'NX': 'Regional lymph nodes cannot be assessed',
		'N0': 'No regional lymph node metastases',
		'N1': 'Metastasis in ipsilateral peribronchial and/or ipsilateral hilar lymph nodes and intrapulmonary nodes, including involvement by direct extension',
		'N2': 'Metastasis in ipsilateral mediastinal and/or subcarinal lymph node(s)',
		'N3': 'Metastasis in contralateral mediastinal, contralateral hilar, ipsilateral or contralateral scalene, or supraclavicular lymph node(s)',			}
});
