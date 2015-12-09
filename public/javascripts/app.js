(function(){
    var app = angular.module('main', []);

    app.controller('tagsCtl', ['$http', '$scope', function($http, $scope){
        $scope.tags = ['c', 'c++', 'opengl', 'STL'];
        $scope.selectedTags = [];

        $scope.appendTo = function(tag){
            if(!!tag && $scope.selectedTags.indexOf(tag) < 0) 
                $scope.selectedTags.push(tag);
        }

        $scope.remove = function(idx){
            console.log(idx);
            $scope.selectedTags.splice(idx, 1);
        }
    }]);

})();