$(document).ready(function(){
  // define your StockView here
  var StockView = function ( selector, model ) {
    // this.el = document.querySelector( selector );
    this.el = $(selector);
    this.model = model;
    this.render();
    
  };

  StockView.prototype = {
    render: function(){

    },
    onClick: function( event ){

    }
  };
});