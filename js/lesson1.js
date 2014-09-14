var lesson1App = angular.module ( 'lesson1App', [] );

lesson1App.controller (
	"lesson1Ctrl",
	[	"$scope",
		function ( $scope ) {
			//$scope.X = 0;
			//$scope.Y = 0;
			$scope.Z = "0";
			$scope.operator = "minus / plus";
			$scope.initialized = false;

			// the user pressed the plus button

			$scope.plusClicked = function() {
				var xValue;
				var yValue;

				xValue = document.getElementById('X');
				yValue = document.getElementById('Y');

				if (isNaN(xValue.value) === true) {
					alert("'" + xValue.value + "' is invalid. Please enter only numbers.");
					xValue.value = "";
					return false;
				} else {
					// convert value into an integer
					$scope.X = parseInt($scope.X, 10);
				}
				if (isNaN(yValue.value) === true) {
					alert("'" + yValue + "' is invalid. Please enter only numbers.");
					yValue.value = "";
					return false;
				} else {
					$scope.Y = parseInt($scope.Y, 10);
				}
				$scope.Z = $scope.X + $scope.Y;
				$scope.operator = "plus";
				$scope.initialized = true;
			};

			// the user pressed the minus button

			$scope.minusClicked = function() {
				if (isNaN($scope.X) === true) {
					$scope.X = 0;
				} else {
					$scope.X = parseInt($scope.X, 10);
				}
				if (isNaN($scope.Y) === true) {
					$scope.Y = 0;
				} else {
					$scope.Y = parseInt($scope.Y, 10);
				}
				if (isNaN($scope.X) === true) {
					$scope.X = 0;
				} else {
					$scope.X = parseInt($scope.X, 10);
				}
				if (isNaN($scope.Y) === true) {
					$scope.Y = 0;
				} else {
					$scope.Y = parseInt($scope.Y, 10);
				}
				$scope.Z = $scope.X - $scope.Y;
				$scope.operator = "minus";
				$scope.initialized = true;
			};

			$scope.numbersOnlyForX = function() {
				var Xvalue;
				var re = /[0-9]/g;

				Xvalue = document.getElementById('X');
				if (re.test(Xvalue.value) === false) {
					alert("'" + Xvalue.value + "' is invalid. Numbers only please.");
					Xvalue.value = "";
				}
			}
			$scope.numbersOnlyForY = function() {
				var Yvalue;
				var re = /[0-9]/g;

				Yvalue = document.getElementById('Y');
				if (re.test(Yvalue.value) === false) {
					alert("'" + Yvalue.value + "' is invalid. Numbers only please.");
					Xvalue.value = "";
				}
			}
		}
	]
);

