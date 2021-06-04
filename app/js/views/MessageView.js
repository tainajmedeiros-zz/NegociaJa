System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, MessageView;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            MessageView = class MessageView extends index_1.View {
                template(model) {
                    return `<p class="alert alert-info">${model}</p>`;
                }
            };
            exports_1("MessageView", MessageView);
        }
    };
});
