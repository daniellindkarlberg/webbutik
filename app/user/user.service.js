angular.module('user').
    factory('userService', ['$http', 'loginService', '$location',
        function ($http, loginService, $location) {
            var customers = [];


            return {

                createUser: function (user) {
                    return $http.post("http://nackbutik.azurewebsites.net/api/customer", user);
                },

            };
        }]);