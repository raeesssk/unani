/*
 * Login Controller
 */
function LoginCtrl($scope, $location, $http, $routeParams, $rootScope) {
    
	$scope.apiURL = 'http://localhost:3000';

	// if(localStorage.getItem("unani_admin_access_token") != null)
 //      {
 //          window.location = '/citymotorsadmin/';
 //      }

  	$scope.login = function() {
  		if($scope.username == undefined || $scope.username == ""){
  			var dialog = bootbox.dialog({
            message: '<div class="text-center">please enter username.</div>',
                closeButton: false
            });
            dialog.find('.modal-body').addClass("alert-danger");
            setTimeout(function(){
                dialog.modal('hide'); 
            }, 1500);  
  		}
  		else if($scope.password == undefined || $scope.password == ""){
  			var dialog = bootbox.dialog({
            message: '<div class="text-center">please enter password..</div>',
                closeButton: false
            });
            dialog.find('.modal-body').addClass("alert-danger");
            setTimeout(function(){
                dialog.modal('hide'); 
            }, 1500);  
  		}
  		else{
                $('#login').attr('disabled','true');
                $('#login').text("please wait...");
  			$http({
		          method: 'POST',
		          url: $scope.apiURL+"/oauth/token",
		          data: 'grant_type=password&username='+ encodeURIComponent($scope.username) +'&password='+ encodeURIComponent($scope.password),
		          headers: {'Content-Type': 'application/x-www-form-urlencoded',
	                    'Authorization' : 'Basic Y2xpZW50S2V5OmNsaWVudFNlY3JldEtleQ=='}
			 })
		  	 .success(function(data, status, headers, config)
		  	 {
		  	 	if($scope.username == 'admin'){

			        $http({
			          method: 'POST',
			          url: $scope.apiURL+'/login/isonline',
			          data: 'username='+$scope.username,
			          headers: {'Content-Type': 'application/x-www-form-urlencoded',
	                  'Authorization' :'Bearer '+data.access_token}
			        })
			        .success(function(deliverycount)
			        {	
			        	$scope.user = deliverycount[0].username;
			        	$scope.firstname = deliverycount[0].first_name;
			        	$scope.iconimage = deliverycount[0].icon_image;
				  	 	localStorage.setItem('unani_admin_username', $scope.user);
				  	 	localStorage.setItem('unani_admin_firstname', $scope.firstname);
				  	 	localStorage.setItem('unani_admin_iconimage', $scope.iconimage);
				  	 	localStorage.setItem('unani_admin_access_token', data.access_token);
				        localStorage.setItem('unani_admin_expires_in', data.expires_in);
				        localStorage.setItem('unani_admin_refresh_token', data.refresh_token);
				        localStorage.setItem('unani_admin_token_type', data.token_type);
                $('#login').text("Login");
                $('#login').removeAttr('disabled');
				         window.location = "/unani/";
				        // window.location = "/";
			        })
			        .error(function(data) 
			        {   
			            //console.log("url"+$scope.apiURL);
			            /*console.log("Oops, Something Went Wrong!");*/
			            var dialog = bootbox.dialog({
			            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
			                closeButton: false
			            });
			            setTimeout(function(){
                $('#login').text("Login");
                $('#login').removeAttr('disabled');
			                dialog.modal('hide');
			            }, 3001);
			        });

		  	 		
		  	 	}
		  	 	else{
			  	 	$scope.username = undefined;
		  	 		$scope.password = undefined;
		  	 		localStorage.removeItem('unani_admin_access_token');
			        localStorage.removeItem('unani_admin_expires_in');
			        localStorage.removeItem('unani_admin_refresh_token');
			        localStorage.removeItem('unani_admin_token_type');
			  	 	localStorage.removeItem('unani_admin_username');
			  	 	localStorage.removeItem('unani_admin_firstname');
			  	 	localStorage.removeItem('unani_admin_iconimage');
			        localStorage.clear();
			        var dialog = bootbox.dialog({
		            message: '<div class="text-center">You Are Not Right User To Login!</div>',
		                closeButton: false
		            });
		            setTimeout(function(){
                $('#login').text("Login");
                $('#login').removeAttr('disabled');
		                dialog.modal('hide'); 
		            }, 2000); 
		  	 	}
		  	 })
		  	 .error(function(data, status, headers, config)
		  	 {
		  	 	var dialog = bootbox.dialog({
	            message: '<div class="text-center">Invalid Username or Password</div>',
	                closeButton: false
	            });
	            setTimeout(function(){
                $('#login').text("Login");
                $('#login').removeAttr('disabled');
	                dialog.modal('hide'); 
	            }, 1500);
		     });
  		}
	}

}


