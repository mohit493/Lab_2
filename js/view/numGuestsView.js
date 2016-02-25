var NumGuestsView = function (container, model) {

    // Get all the relevant elements of the view 
    this.numberOfGuests = container.find("#numberOfGuests");
    this.backButton = container.find("#backButton");
    //Creating the components dynamically. Here we create the following HTML content:

    //Set the inital values of the components
    this.numberOfGuests.html(model.getNumberOfGuests());





}