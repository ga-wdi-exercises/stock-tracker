// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;

  // your code to search the API and return a Stock object here

}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}
