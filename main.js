let selectedRow = null;

function onFormSubmit(e) {
  event.preventDefault();
  let formData = readFormData();
  if (selectedRow === null) {
    inserNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
function readFormData() {
  let formData = [];
  formData["productName"] = document.getElementById("productName").value;
  formData["productEmail"] = document.getElementById("productEmail").value;
  formData["productPhone"] = document.getElementById("productPhone").value;
  formData["productImag"] = document.getElementById("productImag").value;
  return formData;
}

function inserNewRecord(data) {
  let table = document
    .getElementById("storeList")
    .getElementsByTagName("tbody")[0];
  let newRow = table.insertRow(table.length);
  let cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.prodectName;
  let cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.productEmail;
  let cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.productPhone;
  let cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.productImag;
  let cell5 = newRow.insertCell(4);
  cell5.innerHTML = `<button onClick='onEdit(this)'>Edit</button><button onClick='onDelete(this)'>Delete</button>`;
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("productName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("productEmail").value =
    selectedRow.cells[1].innerHTML;
  document.getElementById("productPhone").value =
    selectedRow.cells[2].innerHTML;
  document.getElementById("productImag").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.prodectName;
  selectedRow.cells[1].innerHTML = formData.productEmail;
  selectedRow.cells[2].innerHTML = formData.productPhone;
  selectedRow.cells[3].innerHTML = formData.productImag;
}

function onDelete(td) {
  console.log(td);
  if (confirm("sfdnfks")) {
    row = td.parentElement.parentElement;
    document.getElementById("storeList").DeleteRow(row.rowIndex);
  }
  resetForm();
}
function resetForm() {
  document.getElementById("productName").value = "";
  document.getElementById("productEmail").value = "";
  document.getElementById("productPhone").value = "";
  document.getElementById("productImag").value = "";
}

// $("body").on("click", ".btn-delete", function () {
//   console.log("delete");
// });
// render;
