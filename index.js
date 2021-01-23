var resultfield = $('#result');

function insertNumber(number){
    var existingNumbers = resultfield.val();
    resultfield.val(existingNumbers + number)
}

function clearResult(){
    resultfield.val('')
}

function calculate(){
    var result = eval(resultfield.val())
    resultfield.val(result)
}

function DeleteNumbers(){
    var presentValue =  resultfield.val();
    if (presentValue!=''){
        resultfield.val(presentValue.slice(0,-1));
    }
}
