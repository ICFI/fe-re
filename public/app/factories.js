/*globals angular */

(function () {
    'use strict';

    var agencyList = [
                        {
                            "id": 761,
                            "name": "Department of State",
                            "info_url": "http://www.state.gov",
                            "mobile_app_count": 5,
                            "social_media_count": 1986,
                            "gallery_count": 0
                        },
                        {
                            "id": 1521,
                            "name": "Department of the Navy",
                            "info_url": "http://www.navy.mil/",
                            "mobile_app_count": 0,
                            "social_media_count": 1366,
                            "gallery_count": 0
                        },
                        {
                            "id": 361,
                            "name": "Department of Health and Human Services (HHS)",
                            "info_url": "http://www.hhs.gov",
                            "mobile_app_count": 18,
                            "social_media_count": 391,
                            "gallery_count": 0
                        },
                        {
                            "id": 2471,
                            "name": "Smithsonian Institution",
                            "info_url": "http://www.si.edu/",
                            "mobile_app_count": 17,
                            "social_media_count": 371,
                            "gallery_count": 0
                        },
                        {
                            "id": 811,
                            "name": "Department of Veterans Affairs (VA)",
                            "info_url": "http://www.va.gov",
                            "mobile_app_count": 13,
                            "social_media_count": 249,
                            "gallery_count": 0
                        }
                    ],

        agencies = function ($http, $q, DATA_PATHS, MESSAGES) {
            var formatGetPath = function (params) {
                    return DATA_PATHS.DRUG_SYMPTOM
                           .replace('%drug%', params.drug)
                           .replace('%symptom%', params.symptom);
                },

                get = function (params) {
                    var response,
                        deferred;

                    deferred = $q.defer();

                    // $http({
                    //     'method': 'GET',
                    //     'url'   : formatGetPath(params)
                    // }).success(function (data) {
                    //     deferred.resolve(data);
                    // }).error(function () {
                    //     deferred.reject(MESSAGES.SERVER_ERRROR);
                    // });

                    response = deferred.promise;

                    deferred.resolve(agencyList);

                    return response;
                };

            return {
                get : get
            };
        },

        dashboardData = function ($http, $q, DATA_PATHS) {
            var accounts = {
                    '761':[
                        {
                          "id": 5601,
                          "organization": "State",
                          "account": "StateDept",
                          "service_url": "http://twitter.com/StateDept", 
                          "followers": 2307515
                        },
                        {
                          "id": 5691,
                          "organization": "Bureau of Consular Affairs",
                          "account": "TravelGov",
                          "service_url": "http://twitter.com/TravelGov", 
                          "followers": 499890
                        },
                        {
                          "id": 5581,
                          "organization": "Bureau of Democracy Human Rights and Labor",
                          "account": "State_DRL",
                          "service_url": "http://twitter.com/State_DRL", 
                          "followers": 22985
                        },
                        {
                          "id": 5591,
                          "organization": "Bureau of South and Central Asian Affairs",
                          "account": "State_SCA",
                          "service_url": "http://twitter.com/State_SCA", 
                          "followers": 9880
                        },
                        {
                          "id": 4871,
                          "organization": "Bureau of Educational and Cultural Affairs",
                          "account": "connectstategov",
                          "service_url": "http://twitter.com/connectstategov", 
                          "followers": 0
                        }
                      ],
                    '1521': [
                        {
                          "id": 142841,
                          "organization": "Fleet Activities, Okinawa - Japanese Language",
                          "account": "CFAOkinawa",
                          "service_url": "http://twitter.com/#!/CFAOkinawa", 
                          "followers": 20458
                        },
                        {
                          "id": 20722,
                          "organization": "Navy Information Dominance Corps Self Synchronization",
                          "account": "idcsync",
                          "service_url": "http://twitter.com/idcsync", 
                          "followers": 394
                        },
                        {
                          "id": 142861,
                          "organization": "DASN RDT and E",
                          "account": "DoD_OSA",
                          "service_url": "http://twitter.com/#!/DoD_OSA", 
                          "followers": 39
                        },
                        {
                          "id": 30772,
                          "organization": "Chief of Naval Operations Admiral Jonathan Greenert",
                          "account": "cnogreenert",
                          "service_url": "http://twitter.com/cnogreenert", 
                          "followers": 0
                        },
                        {
                          "id": 142821,
                          "organization": "Navy Experimental Diving Unit",
                          "account": "_NEDU_",
                          "service_url": "http://twitter.com/_NEDU_", 
                          "followers": 0
                        }
                      ],
                    '361': [
                        {
                          "id": 4821,
                          "organization": "Centers for Disease Control",
                          "account": "CDCgov",
                          "service_url": "http://twitter.com/CDCgov", 
                          "followers": 648802
                        },
                        {
                          "id": 4791,
                          "organization": "AIDS.gov",
                          "account": "AIDSgov",
                          "service_url": "http://twitter.com/AIDSgov", 
                          "followers": 343236
                        },
                        {
                          "id": 4851,
                          "organization": "Centers for Medicare and Medicaid",
                          "account": "CMSgov",
                          "service_url": "http://twitter.com/CMSgov", 
                          "followers": 93232
                        },
                        {
                          "id": 4781,
                          "organization": "Healthcare Research and Quality",
                          "account": "AHRQNews",
                          "service_url": "http://twitter.com/AHRQNews", 
                          "followers": 52171
                        },
                        {
                          "id": 4811,
                          "organization": "Centers for Disease Control",
                          "account": "CDCespanol",
                          "service_url": "http://twitter.com/CDCespanol", 
                          "followers": 38125
                        }
                      ],
                    '2471': [
                        {
                          "id": 115391,
                          "organization": "Cooper Hewitt, Smithsonian Design Museum",
                          "account": "CooperHewitt",
                          "service_url": "https://twitter.com/CooperHewitt", 
                          "followers": 66327
                        },
                        {
                          "id": 115591,
                          "organization": "Freer Sackler Gallery",
                          "account": "FreerSackler",
                          "service_url": "https://twitter.com/FreerSackler", 
                          "followers": 15277
                        },
                        {
                          "id": 115171,
                          "organization": "Archives of American Art",
                          "account": "archivesamerart",
                          "service_url": "https://twitter.com/archivesamerart", 
                          "followers": 12109
                        },
                        {
                          "id": 114971,
                          "organization": "Anacostia Community Museum",
                          "account": "AnacostiaMuseum",
                          "service_url": "https://twitter.com/AnacostiaMuseum", 
                          "followers": 4048
                        },
                        {
                          "id": 115271,
                          "organization": "ARTLAB+",
                          "account": "artlabplus",
                          "service_url": "https://twitter.com/artlabplus", 
                          "followers": 877
                        }
                      ],
                    '811': [
                        {
                          "id": 4921,
                          "organization": "Veterans Affairs",
                          "account": "DeptVetAffairs",
                          "service_url": "http://twitter.com/DeptVetAffairs", 
                          "followers": 274162
                        },
                        {
                          "id": 6031,
                          "organization": "Veterans Health Administration",
                          "account": "VeteransHealth",
                          "service_url": "http://twitter.com/VeteransHealth", 
                          "followers": 73447
                        },
                        {
                          "id": 6021,
                          "organization": "Veterans Benefits Administration",
                          "account": "VAVetBenefits",
                          "service_url": "http://twitter.com/VAVetBenefits", 
                          "followers": 70363
                        },
                        {
                          "id": 6011,
                          "organization": "National Cemetery Administration",
                          "account": "VANatCemeteries",
                          "service_url": "http://twitter.com/VANatCemeteries", 
                          "followers": 5308
                        },
                        {
                          "id": 12822,
                          "organization": "Department of Veterans Affairs Office of Inspector General",
                          "account": "VetAffairsOIG",
                          "service_url": "http://twitter.com/VetAffairsOIG", 
                          "followers": 2719
                        }
                      ]
                    },

                formatGetPath = function (params) {
                    var path;

                    switch (params.field) {
                    case 'DRUG':
                        path = DATA_PATHS.TYPEAHEAD_DRUG;
                        break;
                    case 'SYMPTOM':
                        path = DATA_PATHS.TYPEAHEAD_SYMPTOM;
                        break;
                    }

                    return path + params.query;
                },

                getTopFiveAccounts = function () {
                    return _.take(_.orderBy(_.concat(accounts['761'],accounts['1521'],accounts['361'],accounts['2471'],accounts['811']), ["followers"], ["desc"]), 5);
                },

                getTotalFollowers = function () {
                    return _.sumBy(_.concat(accounts['761'],accounts['1521'],accounts['361'],accounts['2471'],accounts['811']), function (account) {
                        return account.followers;
                    });
                },

                get = function (params) {
                    var response,
                        deferred,
                        accountFollowers = {
                            meta: {maxFollowers: 0},
                            results: []
                        },
                        summary = {
                            totalFollowers       : 0,
                            socialMediaAccounts  : 0,
                            postsPastDay         : 0
                        };

                    deferred = $q.defer();

                    if (params.agencyFilter !== 0) {
                        accountFollowers.results = accounts[params.agencyFilter.toString()];
                        summary.socialMediaAccounts = _.find(agencyList, {'id': params.agencyFilter}).social_media_count;
                        summary.totalFollowers = _.sumBy(accounts[params.agencyFilter.toString()], function (account) {
                            return account.followers;
                        });;
                    } else {
                        accountFollowers.results = getTopFiveAccounts();
                        summary.socialMediaAccounts = _.sumBy(agencyList, function (agency) {
                            return agency.social_media_count;
                        });
                        summary.totalFollowers = getTotalFollowers();
                    }

                    accountFollowers.meta.maxFollowers = _.maxBy(accountFollowers.results, function (account) {
                        return account.followers;
                    }).followers;

                    summary.postsPastDay = _.random(1, 5000);

                    response = deferred.promise;

                    deferred.resolve({
                        accountFollowers: accountFollowers,
                        summary: summary
                    });

                    return response;
                };

            return {
                get : get
            };
        },

        platforms = function ($http, $q, DATA_PATHS) {
            var formatGetPath = function (params) {
                    var path;

                    switch (params.field) {
                    case 'DRUG':
                        path = DATA_PATHS.TYPEAHEAD_DRUG;
                        break;
                    case 'SYMPTOM':
                        path = DATA_PATHS.TYPEAHEAD_SYMPTOM;
                        break;
                    }

                    return path + params.query;
                },

                get = function (params) {
                    var response,
                        deferred;

                    deferred = $q.defer();

                    // $http({
                    //     'method': 'GET',
                    //     'url'   : formatGetPath(params)
                    // }).success(function (data) {
                    //     deferred.resolve(formatResponse(data));
                    // }).error(function () {
                    //     deferred.resolve([]);
                    // });

                    response = deferred.promise;

                    deferred.resolve([
                        {
                          "service_key": 'facebook',
                          "service_display_name": "Facebook",
                          "disable": true
                        },
                        {
                          "service_key": 'twitter',
                          "service_display_name": "Twitter",
                          "disable": false
                        },
                        {
                          "service_key": 'youtube',
                          "service_display_name": "YouTube",
                          "disable": true
                        }
                    ]);

                    return response;
                };

            return {
                get : get
            };
        },

        tags = function ($http, $q, DATA_PATHS, MESSAGES) {
            var formatGetPath = function (params) {
                    return DATA_PATHS.CHART
                           .replace('%type%', params.type)
                           .replace('%drug%', params.drug)
                           .replace('%symptom%', params.symptom);
                },

                get = function (params) {
                    var response,
                        deferred;

                    deferred = $q.defer();

                    // $http({
                    //     'method': 'GET',
                    //     'url'   : formatGetPath(params)
                    // }).success(function (data) {
                    //     if (data.error !== undefined && data.error === true) {
                    //         deferred.reject(MESSAGES.CHART_DATA_ERROR);
                    //     } else {
                    //         deferred.resolve(data);
                    //     }
                    // }).error(function () {
                    //     deferred.reject(MESSAGES.SERVER_ERRROR);
                    // });

                    response = deferred.promise;

                    deferred.resolve([
                        {
                          "id": 141,
                          "tag_text": "children"
                        },
                        {
                          "id": 3854,
                          "tag_text": "tobacco"
                        },
                        {
                          "id": 3105,
                          "tag_text": "emergency"
                        }
                    ]);

                    return response;
                };

            return {
                get : get
            };
        },

        filterResults = function ($http, $q, DATA_PATHS, MESSAGES) {
            var formatGetPath = function (params) {
                    return DATA_PATHS.CHART
                           .replace('%type%', params.type)
                           .replace('%drug%', params.drug)
                           .replace('%symptom%', params.symptom);
                },

                get = function (params) {
                    var response,
                        deferred;

                    deferred = $q.defer();

                    // $http({
                    //     'method': 'GET',
                    //     'url'   : formatGetPath(params)
                    // }).success(function (data) {
                    //     if (data.error !== undefined && data.error === true) {
                    //         deferred.reject(MESSAGES.CHART_DATA_ERROR);
                    //     } else {
                    //         deferred.resolve(data);
                    //     }
                    // }).error(function () {
                    //     deferred.reject(MESSAGES.SERVER_ERRROR);
                    // });

                    response = deferred.promise;

                    deferred.resolve([
                        {
                          "id": 141,
                          "tag_text": "children"
                        },
                        {
                          "id": 3854,
                          "tag_text": "tobacco"
                        },
                        {
                          "id": 3105,
                          "tag_text": "emergency"
                        }
                    ]);

                    return response;
                };

            return {
                get : get
            };
        };

    angular.module('USDigitalRegistryApp').factory('agencies', ['$http', '$q', 'DATA_PATHS', 'MESSAGES', agencies])
                               .factory('platforms', ['$http', '$q', 'DATA_PATHS', platforms])
                               .factory('tags', ['$http', '$q', 'DATA_PATHS', 'MESSAGES', tags])
                               .factory('dashboardData', ['$http', '$q', 'DATA_PATHS', 'MESSAGES', dashboardData]);
}());