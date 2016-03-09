function init() {
    $.getJSON("data/items.json", function(data){
      setLocalStorage("items", data);
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
    htmlContext += "<td>" + "<button name='addButton' " + "data-itemId=" + item.id + " class='glyphicon glyphicon-plus'>" + "</button>" + "</td>";
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
  var cartNumber = "<div>" + carts.length + "</div>";
  $("[name='cartButton']").html(cartNumber);
  var receiptNumber = "<div>" + receiptList.length + "</div>";
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


function cartButtonClick() {
  $("[name='receiptListButton']").click(function() {
    document.location.href = "receiptList.html";
  });
}

$(document).ready(function() {
  generateListPage();
  addButtonClick();
  cartButtonClick();
});
