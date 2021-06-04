System.register(["./index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, NegociationsView;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            }
        ],
        execute: function () {
            NegociationsView = class NegociationsView extends index_1.View {
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
                ${model.getArray().map(negociation => `
                    <tr>
                        <td>${negociation.date.getDate()}/${negociation.date.getMonth() + 1}/${negociation.date.getFullYear()}</td>
                        <td>${negociation.quantity}</td>
                        <td>${negociation.value}</td>
                        <td>${negociation.volume}</td>
                    </tr>                        
                    `).join('')}    
            </tbody>

            <tfoot>
            </tfoot>
        </table>
        `;
                }
            };
            exports_1("NegociationsView", NegociationsView);
        }
    };
});
