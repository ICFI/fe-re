/*globals angular */

(function () {
    'use strict';

    var Dashboard = function ($scope, agencies, platforms, tags, dashboardData) {
            var scrollToAbout = function () {
                    $('html, body').clearQueue().stop().animate({
                        'scrollTop': $('#about-site').offset().top
                    }, 200);
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
                accountsDefault = [
                    {
                        'organization': '',
                        'followers': 0
                    },
                    {
                        'organization': '',
                        'followers': 0
                    },
                    {
                        'organization': '',
                        'followers': 0
                    },
                    {
                        'organization': '',
                        'followers': 0
                    },
                    {
                        'organization': '',
                        'followers': 0
                    }
                ],

                setAccounts = function (accounts) {
                    _.each(accounts, function (account, index) {
                        $scope.accounts[index].organization = account.organization;
                        $scope.accounts[index].followers = account.followers;
                        $scope.accounts[index].account = account.account;
                        $scope.accounts[index].service_url = account.service_url;
                    });
                },

                setDashboardData = function (data) {
                    $scope.totalFollowers       = data.summary.totalFollowers;
                    $scope.socialMediaAccounts  = data.summary.socialMediaAccounts;
                    $scope.postsPastDay         = data.summary.postsPastDay;
                    setAccounts(data.accountFollowers.results);
                    $scope.maxFollowers         = data.accountFollowers.meta.maxFollowers;

                    if (_.isArray(data.agenciesAccounts)) {
                        $scope.agenciesAccounts  = data.agenciesAccounts;
                    } else {
                        $scope.agenciesAccounts  = [data.agenciesAccounts];
                    }
                },

                updateFilters = function () {
                    dashboardData.get({agencyFilter: $scope.filterAgency.id}).then(function (data) {
                        setDashboardData(data);
                    });
                };

            $scope.accounts = accountsDefault;

            agencies.get().then(function (data) {
                $scope.agencyFilters    = agencyDefault.concat(data);
                $scope.filterAgency     = $scope.agencyFilters[0];
                updateFilters();

                $scope.agencies         = data;
                $scope.agenciesAccounts = data;
            });

            platforms.get().then(function (data) {
                $scope.platformFilters  = platformDefault.concat(data);
                $scope.filterPlatform     = _.find($scope.platformFilters, {"service_key": 'twitter'});
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