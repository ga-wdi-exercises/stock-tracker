// define your StockView here
function StockView() {
  $('#update-symbol').on('click', this.lookupSymbol.bind(this));
  $('#update-shares').on('click', this.updateShares.bind(this));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    this.model = new Stock(symbol);
    this.render();
  },

  updateShares: function() {
    this.model.numShares = parseInt($('#num-shares').val());
    this.render();
  },

  render: function() {
    $("#stock-name").text(this.model.companyName);
    $("#stock-price").text(this.model.price);
    $("#total-value").text(this.model.totalValue());
  }
}
