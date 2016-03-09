$(document).ready(function() {
  generateCart();
  deleteButtonClick();
  updateNumber();
  checkOutClick();
  backButtonClick();
});

function generateCart() {
  var items = getLocalStorage("items");
  var carts = getLocalStorage("carts");

  carts.forEach(function(cart) {
    items.forEach(function(item) {
      if(cart.id === item.id) {
        var htmlContext = "";
        htmlContext += "<tr>";
        htmlContext += "<td>" + item.name + "</td>";
        htmlContext += "<td>" + item.price + "</td>";
        htmlContext += "<td>" + cart.count + "</td>";
        htmlContext += "<td>" + item.price * cart.count + "</td>";
        htmlContext += "<td>" + "<input type='text' name='deleteButton' " + "data-itemId=" + item.id +  "</td>";
        htmlContext += "<td>" + "<button name='deleteButton' " + "data-itemId=" + item.id + " class='glyphicon glyphicon-remove'>" + "</button>" + "</td>";
        htmlContext += "</tr>";
        $("table").append(htmlContext);
      }
    });
  });
}

function deleteButtonClick() {
  $("[name='deleteButton']").click(function() {
    var carts = getLocalStorage('carts');
    var id = $(this).attr("data-itemId");
    carts.forEach(function(cart, index) {
      if(id === cart.id) {
        carts.splice(index, 1);
      }
    });
    setLocalStorage("carts", carts);
    $(this).parents("tr").remove();
  });
}
