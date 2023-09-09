function Getpizza(size, crust, topping, number) {
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.number = number;
}

function Checkamount(size_price, crust_price, topping_price, number) {
  this.size_price = size_price;
  this.crust_price = crust_price;
  this.topping_price = topping_price;
  this.number = number;
}

Checkamount.prototype.totalamount = function () {
  return (this.size_price + this.crust_price + this.topping_price) * this.number

}

var sizePrice = [500, 750, 1000]
var sizeName = ["small", "medium", "large"]
var crustPrice = [150, 250, 300]
var crustName = ["thin", "medium", "thick"]
var toppingName = ["pepperoni", "beef", "sausage", "chicken", "bacon"]
var toppingPrice = [70, 70, 60, 60, 60]

$(document).ready(function () {
  $("#pizzaMenu").submit(function (event) {
    event.preventDefault();
    kenTable()
    sumTable()
  });
});

function kenTable() {
  var size = parseInt($("#size").val());
  var sizeName1 = sizeName[size - 1]
  var crust = parseInt($("#crust").val());
  var crustName1 = crustName[crust - 1]
  var topping = parseInt($("#topping").val());
  var toppingName1 = toppingName[topping - 1]
  var number = parseInt($("#number").val());

  var size = parseInt($("#size").val());
  var size_price = sizePrice[size - 1]
  // alert(size_price)
  var crust = parseInt($("#crust").val());
  var crust_price = crustPrice[crust - 1]
  // alert(crust_price)
  var topping = parseInt($("#topping").val());
  var topping_price = toppingPrice[topping - 1]
  // alert(topping_price)
  var number = parseInt($("#number").val())
  // alert(number)

  var newCheckamount = new Checkamount(size_price, crust_price, topping_price, number)
  var total = newCheckamount.totalamount()





  if ($("#myTable tbody").length == 0) {
    $("#myTable").append("<tbody></tbody>");
  }
  $("#myTable tbody").append(
    `<tr>
    
    <td>  ${sizeName1}</td>
    <td>  ${crustName1}</td>
    <td>  ${toppingName1}</td>
    <td>  ${number}</td>
    <td class="total"> ${total}</td>
    <td>
    <button type='button' onclick='rowDelete(this);' class='btn btn-default text-danger'>
    <i class='fas fa-trash-alt'></i>
    </button>
    </td>
    </tr>`);

}

function sumTable() {
  var all = 0;
  $(".total").each(function () {
    all += parseFloat($(this).text());
  });
  $('#all').text(all);
}

function deliver() {
  var names = $("#names").val();
  var place1 = $("#place1").val();
  alert(" Thank you " + names + " for visiting pizza-sharks. " + " Your order is en-route to " + place1)

}