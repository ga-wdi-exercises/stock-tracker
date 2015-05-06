// instantiate a StockView
var field = document.getElementById("ticker");
var button = document.getElementById("lookup-stock");
var sharesField = document.getElementById("shares-field");
var sharesButton = document.getElementById("enter-shares");

var stock = new Stock();

var stockView = new StockView(stock);

button.addEventListener("click", function(){
	stock.updateStock(field.value);
	stockView.render();
})

sharesButton.addEventListener("click", function(){
	stock.updateShares(sharesField.value);
	stockView.render();
})