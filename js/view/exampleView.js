//ExampleView Object constructor
<<<<<<< HEAD
var ExampleView = function (container, model) {

    var changeview1 = document.getElementById("createDinner");
    changeview1.addEventListener("click", function () {
        $("#homeView").hide();
        $("#sidebarView").show();
        $("#searchbar").show();
        $("#selectDishView").show();


    })



}
=======
var ExampleView = function (container,model) {
	
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)
	this.numberOfGuests = container.find("#numberOfGuests");
	this.plusButton = container.find("#plusGuest");
	this.minusButton = container.find("#minusGuest");
	
	this.numberOfGuests.html(model.getNumberOfGuests());
	model.addObserver(this);
	
}
 
>>>>>>> master
