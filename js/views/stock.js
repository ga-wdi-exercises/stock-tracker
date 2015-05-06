// define your StockView here
var StockView = function(selector, model) {
	this.el = document.querySelector(selector);
	this.model = model;
	this.render();
}

StockView.prototype = new data() {
	render: function() {
	this.el.innerHTML = ""	  
    for(var i = 0; i < this.model.form.length; i++){
	      var form = document.createElement("div")
	      form.className = "form"
	      form.setAttribute("data-id", i)
	      form.innerHTML = this.model.forms[i]
	      form.addEventListener("click", this.onClick.bind( this ) )
	      this.el.appendChild(form)
    	}
  	},
  	
}