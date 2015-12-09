(function() {
        var app = angular.module('main', ['hint']);

        app.controller('tagsCtl', ['$http', '$scope', function($http, $scope) {
                $scope.tags = ['c', 'c++', 'opengl', 'STL'];
                $scope.selectedTags = [];

                $scope.appendTo = function(tag) {
                    if (!!tag && $scope.selectedTags.indexOf(tag) < 0)
                        $scope.selectedTags.push(tag);
                }

                $scope.remove = function(idx) {
                    console.log(idx);
                    $scope.selectedTags.splice(idx, 1);
                }


                $scope.info = {
                    q: "",
                    fetch: function(query) {
                        defaultList = ['c', 'c++', 'opengl', 'STL', 'nodejs', 'expressjs', 'javascript', 'js'];
                        var res = [];
                        for (var i = 0; i < defaultList.length; ++i) {
                            if (defaultList[i].indexOf(query) >= 0) {
                                res.push(defaultList[i]);
                            }
                        }
                        return res;
                    }

                }
            }]);

        })();
