(function() {
    angular.module('hint', [])
        .directive('hint', function() {
            return {
                restrict: 'E',
                scope: {
                    info: '='
                },
                templateUrl: 'hint.html',
                controller: ['$scope', '$http', function($scope, $http) {
                    defaultList = ['c', 'c++', 'opengl', 'STL'];

                    $scope.list = [];

                    $scope.search = function(q) {
                        console.log('input', q);

                        $scope.list = [];

                        for (var i = 0; i < defaultList.length; ++i) {
                            if (defaultList[i].indexOf(q) >= 0) {
                                //if contained in default list
                                $scope.list.push(defaultList[i]);
                            }
                        }
                    }
                }]
            }
        })
})();
