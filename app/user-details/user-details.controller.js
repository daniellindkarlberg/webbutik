angular.module('user').
    controller('userDetailsController', ['$scope', '$location', 'loginService',
        function ($scope, $location, loginService) {

            $scope.text = "";
            $scope.user = loginService.getUserInfo();



            $scope.updateRequest = function () {

                var user = {
                    firstName: $scope.user.firstName,
                    lastName: $scope.user.lastName,
                    email: $scope.user.email,
                    phone: $scope.user.phone,
                    password: "no pass input",
                    address: $scope.user.address,
                    postalCode: $scope.user.postalCode,
                    city: $scope.user.city
                };



                loginService.updateUser(user);
                var errorMessage = loginService.getErrorMsg();

                $scope.text = errorMessage;


            };
        }]);



