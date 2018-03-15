// import admin
angular.module('admin').controller('dashboardCtrl', function ($rootScope, $http, $scope, $location, $routeParams, $route, $filter) {

  $rootScope.title = "Dashboard";

  $('#patientindex').removeClass("active");
  $('#dashboardindex1').addClass("active");

  $scope.sp = 0;
  $scope.ps = 0;
  $scope.cs = 0;
  $scope.ms = 0;
  $scope.sc = 0;
  $scope.pc = 0;
  $scope.cp = 0;
  $scope.mp = 0;
  $scope.sm = 0;
  $scope.pm = 0;
  $scope.cm = 0;
  $scope.mc = 0;
  $scope.totalmatched = 0;
  $scope.totalunmatched = 0;

  $scope.getSP = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/sp',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(sp)
        {
            $scope.sp = sp.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getPS = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/ps',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(ps)
        {
            $scope.ps = ps.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getCS = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/cs',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(cs)
        {
            $scope.cs = cs.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getMS = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/ms',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(ms)
        {
            $scope.ms = ms.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getSC = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/sc',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(sc)
        {
            $scope.sc = sc.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getPC = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/pc',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(pc)
        {
            $scope.pc = pc.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

    $scope.getCP = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/cp',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(cp)
        {
            $scope.cp = cp.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getMP = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/mp',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(mp)
        {
            $scope.mp = mp.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getSM = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/sm',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(sm)
        {
            $scope.sm = sm.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getPM = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/pm',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(pm)
        {
            $scope.pm = pm.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getCM = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/cm',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(cm)
        {
            $scope.cm = cm.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

  $scope.getMC = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/mc',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(mc)
        {
            $scope.mc = mc.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

	$scope.getTotalMatched = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/totalmatched',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(totalmatched)
        {
            $scope.totalmatched = totalmatched.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

    $scope.getTotalUnmatched = function() {
        $http({
          method: 'GET',
          url: $rootScope.baseURL+'/dashboard/totalunmatched',
          headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
        })
        .success(function(totalunmatched)
        {
            $scope.totalunmatched = totalunmatched.length;
        })
        .error(function(data) 
        {   
            var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide');
            }, 1500);
        });
    };

});