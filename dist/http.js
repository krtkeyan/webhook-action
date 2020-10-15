"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.http = void 0;
var fetch = require('node-fetch');
var Http = (function () {
    function Http() {
    }
    Http.prototype.make = function (url, headers, body) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            fetch(url, _this.getOptions('post', headers, body))
                .then(function (res) { return resolve(res); });
        });
    };
    Http.prototype.getOptions = function (method, headers, body) {
        var options = {
            headers: headers ? JSON.parse(headers) : {},
            method: method
        };
        if (body) {
            options.body = body;
        }
        options.headers['content-type'] = options.headers['content-type'] || 'application/json';
        return options;
    };
    return Http;
}());
exports.http = new Http();
//# sourceMappingURL=http.js.map