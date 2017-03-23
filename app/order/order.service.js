angular.module('order').
    factory('orderService', ['$http',
        function ($http) {
            var orders = [];

            return {

                getOrders: function (id) {
                    return $http.get("http://nackbutik.azurewebsites.net/api/order?customerid=" + id);
                },

                getOrderById: function (id) {
                    return $http.get("http://nackbutik.azurewebsites.net/api/order/" + id);
                },


            };
        }]);