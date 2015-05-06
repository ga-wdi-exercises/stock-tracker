



 var StockVeiw = function(symbol){
   this.render(symbol);

 }


  StockVeiw.prototype = {
    render: function(symbol){
      var dataEl = document.createElement("div");
      $("body").append(dataEl);
      dataEl.className = "data";
      dataEl.innerHTML = newStock.findBySymbol(symbol);
    },
  }

  $(".submit").click(function(event){
    event.preventDefault();
    if( $(".user_input_symb").val() ){
      userInput = $(".user_input_symb").val();
      var newStock = new Stock(userInput)
      var stockVeiw = new StockVeiw(newStock)
      console.log("yp")
      }



  })
