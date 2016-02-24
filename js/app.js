$(function () {
    //We instantiate our model
    var model = new DinnerModel();


    var dishDescriptionView = new DishDescriptionView($("#dishDescriptionView"), model);

    var numGuestsView = new NumGuestsView($("#numGuestsView"), model);

    var exampleView = new ExampleView($("#exampleView"), model);

    var selectDishView = new SelectDishView($("#selectDishView"), model);

    var summaryView = new SummaryView($("#summaryView"), model);

});