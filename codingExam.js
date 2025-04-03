const but = document.getElementById("start"); //Assigns html button to but variable using its id.

function startcalc(){
    let loan = window.prompt("Enter loan amount (without commas)"); 
    let percentage = window.prompt("Enter downpayment as percentage of loan amount (do not include percentage symbol)"); //User input for loan/downpayment as percentage.
    downpayment = (0.01*percentage)*loan; //Calaculates downpayment as decimal.
    theywantedmetosubtractitfromthewhole = loan-downpayment;
    loan_years = window.prompt("Enter loan term in years (32 or 15)"); //Prompts user for loan term in years
    if (!(loan_years == 32) && !(loan_years == 15)){
        window.alert("loan years not equal to 32 or 15");
    }
    int_rate = 0.0575
    month_payment = (((int_rate/12)*loan)/(1-Math.pow(1+(int_rate/12), (loan_years*-12)))).toFixed(2);
    console.log(month_payment);
    int_payed = (month_payment * loan_years*12)-loan;
    loan_cost = loan + theywantedmetosubtractitfromthewhole;
    document.getElementById("loan_years").innerHTML = `${loan_years} years`
    document.getElementById("an_rate").innerHTML = `Annual Interest Rate: 5.75%`
    document.getElementById("an_rate").innerHTML = `Monthly Interest Rate: ${(int_rate/12)*100}%`
    document.getElementById("an_rate").innerHTML = `${theywantedmetosubtractitfromthewhole}`
}

but.addEventListener("click",startcalc()); //runs start calc function at click of button
