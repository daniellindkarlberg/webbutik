angular.module('product').
    factory('productService', ['$http',
        function ($http) {
            var products = [];

            return {
                getProducts: function () {

                    return $http.get("http://nackbutik.azurewebsites.net/api/product");

                },
                getProductById: function (id) {
                    return $http.get("http://nackbutik.azurewebsites.net/api/product/" + id);
                },

                getCategories: function () {
                    return $http.get("http://nackbutik.azurewebsites.net/api/category ");
                },


            };
        }]);