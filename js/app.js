$(function () {
    //We instantiate our model
    var model = new DinnerModel();

	var instructionsView = new InstructionsView($("#instructionsView"), model);

});