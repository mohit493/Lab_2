//ExampleView Object constructor
var SummaryView = function (container, model) {

    // Get all the relevant elements of the view (ones that show data
    // and/or ones that responed to interaction)
    this.starter = container.find("#starter");
    this.main = container.find("#main");
    this.dessert = container.find("#dessert");

    this.starterName = container.find("#starterName");
    this.mainName = container.find("#mainName");
    this.dessertName = container.find("#dessertName");

    this.starterCost = container.find("#starterCost");
    this.mainCost = container.find("#mainCost");
    this.dessertCost = container.find("#dessertCost");

    this.totalCost = container.find("#totalCost");

    this.printRecipeBtn = container.find("#printRecipeBtn");

    this.totalCost.html("0");




}