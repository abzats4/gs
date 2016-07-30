var myApp = angular.module('myApp', []);
myApp.controller('TrainersListCtrl', function TrainersListCtrl ($scope, $http) {
    
    $http.get('trainers/sourse.json').success(function(data) {
        $scope.items = data;
		$scope.coaches = data.length;
        $scope.dotCounts = Math.ceil(data.length / 6);
		var arr = new Array($scope.dotCounts);
		$scope.navDots = function (n) {
			for (i=0; i < n; i++) {
				arr[i] = i;
			}
			return arr;
		}
    });
    
    $scope.viewDetails = function(trainer) {
        $scope.trainer = trainer;
        $scope.details = true;
    }
    $scope.closeDetails = function(trainer) {
        $scope.details = false;
    }
	
	$scope.select = function($event) {
		angular.element(document.querySelector(".nav_dot_wrapper .active")).removeClass('active');
		angular.element($event.target).addClass('active');
		$scope.pageNumber = angular.element($event.target).attr('id')*6;
	}
});