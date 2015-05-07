// define your StockView here
function StockView() {
  $('#update-symbol').on('click', this.lookupSymbol.bind(this));
  $('#update-shares').on('click', this.updateShares.bind(this));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    this.model = new Stock(symbol);
    this.model.fetchStock();
    this.renderName();
    $('#cha-ching')[0].play();
  },

  updateShares: function() {
    this.model.numShares = parseInt($('#num-shares').val());
    this.renderValue();
  },

  renderName: function() {
    $("#stock-name").text(name);
    // $("#stock-price").text(lastPrice);
  },

  renderValue: function(){
    $("#stock-price").text(lastPrice);
    $("#total-value").text(this.model.totalValue().toFixed(2));
  }
}
