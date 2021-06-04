System.register(["../views/index", "../models/index", "../helpers/decorators/domInject"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, domInject_1, NegociationController, Days;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (domInject_1_1) {
                domInject_1 = domInject_1_1;
            }
        ],
        execute: function () {
            NegociationController = class NegociationController {
                constructor() {
                    this._negociations = new index_2.Negociations();
                    this._negociationsView = new index_1.NegociationsView('#negociationsView');
                    this._messageView = new index_1.MessageView('#messageView');
                    this._negociationsView.update(this._negociations);
                }
                add(event) {
                    event.preventDefault();
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._isWeekend(date)) {
                        this._messageView.update('O sistema só permite negociações em dias úteis!');
                        return;
                    }
                    const negociation = new index_2.Negociation(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negociations.add(negociation);
                    this._negociationsView.update(this._negociations);
                    this._messageView.update('Negociação adicionada com sucesso!');
                }
                _isWeekend(date) {
                    return date.getDay() != Days.Saturday && date.getDay() != Days.Sunday;
                }
                importData() {
                    function isOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    }
                    fetch('http://localhost:8080/dados')
                        .then(res => isOk(res))
                        .then(res => res.json())
                        .then((data) => {
                        data
                            .map(data => new index_2.Negociation(new Date(), data.vezes, data.montante))
                            .forEach(negociation => this._negociations.add(negociation));
                        this._negociationsView.update(this._negociations);
                    })
                        .catch(err => console.log(err.message));
                }
            };
            __decorate([
                domInject_1.domInject('#date')
            ], NegociationController.prototype, "_inputDate", void 0);
            __decorate([
                domInject_1.domInject('#quantity')
            ], NegociationController.prototype, "_inputQuantity", void 0);
            __decorate([
                domInject_1.domInject('#value')
            ], NegociationController.prototype, "_inputValue", void 0);
            exports_1("NegociationController", NegociationController);
            (function (Days) {
                Days[Days["Sunday"] = 0] = "Sunday";
                Days[Days["Monday"] = 1] = "Monday";
                Days[Days["Tuesday"] = 2] = "Tuesday";
                Days[Days["Wednesday"] = 3] = "Wednesday";
                Days[Days["Thursday"] = 4] = "Thursday";
                Days[Days["Friday"] = 5] = "Friday";
                Days[Days["Saturday"] = 6] = "Saturday";
            })(Days || (Days = {}));
        }
    };
});
