angular.module('order').
    controller('orderListController',['$scope', '$location', 'orderService', 'productService', 'loginService',
    function ($scope, $location, orderService, productService, loginService) {

        var userId = loginService.getUserId();
        var orders = [];
        var orderProducts = [];
        var priceTotal = 0;

        $scope.viewOrder = function (id) {

            $location.path("/order/" + id);
        }

        orderService.getOrders(userId).then(function (response) {
            orders = response.data;
            $scope.orders = orders;
            angular.forEach(orders, function (order) {

                for (var product in order.products) {
                    var obj = order.products[product];
                    orderProducts.push(obj);
                }

            });


            productService.getProducts().then(function (response) {
                var products = response.data;
                angular.forEach(orderProducts, function (p) {


                    angular.forEach(products, function (product) {

                        if (product.id == p.productId) {

                            priceTotal += product.price * p.quantity;

                        }
                    });

                });

                $scope.total = priceTotal;

            });

        }, function (errorResponse) {

        });

    }]);