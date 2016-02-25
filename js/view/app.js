$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    var exampleView = new ExampleView($("#exampleView"), model);


    //Dish descriptions view and controller
    var dishDescriptionView = new DishDescriptionView($("#dishDescriptionView"), model);
    var dishDescriptionController = new DishDescriptionController(dishDescriptionView, model);

    var numGuestsView = new NumGuestsView($("#numGuestsView"), model);
    var numGuestsViewController = new NumGuestsViewController(numGuestsView, model);


    var selectDishView = new SelectDishView($("#selectDishView"), model);
    var selectDishViewController = new SelectDishViewController(selectDishView, model);

    var summaryView = new SummaryView($("#summaryView"), model);
    var summaryViewController = new SummaryViewController(summaryView, model);

    //Sidebar controllers and views
    var sidebarView = new SidebarView($("#sidebarView"), model);
    var sidebarController = new SidebarController(sidebarView, model);

    var instructionsView = new InstructionsView($("#instructionsView"), model);

});