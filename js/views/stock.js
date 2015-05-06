// define your StockView here
var StockView = function( symbol ){
  // this.el = document.querySelector( selector )
  var instance = this;

  this.model = instance.lookupSymbol(symbol);

  $("#symbol_button").on("click", function(){
    instance.lookupSymbol($("#symbol_field").val());
  });

  $("#numberOfShares_button").on("click", function(){
    instance.lookupSymbol($("#numberOfShares_field").val());
  });

}

StockView.prototype = {

  lookupSymbol: function ( symbol ){
    this.model = new Stock(symbol)
    this.render()
  },

  render: function() {
    document.getElementById("name").innerHTML = this.model.name;
    document.getElementById("price").innerHTML = this.model.price;
    
    document.getElementById("numberOfShares").innerHTML = this.model.numShares;
    document.getElementById("totalValue").innerHTML = this.model.totalValue;
  }
}
