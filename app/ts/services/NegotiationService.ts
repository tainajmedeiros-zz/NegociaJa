import { Negotiation, NegotiationPartial } from '../models/index';

export class NegotiationService {

    getNegotiations(handler: HandlerFunction): Promise<Negotiation[]> {
        
        return fetch('http://localhost:8080/dados')
            .then(res => handler(res))
            .then(res => res.json())
            .then((datas: NegotiationPartial[]) =>
                datas.map(data => new Negotiation(new Date(), data.vezes, data.montante))
            )
            .catch(err => {
                console.log(err);
                throw new Error('Não foi possível importar as negociações!')
            });
    }
}

export interface HandlerFunction {

    (res: Response): Response;

}