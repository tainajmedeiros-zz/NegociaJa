System.register(["./controllers/NegotiationController"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegotiationController_1, constroller;
    return {
        setters: [
            function (NegotiationController_1_1) {
                NegotiationController_1 = NegotiationController_1_1;
            }
        ],
        execute: function () {
            constroller = new NegotiationController_1.NegotiationController();
            $('.form').submit(constroller.add.bind(constroller));
            $('#button-import').click(constroller.importData.bind(constroller));
        }
    };
});
