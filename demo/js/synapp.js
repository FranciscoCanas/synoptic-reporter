var synapp = angular.module('synoptic',[
	'ngRoute',
	'controllers'
	]);

synapp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      // when('/music', {
      //   templateUrl: 'partials/music.html',
      //   controller: 'musicController'
      // }).
      otherwise({
        redirectTo: '/'
      });
  }]);

/*
Replaces the ng-include element with the template in its src.
Usage: <div ng-include="'path/to/template.hml'" include-replace/>
*/
synapp.directive('includeReplace', function () {
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
synapp.directive('indexedTemplate', function() {
	return {
		link: function(scope, el, attrs) {
			var jel = angular.element(el);
			//
		}
	};
});
