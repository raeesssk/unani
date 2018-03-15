// import admin
angular.module('report').controller('detailsviewCtrl', function ($rootScope, $http, $scope, $location, $routeParams, $route, $filter) {

  $rootScope.title = "Details";

  $scope.pmId = $routeParams.pmId;

  $scope.getAll = function () {
        
      $http({
        method: 'GET',
        url: $rootScope.baseURL+'/dashboard/details/'+$scope.pmId,
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")
        }
      })
      .success(function(sale)
      {
        sale.forEach(function (value, key) {
            $scope.smList = value;
              });
      })
      .error(function(data) 
      {   
        var dialog = bootbox.dialog({
            message: '<div class="text-center">Oops, Something Went Wrong! Please Refresh the Page.</div>',
                closeButton: false
            });
            setTimeout(function(){
                dialog.modal('hide'); 
            }, 1500);           
      });
    };
});