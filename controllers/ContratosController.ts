interface IContratosController extends ng.IScope{
    vm: ContratosController;
}

class ContratosController implements ng.IController{

    public titulo: string;
    public contratos: Array<any>;
    public contratosMapeados: Array<IContratoResumen>;
    public contratosSinAcciones: Array<any>;
    public contratosAcciones13: Array<any>;
    public contratosAccionesMasDe3: Array<any>;
    public primerContratoAccionClaveSituacion: any;
    public ultimoContratoAccionClaveSituacion: any;
    public acciones: Array<string>;

    public static $inject = ["$scope", "contratosJson"];

    constructor( private $scope: IContratosController, private contratosJson: any  ){

        console.trace('ContratosController constructor');        
        this.$scope.vm = this;
        $scope.vm.titulo = "Contratos Titulo";

        //contratos originales
        $scope.vm.contratos = this.contratosJson;
        console.debug('contratos cargados %o' , $scope.vm.contratos);

        //contratos mapeados a nuestro gusto para poder ordenar
        $scope.vm.contratosMapeados = $scope.vm.contratos.map( (elem)=> {            
            return {
                "id": elem.idColumn,
                "nombre" : (elem.nombre)?elem.nombre:"Sin Nombre",
                "numeroAcciones": (elem.ACCIONES) ? elem.ACCIONES.length : 0
            }
        });
        console.debug('contratos mapeados %o' , $scope.vm.contratosMapeados);


       
        $scope.vm.contratosSinAcciones = this.contratosJson.
                                            filter( elem =>  !elem.ACCIONES || elem.ACCIONES.length == 0);
                                                        

        $scope.vm.contratosAcciones13 = this.contratosJson.
                                                filter( elem => elem.ACCIONES && elem.ACCIONES.length > 0 && elem.ACCIONES.length <= 3 );
                                                    
        $scope.vm.contratosAccionesMasDe3 = this.contratosJson.
                                                filter( elem => elem.ACCIONES && elem.ACCIONES.length > 3 );


        $scope.vm.primerContratoAccionClaveSituacion = this.contratosJson.
                            filter( (elem) => elem.ACCIONES && elem.ACCIONES.length > 0 ). //filtramos que tengan ACCIONES                           
                            find( (elem) => 
                                // dentro del array de ACCIONES, buscamos la clave
                                elem.ACCIONES.find( (elem)=> elem.clave === "SITUACION" ) 
                            );

        $scope.vm.ultimoContratoAccionClaveSituacion = this.contratosJson.reverse(). // dar la vuelta al array
                            filter( (elem) => elem.ACCIONES && elem.ACCIONES.length > 0 ). //filtramos que tengan ACCIONES                           
                            find( (elem) => 
                                // dentro del array de ACCIONES, buscamos la clave
                                elem.ACCIONES.find( (elem)=> elem.clave === "SITUACION" ) 
                            );                    


       let accionesDuplicadas: Array<any> = $scope.vm.contratos
            .filter(c => c.ACCIONES && c.ACCIONES.length > 0) // coger solo arrays con datos
            .map(c => c.ACCIONES)                             // quedarnos con las acciones            
            .reduce(function(a, b) {                          // reducir los subarrays a 1 array                             
                return a.concat(b);
            })            
            .map(x => x.titulo);                              // quedarnos con el titulo de la accion

        $scope.vm.acciones = [...new Set(accionesDuplicadas)].sort(); // eliminar duplicados y ordena


    }
    // contructor
    

}