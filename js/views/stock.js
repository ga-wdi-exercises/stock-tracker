// define your StockView here

  //forEach will pull each array object(stock) from the data array
  var StockView = function(data_array){
    // below 2 was commented out by Adam

    var searchStock = document.querySelector("#search-stock-button");
    searchStock.addEventListener("click", this.lookupSymbol.bind(this));

    this.stockAttributeList = document.querySelector(".stock-attributes")
  // // this.searchStock.bind(this) ) //not needed

  var stockShares = document.querySelector("#stock-shares-button");
  stockShares.addEventListener("click", this.renderTotal.bind(this));

}

    // if stock.  "Symbol": "AAPL",

StockView.prototype = {
  lookupSymbol: function() {
    var newStockText = document.querySelector("#new-stock-search").value;
    console.log(newStockText);

    var stock = new Stock( newStockText );
    console.log("var stock")
    console.log(stock)
  //   for( var i = 0; i < this.model.cards.length; i++ )
  // var cardView = new CardView( this.model.cards[i] )

    this.model = stock;
    this.render();

  },
  renderTotal: function(){
    var shares = document.querySelector("#number-of-shares").value
    console.log(shares);
    var total = shares*(this.model.price)
    document.querySelector("#total-share-value").innerHTML = "$"+total
  },

  render: function(){

          if (document.querySelector("li") !== null)
          {
              // console.log("working?")
              // var elem = document.querySelector("li");
              // elem.parentNode.removeChild(elem);
              //the above only removes one element so not using

              //the below removes all the elements picked, li
              $('li').remove();
          }

          // var stockView = $this.each(function(i,value){
          var li = document.createElement("li")
          console.log("RENDER");
          console.log(this.model.price)

          var li = document.createElement("li")
          li.innerHTML = "Company Name: "+this.model.companyName
          this.stockAttributeList.appendChild(li)

          var li = document.createElement("li")
          li.innerHTML = "Price per share: $"+this.model.price
          this.stockAttributeList.appendChild(li)

          var li = document.createElement("li")
          li.innerHTML = "Market Value: $"+this.model.totalValue
          this.stockAttributeList.appendChild(li)
        }
}
//Below is in my model file, just for reference
// var Stock = function(stock_search) {
//   var self = this;
//   data.forEach( function(stock) {
//     if (stock_search === stock["Symbol"]) {
//       self.symbol = stock["Symbol"]
//       // The info is the price, companyName and totalValue.
//       self.price = stock["LastPrice"]
//       self.companyName = stock["Name"]
//       self.totalValue = stock["MarketCap"]
//     }
//   });
// }

// TrilloView.prototype = {
//   newCard: function( event ){
//     event.preventDefault()
//     var card = new Card( this.newCardText.value )
//     this.render()
//   },
//   render: function(){
//     this.toDoList.innerHTML = ""
//     this.doneList.innerHTML = ""
//     for( var i = 0; i < this.model.cards.length; i++ ){
//       var cardView = new CardView( this.model.cards[i] )
//       if( this.model.cards[i].completed ){
//         this.doneList.appendChild( cardView )
//       } else {
//         this.toDoList.appendChild( cardView )
    //
    //
    // <div id="todo-column" class="column">
    //   <h2 class="column-heading">To Do</h2>
    //   <ul class="card-list">
    //   </ul>
    // </div>

// http://en.wikipedia.org/wiki/Minimax
// $("[id^=R1]").each(function(i,value){
//   console.log(i);
//   console.log(value).text();
//   $(this).html()
//
//   });


// example below to display each of the stock elements
// var obj = {
//   "flammable": "inflammable",
//   "duh": "no duh"
// };
//
// $.each( obj, function( key, value ) {
//   alert( key + ": " + value );
// });
