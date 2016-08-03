$('#calculateBtn').click(function(){
    //getting input values from user
    var balance = $('#balance').val();
    var apr = $('#apr').val();
    var term = $('#term').val();
    var period = $('#period option:selected').text();

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
    $('#output').text("Your monthly payment will be $" + monthlyPayment);
});