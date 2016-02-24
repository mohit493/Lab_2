$(function () {
    //We instantiate our model
    var model = new DinnerModel();



    var numGuestsView = new NumGuestsView($("#numGuestsView"), model);




    var summaryView = new SummaryView($("#summaryView"), model);

});