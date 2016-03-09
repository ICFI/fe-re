/*globals angular */

(function () {
    'use strict';

    var DATA_PATHS = {
            'TYPEAHEAD_DRUG'    : '/api/v1/medicine/typeahead/',
            'TYPEAHEAD_SYMPTOM' : '/api/v1/sideeffect/typeahead/',
            'DRUG_SYMPTOM'      : '/api/v1/drug/label/%drug%/%symptom%',
            'CHART'             : '/api/v1/chart/%type%/%drug%/%symptom%'
        },

        MESSAGES = {
            'SERVER_ERROR'      : 'Something went awry.',
            'CHART_DATA_ERROR'  : 'Chart data not available.',
            'YES'               : '<strong>Yes</strong>,',
            'NO'                : '<strong>Sorry,</strong> we don’t know if',
            'YES_TEXT'          : 'can cause',
            'NO_TEXT'           : 'causes',
            'INVALID_TERM'      : "We don't know %term%. Did you check your spelling?",
            'INVALID_SEARCH'    : 'Please enter both a Medicine and a Symptom.'
        },

        routeConfig = function ($routeProvider) {
            $routeProvider
                .when('/agencies', {
                    templateUrl: '/app/partials/route-agencies.html',
                    controller: 'Agencies'
                })
                .when('/about-this-site', {
                    templateUrl: '/app/partials/route-about.html',
                    controller: 'About'
                })
                .otherwise({redirectTo:'agencies'});
        };

    angular.module('USDigitalRegistryApp')
        .constant('DATA_PATHS', DATA_PATHS)
        .constant('MESSAGES', MESSAGES);
}());