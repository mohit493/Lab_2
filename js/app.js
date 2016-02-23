$(function () {
    //We instantiate our model
    var model = new DinnerModel();



    var exampleView = new ExampleView($("#exampleView"), model);

    var selectDishView = new SelectDishView($("#selectDishView"), model);

});