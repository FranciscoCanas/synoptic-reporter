angular.module('synoptic').directive('radioForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/radio_inputs.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('checkboxForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/checkbox_inputs.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('nodesRadioForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/nodes_radio.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('nodesCheckboxForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/nodes_checkbox.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('inlineRadioForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/side_by_side_radio.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('sizeSeriesImage', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/size_series_image.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('nestedPanelCheckboxes', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/nested_panel_checkboxes.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('bronchiInvolvement', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/bronchi_involvement.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('degreeOfInvolvement', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/degree_of_involvement.html',
        scope: {
            model: '='
        }
    };
});