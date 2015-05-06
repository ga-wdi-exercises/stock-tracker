function StockView() {
  $('#symbolButton').on('click', this.lookupSymbol.bind(this));
  $('#numSharesButton').on('click', this.updateShares.bind(this));
};
StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbolInput").val();
    this.model = new Stock(symbol);
    this.render();
  },
  updateShares: function() {
    this.model.numShares = parseInt($('#numSharesInput').val());
    this.render();
  },
  render: function() {
    $('#sym').text('');
    $('#sym').text(this.model.symbol);
    $('#name').text('');
    $('#name').text(this.model.companyName);
    $('#price').text('');
    $('#price').text('$' + this.model.price);
    $('#shares').text('');
    $('#shares').text(this.model.numShares);
    $('#totalValue').text('');
    $('#totalValue').text('$' + this.model.totalValue());
  }
};