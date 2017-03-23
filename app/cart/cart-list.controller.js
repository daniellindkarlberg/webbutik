angular.module('cart')
  .controller('cartListController', ['$scope', '$uibModalInstance', 'cartItems', 'cartService', 'loginService', '$location',
    function ($scope, $uibModalInstance, cartItems, cartService, loginService, $location) {


      $scope.products = cartItems;


      $scope.increaseItemCount = function (product) {
        cartService.addToCart(product);
      };

      $scope.decreaseItemCount = function (product) {
        if (product.quantity > 1) {
          cartService.decreaseQuantity(product);
        }

      };

      $scope.removeItem = function (product) {

        cartService.removeItemInCart(product)
      };

      $scope.checkItems = function () {
        var cart = cartService.getCartItems();
        if (cart.length == 0) {
          return true;
        }
        else {
          return false;
        }
      }

      $scope.checkOut = function () {

        //if (loginService.isLoggedIn()) {
          //loginService.setCheckout();
          $location.path("/checkout");
          $uibModalInstance.close();

      //  }

        // else {
        //   $uibModalInstance.close();
        //   loginService.setCheckout();
        //   $location.path("/login");

        // }


      }

      $scope.ok = function () {
        $uibModalInstance.close();
      };


    }]);