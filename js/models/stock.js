// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
}

Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; },
  stockSearchAndSet: function( stockView ){
    $.ajax({
      type: "GET",
      dataType: "jsonp",
      context: this,
      url: "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + this.symbol
    }).done( function( response ){
      console.log( "Ajax success!" );
      this.companyName = response["Name"];
      this.price = response["LastPrice"];
      stockView.render();
    }).fail( function(){
      console.log( "Ajax failure!" );
    })
  }
}
