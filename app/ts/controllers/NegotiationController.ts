import { 
    NegotiationsView, 
    MessageView,
}  from '../views/index';
import { 
    Negotiations, 
    Negotiation,
} from '../models/index';
import { 
    domInject, 
    throttle,
} from '../helpers/decorators/index';
import { NegotiationService } from '../services/index';
import { toString } from '../helpers/index';

export class NegotiationController {

    @domInject('#date')
    private _inputDate: JQuery;

    @domInject('#quantity')
    private _inputQuantity: JQuery;

    @domInject('#value')
    private _inputValue: JQuery;
    private _negotiations = new Negotiations();
    private _negotiationsView = new NegotiationsView('#negotiationsView');
    private _messageView = new MessageView('#messageView');
    private _negotiationService = new NegotiationService();

    constructor() { 
        this._negotiationsView.update(this._negotiations);
    }

    @throttle()

    add() {

        let date = new Date(this._inputDate.val().replace(/-/g, ','));

        if(!this._isWeekend(date)) {
            this._messageView.update('O sistema só permite negociações em dias úteis!');
            return
        }
        const negotiation = new Negotiation(
            date,
            parseInt(this._inputQuantity.val()),
            parseFloat(this._inputValue.val())
        );

        this._negotiations.add(negotiation);

        toString(negotiation, this._negotiations);
        
        this._negotiationsView.update(this._negotiations);
        this._messageView.update('Negociação adicionada com sucesso!');

    }

    private _isWeekend(date: Date) {
        return date.getDay() != Days.Saturday && date.getDay() != Days.Sunday;
    }

    @throttle()
    async importData() {

        try {
            const negotiationsForImport = await this._negotiationService
            .getNegotiations(res => {
                if(res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            });
  

            const negotiationImport = this._negotiations.getArray();

            negotiationsForImport
                .filter(negotiation => 
                    !negotiationImport.some(isImport => 
                        negotiation.isEqual(isImport)))
                .forEach(negotiation => 
                this._negotiations.add(negotiation));

                this._negotiationsView.update(this._negotiations);
        } catch(err) {
            this._messageView.update(err.message);
        }
    }
}

enum Days {
    Sunday,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday 
}