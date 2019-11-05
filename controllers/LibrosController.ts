interface ILibrosController extends ng.IScope{
    vm: LibrosController;
}

class LibrosController implements ng.IController{

    public static $inject = ["$scope", "librosService"];

    public libros: Array<ILibro>;

    constructor( private $scope: ILibrosController, private librosService: ILibrosService ){

        console.trace('LibrosController constructor');        
        this.$scope.vm = this;
        $scope.vm.libros = [];

        librosService.getLibros().then( (datos)=>{
            $scope.vm.libros = datos;
            console.debug($scope.vm.libros);
        });
       


    }    
} 