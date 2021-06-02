class Negociations {
    constructor() {
        this._negociations = [];
    }
    add(negociation) {
        this._negociations.push(negociation);
    }
    getArray() {
        return [].concat(this._negociations);
    }
}
