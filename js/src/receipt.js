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
      }
    });
  });
}

function countTotal(carts) {
  var items = getLocalStorage("items");
  var total = 0;

  carts.forEach(function(cart) {
    items.forEach(function(item) {
      if(cart.id === item.id) {
        total += item.price * cart.count;
      }
    });
  });
  return total;
}

function getGMTtime() {
  var myDate = new Date();
  var time = myDate.toGMTString();
  return time;
}

function getTimeStamp() {
  var myDate = new Date();
  var timeStamp = myDate.getTime();
  return timeStamp;
}

function printTimeAndOperator() {
  var time = getGMTtime();
  $("#time").text("时间" + time);
  $("#operator").text("操作员：老司机");
}

function printDetail() {
  var tempCarts = getLocalStorage("tempCarts");
  var carts = getLocalStorage("carts");
  var items = getLocalStorage("items");
  var receiptList = getLocalStorage("receiptList");
  var timeStamp = getTimeStamp();

  if(tempCarts.length === 0){
    generateTable(carts);
    var total = countTotal(carts);
    receiptList.push({time: timeStamp, total: total, carts: carts});
    setLocalStorage("receiptList", receiptList);
  } else{
    generateTable(tempCarts);
    setLocalStorage("tempCarts", []);
  }
}

function generateReceipt() {

  printTimeAndOperator();
  printDetail();

}


function clearCart() {
  setLocalStorage("carts", []);
}

function backButtonClick() {
  $("[name='back']").click(function() {
    document.location.href = 'list.html';
  });
}

$(document).ready(function() {
  generateReceipt();
  clearCart();
  backButtonClick();
});

