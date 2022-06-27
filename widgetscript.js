var app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {

    $scope.name = 'rohits';
    $scope.gmail = 'rohit@gmail.com';
    $scope.status = true;
    $scope.successClass = 'success';
    $scope.failedClass = 'fail';


    $scope.active = function () {

        if (this.status) {
            return "active";
        } else {
            return "inactive";
        }
    }
    $scope.message = {
        "success": $scope.status,
        "fail": !$scope.status
    }

});