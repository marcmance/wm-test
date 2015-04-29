projectViewer.config(['$routeProvider', 
    function ($routeProvider) {
    	$routeProvider.when('/', 
            {
                templateUrl: 'modules/project/views/allProjects.html',
                controller: 'AllProjectsController'
            }
        ).when('/project/:id', 
            {
                templateUrl: 'modules/project/views/project.html',
                controller: 'ProjectController'
            }
        )
    }
]);