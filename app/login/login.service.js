angular.module('login').
    factory('loginService', ['$http', '$location', '$rootScope', '$window',
        function ($http, $location, $rootScope, $window) {
            var isLoggedIn = false;
            var userId = 0;
            var userInfo = {};
            var errorMessage = "";

            return {
                login: function (user) {
                    return $http.post("http://nackbutik.azurewebsites.net/api/customer/login", user)
                        .then(function (response) {
                            isLoggedIn = true;
                            userInfo = response.data;
                            userId = userInfo.customerId;



                            $window.history.back();

                        }, function (error) {
                            if (error.status == 401) {
                                errorMessage = "Inloggningen misslyckades!";
                            }

                        });
                },

                updateUser: function (upDatedUserInfo) {
                    $http.put("http://nackbutik.azurewebsites.net/api/customer/" + userId, upDatedUserInfo)
                        .then(function (response) {

                            userInfo.firstName = upDatedUserInfo.firstName;
                            userInfo.lastName = upDatedUserInfo.lastName;
                            userInfo.email = upDatedUserInfo.email;
                            userInfo.phone = upDatedUserInfo.phone;
                            userInfo.address = upDatedUserInfo.address;
                            userInfo.postalCode = upDatedUserInfo.postalCode;
                            userInfo.city = upDatedUserInfo.city;



                            $location.path("/user-page");
                        }, function (error) {


                            if (error.status == 400) {
                                errorMessage = "Uppdateringen misslyckades!";
                            }

                        });

                },
                isLoggedIn: function () {
                    return isLoggedIn;
                },

                getUserInfo: function () {
                    return userInfo;
                },


                getUserId: function () {
                    return userId;
                },


                getUserFirstName: function () {
                    return userInfo.firstName;
                },

                logOut: function () {
                    isLoggedIn = false;
                    userId = 0;
                    userInfo = {};
                    $location.path("/");
                },
                getErrorMsg: function () {
                    return errorMessage;
                },


            };
        }]);