$(function () {
    //We instantiate our model
    var model = new DinnerModel();

    var dishDescriptionView = new DishDescriptionView($("#dishDescriptionView"), model);

    var sidebarView = new SidebarView($("#sidebarView"), model);

});