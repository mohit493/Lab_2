$(function () {
    //We instantiate our model
    var model = new DinnerModel();



<<<<<<< HEAD
=======
	//And create the needed controllers and views
	var exampleView = new ExampleView($("#exampleView"),model);
	var exampleViewController = new ExampleViewController(exampleView,model);
>>>>>>> master

    //And create the needed controllers and views
    var exampleView = new ExampleView($("#exampleView"), model);
    var selectDishView = new SelectDishView($("#selectDishView"), model);
});