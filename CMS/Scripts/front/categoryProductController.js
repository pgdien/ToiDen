frontApp.controller("categoryProductController", ['$scope', '$http', '$window', 'CategoryProduct', function ($scope, $http, $window, CategoryProduct) {
    $scope.categoryProducts = [];
    $scope.products = [];
    $scope.idCategoryProduct = angular.element('#idCategoryProduct').val();

    //Lấy tất cả danh mục
    $http.get('/API/CategoryProductsAPI/')
        .success(function (data) {
            var categoryProducts = CategoryProduct.getallCategoryProduct(data);
            angular.forEach(categoryProducts, function (value, key) {
                if (value.idCategoryProductParent == '1') {
                    $scope.categoryProducts.push(value);
                }
            });
        })

    //Sản phẩm trong danh mục con
    $http.get('/API/ProductsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {

                if (value.idCategoryProduct == $scope.idCategoryProduct) {
                    $scope.products.push(value);
                }
            });
        });
}]);