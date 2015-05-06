// define your StockView here
// - `StockView`
//   - `model`: points to an instance of a Stock model.
//   - `render`: updates the HTML on the page to reflect the info of the associated stock model. The info is the price, companyName and totalValue.
//   - 'lookupSymbol': when the user enters a symbol, this should instantiate a new instance of a stock model and associate it with the `model` attribute of the view. It should then re-`render` the view.
//   - updateShares: when the user enters a number of shares, it should update the existing associated stock model, and then re-render the view

  var StockView = function(model){
  	this.model = model;
  	this.render();
  }

  StockView.prototype = {
  	render: function(){
  		var stockColumn = document.getElementsByClassName("column-heading")[0];
  		while (stockColumn.firstElementChild) {
    		stockColumn.removeChild(stockColumn.firstElementChild);
		}
  		if(this.model.companyName){
  			document.getElementById("shares").style.display="block";
	  		var newStock = document.createElement("div");
	  		var stockName = document.createElement("p");
	  		var stockSymbol = document.createElement("p");
	  		var stockCurrentPrice = document.createElement("p");
	  		var stockNumShares = document.createElement("p");
	  		var stockTotalValue = document.createElement("p");
	  		stockName.innerHTML = this.model.companyName;
	  		stockSymbol.innerHTML = this.model.symbol;
	  		stockCurrentPrice.innerHTML = this.model.price;
	  		stockNumShares.innerHTML = this.model.numShares;
	  		stockTotalValue.innerHTML = this.model.totalValue();
	  		newStock.appendChild(stockName);
	  		newStock.appendChild(stockSymbol);
	  		newStock.appendChild(stockCurrentPrice);
	  		newStock.appendChild(stockNumShares);
	  		newStock.appendChild(stockTotalValue);
	  		stockColumn.appendChild(newStock);

	  	}
  	}
  }





