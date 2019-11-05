
interface ILibrosService {

    /**
     * peticion GET para obtener todos los libros
     * @return angular.IPromise<ILibro[]>
     */
    getLibros(): angular.IPromise<ILibro[]>;

    getLibroDetalle(id: number): angular.IPromise<ILibro>;

    delete(id: number): angular.IPromise<boolean>;

    crear(libro: ILibro): angular.IPromise<boolean>;

    /**
     * Modifica un ILibro existente
     * @param id identificar del libro a modificar
     * @param libro para modificar
     * @return true si modifica, false en caso contrario
     */
    modificar( id: number, libro: ILibro): angular.IPromise<boolean>;

}

class LibrosService implements ILibrosService {

    private http: ng.IHttpService;

    constructor($http) {
      console.trace('LibrosService constructor');
      this.http = $http;
    }

    public getLibros = ():any => {

        let url = "http://127.0.0.1:3000/libros";
        console.trace('GET ' + url);
        return this.http.get(url).then( 
            (res) => { 
                console.debug('peticcion correcta %o', res);
                return res.data;
            },
            (res)=>{
                console.debug('peticcion INcorrecta %o', res);
                return res;
            });
    } 
    
    //TODO poner public a los metodos y tipar correctamente
    
    getLibroDetalle(id: number): angular.IPromise<ILibro> {
        throw new Error("Method not implemented.");
    }

    delete(id: number): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }

    crear(libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }

    modificar(id: number, libro: ILibro): angular.IPromise<boolean> {
        throw new Error("Method not implemented.");
    }

}

