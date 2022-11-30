console.log("hi")
function myForm() {

    let selectedRow = null

    function onFormSubmit(event) {
        event.preventDefault();
            let formData = readFormData();
            if (selectedRow == null){
                insertNewRecord(formData);
            }
            else{
                updateRecord(formData);
            }
            resetForm();
    };

    //Retrieve the data
    function readFormData() {
        let formData = {};
        formData["name"] = document.getElementById("name").value;
        formData["productNumber"] = document.getElementById("productNumber").value;
        formData["color"] = document.getElementById("color").value;
        formData["standartCost"] = document.getElementById("standartCost").value;
        formData["listPrice"] = document.getElementById("listPrice").value;
        formData["size"] = document.getElementById("size").value;
        formData["weight"] = document.getElementById("weight").value;
        formData["date"] = document.getElementById("date").value;

        return formData;
    };

    //Insert the data
    function insertNewRecord(data) {
        let table = document.getElementById("storeList").getElementsByTagName('tbody')[0];
        let newRow = table.insertRow(table.length);
        cell1 = newRow.insertCell(0);
            cell1.innerHTML = data.name;
        cell2 = newRow.insertCell(1);
            cell2.innerHTML = data.productNumber;
        cell3 = newRow.insertCell(2);
            cell3.innerHTML = data.color;
        cell4 = newRow.insertCell(3);
            cell4.innerHTML = data.standartCost;
        cell4 = newRow.insertCell(4);
            cell1.innerHTML = data.listPrice;
        cell5 = newRow.insertCell(5);
            cell2.innerHTML = data.size;
        cell6 = newRow.insertCell(6);
            cell3.innerHTML = data.weight;
        cell7 = newRow.insertCell(7);
            cell4.innerHTML = data.date;
        cell8 = newRow.insertCell(8);
            cell8.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick="onDelete(this)">Delete</button>`;
    }
    //Edit the data
    function onEdit(td) {
        selectedRow = td.parentElement.parentElement;
        document.getElementById("name").value = selectedRow.cells[0].innerHTML;
        document.getElementById("productNumber").value = selectedRow.cells[1].innerHTML;
        document.getElementById("color").value = selectedRow.cells[2].innerHTML;
        document.getElementById("standartCost").value = selectedRow.cells[3].innerHTML;
        document.getElementById("listPrice").value = selectedRow.cells[4].innerHTML;
        document.getElementById("size").value = selectedRow.cells[5].innerHTML;
        document.getElementById("weight").value = selectedRow.cells[6].innerHTML;
        document.getElementById("date").value = selectedRow.cells[7].innerHTML;
    }
    function updateRecord(formData) {
        selectedRow.cells[0].innerHTML = formData.name;
        selectedRow.cells[1].innerHTML = formData.productNumber;
        selectedRow.cells[2].innerHTML = formData.color;
        selectedRow.cells[3].innerHTML = formData.standartCost;
        selectedRow.cells[4].innerHTML = formData.listPrice;
        selectedRow.cells[5].innerHTML = formData.size;
        selectedRow.cells[6].innerHTML = formData.weight;
        selectedRow.cells[7].innerHTML = formData.date;
    }

    //Delete the data
    function onDelete(td) {
        if (confirm('Do you want to delete this record?')) {
            row = td.parentElement.parentElement;
            document.getElementById('storeList').deleteRow(row.rowIndex);
            resetForm();
        }
    }
    //Reset the data
    function resetForm() {
        document.getElementById("productCode").value = '';
        document.getElementById("product").value = '';
        document.getElementById("qty").value = '';
        document.getElementById("perPrice").value = '';
        selectedRow = null;
    }

 onFormSubmit();
 onEdit();
 onDelete();
 console.log("hi2")
 };
