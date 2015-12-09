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
                    defaultList = ['c', 'c++', 'opengl', 'STL', 'nodejs', 'expressjs', 'javascript', 'js'];

                    $scope.list = [];

                    $scope.selected = -1;

                    $scope.attach = function(idx) {
                        $scope.info.q = $scope.list[idx];
                    }

                    $scope.mouseover = function(idx) {
                        $scope.selected = idx;
                        $scope.attach($scope.selected);
                    }

                    $scope.keydown = function(e) {
                        switch (e.keyCode) {
                            case 38:
                                e.preventDefault();

                                if ($scope.selected >= 0) {
                                    $scope.selected--;
                                } else {
                                    $scope.selected = $scope.list.length - 1;
                                }
                                $scope.attach($scope.selected);
                                break;
                            case 40:
                                e.preventDefault();
                                
                                if ($scope.selected < $scope.list.length) {
                                    $scope.selected++;
                                } else {
                                    $scope.selected = 0;
                                }
                                
                                $scope.attach($scope.selected);
                                break;
                            case 13:
                                $scope.list = [];
                                break;
                        }
                    }

                    $scope.click = function(idx){
                        $scope.attach(idx);
                        $scope.list = []; 
                    }

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
