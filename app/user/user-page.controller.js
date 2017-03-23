angular.module('user').
    controller('userPageController', ['$scope', '$location', 'loginService',
        function ($scope, $location, loginService) {

            var user = loginService.getUserInfo();

            $scope.user = user;


            $scope.editUser = function () {
                $location.path("/user-details");
            }
        }]);



