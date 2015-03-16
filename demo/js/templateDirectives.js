angular.module('synoptic').directive('noYes', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/no_yes.html',
        scope: {
            model: '='
        }
    };
});

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

angular.module('synoptic').directive('previousExamination', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/previous_examination.html',
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
        templateUrl: 'templates/inline-radio-form.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('inlineCheckboxForm', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/side_by_side_checkboxes.html',
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

angular.module('synoptic').directive('ipsilateralAnatomicalStructures', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/ipsilateral_anatomical_structures.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('abuttingInvading', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/abutting_invading.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('abuttingInvadingTable', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/abutting_invading_table.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('suspiciousNodes', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/suspicious_n_nodes.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('extrathoracicFindings', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/extrathoracic_findings.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('additionalFindingsTable', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/additional_findings_table.html',
        scope: {
            model: '='
        }
    };
});

angular.module('synoptic').directive('mildModerateSevere', function() {
    return {
        restrict: 'E',
        templateUrl: 'templates/mild_moderate_severe.html',
        scope: {
            model: '='
        }
    };
});