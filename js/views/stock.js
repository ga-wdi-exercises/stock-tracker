//The info is the price, companyName and totalValue.
// 'lookupSymbol': when the user enters a symbol, this should instantiate a
//new instance of a stock model and associate it with the model attribute of the view.
//It should then re-render the view.
// updateShares: when the user enters a number of shares, it should update the
//existing associated stock model, and then re-render the view

var StockView = function( symbol ){
  this.model = new Stock( symbol )
  this.render()
}

StockView.prototype = {
  render: function(){
    $("body").append("<p>Price: this.model.price</p>")
    $("body").append("<p>Name: this.companyName</p>")
    $("body").append("<p>Shares Owned: this.numShares</p>")
    $("body").append("<p>Total Value: this.totalValue</p>")
  }
}
