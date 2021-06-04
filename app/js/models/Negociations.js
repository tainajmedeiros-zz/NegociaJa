System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociations;
    return {
        setters: [],
        execute: function () {
            Negociations = class Negociations {
                constructor() {
                    this._negociations = [];
                }
                add(negociation) {
                    this._negociations.push(negociation);
                }
                getArray() {
                    return [].concat(this._negociations);
                }
            };
            exports_1("Negociations", Negociations);
        }
    };
});
