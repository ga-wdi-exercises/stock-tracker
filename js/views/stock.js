// define your StockView here
var StockView = function(){
  this.symbolButton = document.getElementById( "lookup-submit" );
  this.symbolInput = document.getElementById( "lookup-input");
  this.symbolButton.addEventListener( "click", this.createStock.bind( this ) );
  this.sharesContainer = document.getElementById( "shares-container" );
  this.sharesButton = document.getElementById( "shares-submit" );
  this.sharesInput = document.getElementById( "shares-input" );
  this.sharesButton.addEventListener( "click", this.updateStock.bind( this ) );
  this.stocks = document.getElementById( "stocks" );
}

StockView.prototype = {
  createStock: function(event){
    event.preventDefault();
    this.stock = new Stock( this.symbolInput.value );
    this.render();
    this.sharesContainer.style.display = "block";
  },
  updateStock: function(event){
    event.preventDefault();
    this.stock.numShares = this.sharesInput.value;
    this.render();
  },
  render: function(){
    this.stocks.innerHTML = "";
    this.stocks.style.display = "block";
    el = document.createElement( "div" )
    el.innerHTML = ("Name: "+ this.stock.companyName +
                    "<br>Price: $" + this.stock.price.toFixed(2) +
                    "<br>No. Shares: " + this.stock.numShares +
                    "<br>Total Value: $" + this.stock.totalValue().toFixed(2) );
    this.stocks.appendChild( el );
  }
}
