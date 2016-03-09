/*globals angular */

(function () {
    'use strict';

    var Dashboard = function ($scope, agencies, platforms, tags, dashboardData) {
            var scrollToAbout = function () {
                    console.log('scrollToAbout');
                },
                agencyDefault = [{
                    "id": 0,
                    "name": "All Participating Agencies",
                    "social_media_count": 0
                }],
                platformDefault = [{
                    "service_key": '',
                    "service_display_name": "All Social Media Platforms",
                    "disable": false
                }],
                tagDefault = [{
                    "id": 0,
                    "tag_text": "Filter by Tag"
                }],

                setDashboardData = function (data) {
                    $scope.totalFollowers       = data.summary.totalFollowers;
                    $scope.socialMediaAccounts  = data.summary.socialMediaAccounts;
                    $scope.postsPastDay         = data.summary.postsPastDay;
                    $scope.accounts             = data.accountFollowers.results;
                    $scope.maxFollowers         = data.accountFollowers.meta.maxFollowers;
                },

                updateFilters = function () {
                    console.log('updateFilters');
                    dashboardData.get({agencyFilter: $scope.filterAgency.id}).then(function (data) {
                        setDashboardData(data);
                    });
                };

            agencies.get().then(function (data) {
                $scope.agencyFilters    = agencyDefault.concat(data);
                $scope.filterAgency     = $scope.agencyFilters[0];
                updateFilters();

                $scope.agencies         = data;
            });

            platforms.get().then(function (data) {
                $scope.platformFilters  = platformDefault.concat(data);
                $scope.filterPlatform     = $scope.platformFilters[0];
            });

            tags.get().then(function (data) {
                $scope.tagFilters       = tagDefault.concat(data);
                $scope.filterTag        = $scope.tagFilters[0];
            });

            $scope.updateFilters    = updateFilters;
            $scope.scrollToAbout    = scrollToAbout;
        },

        About = function ($scope) {

        };

    angular.module('USDigitalRegistryApp')
        .controller('Dashboard', [
            '$scope',
            'agencies',
            'platforms',
            'tags',
            'dashboardData',
            Dashboard
        ])
        .controller('About', [
            '$scope',
            About
        ]);
}());