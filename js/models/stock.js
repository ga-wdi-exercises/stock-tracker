// define your Stock model here
function Stock(symbol) {
  this.symbol = symbol;
  this.numShares = 0;
  this.data = this.lookupStock();
}
// Card.prototype = {
//   createInRails: function(){
//     $.ajax({
//       type: "POST",
//       dataType: "json",
//       data: {card:{description: this.description, completed: this.completed}},
//       url: "http://localhost:3000/cards"
//     }).done(function(){
//         trilloModel.fetchCards();
//     }).fail(function(){
//       console.log("saving to rails API failed")
//     })
Stock.prototype = {
  totalValue: function() { return this.price * this.numShares; },
  lookupStock: function(){
    $.ajax({
      url:"http://dev.markitondemand.com/api/v2/quote/jsonp?symbol=" + this.symbol,
      type: "GET",
      dataType: "jsonp"
      //data:
    }).done(function(response){
      console.log(response)
      console.log(response.Name)
      console.log(response.LastPrice)
      // $("#stock-name").text(this.model.companyName);
      // $("#stock-price").text(this.model.price);
      // $("#total-value").text(this.model.totalValue());
    }).fail(function(){
      console.log("ajax request unsuccessful")
    })
  }
}
