(function() {
    'use strict';

    angular.module('LunchApp', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        $scope.items = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkList = function() {
            if ($scope.items.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                let arrayDishes = $scope.items.split(',');
                let arrayDishesWithoutEmptys = arrayDishes.filter(function(a) {
                    return a.trim() !== '';
                });

                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy Your Food!';
                } else {
                    $scope.message = 'Too Much Food!';
                }
            }
        };
    }
})();
