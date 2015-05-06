// instantiate a StockView
var stock = new Stock()
var stockView = new StockView(stock)

var symbolField = document.getElementById("symbol")
var sharesField = document.getElementById("shares")
var button = document.getElementById("button")
// debugger;
button.addEventListener("submit", function(){
	stock.updateStock(symbolField.value, sharesField.value)
	stockView.render();
})