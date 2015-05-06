// define your StockView here
var StockView = function(model){
  this.model = model;
  this.render();
};
StockView.prototype = {
  render: function(){
    var model = this.model;
    $('#sym').text(model.symbol);
    $('#name').text(model.companyName);
    $('#price').text(model.price);
    $('#shares').text(model.numShares);
    $('#totalValue').text(model.totalValue());
    $('#lookup').click(this.lookupSymbol.bind(this));
    $('#update').click(this.updateShares.bind(this));
    $('#symbol').val('');
    $('#numShares').val('');
  },
  lookupSymbol: function(){
    this.model = new Stock($('#symbol').val());
    this.render();
  },
  updateShares: function(){
    this.model.setShares($('#numShares').val());
    this.render();
  }
};