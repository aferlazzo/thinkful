/**
 * Created by anthony on 10/18/14.
 */
angular.module('myApp', [])
	.controller('DisplayCtrl', function($scope) {
		$scope.$on('displayData', function(event, data) {
			$scope.content = data;
		});
	})
	.controller('MultiplicationCtrl', function($scope, $attrs, $rootScope) {
		var activeFactorA;
		var activeFactorB;

		function populateNumbers(x) {
			var numbers = [];
			for(var i=0; i < x; i++) {
				numbers[i] = i + 1;
			};
			return numbers;
		}

		$scope.compute = function(a,b) {
			return a * b;
		};

		// watch the scope variable numbersLimit and when it changes
		// run the populateNumbers() function whenever $scope.numberlimit changes.
		//
		$scope.$watch('numberLimit', function(limit) {
			$scope.numbers = populateNumbers(limit);
		});

		/*
		Since $attrs.initialNumberLimit doesn't exist at the start of
		the page run, it will evaluate to a falsy value, so JavaScript
		continues executing the scope assignment command for numberLimit
		(via the || logical OR) and reaches to value of 10.
		This is a well-known assignment shortcut of a default value for
		the more experienced JavaScript developer but, if you ask me,
		alienates the subset of your students who haven't yet faced such
		a JavaScript construct. It just isn't clear because what you're
		really saying is the assignment of the $scope property 'numberLimit'
		is either 10 or the value of another $scope property initialNumbersLimit
		(if it exists).

		Another way of writing an equivalent expression is:
		 $scope.numberLimit = $attrs.initialNumberLimit ? $attrs.initialNumberLimit : 10;

		*/

		$scope.numberLimit = $attrs.initialNumberLimit || 10;
		//$scope.numberLimit = $attrs.initialNumberLimit ? $attrs.initialNumberLimit : 10;

		//bad practice of var declaration:
		//var activeFactorA, activeFactorB;
		$scope.setActiveFactors = function(a, b) {
			activeFactorA = a;
			activeFactorB = b;
		};

		$scope.matchesFactor = function (a, b) {
			return a === activeFactorA || b === activeFactorB;
		};

		$scope.setActiveNumber = function(number) {
			$rootScope.$broadcast('displayData', number);
		};

		$scope.clearActiveFactors = function() {
			activeFactorA = activeFactorB = null;
		};
	});

