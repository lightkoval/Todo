/**
 * Created by svetlana on 19.03.2016.
 */
var appCtrl = angular.module('appCtrl', []);

appCtrl.controller('ListCtrl', ['$rootScope', '$scope', '$http', function ($rootScope, $scope, $http) {
    $http.get('json/lists.json').success(function (data) {
        /**
         * lists
         * @type {Array|*}
         * @param {Object} lists[i]
         * @param {String} lists[i].name
         * @param {Array} lists[i].tasks
         * @param {Number} lists[i].id
         */

        $rootScope.lists = data;
    });

    var nameList = 'New list ';
    var nameListCount = '';
    $rootScope.listId = 3;
    /* Don't used listId*/

    $scope.addList = function () {
        $rootScope.lists.push({name: nameList + nameListCount, tasks: [], id: ++$rootScope.listId});
        ++nameListCount;
    };

}]);


appCtrl.controller('ListTasksCtrl', ['$rootScope', '$scope', '$routeParams', '$location', function ($rootScope, $scope, $routeParams, $location) {
    var index = $routeParams.id;


    /**
     * tasks
     * @type {Array|*}
     * @param {String} tasks[i];
     */

    $scope.tasks = $rootScope.lists[index].tasks;

    /**
     * list
     * @type {Object|*}
     * @param {String} list.name
     * @param {Array} list.tasks
     * @param {Number} list.id
     */

    $scope.list = $rootScope.lists[index];

    $scope.deleteList = function () {
        $rootScope.lists.splice(index, 1);
        $rootScope.listId--;
        /*Don't used listId*/
        $location.path('index.html');
    };

    $scope.createNewTask = function () {
        $scope.list.tasks.push('');
        return false;
    };

    $scope.deleteTask = function (task, key) {
        if ($scope.list.tasks[key] == task) {

            $scope.list.tasks.splice(key, 1);
        }
    };



}]);