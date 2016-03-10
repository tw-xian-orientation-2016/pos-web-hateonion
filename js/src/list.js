
function init() {
    $.getJSON("data/items.json", function(data){
      setLocalStorage("items", data);
      setLocalStorage("tempCarts", []);
      setLocalStorage("carts", []);
      setLocalStorage("receiptList", []);
      generatePage();
      addButtonClick();
      updateNumber();
    });
}

function generatePage() {
  var items = getLocalStorage("items");
  items.forEach(function(item) {
    var htmlContext = "";
    htmlContext += "<tr>";
    htmlContext += "<td>" + item.name + "</td>";
    htmlContext += "<td>" + item.price + "/" + item.unit;
    htmlContext += "<td>" + "<button name='addButton' data-toggle='tooltip' title='添加商品' " + "data-itemId=" + item.id + " class='btn btn-default glyphicon glyphicon-plus'>" + "</button>" + "</td>";
    htmlContext += "</tr>";
    $("table").append(htmlContext);
    updateNumber();
  });
}

function generateListPage() {
  if(!localStorage.items){
    init();
  } else{
    generatePage();
  }
}

function updateNumber() {
  var receiptList = getLocalStorage("receiptList");
  var carts = getLocalStorage("carts");
  var number= 0;
  carts.forEach(function(cart) {
    number += cart.count;
  });
  var cartNumber = "<div class='shouNumber'>" + number + "</div>";
  $("[name='cartButton']").html(cartNumber);
  var receiptNumber = "<div class='shouNumber'>" + receiptList.length + "</div>";
  $("[name='receiptListButton']").html(receiptNumber);
}

function addButtonClick() {
  $("[name='addButton']").click(function() {
    var id = $(this).attr("data-itemId");
    var carts = getLocalStorage("carts");
    var index;
    carts.forEach(function(cart, currentIndex) {
      if(cart.id === id) {
        index = currentIndex;
      }
    });
    if(index === undefined) {
      carts.push({"id" : id, "count" : 1});
    } else {
      carts[index].count++;
    }
    setLocalStorage("carts", carts);
    updateNumber();
  });
}

function cartButtonClick() {
  $("[name='cartButton']").click(function() {
    document.location.href = "cart.html";
  });
}

function hoverEffect() {
  $('[data-toggle="tooltip"]').tooltip();
}

function receiptListButtonClick() {
  $("[name='receiptListButton']").click(function() {
    document.location.href = "receiptList.html";
  });
}

$(document).ready(function() {
  generateListPage();
  addButtonClick();
  hoverEffect();
  cartButtonClick();
  receiptListButtonClick();
});
