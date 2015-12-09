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

                    $scope.selected = -1;

                    $scope.attach = function(idx){
                        $scope.info.q = $scope.list[idx];
                    }

                    $scope.mouseover = function(idx){
                        $scope.selected = idx;
                    }

                    $scope.keydown = function(e){
                        if(e.keyCode == 38){
                            e.preventDefault();
                            if($scope.selected >= 0){
                                $scope.selected--;
                            }else{
                                $scope.selected = $scope.list.length-1;
                            }
                            
                        }else if(e.keyCode == 40){
                            e.preventDefault();
                            if($scope.selected < $scope.list.length){
                                $scope.selected++;
                            }else{  
                                $scope.selected = 0;
                            }
                        }

                        console.log($scope.selected);
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
