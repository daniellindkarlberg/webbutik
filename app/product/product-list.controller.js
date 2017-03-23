angular.module('product')
    .controller('productListController', ['$scope', 'productService', '$uibModal', '$filter',
        function ($scope, productService, $uibModal, $filter) {
            var products = [];


            productService.getProducts().then(function (response) {
                products = response.data;
                $scope.products = products;

            });


            productService.getCategories().then(function (response) {
                var categoriesData = response.data;
                $scope.categories = [];
                $scope.categories.push({ name: "Alla produkter" });
                angular.forEach(categoriesData, function (categoryData) {

                    $scope.categories.push(categoryData);
                });
            });




            $scope.categorySelected = function (id) {

                $scope.products = $filter("categoryFilter")(products, id);
            }



            $scope.sort = function (keyname) {
                $scope.sortKey = keyname;
                $scope.reverse = !$scope.reverse;
            }


            $scope.productDetailsClicked = function (id) {
                productService.getProductById(id).then(function (response) {
                    var product = response.data;
                    var modalInstance = $uibModal.open({
                        templateUrl: 'app/product/product-details.html',
                        controller: 'productDetailsController',
                        resolve: {
                            product: function () {
                                return product;
                            }
                        }
                    });

                }, function (errorResponse) {

                });
            }

        }]);
