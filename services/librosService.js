var LibrosService = (function () {
    function LibrosService($http) {
        var _this = this;
        this.getLibros = function () {
            var url = "http://127.0.0.1:3000/libros";
            console.trace('GET ' + url);
            return _this.http.get(url).then(function (res) {
                console.debug('peticcion correcta %o', res);
                return res.data;
            }, function (res) {
                console.debug('peticcion INcorrecta %o', res);
                return res;
            });
        };
        console.trace('LibrosService constructor');
        this.http = $http;
    }
    LibrosService.prototype.getLibroDetalle = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.crear = function (libro) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.modificar = function (id, libro) {
        throw new Error("Method not implemented.");
    };
    return LibrosService;
}());
//# sourceMappingURL=librosService.js.map