$('#calculateBtn').click(function(){
    //getting input values from user
    var balance = parseFloat($('#balance').val());
    var apr = parseFloat($('#apr').val());
    var term = parseFloat($('#term').val());
    var period = $('#period').val();
    console.log(period)


    if ((isNaN(balance) ) || (isNaN(apr) ) || (isNaN(term) )) {
        $('#output').text("Please make sure you fill out the fields with only numbers.");
        return;
    }

    //number of payments
    var paymentsNum = term * period;

    //turns the APR into a proper percentage, then divides by the (bi)monthly period
    var monthlyInterestRate = (apr / 100) / period;

    //raises the interest rate+1 by the paymentsNum
    var compoundedInterestRate = Math.pow((1 + monthlyInterestRate), paymentsNum);

    //more math I could barely follow
    var interestQuotient  = (monthlyInterestRate * compoundedInterestRate) / (compoundedInterestRate - 1);

    //Making number integer, but could still have float due to dividing by 100
    var monthlyPayment = Math.round((balance * interestQuotient) * 100) / 100;

    //Put monthly payment value in a string on page, and making sure all results have two decimal places
    $('#output').text("Your monthly payment will be $" + monthlyPayment.toFixed(2));
});