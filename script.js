function calculateTotal() {
    var planProposes = parseFloat(document.getElementById('planProposes').value);
    var months = parseInt(document.getElementById('months').value);
    var totalPayout = planProposes * months;
    var trustee = totalPayout * 0.1;
    var availableForPlan = totalPayout - trustee;
    var attorneysFees = parseFloat(document.getElementById('attorneysFees').value);
    var courtCosts = parseFloat(document.getElementById('courtCosts').value);
    var trusteeSetUpFee = parseFloat(document.getElementById('trusteeSetUpFee').value);
    var priorityClaims = parseFloat(document.getElementById('priorityClaims').value);
    var allowedSecuredClaims = parseFloat(document.getElementById('allowedSecuredClaims').value);
    var subTotal = attorneysFees + courtCosts + trusteeSetUpFee + priorityClaims + allowedSecuredClaims;
    var total = availableForPlan - subTotal;
    document.getElementById('totalResult').textContent = "Total: $" + total.toFixed(2);
    calculatePercentage(total); // Update percentage with the updated total
    return total;
}

function calculatePercentage(total) {
    var allowedUnsecured = parseFloat(document.getElementById('allowedUnsecured').value);
    var percentage = (total / allowedUnsecured) * 100;
    document.getElementById('percentageResult').textContent = "Percentage: " + percentage.toFixed(2) + "%";
    return percentage;
}

// Add event listeners to all input fields
var inputFields = document.querySelectorAll('input[type="number"]');
inputFields.forEach(function(inputField) {
    inputField.addEventListener('input', function() {
        var total = calculateTotal(); // Update total
        calculatePercentage(total); // Update percentage
    });
});

calculateTotal(); // Initial calculation
