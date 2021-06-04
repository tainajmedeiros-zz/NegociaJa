System.register(["../views/index", "../models/index", "../helpers/decorators/index", "../services/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, index_4, index_5, NegotiationController, Days;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            },
            function (index_5_1) {
                index_5 = index_5_1;
            }
        ],
        execute: function () {
            NegotiationController = class NegotiationController {
                constructor() {
                    this._negotiations = new index_2.Negotiations();
                    this._negotiationsView = new index_1.NegotiationsView('#negotiationsView');
                    this._messageView = new index_1.MessageView('#messageView');
                    this._negotiationService = new index_4.NegotiationService();
                    this._negotiationsView.update(this._negotiations);
                }
                add() {
                    let date = new Date(this._inputDate.val().replace(/-/g, ','));
                    if (!this._isWeekend(date)) {
                        this._messageView.update('O sistema só permite negociações em dias úteis!');
                        return;
                    }
                    const negotiation = new index_2.Negotiation(date, parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
                    this._negotiations.add(negotiation);
                    index_5.toString(negotiation, this._negotiations);
                    this._negotiationsView.update(this._negotiations);
                    this._messageView.update('Negociação adicionada com sucesso!');
                }
                _isWeekend(date) {
                    return date.getDay() != Days.Saturday && date.getDay() != Days.Sunday;
                }
                importData() {
                    return __awaiter(this, void 0, void 0, function* () {
                        try {
                            const negotiationsForImport = yield this._negotiationService
                                .getNegotiations(res => {
                                if (res.ok) {
                                    return res;
                                }
                                else {
                                    throw new Error(res.statusText);
                                }
                            });
                            const negotiationImport = this._negotiations.getArray();
                            negotiationsForImport
                                .filter(negotiation => !negotiationImport.some(isImport => negotiation.isEqual(isImport)))
                                .forEach(negotiation => this._negotiations.add(negotiation));
                            this._negotiationsView.update(this._negotiations);
                        }
                        catch (err) {
                            this._messageView.update(err.message);
                        }
                    });
                }
            };
            __decorate([
                index_3.domInject('#date')
            ], NegotiationController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantity')
            ], NegotiationController.prototype, "_inputQuantity", void 0);
            __decorate([
                index_3.domInject('#value')
            ], NegotiationController.prototype, "_inputValue", void 0);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "add", null);
            __decorate([
                index_3.throttle()
            ], NegotiationController.prototype, "importData", null);
            exports_1("NegotiationController", NegotiationController);
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
