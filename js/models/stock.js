// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  this.data = this.lookupStock();
  this.name = name;
  //this.price = price;
}

Stock.prototype = {

  lookupStock: function(){
    $.ajax({
      url:"http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + this.symbol,
      type: "GET",
      dataType: "jsonp"
      //data:
    }).done(function(response){
      console.log(response)
      name = response.Name;
      console.log(response.Name)
      price = response.LastPrice;
      console.log(response.LastPrice)
      // $("#stock-name").text(this.model.companyName);
      // $("#stock-price").text(this.model.price);
      // $("#total-value").text(this.model.totalValue());
    }).fail(function(){
      console.log("ajax request unsuccessful")
    })
  },
  totalValue: function() { return price * this.numShares; }
}
