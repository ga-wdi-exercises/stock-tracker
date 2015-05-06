// define your StockView here


var StockView = function() {
  this.symbolButton = document.getElementById("search-button")
  this.symbolInput = document.getElementById("stock-search")
  this.symbolButton.addEventListener("click", this.showStock.bind(this));
  this.sharesButton = document.getElementById("shares-button")
  this.sharesInput = document.getElementById("shares-update")
  this.sharesButton.addEventListener("click", this.updateStock.bind(this));
  this.stocks = document.getElementById("show-stock")
}

StockView.prototype = {

    showStock: function(event){
      this.stock = new Stock(this.symbolInput.value);
      // console.log(this.stock);
      this.render();
    },
    updateStock: function(event){
      this.stock.numShares = this.sharesInput.value;
      // console.log(this.stock)
      this.render();
    },
    render: function() {
      this.stocks.innerHTML = ""
      var el = document.createElement("div");
      el.innerHTML = ("Name: " + this.stock.companyName + "<br> Price: $" + this.stock.price.toFixed(2) + "<br> Number of shares: " + this.stock.numShares + "<br> Total Value: $"+ this.stock.totalValue().toFixed(2));
      this.stocks.appendChild(el);
    }
}
