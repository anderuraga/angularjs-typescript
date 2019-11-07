var LibrosService = (function () {
    function LibrosService($http) {
        var _this = this;
        this.getLibros = function () {
            var url = "http://127.0.0.1:3000/libros";
            console.trace('GET ' + url);
            return _this.http.get(url).then(function (res) {
                console.debug('peticcion correcta %o', res);
                return res.data;
            });
        };
        this.delete = function (id) {
            var url = "http://127.0.0.1:3000/libros/" + id;
            console.trace('DELETE ' + url);
            return _this.http.delete(url).then(function (res) {
                console.debug('peticcion correcta %o', res);
                return res.data;
            });
        };
        this.crear = function (libro) {
            var url = "http://127.0.0.1:3000/libros";
            console.trace('POST ' + url);
            return _this.http.post(url, libro).then(function (res) {
                console.debug('peticcion correcta %o', res);
                return res.data;
            });
        };
        console.trace('LibrosService constructor');
        this.http = $http;
    }
    LibrosService.prototype.getLibroDetalle = function (id) {
        throw new Error("Method not implemented.");
    };
    LibrosService.prototype.modificar = function (id, libro) {
        var url = "http://127.0.0.1:3000/libros/" + id;
        console.trace('PUT ' + url);
        return this.http.put(url, libro).then(function (res) {
            console.debug('peticcion correcta %o', res);
            return res.data;
        });
    };
    return LibrosService;
}());
//# sourceMappingURL=librosService.js.map