$(document).ready(function() {
  generateReceipt();
  clearCart();
  backButtonClick();
});

function generateTable(carts) {
  var items = getLocalStorage("items");

  carts.forEach(function(cart) {
    items.forEach(function(item) {
      if(cart.id === item.id) {
        var htmlContext = "";
        htmlContext += "<tr>";
        htmlContext += "<td>" + item.name + "</td>";
        htmlContext += "<td>" + item.price + "</td>";
        htmlContext += "<td>" + cart.count + "</td>";
        htmlContext += "<td>" + item.price * cart.count + "</td>";
        htmlContext += "</tr>";
        $("table").append(htmlContext);
        total += item.price * cart.count;
      }
    });
  });
}


function generateReceipt() {
  var tempCarts = getLocalStorage("tempCarts");
  var carts = getLocalStorage("carts");
  var items = getLocalStorage("items");
  var receiptList = getLocalStorage("receiptList");
  var myDate = new Date();
  var time = myDate.toGMTString();
  var timeStamp = myDate.getTime();
  var total = 0;

  $("#time").text("时间" + time);
  $("#operator").text("操作员：老司机");

  if(tempCarts.length === 0){
    generateTable(carts);

    receiptList.push({time: timeStamp, total: total, carts: carts});
    setLocalStorage("receiptList", receiptList);
  } else{
    generateTable(tempCarts);
    setLocalStorage("tempCarts", []);
  }
}


function clearCart() {
  setLocalStorage("carts", []);
}

function backButtonClick() {
  $("[name='back']").click(function() {
    document.location.href = 'list.html';
  });
}
