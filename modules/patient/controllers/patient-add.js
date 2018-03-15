// import admin
angular.module('patient').controller('patientaddCtrl', function ($rootScope, $http, $scope, $location, $routeParams, $route) {
	
	$rootScope.title = "Patient";
	$scope.patient = [];

	// $('#btnsave1').addClass('active');
	// $('#q110').hide();
	// $('#q210').hide();
	// $('#q220').hide();
	// $('#q311').hide();
	// $('#q312').hide();
	// $('#q313').hide();
	// $('#q314').hide();
	// $('#q315').hide();
	// $('#q410').hide();
	// $('#q510').hide();
	// $('#q610').hide();
	// $('#q711').hide();
	// $('#q712').hide();
	// $('#q810').hide();
	// $('#q820').hide();
	// $('#q830').hide();
	// $('#q840').hide();
	// $('#q850').hide();
	// $('#q860').hide();
	// $('#q870').hide();
	// $('#q881').hide();
	// $('#q882').hide();
	// $('#q883').hide();
	// $('#q884').hide();
	// $('#q885').hide();
	// $('#q886').hide();
	// $('#q887').hide();
	// $('#q891').hide();
	// $('#q892').hide();
	// $('#q893').hide();
	// $('#q911').hide();
	// $('#q912').hide();
	// $('#q913').hide();
	// $('#q914').hide();
	// $('#q915').hide();
	// $('#q916').hide();
	// $('#q917').hide();
	// $('#q918').hide();
	// $('#q1011').hide();
	// $('#q1012').hide();
	// $('#q1013').hide();
	// $('#q1014').hide();
	// $('#q1015').hide();
	// $('#q1016').hide();
	// $('#q1017').hide();
	// $('#q1018').hide();
	// $('#q1021').hide();
	// $('#q1022').hide();
	// $('#q1023').hide();
	// $('#q1110').hide();
	// $('#meaturement').hide();
	// $('#personal').show();

	$scope.patient.damwi = 0;
	$scope.patient.balghami = 0;
	$scope.patient.safrawi = 0;
	$scope.patient.sawdavi = 0;
	
	$scope.get1_1_0_1 = function(){
		if($('#1_1_0_1').hasClass('btn-default'))
		{
			$('#1_1_0_1').removeClass('btn-default');
			$('#1_1_0_1').addClass('btn-success');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) + parseInt(3));
		}
		else
		{
			$('#1_1_0_1').removeClass('btn-success');
			$('#1_1_0_1').addClass('btn-default');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) - parseInt(3));
		}
	}

	$scope.get1_1_0_2 = function(){
		if($('#1_1_0_2').hasClass('btn-default'))
		{
			$('#1_1_0_2').removeClass('btn-default');
			$('#1_1_0_2').addClass('btn-success');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) + parseInt(2));
		}
		else
		{
			$('#1_1_0_2').removeClass('btn-success');
			$('#1_1_0_2').addClass('btn-default');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) - parseInt(2));
		}
	}

	$scope.get1_1_0_3 = function(){
		if($('#1_1_0_3').hasClass('btn-default'))
		{
			$('#1_1_0_3').removeClass('btn-default');
			$('#1_1_0_3').addClass('btn-success');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) + parseInt(4));
		}
		else
		{
			$('#1_1_0_3').removeClass('btn-success');
			$('#1_1_0_3').addClass('btn-default');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) - parseInt(4));
		}
	}

	$scope.get1_1_0_4 = function(){
		if($('#1_1_0_4').hasClass('btn-default'))
		{
			$('#1_1_0_4').removeClass('btn-default');
			$('#1_1_0_4').addClass('btn-success');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) + parseInt(1));
		}
		else
		{
			$('#1_1_0_4').removeClass('btn-success');
			$('#1_1_0_4').addClass('btn-default');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) - parseInt(1));
		}
	}
	
	$scope.get2_1_0_1 = function(){
		if($('#2_1_0_1').hasClass('btn-default'))
		{
			$('#2_1_0_1').removeClass('btn-default');
			$('#2_1_0_1').addClass('btn-success');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) + parseInt(4));
		}
		else
		{
			$('#2_1_0_1').removeClass('btn-success');
			$('#2_1_0_1').addClass('btn-default');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) - parseInt(4));
		}
	}

	$scope.get2_1_0_2 = function(){
		if($('#2_1_0_2').hasClass('btn-default'))
		{
			$('#2_1_0_2').removeClass('btn-default');
			$('#2_1_0_2').addClass('btn-success');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) + parseInt(3));
		}
		else
		{
			$('#2_1_0_2').removeClass('btn-success');
			$('#2_1_0_2').addClass('btn-default');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) - parseInt(3));
		}
	}

	$scope.get2_1_0_3 = function(){
		if($('#2_1_0_3').hasClass('btn-default'))
		{
			$('#2_1_0_3').removeClass('btn-default');
			$('#2_1_0_3').addClass('btn-success');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) + parseInt(2));
		}
		else
		{
			$('#2_1_0_3').removeClass('btn-success');
			$('#2_1_0_3').addClass('btn-default');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) - parseInt(2));
		}
	}

	$scope.get2_1_0_4 = function(){
		if($('#2_1_0_4').hasClass('btn-default'))
		{
			$('#2_1_0_4').removeClass('btn-default');
			$('#2_1_0_4').addClass('btn-success');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) + parseInt(1));
		}
		else
		{
			$('#2_1_0_4').removeClass('btn-success');
			$('#2_1_0_4').addClass('btn-default');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) - parseInt(1));
		}
	}
	
	$scope.get2_2_0_1 = function(){
		if($('#2_2_0_1').hasClass('btn-default'))
		{
			$('#2_2_0_1').removeClass('btn-default');
			$('#2_2_0_1').addClass('btn-success');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) + parseInt(2));
		}
		else
		{
			$('#2_2_0_1').removeClass('btn-success');
			$('#2_2_0_1').addClass('btn-default');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) - parseInt(2));
		}
	}

	$scope.get2_2_0_2 = function(){
		if($('#2_2_0_2').hasClass('btn-default'))
		{
			$('#2_2_0_2').removeClass('btn-default');
			$('#2_2_0_2').addClass('btn-success');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) + parseInt(4));
		}
		else
		{
			$('#2_2_0_2').removeClass('btn-success');
			$('#2_2_0_2').addClass('btn-default');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) - parseInt(4));
		}
	}

	$scope.get2_2_0_3 = function(){
		if($('#2_2_0_3').hasClass('btn-default'))
		{
			$('#2_2_0_3').removeClass('btn-default');
			$('#2_2_0_3').addClass('btn-success');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) + parseInt(3));
		}
		else
		{
			$('#2_2_0_3').removeClass('btn-success');
			$('#2_2_0_3').addClass('btn-default');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) - parseInt(3));
		}
	}

	$scope.get2_2_0_4 = function(){
		if($('#2_2_0_4').hasClass('btn-default'))
		{
			$('#2_2_0_4').removeClass('btn-default');
			$('#2_2_0_4').addClass('btn-success');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) + parseInt(1));
		}
		else
		{
			$('#2_2_0_4').removeClass('btn-success');
			$('#2_2_0_4').addClass('btn-default');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) - parseInt(1));
		}
	}
	
	$scope.get3_1_1_1 = function(){
		if($('#3_1_1_1').hasClass('btn-default'))
		{
			$('#3_1_1_1').removeClass('btn-default');
			$('#3_1_1_1').addClass('btn-success');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) + parseInt(3));
		}
		else
		{
			$('#3_1_1_1').removeClass('btn-success');
			$('#3_1_1_1').addClass('btn-default');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) - parseInt(3));
		}
	}

	$scope.get3_1_1_2 = function(){
		if($('#3_1_1_2').hasClass('btn-default'))
		{
			$('#3_1_1_2').removeClass('btn-default');
			$('#3_1_1_2').addClass('btn-success');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) + parseInt(1));
		}
		else
		{
			$('#3_1_1_2').removeClass('btn-success');
			$('#3_1_1_2').addClass('btn-default');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) - parseInt(1));
		}
	}

	$scope.get3_1_1_3 = function(){
		if($('#3_1_1_3').hasClass('btn-default'))
		{
			$('#3_1_1_3').removeClass('btn-default');
			$('#3_1_1_3').addClass('btn-success');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) + parseInt(2));
		}
		else
		{
			$('#3_1_1_3').removeClass('btn-success');
			$('#3_1_1_3').addClass('btn-default');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) - parseInt(2));
		}
	}

	$scope.get3_1_1_4 = function(){
		if($('#3_1_1_4').hasClass('btn-default'))
		{
			$('#3_1_1_4').removeClass('btn-default');
			$('#3_1_1_4').addClass('btn-success');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) + parseInt(4));
		}
		else
		{
			$('#3_1_1_4').removeClass('btn-success');
			$('#3_1_1_4').addClass('btn-default');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) - parseInt(4));
		}
	}
	
	$scope.get3_1_2_1 = function(){
		if($('#3_1_2_1').hasClass('btn-default'))
		{
			$('#3_1_2_1').removeClass('btn-default');
			$('#3_1_2_1').addClass('btn-success');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) + parseInt(3));
		}
		else
		{
			$('#3_1_2_1').removeClass('btn-success');
			$('#3_1_2_1').addClass('btn-default');
			$scope.patient.damwi = parseInt(parseInt($scope.patient.damwi) - parseInt(3));
		}
	}

	$scope.get3_1_2_2 = function(){
		if($('#3_1_2_2').hasClass('btn-default'))
		{
			$('#3_1_2_2').removeClass('btn-default');
			$('#3_1_2_2').addClass('btn-success');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) + parseInt(1));
		}
		else
		{
			$('#3_1_2_2').removeClass('btn-success');
			$('#3_1_2_2').addClass('btn-default');
			$scope.patient.balghami = parseInt(parseInt($scope.patient.balghami) - parseInt(1));
		}
	}

	$scope.get3_1_2_3 = function(){
		if($('#3_1_2_3').hasClass('btn-default'))
		{
			$('#3_1_2_3').removeClass('btn-default');
			$('#3_1_2_3').addClass('btn-success');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) + parseInt(4));
		}
		else
		{
			$('#3_1_2_3').removeClass('btn-success');
			$('#3_1_2_3').addClass('btn-default');
			$scope.patient.safrawi = parseInt(parseInt($scope.patient.safrawi) - parseInt(4));
		}
	}

	$scope.get3_1_2_4 = function(){
		if($('#3_1_2_4').hasClass('btn-default'))
		{
			$('#3_1_2_4').removeClass('btn-default');
			$('#3_1_2_4').addClass('btn-success');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) + parseInt(1));
		}
		else
		{
			$('#3_1_2_4').removeClass('btn-success');
			$('#3_1_2_4').addClass('btn-default');
			$scope.patient.sawdavi = parseInt(parseInt($scope.patient.sawdavi) - parseInt(1));
		}
	}


  $scope.changePassword = function () {


	    if($('#password').val() === undefined || $('#password').val() === ""){
	    	var dialog = bootbox.dialog({
            message: '<div class="text-center">please enter password.</div>',
                closeButton: false
            });
            dialog.find('.modal-body').addClass("alert-danger");
            setTimeout(function(){
                dialog.modal('hide'); 
            }, 1500);
	    }
	    else if($('#conpassword').val() == undefined || $('#conpassword').val() == ""){
	    	var dialog = bootbox.dialog({
            message: '<div class="text-center">please enter confirm password.</div>',
                closeButton: false
            });
            dialog.find('.modal-body').addClass("alert-danger");
            setTimeout(function(){
                dialog.modal('hide'); 
            }, 1500);
	    }
	    else if($('#conpassword').val() != $('#password').val()){
	    	var dialog = bootbox.dialog({
            message: '<div class="text-center">the password and confirm password do not match.</div>',
                closeButton: false
            });
            dialog.find('.modal-body').addClass("alert-danger");
            setTimeout(function(){
                dialog.modal('hide'); 
            }, 1500);
	    }
	    else{
            $('#btnsave').attr('disabled','true');
            $('#btnsave').text("please wait...");
            $scope.user.username = $rootScope.userid;
    		$http({
		      method: 'POST',
		      url: $rootScope.baseURL+'/login/changepassword',
		      data: $scope.user,
		      headers: {'Content-Type': 'application/json',
	                  'Authorization' :'Bearer '+localStorage.getItem("unani_admin_access_token")}
		    })
		    .success(function(login)
		    {
                $('#btnsave').text("Change Password");
                $('#btnsave').removeAttr('disabled');
		       window.location.href = '#/';  
		    })
		    .error(function(data) 
		    {   
		       var dialog = bootbox.dialog({
	            message: '<div class="text-center">Oops, Something Went Wrong!</div>',
	                closeButton: false
	            });
	            setTimeout(function(){
                $('#btnsave').text("Change Password");
                $('#btnsave').removeAttr('disabled');
	                dialog.modal('hide');  
	            }, 1500);             
		    });
		}
	    
	};

});