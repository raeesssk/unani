// import admin
angular.module('report').controller('pmCtrl', function ($rootScope, $http, $scope, $location, $routeParams, $route, $filter) {

  $rootScope.title = "Reports";

  $scope.filteredTodos = [];
  $scope.currentPage = 1;
  $scope.maxSize = 5;
  $scope.entryLimit = 5;
  $scope.filterUser = 0;
  $scope.filterUserend = 1;
  $scope.numPerPage = 10;
  $scope.obj_Main = [];
  $scope.pmList = [];

  $scope.getAll = function () {
        
      $http({
        method: 'GET',
        url: $rootScope.baseURL+'/dashboard/pm',
        headers: {'Content-Type': 'application/json',
                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")
        }
      })
      .success(function(sale)
      {
        sale.forEach(function (value, key) {
                  $scope.pmList.push(value);
              });

              $scope.$watch("currentPage + numPerPage",
                  function () {
                      var begin = (($scope.currentPage - 1) * $scope.numPerPage);
                      var end = begin + $scope.numPerPage;
                      $scope.filterUserend = begin + 1;
                      $scope.filterUser = end;
                      if ($scope.filterUser >= $scope.pmList.length)
                          $scope.filterUser = $scope.pmList.length;
                      $scope.filteredTodos = $scope.pmList.slice(begin, end);
                  });

              $scope.obj_Main = $scope.pmList;
              $scope.loading = 'Done';
              // $scope.$apply(); 
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

   //Pagination Function
    $scope.resetpagination = function () {
        var begin = (($scope.currentPage - 1) * $scope.numPerPage);
        var end = begin + $scope.numPerPage;
        $scope.filterUserend = begin + 1;
        $scope.filterUser = end;
        if ($scope.filterUser >= $scope.pmList.length)
            $scope.filterUser = $scope.pmList.length;
        $scope.filteredTodos = $scope.pmList.slice(begin, end);
    };
    //search Data
    $scope.getSearch = function () {
        $scope.searchtext = $("#searchtext").val();
        $scope.pmList = [];
        if ($scope.searchtext !== "") {
            for (var i = 0; i < $scope.obj_Main.length; i++) {
                if (String($scope.obj_Main[i].patient_id).toLowerCase().includes($scope.searchtext.toLowerCase())
                    || String($scope.obj_Main[i].p_name).toLowerCase().includes($scope.searchtext.toLowerCase())
                    || String($scope.obj_Main[i].gender).toLowerCase().includes($scope.searchtext.toLowerCase())
                    || String($scope.obj_Main[i].temp_by_quest).toLowerCase().includes($scope.searchtext.toLowerCase())
                    || String($scope.obj_Main[i].temp_by_soma).toLowerCase().includes($scope.searchtext.toLowerCase())
                    || String($filter('date')($scope.obj_Main[i].date_of_birth, "mediumDate")).toLowerCase().includes($scope.searchtext.toLowerCase())
                ) {
                    $scope.pmList.push($scope.obj_Main[i]);
                }
            }
        }
        else {
            $scope.pmList = [];
            $scope.pmList = $scope.obj_Main;
        }
        $scope.resetpagination();
        $scope.$apply();
    };

    $scope.viewSaleDetails = function (index) {

    };

});