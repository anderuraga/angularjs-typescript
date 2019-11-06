var LibrosController = (function () {
    function LibrosController($scope, librosService) {
        this.$scope = $scope;
        this.librosService = librosService;
        console.trace('LibrosController constructor');
        this.$scope.vm = this;
        $scope.vm.libros = [];
        librosService.getLibros().then(function (datos) {
            $scope.vm.libros = datos;
            console.debug($scope.vm.libros);
        }, function (errorResponse) {
            console.warn('respuesta servicio en controlador %o', errorResponse);
            $scope.vm.mensaje = "Servicio Rest parado o incorrecto " + errorResponse.status;
        });
        this.editar = function (libro) {
            console.debug('click boton editar %o', libro);
            $scope.vm.libroEditar = angular.copy(libro);
        };
        this.borrar = function (idLibro) {
            console.debug('click boton borrar %s', idLibro);
        };
        this.guardar = function () {
            var lib = $scope.vm.libroEditar;
            console.debug('submitado formulario %o', lib);
            if (lib.id) {
                librosService.modificar(lib.id, lib).then(function (data) {
                    console.info("libro editado %o", data);
                    $scope.vm.mensaje = "Libro Modificado";
                }, function (res) {
                    console.warn("No se puedo editar %o", res);
                    $scope.vm.mensaje = "ERROR modificando";
                });
            }
            else {
                librosService.crear(lib).then(function (data) {
                    console.info("libro nuevo %o", data);
                    $scope.vm.mensaje = "Libro Nuevo Creado";
                    $scope.vm.libros.push(data);
                    $scope.vm.libroEditar = undefined;
                }, function (res) {
                    console.warn("No se puedo crear libro %o", res);
                    $scope.vm.mensaje = "ERROR creando Libro";
                });
            }
        };
    }
    LibrosController.$inject = ["$scope", "librosService"];
    return LibrosController;
}());
//# sourceMappingURL=LibrosController.js.map