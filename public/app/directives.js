/*globals angular, google, c3, Modernizr */

(function () {
    var agencySummary = function agencySummary () {
            return {
                restrict    : 'E',
                replace     : true,
                templateUrl : '/app/partials/agency-summary.html'
            }
        },

        accountsFollowers = function accountsFollowers () {
            return {
                restrict    : 'E',
                replace     : true,
                templateUrl : '/app/partials/accounts-followers.html'
            }
        },

        agenciesAccounts = function agenciesAccounts () {
            return {
                restrict    : 'E',
                replace     : true,
                templateUrl : '/app/partials/agencies-accounts.html'
            }
        },

        chartDonut = function chartDonut () {
            function getColumns(data) {
                var columns = [];

                _.each(data, function (agency) {
                    columns.push([agency.name, agency.social_media_count]);
                })

                return columns;
            };

            function getColumnIds(columns) {
                var columnIds = [];

                _.each(columns, function (column) {
                    columnIds.push(column[0]);
                });
            }

            return {
                restrict    : 'E',
                replace     : true,
                templateUrl : '/app/partials/chart-donut.html',
                link        : function (scope, element) {
                    var chartWidth = 480,

                        colors = ['#205493','#cd2026','#fdb81e','#02bfe7','#2e8540'],

                        columns = getColumns(scope.agenciesAccounts),

                        title = _.sumBy(scope.agenciesAccounts, function (agency) { return agency.social_media_count; }),

                        chartElement = element.find('#accounts').get(0);

                        chartGenerate = c3.generate({
                            bindto: chartElement,
                            data: {
                                columns: columns,
                                type : 'donut'
                            },
                            size: {
                                width: chartWidth
                            },
                            color: {
                                pattern: colors
                            },
                            legend: {
                                show: true
                            },
                            donut: {
                                title: title
                            }
                        });

                        scope.$watch('agenciesAccounts', function (newValue, oldValue) {
                            if (!_.isEqual(newValue, oldValue)) {
                                chartGenerate.unload({
                                    ids: getColumnIds(columns)
                                });

                                columns = getColumns(newValue);

                                title = _.sumBy(scope.agenciesAccounts, function (agency) { return agency.social_media_count; });

                                chartGenerate.load({
                                    columns: columns
                                });

                                $('.c3-chart-arcs-title', $(chartGenerate.element)).text(title);
                            }
                        });
                }
            }
        },

        latestPost = function latestPost () {
            return {
                restrict    : 'E',
                replace     : true,
                templateUrl : '/app/partials/latest-post.html'
            }
        };

    angular.module('USDigitalRegistryApp').directive('agencySummary', [agencySummary])
                               .directive('accountsFollowers', [accountsFollowers])
                               .directive('agenciesAccounts', [agenciesAccounts])
                               .directive('chartDonut', [chartDonut])
                               .directive('latestPost', [latestPost]);
}());