// define your StockView here

var StockView = function(selector){
  this.model;
  this.view = document.querySelector(selector)
  this.initialize();
  this.updateShares();

}

StockView.prototype.initialize = function(){
  document.getElementById("stock-form").addEventListener("submit", this.submitEventHandler.bind(this));
}

StockView.prototype.updateShares = function(){
  document.getElementById("share-form").addEventListener("submit", this.submitShares.bind(this));
}

StockView.prototype.submitShares = function(event){
  event.preventDefault();
  var newShares = parseInt(document.getElementById("new-shares-field").value);
  console.log("updating shares", newShares);
  this.model.updateShares(newShares);
  console.log(this.model.totalValue());
  document.getElementById("total").innerText = "Total Price: $" + this.model.totalValue() + "";
}


StockView.prototype.submitEventHandler = function(event) {
  event.preventDefault();
  var symbolValue = document.getElementById("search-text-field").value;
  console.log("searching for", symbolValue);
  this.stockLookUp(symbolValue);
}

StockView.prototype.stockLookUp = function(symbolValue) {
  this.model = new Stock(symbolValue);
  console.log(this.model);
  console.log(this.model.totalValue());
  document.getElementById("name").innerText = "Name: " + this.model.companyName + "";
  document.getElementById("price").innerText = "Current Price: $" + this.model.price + "";
  document.getElementById("symbol").innerText = "Symbol: " + this.model.symbol + "";
}
