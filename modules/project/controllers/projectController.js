projectViewer.controller('ProjectController', ['$scope', '$route', 'project',  function ($scope, $route, project) {
    
    //Normally call make a service call asynchronous, but instead will retreive mock data
    // project.getAll().$promise.then(function(result){
    //    $scope.projects = result;
    // });
    $scope.resources = {
        project: null,
        showDetails: false,
        showOwner: false
    }

    $scope.resources.project = project.get($route.current.params.id);

    $scope.showDetails = function() {
        $scope.resources.showDetails = !$scope.resources.showDetails;
    }

    $scope.showOwner = function() {
        $scope.resources.showOwner = !$scope.resources.showOwner;
    }

}]);


projectViewer.controller('AllProjectsController', ['$scope', '$route', 'project',  function ($scope, $route, project) {
    
	$scope.resources = {
		projects: null,
		column: '',
		descending: false,
        filters: {},
        filterType: 'all'
	}
    

    //Normally call make a service call asynchronous, but instead will retreive mock data
    // project.getAll().$promise.then(function(result){
    //    $scope.projects = result;
    // });
    $scope.resources.projects = project.getAll().projects;

    $scope.sortBy = function(column) {
 
            if ($scope.resources.column == column) {
                $scope.resources.descending = !$scope.resources.descending;
            } else {
                $scope.resources.column = column;
                $scope.resources.descending = false;
            }
    }

    $scope.filterActive = function(bol) {

        $scope.resources.filters.active = bol;

        if(bol) {
            $scope.resources.filterType = 'active';
        }
        else {
            $scope.resources.filterType = 'inactive';
        }

    };

    $scope.clearFilter = function() {

        $scope.resources.filters.active = '';
        $scope.resources.filterType = 'all';
    };

}]);




