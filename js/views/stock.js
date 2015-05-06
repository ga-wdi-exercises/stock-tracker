// define your StockView here

var StockView = function(symbol){
  this.model = new Stock(symbol);
  $("#update_symbol").on("click", this.lookupSymbol.bind( this) );
  $("#update_numShares").on("click", this.updateShares.bind( this));
}

StockView.prototype = {
  lookupSymbol: function (){
    this.model = new Stock($("#symbol_id").val());
    this.render();
  },

  updateShares: function (){
    var new_shares = $('#numShares').val();
    this.model.numShares = parseInt(this.model.numshares) + parseInt(new_shares);
    this.render();
  },

  render: function (){
    document.getElementById("company_name").innerText = this.model.companyName;
    document.getElementById("price").innerText = this.model.price;
    document.getElementById("num_Shares").innerText = this.model.numShares;
    document.getElementById("totalValue").innerText = this.model.totalValue;
  }


}
