frontApp.controller("categoryPostController", ['$scope', '$http', '$window', 'CategoryPost', function ($scope, $http, $window, CategoryPost) {
    $scope.categoryPosts = [];
    $scope.posts = [];
    $scope.idCategory = angular.element('#idCategory').val();
    $scope.hoiDaps = [];
    $scope.tinKhoaHocs = [];

    //Lấy tất cả danh mục
    $http.get('/API/CategoriesAPI/')
        .success(function (data) {
            var categories = CategoryPost.getallCategory(data);
            angular.forEach(categories, function (value, key) {
                if (value.idCategoryParent == '1') {
                    $scope.categoryPosts.push(value);
                }
            });
        })

    //bài viết trong danh mục con
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == $scope.idCategory) {
                    $scope.posts.push(value);
                }
            });
        });

    //Lấy tin khoa học
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 2) {
                    $scope.tinKhoaHocs.push(value);
                }
            });
        });

    //Lấy tin hỏi đáp
    $http.get('/API/PostsAPI/')
        .success(function (data) {
            angular.forEach(data, function (value, key) {
                if (value.idCategory == 4) {
                    $scope.hoiDaps.push(value);
                }
            });
        });
}]);