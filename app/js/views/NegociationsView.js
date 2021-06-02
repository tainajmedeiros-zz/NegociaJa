class NegociationsView extends View {
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
}
