//View 2
var DishDescriptionView = function(container, model) {

	//add div buttons
	this.backToSelectDish = container.find("#backToSelectDish");
	this.confirmDish = container.find("#confirmDish");

	//add dish info
	this.dishName = container.find("#dishName");
	this.dishImage = container.find("#dishImage");
	this.dishPreparation = container.find("#dishPreparation");

	this.update = function() {

		//upload dish info
		this.dish = model.getDish(1);

		this.dishName.html(this.dish.name);
		this.dishImage.attr('src', 'images/' + this.dish.image);
		this.dishPreparation.html(this.dish.description);

	}
 
 	this.update();


}
