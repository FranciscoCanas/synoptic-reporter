var app = angular.module(
	'synoptic',    // App name
  [
	 'ngRoute',    // Routing dependencies
	 'controllers' // Controllers module
	]);

// Services for data shared across form sections.
app.service('mcatSrv', function () {
    return {};
})

app.service('ncatSrv', function () {
    return {};
})

app.service('tcatSrv', function () {
    return {};
})

/* 
/ Routing used with single view pagination.
*/
app.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        redirectTo: '/clinical-info'
      }).
      when('/clinical-info', {
        templateUrl: 'partials/clinical-info.html',
        controller: 'clinical-infoController'
      }).
      when('/protocols', {
        templateUrl: 'partials/protocols.html',
        controller: 'protocolsController'
      }).
      when('/ncategory', {
        templateUrl: 'partials/ncategory.html',
        controller: 'ncategoryController'
      }).
      when('/mcategory', {
        templateUrl: 'partials/mcategory.html',
        controller: 'mcategoryController'
      }).
      when('/tcategory', {
        templateUrl: 'partials/tcategory.html',
        controller: 'tcategoryController'
      }).
      when('/additional', {
        templateUrl: 'partials/additional.html',
        controller: 'additionalController'
      }).
      when('/impressions', {
        templateUrl: 'partials/impressions.html',
        controller: 'impressionsController'
      }).
      otherwise({
        redirectTo: '/relevant-clinical-info'
      });
  }]);

/*
Replaces the ng-include element with the template in its src.
Usage: <div ng-include="'path/to/template.hml'" include-replace/>
*/
app.directive('includeReplace', function () {
    return {
        require: 'ngInclude',
        restrict: 'A', /* only 'div' elements trigger this directive */
        link: function (scope, el, attrs) {
            el.replaceWith(el.children());
        }
    };
});

/*
Adds the index of this template to the text of the current element.
Usage: <div class="panel-heading" indexed-template>Music</div>
Output: <div class="panel-heading" indexed-template>1. Music</div>
*/
app.directive('indexedTemplate', function() {
	return {
		link: function(scope, el, attrs) {
			var jel = angular.element(el);
			//
		}
	};
});
