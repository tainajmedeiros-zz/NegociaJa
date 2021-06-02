class Negociations {
    private _negociations: Negociation[] = [];

    add(negociation: Negociation): void {
        this._negociations.push(negociation);
    }

    getArray(): Negociation[] {
        return [].concat(this._negociations);
    }
}