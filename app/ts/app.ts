import { NegotiationController } from './controllers/NegotiationController';

const constroller = new NegotiationController();

$('.form').submit(constroller.add.bind(constroller));
$('#button-import').click(constroller.importData.bind(constroller));
