const constroller = new NegociationController();

$('.form').submit(constroller.add.bind(constroller));
