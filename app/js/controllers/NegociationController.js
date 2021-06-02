class NegociationController {
    constructor() {
        this._negociations = new Negociations();
        this._negociationsView = new NegociationsView('#negociationsView');
        this._messageView = new MessageView('#messageView');
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._negociationsView.update(this._negociations);
    }
    add(event) {
        event.preventDefault();
        const negociation = new Negociation(new Date(this._inputDate.val().replace(/-/g, ',')), parseInt(this._inputQuantity.val()), parseFloat(this._inputValue.val()));
        this._negociations.add(negociation);
        this._negociationsView.update(this._negociations);
        this._messageView.update('Negociação adicionada com sucesso!');
    }
}
