angular.module('xodus', ['ngRoute', 'ui.bootstrap', 'ui.bootstrap.tpls', 'ui.select']);

angular.module('xodus').config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/type/:typeId', {
                templateUrl: 'views/main.html'
            }).
            when('/error', {
                templateUrl: 'views/error.html'
            }).
            when('/empty-store', {
                templateUrl: 'views/empty-store.html'
            }).
            otherwise({
                redirectTo: '/type/0',
                templateUrl: 'views/main.html'
            });
    }]);

angular.module('xodus').config(['$httpProvider', function($httpProvider) {
    if (!$httpProvider.defaults.headers.get) {
        $httpProvider.defaults.headers.get = {};
    }
    //disable IE ajax request caching
    $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
    $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
    $httpProvider.defaults.headers.get['Pragma'] = 'no-cache';
}]);