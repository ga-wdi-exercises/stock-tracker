// define your StockView here

var StockView = function(symbol){
  this.model = new Stock(symbol);
  this.render();
  $("#update_symbol").on("click", this.lookupSymbol.bind( this) );

}

StockView.prototype = {
  lookupSymbol: function (){
    this.model = new Stock($("#symbol_id").val());
    this.render();
  },
  render: function (){
    document.getElementById("company_name").innerText = this.model.companyName;
    document.getElementById("price").innerText = this.model.price;
  }


}
