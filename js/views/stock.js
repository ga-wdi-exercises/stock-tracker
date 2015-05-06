// define your StockView here
// Then define your view, and test it's functionality in small pieces (i.e. make it render based on the associated model, then try having it update its model, etc).
var SymbolView = function (symbol){
  // console.log(symbol)
  //display the Symbol
  var li = document.createElement("li")
  li.innerHTML = symbol.price
  return li
}

var StockView = function(model){
  var newSymbol = document.querySelector("#new-symbol-button")
  this.stockList = document.querySelector("#stock-column .stock-list")
  this.newSymbolText = document.querySelector("#new-symbol-text")
  this.model = model
  newSymbol.addEventListener("click", this.newSymbol.bind(this))
  this.render()

}

StockView.prototype = {
  newSymbol: function(event){
    event.preventDefault()
    var symbol = new Symbol (this.newSymbolText.value)
    this.render()
  },
  render: function(){
    this.stockList.innerHTML = ""
    //console.log(this.model)
    //console.log(this.symbols)
    for (var i=0; i <this.model.symbols.length; i++){
      var symbolView = new SymbolView(this.model.symbols[i])
      this.stockList.appendChild(symbolView)
    }
  }

}
