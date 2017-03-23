angular.module('product').
  controller('productDetailsController', ['$scope', '$uibModalInstance', 'product', 'cartService', '$timeout',
    function ($scope, $uibModalInstance, product, cartService, $timeout) {

      $scope.imageUrl = product.imageUrl;
      $scope.description = product.description;
      if (product.unitsInStock <= 0) {

        $scope.showOutOfStock = "Slut i lager!"

      }
      $scope.showError = false;
      $scope.doFade = false;

      $scope.checkStock = function () {
        if (product.unitsInStock < 1) {
          return true;
        }
        else {
          return false;
        }
      };

      $scope.addToCart = function () {

        cartService.addToCart(product);

        $scope.itemAdded = false;
        $scope.doFade = false;
        $scope.itemAdded = true;

        $scope.message = 'Produkten lades i kundvagnen!';

        $timeout(function () {
          $scope.doFade = true;
        }, 2000);


      }

      $scope.ok = function () {
        $uibModalInstance.close();
      };


    }]);