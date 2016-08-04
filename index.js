$('#calculateBtn').click(function(){
    //getting input values from user
    var balance = parseFloat($('#balance').val());
    var apr = parseFloat($('#apr').val());
    var term = parseFloat($('#term').val());
    var period = $('#period option:selected').text();
    console.log(balance)

    if ((isNaN(balance) ) || (isNaN(apr) ) || (isNaN(term) )) {
        $('#output').text("Please make sure you fill out the fields with only numbers.");
        return;
    }

    //number of payments
    var paymentsNum = term * period;

    //
    var monthlyInterestRate = (apr / 100) / period;

    //
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), paymentsNum);

    //
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    //
    var monthlyPayment = Math.round((balance * interestQuotient) * 100) / 100;

    //Put monthly payment value in a string on page
    $('#output').text("Your monthly payment will be $" + monthlyPayment.toFixed(2));
});