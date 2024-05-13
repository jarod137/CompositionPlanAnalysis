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
    updateAmortizedValues(total); // Update amortized values
    return total;
}

function calculatePercentage(total) {
    var allowedUnsecured = parseFloat(document.getElementById('allowedUnsecured').value);
    var percentage = (total / allowedUnsecured) * 100;
    document.getElementById('percentageResult').textContent = "Percentage: " + percentage.toFixed(2) + "%";
}

function updateAmortizedValues(total) {
    var sixPercent = total * 0.06;
    var ninePercent = total * 0.09;
    var twelvePercent = total * 0.12;

    document.getElementById('six-percent').textContent = "$" + sixPercent.toFixed(2);
    document.getElementById('nine-percent').textContent = "$" + ninePercent.toFixed(2);
    document.getElementById('twelve-percent').textContent = "$" + twelvePercent.toFixed(2);
}

window.addEventListener('DOMContentLoaded', function() {
    var total = calculateTotal();
    updateAmortizedValues(total);

    // Recalculate and update total, percentage, and amortized values on input change
    var inputFields = document.querySelectorAll('input[type="number"]');
    inputFields.forEach(function(inputField) {
        inputField.addEventListener('input', function() {
            var total = calculateTotal();
        });
    });
});
