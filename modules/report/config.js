'use strict';

/* Account Module */
angular.module('report', [])
    .config(['$routeProvider', function config($routeProvider) {
        var resolve = {
            data: ["$q", "$location", function ($q, $location) {
              /*  if (!localStorageService.get('kayre_access_token')) {
                    alert("Your session has been expired");
                    window.location = 'login.html';
                    return $q.defer.promise;
                }*/

            }]

        };

        $routeProvider
            .when('/sp',
                {
                    templateUrl: 'modules/report/partials/sp.html',
                    controller: 'spCtrl',
                    resolve: resolve
                })
            .when('/ps',
                {
                    templateUrl: 'modules/report/partials/ps.html',
                    controller: 'psCtrl',
                    resolve: resolve
                })
            .when('/cs',
                {
                    templateUrl: 'modules/report/partials/cs.html',
                    controller: 'csCtrl',
                    resolve: resolve
                })
            .when('/ms',
                {
                    templateUrl: 'modules/report/partials/ms.html',
                    controller: 'msCtrl',
                    resolve: resolve
                })
            .when('/sc',
                {
                    templateUrl: 'modules/report/partials/sc.html',
                    controller: 'scCtrl',
                    resolve: resolve
                })
            .when('/pc',
                {
                    templateUrl: 'modules/report/partials/pc.html',
                    controller: 'pcCtrl',
                    resolve: resolve
                })
            .when('/cp',
                {
                    templateUrl: 'modules/report/partials/cp.html',
                    controller: 'cpCtrl',
                    resolve: resolve
                })
            .when('/mp',
                {
                    templateUrl: 'modules/report/partials/mp.html',
                    controller: 'mpCtrl',
                    resolve: resolve
                })
            .when('/sm',
                {
                    templateUrl: 'modules/report/partials/sm.html',
                    controller: 'smCtrl',
                    resolve: resolve
                })
            .when('/pm',
                {
                    templateUrl: 'modules/report/partials/pm.html',
                    controller: 'pmCtrl',
                    resolve: resolve
                })
            .when('/cm',
                {
                    templateUrl: 'modules/report/partials/cm.html',
                    controller: 'cmCtrl',
                    resolve: resolve
                })
            .when('/mc',
                {
                    templateUrl: 'modules/report/partials/mc.html',
                    controller: 'mcCtrl',
                    resolve: resolve
                })
            .when('/totalmatched',
                {
                    templateUrl: 'modules/report/partials/totalmatched.html',
                    controller: 'totalmatchedCtrl',
                    resolve: resolve
                })
            .when('/totalunmatched',
                {
                    templateUrl: 'modules/report/partials/totalunmatched.html',
                    controller: 'totalunmatchedCtrl',
                    resolve: resolve
                })
            .when('/details/view/:pmId',
                {
                    templateUrl: 'modules/report/partials/view-details.html',
                    controller: 'detailsviewCtrl',
                    resolve: resolve
                });

    }]);