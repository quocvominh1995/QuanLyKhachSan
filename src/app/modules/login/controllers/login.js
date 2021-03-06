define(function(require) {
    'use strict';

    var angular = require('angular');


    ctrlFn.$inject = ['$scope', '$window', 'UserService', '$state'];

    function ctrlFn($scope, $window, UserService, $state) {
        $scope.email = '';
        $scope.password = '';
        $scope.login = function() {
                if ($scope.email != '' && $scope.password.length >= 6) {
                    UserService.login($scope.email, $scope.password).then(function(success) {
                        $state.go('base3.booking'); //test di
                    }, function(err) {
                        console.log(err);
                    });
                }
            }
            //Nội dung của controller ghi ở đây
        console.log('đang ở login');
    }

    return ctrlFn;
});
