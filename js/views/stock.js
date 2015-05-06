// define your StockView here

  //forEach will pull each array object(stock) from the data array
var StockView = function(data_array){
  var searchStock = document.querySelector("#search-stock-button")
  this.newStockText = document.querySelector("#new-stock-search")
  this.stockAttributeList = document.querySelector(".stock-attributes")
  var selectedStock = searchStock.addEventListener("click", GetStock(newStockText));
  this.model = selecteStock
  this.render()
  // this.searchStock.bind(this) ) //not needed
}

    // if stock.  "Symbol": "AAPL",




StockView.prototype = {
  newStock: function( search ){
    // event.preventDefault() //not needed

    var stock = new Card( this )

    render: function(){
      //each will pull each key value of each stock
          var stockView = this.each(function(i,value){
          var li = document.createElement("li")
          li.innerHTML = i:value
          this.stockAttributeList.appendChild(li)
          });
        }
  }
}

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
