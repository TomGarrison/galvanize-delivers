$(document).ready(function() {

    var total = 0;
    $("#burger").click(function() {
        $("<tr><td>17.50</td></tr>").appendTo(".price")
        $("<tr><td>Boulder Burger</td></tr>").appendTo(".item")
        addSum(17.50);
    })
    $("#ice").click(function() {
        $("<tr><td>6.50</td></tr>").appendTo(".price")
        $("<tr><td>Non Melt Ice Cream</td></tr>").appendTo(".item")
        addSum(6.00);
    })
    $("#pizza").click(function() {
        $("<tr><td>16.50</td></tr>").appendTo(".price")
        $("<tr><td>Pizza</td></tr>").appendTo(".item")
        addSum(16.50);
    })
    $("#ribs").click(function() {
        $("<tr><td>24.50</td></tr>").appendTo(".price")
        $("<tr><td>Vegan Ribs</td></tr> ").appendTo(".item")
        addSum(27.00);
    })
    var addSum = function(amount) {
        total += amount;
        var tax = total * .08;
        total += tax
        console.log(total);
        $('#total2').empty()
        $('#total2').append(total + "$")
        $('#tax2').empty()
        $('#tax2').append(tax + "$")
    }
})
