/*
 *  Controller To Set Global Definitions
 */
function GlobalCtrl($rootScope, $http, $scope, $timeout) {

    $rootScope.tokken=localStorage.getItem("unani_admin_access_token");
    $rootScope.userid=localStorage.getItem("unani_admin_username");
    $rootScope.firstname=localStorage.getItem("unani_admin_firstname");
    $rootScope.iconimage=localStorage.getItem("unani_admin_iconimage");
    $rootScope.baseURL = 'http://localhost:3000';
    // $rootScope.baseURL = 'http://104.251.212.61:3001';
    // $rootScope.setURL = function () {
    //     var currentUser = Parse.User.current();
    //     if (currentUser) {
            
    //     } else {

    //         window.location = "login.html";
    //     }
    // };

    if(localStorage.getItem("unani_admin_access_token") === null)
      {
          window.location = 'login.html';
      }

    // $rootScope.back = function () {
    //     window.history.back();
    // };

    $rootScope.logOut = function(){

        $http({
          method: 'POST',
          url: $rootScope.baseURL+'/login/isoffline',
          data: 'username='+$rootScope.userid,
          headers: {'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization' :'Bearer '+$rootScope.tokken}
        })
        .success(function(deliverycount)
        {   
            localStorage.removeItem('unani_admin_username');
            localStorage.removeItem('unani_admin_firstname');
            localStorage.removeItem('unani_admin_iconimage');
            localStorage.removeItem('unani_admin_access_token');
            localStorage.removeItem('unani_admin_expires_in');
            localStorage.removeItem('unani_admin_refresh_token');
            localStorage.removeItem('unani_admin_token_type');
            localStorage.clear();
            window.location = 'login.html'; 
        })
        .error(function(data) 
        {   
            //console.log("url"+$scope.apiURL);
            /*console.log("Oops, Something Went Wrong!");*/
            var dialog = bootbox.dialog({
            message: '<p class="text-center">Oops, Something Went Wrong!</p>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 3001);
        });
      };

      $rootScope.backup = function(){

        $http({
          method: 'POST',
          url: $rootScope.baseURL+'/backup',
          // data: 'username='+$rootScope.userid,
          headers: {'Content-Type': 'application/json',
          'Authorization' :'Bearer '+$rootScope.tokken}
        })
        .success(function(deliverycount)
        {   
            var dialog = bootbox.dialog({
            message: '<p class="text-center">Successfully Backup!</p>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 3001);
        })
        .error(function(data) 
        {   
            //console.log("url"+$scope.apiURL);
            /*console.log("Oops, Something Went Wrong!");*/
            var dialog = bootbox.dialog({
            message: '<p class="text-center">Oops, Something Went Wrong!</p>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 3001);
        });
      };

    // $scope.Log_Out = function () {

    //     localStorage.clear();
    //     Parse.User.logOut();
    //     window.location = "login.html";
    // };

    //check user is idle
    // $rootScope.idle = 800; //800 expire time 24 hrs
    // $rootScope.timeout = 60; //60 warning time 1 minute

  $rootScope.$on('IdleStart', function() {
        // the user appears to have gone idle
        // $rootScope.oldTokken=$rootScope.tokken;
        //  console.log("Before"+$rootScope.oldTokken);
        console.log("start");
      });

  $rootScope.$on('IdleWarn', function(e, countdown) {
        // follows after the IdleStart event, but includes a countdown until the user is considered timed out
        // the countdown arg is the number of seconds remaining until then.
        // you can change the title or display a warning dialog from here.
        // you can let them resume their session by calling Idle.watch()
      });

  $rootScope.$on('IdleTimeout', function() {    
        // the user has timed out (meaning idleDuration + timeout has passed without any activity)
        // this is where you'd log them

        $rootScope.logOut(); 
      });

  $rootScope.$on('IdleEnd', function() {
        // the user has come back from AFK and is doing stuff. if you are warning them, you can use this to hide the dialog
        console.log("end")
      });

}