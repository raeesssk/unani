'use strict';

/* Account Module */
angular.module('patient', [])
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
            .when('/patient',
                {
                    templateUrl: 'modules/patient/partials/patient-list.html',
                    controller: 'patientCtrl',
                    resolve: resolve
                })
            .when('/patient/add',
                {
                    templateUrl: 'modules/patient/partials/patient-add.html',
                    controller: 'patientaddCtrl',
                    resolve: resolve
                })
            .when('/patient/edit/:pid',
                {
                    templateUrl: 'modules/patient/partials/patient-edit.html',
                    controller: 'patienteditCtrl',
                    resolve: resolve
                });

    }]);