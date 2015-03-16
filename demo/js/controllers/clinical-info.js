angular.module('controllers').controller('clinical-infoController', function ($scope) {
	$scope.clinical_info_placeholder = "Enter patient clinical information.";
	$scope.previous_exams = [{modality:'', date:''}]

	$scope.add_exam = function() {
		$scope.previous_exams.push({modality:'', date:''});
		console.log('added exam');
	};
});
