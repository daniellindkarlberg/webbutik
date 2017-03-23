angular.module('navbar').
    controller('navbarController', ['$scope', '$location', 'loginService', '$rootScope',
        function ($scope, $location, loginService, $rootScope) {

            $scope.status = "loggedOut";

            $scope.$watch(loginService.isLoggedIn, function (value, oldValue) {

                if (!value && oldValue) {
                    $scope.status = "loggedOut";
                    $location.path("/");


                }

                if (value) {
                    $scope.status = "loggedIn";
                    $scope.name = loginService.getUserFirstName();

                }

            }, true);

            $scope.logOut = function () {

                loginService.logOut();
                $location.path("/");


            }


        }]);

