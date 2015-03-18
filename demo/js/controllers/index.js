angular.module('controllers').controller('indexController', function ($scope, $location, $anchorScroll, $document, $parse) {

/* Scrolls to specified section id. */
$scope.goToSection = function(id) {
		$location.replace(); // Replace hash, instead of append.
		$location.hash(id);  // Set url hash to given id.
		$anchorScroll();	 // Scroll to current hash.
	};

	/* Runs after each ng-include is loaded.*/
	$scope.$on('$includeContentLoaded', function(event) {
		$("#clinical-info-text").focus();

  		/*
		* Center all input fields when user focuses on them.
		*/
		// $(':input').focus(function(){
		// 	var ele = $(this);
		// 	var center = $(window).height() / 2;
		// 	var top = $(this).offset().top ;
		// 	ele.attr('test','la');
		// 	if (top > center){
		// 		$(window).scrollTop(top - center);
		// 	}
		// });
	});

	$scope.title = "CT Lung for Cancer Staging – Clinical Content";
	$scope.description = "Patient with high suspicion of cancer as per the PEBC document or radiological/laboratory tests suggesting cancer. Excluding: patients with synchronous lung primary, previous diagnosis of lung cancer, lung cancer surgery or therapy. New single lung primary only.";

	/* Ordered list sections */
	$scope.sections = [
	{
		'title': 'Clinical Information',
		'file': 'clinical-info',
	},
	{
		'title': 'Imaging Procedure Description',
		'file': 'protocols',
	},
	{
		'title': 'Findings',
		'file': 'findings'
	},
	{
		'title': 'T Category',
		'file': 'tcategory',
		'is_subsection': true,
	},
	{
		'title': 'N Category',
		'file': 'ncategory',
		'is_subsection': true,
	},
	{
		'title': 'M Category',
		'file': 'mcategory',
		'is_subsection': true,
	},
	{
		'title': 'Additional Findings',
		'file': 'additional',
		'is_subsection': true,
	},
	{
		'title': 'Impressions',
		'file': 'impressions',
	},
	];
});
