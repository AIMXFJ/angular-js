/*(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "Yaakov";
  $scope.output = "hungry";

  $scope.calculateTooMuch = function () {
    $scope.output = "Works!";
  };
}

})();*/

(function (){
'use strict';

angular.module ("LunchCheck", [])

.controller("LunchCheckController", LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController ($scope) {
	$scope.dishes = "";
	$scope.output = "";
	$scope.dishNumber=0;

	$scope.calculateTooMuch = function () {

		var out = calculateDishNumber($scope.dishes, $scope);

		$scope.output = out;
	};
}

function calculateDishNumber(string, $scope) {
    var numberOfDishes = 0;
    numberOfDishes = string.split(",").length;
    $scope.dishNumber = numberOfDishes;

    if(numberOfDishes>3){
			return "Too Much!";
	}else{
		if(numberOfDishes == 0){
			return "Please, enter data first";
		}else{
			return "Enjoy!";
		}
	}
  }

})();