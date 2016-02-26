//ExampleView Object constructor
var SelectDishView = function (container, model) {

    /* 	*** This code is loading the dishes ***
     *** but shows only one at a time	*** */
    // 	this.images = container.find("#images");
    this.starter = container.find("#starters");
    this.main = container.find("#main");
    this.dessert = container.find("#desserts");



    var sessionlist = "";

    for (var x = 0; x < model.getAllDishes("starter").length; x++) {
        sessionlist += '<li id=list >' + '<div class="col-md-3">' + '<img src="' + 'images/' + model.getAllDishes("starter")[x].image + '" class="img-responsive" alt="' + model.getAllDishes("starter")[x].name + '">' + '<h5>' + model.getAllDishes("starter")[x].name + '</h5>' + '</div>';
        sessionlist += '</li>';

    }
    document.getElementById("starters").innerHTML = sessionlist + "<br> <br>";
    sessionlist = "";


    for (var x = 0; x < model.getAllDishes("main dish").length; x++) {
        sessionlist += '<li id=list>' + '<div class="col-md-3">' + '<img src="' + 'images/' + model.getAllDishes("main dish")[x].image + '" class="img-responsive" alt="' + model.getAllDishes("main dish")[x].name + '">' + '<h5>' + model.getAllDishes("main dish")[x].name + '</h5>' + '</div>';

        sessionlist += '</li>';

    }
    document.getElementById("main").innerHTML = sessionlist + "<br> <br>";
    sessionlist = "";



    for (var x = 0; x < model.getAllDishes("dessert").length; x++) {
        sessionlist += '<li id=list ">' + '<div class="col-md-3">' + '<img src="' + 'images/' + model.getAllDishes("dessert")[x].image + '" class="img-responsive" alt="' + model.getAllDishes("dessert")[x].name + '">' + '<h5>' + model.getAllDishes("dessert")[x].name + '</h5>' + '</div>';

        sessionlist += '</li>';

    }
    document.getElementById("desserts").innerHTML = sessionlist + "<br> <br>";
    sessionlist = "";



    // Search functionality in the sidebar
    var sourceArr = [];

    $("#searchDish").typeahead({
        local: sourceArr
    });


    $("#searchDish").keyup(function () {
        var userInput = $(this).val();
        $("#selectDishView li").map(function (index, value) {
            $(value).toggle($(value).text().toLowerCase().indexOf(userInput) >= 0);
        });
    });






}