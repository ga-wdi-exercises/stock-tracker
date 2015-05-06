// define your StockView here
var StockView = function( selector, model ){
  this.el = document.querySelector( selector );
  this.model = model;
  this.render();
  this.lookupSymbol();
  this.updateShares();
}

// Stock prototype
StockView.prototype = {
  
  render: function() {
    var companyName = document.querySelector(".company-name");
    companyName.innerHTML = stock.companyName;
    var price = document.querySelector(".price");
    price.innerHTML = stock.price;
    var totalValue = document.querySelector(".total-value");
    totalValue.innerHTML = "The total value at " + stock.numShares + " shares is $" + stock.totalValue + "."; 
  },

  lookupSymbol: function() {
    // When the user enters a symbol, instantiate a new instance of a stock model and associate it with the 'model' attribute of the view. Then re-render the view
    var form = document.getElementById("#lookup-stock");
    form.addEventListener("submit", onSubmit);

    function onSubmit(evt){
      evt.preventDefault();
      symbol = document.getElementById("symbol");
      stock = new Stock(symbol.value)
      var stockView = new StockView(".results", stock);
    }
  },

  updateShares: function() {
    // When the user enters a number of shares, it should update the existing associated stock model, and then re-render the view
    var form = document.getElementById("#lookup-stock");
    form.addEventListener("submit", onSubmit);

    function onSubmit(evt){
      evt.preventDefault();
      // symbol = document.getElementById("symbol");
      // stock = new Stock(symbol.value);
      shares = document.getElementById("shares")
      stock.numShares = shares.value;
      stock.totalValue = (stock.numShares * stock.price).toFixed(2);
      var stockView = new StockView(".results", stock);
    }
  }

  

}