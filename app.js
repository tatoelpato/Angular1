(function() {
    'use strict';

    angular.module('LunchApp', [])
        .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];

    function LunchController($scope) {
        $scope.item = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkList = function() {
            if ($scope.item.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                let items = $scope.item.split(',');
                let noItems = items.filter(function(v) {
                    return v.trim() !== '';
                });

                if (noItems.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();
