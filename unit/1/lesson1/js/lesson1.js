var lesson1App = angular.module ( 'lesson1App', [] );

lesson1App.controller (
	"lesson1Ctrl",
	[	"$scope",
		function ( $scope ) {

			// setting initial values
			$scope.X = "";
			$scope.Y = "";
			$scope.Z = "0";
			$scope.operator = "minus / plus";
			$scope.initialized = false;

			// the user pressed the plus button

			function checkEntryForNumerals() {
				if ($scope.X != parseInt($scope.X, 10)) {
					if (($scope.X != "") && ($scope.X != "undefined")) {
						alert("'" + $scope.X + "' is invalid. Please enter only numbers.");
					}
					$scope.X = "";
					$scope.initialized = false;
				} else {
					$scope.X = parseInt($scope.X, 10);
					$scope.initialized = true;
				}

				if ($scope.Y != parseInt($scope.Y, 10)) {
					if (($scope.Y != "")  && ($scope.Y != "undefined")) {
						alert("'" + $scope.Y + "' is invalid. Please enter only numbers.");
					}
					$scope.Y = "";
					$scope.initialized = false;
				} else {
					$scope.Y = parseInt($scope.Y, 10);
					$scope.initialized = true;
				}

				return $scope.initialized;
			}

			// the user pressed the plus button

			$scope.plusClicked = function() {
				if (checkEntryForNumerals() === true) {
					$scope.Z = $scope.X + $scope.Y;
					$scope.operator = "plus";
					$scope.initialized = true;
				}
			};

			// the user pressed the minus button

			$scope.minusClicked = function() {
				if (checkEntryForNumerals() === true) {
					$scope.Z = $scope.X - $scope.Y;
					$scope.operator = "minus";
					$scope.initialized = true;
				}
			};

			$scope.numbersOnlyForX = function() {
				var re = /[0-9]/g;

				if (re.test($scope.X) === false) {
					alert("'" + $scope.X + "' is invalid. Numbers only please.");
					$scope.X = "";
					$scope.initialized = false;
				}
			};
			$scope.numbersOnlyForY = function() {
				var re = /[0-9]/g;

				if (re.test($scope.Y) === false) {
					alert("'" + $scope.Y + "' is invalid. Numbers only please.");
					$scope.Y = "";
					$scope.initialized = false;
				}
			};
		}
	]
);

