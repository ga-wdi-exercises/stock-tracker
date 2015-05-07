// define your StockView here
function StockView() {
  $('#update-symbol').on('click', this.lookupSymbol.bind(this));
  $('#update-shares').on('click', this.updateShares.bind(this));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    new Stock(symbol, function(stock){
      this.model = stock
      this.render()
      $('#cha-ching')[0].play();
    }.bind(this));
  },

  updateShares: function() {
    this.model.numShares = parseInt($('#num-shares').val());
    this.render();
  },

  render: function() {
    $("#stock-name").text(this.model.Name);
    $("#stock-price").text(this.model.LastPrice);
    $("#total-value").text(this.model.totalValue());
  }
}
