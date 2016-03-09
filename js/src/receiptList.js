$(document).ready(function() {
  printReceiptList();
  backButtonClick();
});

function printReceiptList(){
  var items = getLocalStorage("items");
  var receiptList = getLocalStorage("receiptList");

  receiptList.forEach(function(receipt) {
    var total = 0;
    items.forEach(function(item) {
      if(receipt.id === item.id) {
        var htmlContext = "";
        htmlContext += "<div class='container'><div class='row'><div class='col-xs-12'>"
        htmlContext += "<table>";
        htmlContext += "<tr><th>名称</th><th>单价</th><th>数量</th><th>总价</th></tr>";
        htmlContext += "<tr>";
        htmlContext += "<td>" + item.name + "</td>";
        htmlContext += "<td>" + item.price + "</td>";
        htmlContext += "<td>" + receipt.count + "</td>";
        htmlContext += "<td>" + receipt.subtotal + "</td>";
        htmlContext += "</tr>";
        htmlContext += "</table>";
        htmlContext += "</div></div></div>";
        $(".container").append(htmlContext);
        total += receipt.subtotal;

      }
    });
  });
  $("#total").text(total);
}

function backButtonClick() {
  $("[name='back']").click(function() {
    document.location.href = 'list.html';
  });
}
