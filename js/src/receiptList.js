$(document).ready(function() {
  printReceiptList();
  getReciptButtonClick();
  deleteButtonClick();
  backButtonClick();
});

function printReceiptList(){
  var receiptList = getLocalStorage("receiptList");

  receiptList.forEach(function(receipt) {
        var htmlContext = "";
        htmlContext += "<tr>";
        htmlContext += "<td>" + receipt.time + "</td>";
        htmlContext += "<td>" + receipt.total + "</td>";
        htmlContext += "<td>" + "<button name='getReceipt' " + "data-timeStamp=" + receipt.time + " class='glyphicon glyphicon-gift'>" + "</button>" + "</td>";
        htmlContext += "<td>" + "<button name='deleteReceipt' " + "data-timeStamp=" + receipt.time + " class='glyphicon glyphicon-gift'>" + "</button>" + "</td>";
        htmlContext += "</tr>";
        $("table").append(htmlContext);
  });
}

function backButtonClick() {
  $("[name='back']").click(function() {
    setLocalStorage("tempCarts", []);
    document.location.href = 'list.html';
  });
}

function getReciptButtonClick() {
  $("[name='getReceipt']").click(function() {
    var receiptList = getLocalStorage("receiptList");
    var timeStamp = $(this).attr('data-timeStamp');

    receiptList.forEach(function(receipt) {
      if(receipt.time === parseInt(timeStamp)) {
        setLocalStorage("tempCarts", receipt.carts);
      }
    });
    document.location.href = 'receipt.html';
  });
}

function deleteButtonClick() {
  $("[name='deleteReceipt']").click(function() {
    var receiptList = getLocalStorage('receiptList');
    var timeStamp = $(this).attr('data-timeStamp');

    receiptList.forEach(function(receipt, index) {
      if(receipt.time === parseInt(timeStamp)) {
        receiptList.splice(index, 1);
      }
    });
    setLocalStorage('receiptList', receiptList);
    $(this).parents("tr").remove();
  });
}
