angular.module('user').
    controller('userCreateController', ['$scope', '$location', 'userService', '$window',
        function ($scope, $location, userService, $window) {
            $scope.text = "";

            $scope.createUser = function () {
                var newUser = {
                    firstName: $scope.user.firstName,
                    lastName: $scope.user.lastName,
                    email: $scope.user.email,
                    phone: $scope.user.phone,
                    password: $scope.user.password,
                    address: $scope.user.address,
                    postalCode: $scope.user.postalCode,
                    city: $scope.user.city
                }

                var user = newUser.firstName;

                userService.createUser(newUser).then(function () {

                });
            };
        }]);