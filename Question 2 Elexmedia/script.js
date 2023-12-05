function calculateLoan() {

    var employeeId = document.getElementById('employeeId').value.trim();
    var name = document.getElementById('name').value.trim();
    var address = document.getElementById('address').value.trim();
    var designation = document.getElementById('designation');
    var selectedOption = designation.options[designation.selectedIndex].value;
    var loanAmount = parseFloat(document.getElementById('loanAmount').value);
    var loanDate = new Date(document.getElementById('loanDate').value) ;
    var maturityDate = new Date(document.getElementById('maturityDate').value) ;


    if (employeeId.length < 4 || employeeId.charAt(0).toUpperCase() !== 'E') {
        alert('Employee ID must be at least four characters long and start with the letter "E".');
        return;
    }

    var interestRate = getInterestRateByDesignation(selectedOption);

    var totalTimeInMillisec = maturityDate - loanDate ;
    var totalTime = totalTimeInMillisec / (365 * 24 * 60 * 60 * 1000);

    var interest = (loanAmount * interestRate * totalTime)/100;

    document.getElementById('loanamount').innerText = loanAmount;
    document.getElementById('calculatedInterest').innerText =  interest.toFixed(2);
}
function getInterestRateByDesignation(selectedOption){
    var interestRates = {
        "option1" : 8,
        "option2" : 7,
        "option3" : 6,
        "option4" : 4,

    };

    if(interestRates.hasOwnProperty(selectedOption)){
        return interestRates[selectedOption];
    }
    else{
        return 9 ;
    }
}

