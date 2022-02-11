function addRow() {
  var id = document.getElementById("input1").value;
  var name = document.getElementById("input2").value;
  var price = document.getElementById("input3").value;

  var table = document.getElementsByTagName("table")[0];

  var newRow = table.insertRow(table.rows.length / 2 + 1);

  var cel1 = newRow.insertCell(0);
  var cel2 = newRow.insertCell(1);
  var cel3 = newRow.insertCell(2);

  cel1.innerHTML = id;
  cel2.innerHTML = name;
  cel3.innerHTML = price+" USD";
}
