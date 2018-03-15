angular.module('unani',
    [
// External Dependencies
        'ngRoute',
        // 'ngValidate',
        'ui.bootstrap',
        'angularFileUpload',
        'ngIdle',
        // 'ngAnimate',
        // 'toastr',
        //'Modular Dependencies',
        'admin',
        'report',
        'patient',
    // ]).config(cityMotorRouter);

]).config(function($routeProvider, IdleProvider, KeepaliveProvider, $controllerProvider) {
  // configure Idle settings
  IdleProvider.idle(3600); // in seconds
  IdleProvider.timeout(5); // in seconds
  KeepaliveProvider.interval(2); // in seconds
  $controllerProvider.allowGlobals();
  $routeProvider
})
.run(function(Idle){
  // start watching when the app runs. also starts the Keepalive service by default.
  Idle.watch();
});
// function cityMotorRouter($routeProvider, IdleProvider, KeepaliveProvider, $controllerProvider) {
//     $controllerProvider.allowGlobals();
//     $routeProvider
// }

