//PROBLEM: When separated into several javascript files, it doesn't work.

$(document).ready(function(){


  stockModel = new Stock( )
  stockView = new StockView( stockModel )

  portfolioModel = new Portfolio()
  portfolioView = new PortfolioView( portfolioModel )
})
