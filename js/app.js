$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    model.addDishToMenu(1);
    model.addDishToMenu(103);
    model.addDishToMenu(200);

    model.setNumberOfGuests(2);
	var sidebarView = new SidebarView($("#sidebarView"), model);
	var sidebarController = new SidebarController(sidebarView, model);
	var dishDescriptionView = new DishDescriptionView($("#dishDescriptionView"),model);
	var dishDescriptionController = new DishDescriptionController(dishDescriptionView, model);

});