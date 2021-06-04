System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegotiationsView;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegotiationsView = class NegotiationsView extends index_1.View {
                template(model) {
                    return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.getArray().map(negotiation => `
                    <tr>
                        <td>${negotiation.date.getDate()}/${negotiation.date.getMonth() + 1}/${negotiation.date.getFullYear()}</td>
                        <td>${negotiation.quantity}</td>
                        <td>${negotiation.value}</td>
                        <td>${negotiation.volume}</td>
                    </tr>                        
                    `).join('')}    
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
                }
            };
            exports_1("NegotiationsView", NegotiationsView);
        }
    };
});
