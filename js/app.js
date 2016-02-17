$(function() {
	//We instantiate our model
	var model = new DinnerModel();
	model.addDishToMenu(1);
	model.addDishToMenu(200);
	model.addDishToMenu(103);
	model.getSelectedDish('dessert');
	model.getFullMenu();



	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);

});