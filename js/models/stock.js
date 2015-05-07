// define your Stock model here
function Stock(symbol, callback) {
  this.symbol = symbol;
  this.numShares = 0;


    var markItOnDemand = "http://dev.markitondemand.com/api/v2/quote/jsonp?symbol" + symbol
    $.ajax
    ({

      url: markItOnDemand,
      type: "GET",
      dataType: "jsonp",
      context: this
    }).done(function(response)
    {
      for( var property in response )
      // {
  //      if( response.prop(property))
        {
          this[property] = response [property]
        }
      //  StockView.render()
      // }
    //  console.log("success!")
    // }).fail(function(){
    //   console.log("ajax request not successful")
    })

     //callback( this )
  }


Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; }
}
