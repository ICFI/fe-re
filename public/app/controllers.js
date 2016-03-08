/*globals angular */

(function () {
    'use strict';

    var Agencies = function ($scope) {
            $scope.totalFollowers = 970296;
            $scope.socialMediaAccounts = 140294;
            $scope.postsPastDay = 6002;
        },

        About = function ($scope) {

        };

    angular.module('USDigitalRegistryApp')
        .controller('Agencies', [
            '$scope',
            Agencies
        ])
        .controller('About', [
            '$scope',
            About
        ]);
}());