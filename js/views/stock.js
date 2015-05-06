// define your StockView here
var StockView = function(selector){
    this.model;
    this.view = document.querySelector(selector);
    this.searchForm = this.view.querySelector("form#stock-search");
    this.searchField =this.view.querySelector("input#stock-symbol");
    this.detailsView = this.view.querySelector("div#stock-details");
    this.initialize();

}


StockView.prototype.initialize = function(){
    this.searchForm.addEventListener('submit', this.searchHandler.bind(this));
    this.detailsView.querySelector('form#shares-form').addEventListener('submit', this.updateTotals.bind(this))
    this.detailsView.style.display = 'none';

}
StockView.prototype.getSearchSymbol = function(){
    return this.searchField.value;
}
StockView.prototype.getSharesTotal = function(){
    return this.detailsView.querySelector("input#num-shares").value;
}

StockView.prototype.searchHandler = function(event){
    event.preventDefault();
    this.detailsView.style.display = 'none';
    this.lookupSymbol(this.getSearchSymbol());
    this.searchField.value ='';
}
StockView.prototype.lookupSymbol = function(symbol){
     this.model = new Stock(symbol);
    if(this.model.symbol == symbol)
        this.renderStock();
    else
        console.log("render error view here");
}

StockView.prototype.renderStock = function(){
    this.detailsView.querySelector('#stock-symbol').innerText = this.model.symbol;
    this.detailsView.querySelector('#stock-company').innerText = this.model.companyName;
    this.detailsView.querySelector('#stock-price').innerText = this.model.price.toFixed(2);
    this.detailsView.querySelector('#stock-value').innerText = this.model.totalValue().toFixed(2);
    this.detailsView.querySelector('#num-shares').value = this.model.numShares;
    this.detailsView.style.display = 'block'
}

StockView.prototype.updateTotals = function(event){
    console.log("update Totals");
    event.preventDefault();
    this.model.numShares = this.getSharesTotal();
    this.renderStock();
}


