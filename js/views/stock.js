// define your StockView here
function StockView() {

  var StockView = this

  $('#update-symbol').on('click', StockView.lookupSymbol.bind(StockView));
  $('#update-shares').on('click', StockView.updateShares.bind(StockView));
}

StockView.prototype = {
  lookupSymbol: function() {
    var symbol = $("#symbol-input").val();
    this.model = new Stock(symbol); //connects the model to the view
    this.render();
    $('#cha-ching')[0].play();
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
