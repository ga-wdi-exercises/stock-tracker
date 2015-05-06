// define your StockView here
function StockView() {
  $('#update-symbol').on('click', this.lookupSymbol.bind(this));
  $('#update-shares').on('click', this.updateShares.bind(this));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    this.model = new Stock(symbol);
    this.model.refresh().then(function(){
      this.render();
      $('#cha-ching')[0].play();
    }.bind(this));
  },

  updateShares: function() {
    this.model.numShares = parseInt($('#num-shares').val());
    this.render();
  },

  render: function() {
    $("#stock-name").text(this.model.companyName);
    $("#stock-price").text(this.model.price.toFixed(2));
    $("#total-value").text(this.model.totalValue().toFixed(2));
  }
}
