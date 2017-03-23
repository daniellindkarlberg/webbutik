angular.module('login').
    controller('loginController', ['$scope', '$location', 'loginService',
        function ($scope, $location, loginService) {

            $scope.text = "";

            $scope.logIn = function () {

                var logInRequest = {

                    email: $scope.session.email,
                    password: $scope.session.password


                };



                loginService.login(logInRequest).then(function (response) {

                    $scope.text = loginService.getErrorMsg();

                })
            };


            $scope.createAccount = function () {

                $location.path("/user-create");

            };

        }]);





