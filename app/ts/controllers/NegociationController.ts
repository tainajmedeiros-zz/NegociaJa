class NegociationController {

    private _inputDate: JQuery;
    private _inputQuantity: JQuery;
    private _inputValue: JQuery;
    private _negociations = new Negociations();
    private _negociationsView = new NegociationsView('#negociationsView');
    private _messageView = new MessageView('#messageView');

    constructor() { 
        this._inputDate = $('#date');
        this._inputQuantity = $('#quantity');
        this._inputValue = $('#value');
        this._negociationsView.update(this._negociations);
    }

    add(event: Event) {

        event.preventDefault();

        const negociation = new Negociation(
            new Date(this._inputDate.val().replace(/-/g, ',')),
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );

        this._negociations.add(negociation);
        this._negociationsView.update(this._negociations);
        this._messageView.update('Negociação adicionada com sucesso!');

    }
}