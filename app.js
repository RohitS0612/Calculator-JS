function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    let currentValue = document.getElementById("display").value;
    document.getElementById("display").value = currentValue.slice(0, -1);
}

function calculate() {
    let expression = document.getElementById("display").value;
    try {
        let total  =  eval(expression);

        if(total == "Infinity"){
            document.getElementById("display").value = `Can't divided by ZERO`;
        }
        else{
            document.getElementById('display').value = total;
        }

    } catch (e) {
        document.getElementById("display").value = "Error";
    }
}
