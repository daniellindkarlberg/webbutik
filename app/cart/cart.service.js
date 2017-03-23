angular.module('cart').
    service('cartService', ['$rootScope',
        function ($rootScope) {


            var cartList = [];


            var addToCart = function (product) {
                if (product.quantity == null) {
                    product.quantity = 1;
                }

                if (!inCart(product.id)) {
                    cartList.push(product);
                    $rootScope.$broadcast('cart-updated');
                }

            }


            var getCheckoutProducts = function () {

                var products = [];

                angular.forEach(cartList, function (cartItem) {
                    var product = {};
                    product.productId = cartItem.id;
                    product.quantity = cartItem.quantity;
                    products.push(product);

                });
                return products;

            }


            var inCart = function (id) {
                var inCart = false;
                angular.forEach(cartList, function (cartItem) {
                    if (cartItem.id == id) {
                        cartItem.quantity++;
                        $rootScope.$broadcast('cart-updated');
                        inCart = true;
                    }
                });

                return inCart;
            }

            var getCartItems = function () {
                return cartList;
            }


            var itemsInCart = function () {
                var items = 0;
                angular.forEach(cartList, function (cartItem) {
                    items += cartItem.quantity;
                });
                return items;
            }

            var emptyCart = function () {

                cartList = [];
                $rootScope.$broadcast('cart-updated');

            }


            var removeItemInCart = function (product) {

                for (var i = 0; i < cartList.length; i++) {
                    if (cartList[i].id == product.id) {
                        cartList.splice(i, 1);

                    }

                }
                $rootScope.$broadcast('cart-updated');

            }

            var decreaseQuantity = function (product) {

                angular.forEach(cartList, function (cartItem) {
                    if (cartItem.id == product.id) {
                        cartItem.quantity--;
                        $rootScope.$broadcast('cart-updated');

                    }
                });

            }

            return {
                addToCart: addToCart,
                getCartItems: getCartItems,
                decreaseQuantity: decreaseQuantity,
                itemsInCart: itemsInCart,
                removeItemInCart: removeItemInCart,
                getCheckoutProducts: getCheckoutProducts,
                emptyCart: emptyCart,
            };

        }]);