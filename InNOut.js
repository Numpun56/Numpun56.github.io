document.getElementById("Confirm").onclick = function() {
    var Income = parseFloat(document.getElementById("Income").value);
    var Outcome = parseFloat(document.getElementById("Outcome").value);
    
    if (isNaN(Income) || isNaN(Outcome)) {
        alert("Please enter valid numbers for Income and Outcome.");
        return;
    }

    let result = Totoll(Income, Outcome);

    document.getElementById("Totoll").textContent = result + "฿";
};

function Totoll(Income, Outcome) {
    return Income - Outcome;
}

function GetValueInDate() {
    // This function is currently empty. You can add functionality as needed.
}