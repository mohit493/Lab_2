//View 2 by Giovanna and Mohit
var sidebarView = function(container,model) {

	//edit number of guests
	this.numberOfGuests = container.find("#numberOfGuests");
	this.setNumberOfGuests = container.find("#setNumberOfGuests");

	//get the current view
	this.div = container.find("#sidebarView");

	//display number of guests
	this.numberOfGuests.html(model.getNumberOfGuests);

	this.update = function(arg) {
		
		this.numberOfGuests.html(model.getNumberOfGuests);



	}




}