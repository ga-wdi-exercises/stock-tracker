# Create a Stock Portfolio Tracker

## Object-Oriented Javascript

Using the `data` variable included in `index.html` to supply data, create a webpage for managing a stock portfolio. 

Create constructor functions for the two objects below, and add the associated methods to each object's prototype. Feel free to add any other needed properties and methods as necessary.

- `interface`
  - `lookup`: When the user inputs a stock symbol, search for that stock and return its data 
- `stock`
  - `display`: Display the information about the given stock
  - `calculate`: Calculate the total value of a user-input number of shares in this stock
- `portfolio`
  - `display`: Display the information about all stocks included in the data 
  - `calculate`: Calculate the total value of all stocks for which the user has input a number of shares

## Getting started

1. Write out the bare-minimum HTML you'd need for this app to work -- don't touch any CSS yet! Put in enough `<input>` fields to account for the different kinds of user input you'll need.
- Use Javascript to push the JSON for one of the stocks into your HTML when the page loads.
- Instead of turning the JSON into HTML when the page loads, do it when something is clicked.
- Instead of using just one specific stock, add in the functionality to let the user choose their stock. 
