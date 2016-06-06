/**
 * Created by svetlana on 19.03.2016.
 */
var app = angular.module('app', ['ngRoute', 'appCtrl', 'ngAnimate']);


app.config(['$routeProvider', function ($routeProvider) {
    $routeProvider

        .when('/tasks/:id', {
            templateUrl: 'partials/list-tasks.html',
            controller: 'ListTasksCtrl'
        })

}]);

