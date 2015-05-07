
var PortfolioView = function( portfolioModel ){
    this.portfolioModel = portfolioModel

    var seePortfolio = $("#seePortfolio")
    seePortfolio.on("click", function( event ){
      event.preventDefault()
      portfolioView.render()
    })
}


PortfolioView.prototype = {
  render: function(){
    console.log("render")



    for (var i = 0; i < this.portfolioModel.stocks.length; i ++){

      $("body").append("<div class='portfolioSummary'></div>")

      $(".portfolioSummary").append("<p>Symbol</p>")
      $(".portfolioSummary").append("<div class='smallBox'>" + this.portfolioModel.stocks[i].symbol + "</div>")

      $(".portfolioSummary").append("<p>Price</p>")
      $(".portfolioSummary").append("<div class='smallBox'>" + this.portfolioModel.stocks[i].price + "</div>")

      $(".portfolioSummary").append("<p>Company Name</p>")
      $(".portfolioSummary").append("<div class='smallBox'>" + this.portfolioModel.stocks[i].compName + "</div>")

      $(".portfolioSummary").append("<p>Total Value</p>")
      $(".portfolioSummary").append("<div class='smallBox'>" + this.portfolioModel.stocks[i].totalValue + "</div>")


      console.log("Stock #" + i + ": " + this.portfolioModel.stocks[i].companyName)
    }
  }
}
