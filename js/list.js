$(document).ready(function() {
  if(localStorage.initTimes) {
    localStorage.initTimes++;
  } else{
    localStorage.setItem("initTimes", "1");
  }
  if(localStorage.initTimes === '1'){
    $.getJSON("data/items.json", function(data){
      localStorage.setItem("items", JSON.stringify(data));
      localStorage.setItem("carts", "[]");
      localStorage.setItem("receiptList", "[]");
      data.forEach(function(item) {
        var htmlContext = "";
        htmlContext += "<tr>";
        htmlContext += "<td>" + item.name + "</td>";
        htmlContext += "<td>" + "<button name='addButton' " + "data-itemId=" + item.id + " class='glyphicon glyphicon-plus'>" + "</button>" + "</td>";
        $("table").append(htmlContext);
      });
      var cartNumber = "<p>" + JSON.parse(localStorage.carts).length + "</p>";
      var receiptNumber = "<p>" + JSON.parse(localStorage.receiptList).length + "</p>";
      $("[name='cartButton']").append(cartNumber);
      $("[name='receiptListButton']").append(receiptNumber);
    });
  } else{
    var items = JSON.parse(localStorage.items);
    items.forEach(function(item) {
        var htmlContext = "";
        htmlContext += "<tr>";
        htmlContext += "<td>" + item.name + "</td>";
        htmlContext += "<td>" + "<button name='addButton' " + "data-itemId=" + item.id + " class='glyphicon glyphicon-plus'>" + "</button>" + "</td>";
        $("table").append(htmlContext);
    });
    var cartNumber = "<p>" + JSON.parse(localStorage.carts).length + "</p>";
    var receiptNumber = "<p>" + JSON.parse(localStorage.receiptList).length + "</p>";
    $("[name='cartButton']").append(cartNumber);
    $("[name='receiptListButton']").append(receiptNumber);
  }
});

