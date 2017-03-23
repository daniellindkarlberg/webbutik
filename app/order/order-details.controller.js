angular.module('order').
    controller('orderDetailsController', ['$scope', 'orderService', 'productService', '$routeParams',
        function ($scope, orderService, productService, $routeParams) {
            var orderProducts = [];
            var productView = [];
            var priceTotal = 0;


            orderService.getOrderById($routeParams.orderId).then(function (response) {

                var order = response.data;
                $scope.order = response.data;



                for (var product in order.products) {
                    var obj = order.products[product];
                    orderProducts.push(obj);
                }


                productService.getProducts($routeParams.orderId).then(function (response) {
                    var products = response.data;

                    angular.forEach(orderProducts, function (p) {


                        angular.forEach(products, function (product) {

                            if (product.id == p.productId) {

                                p.name = product.name;
                                p.imageUrl = product.imageUrl;
                                p.price = product.price;
                                priceTotal += product.price * p.quantity;

                                productView.push(p);

                            }
                        });

                    });

                    $scope.products = productView;
                    $scope.total = priceTotal;

                }, function (errorResponse) {

                });



            }, function (errorResponse) {

            });
        }]);