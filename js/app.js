document.getElementById('generate-pin').addEventListener('click', function(){

    function getPin(){
        const pin = Math.round(Math.random()*10000);
        const pinString = pin + '';
        if(pinString.length == 4){
            return pin;
        }
        else {
            return getPin();
        }
    }

        const pin = getPin()

    document.getElementById('input-pin').value = pin;

})



document.getElementById('key-pad').addEventListener('click', function(event){
    const number = event.target.innerText
    const prevCalcInput = document.getElementById('calcInput')
    if(isNaN(number)){
        if(number == 'C'){
            prevCalcInput.value = '';
        }
    }
    else{
        
        const prevCalcInputNumber = prevCalcInput.value;
        const newCalkInputNumber = prevCalcInputNumber + number;
        prevCalcInput.value = newCalkInputNumber;
    }

})


document.getElementById('submit').addEventListener('click', function(){
    
        const pin = document.getElementById('input-pin').value;
        const typedNumbers = document.getElementById('calcInput').value;
        const successMassage = document.getElementById('notify-success');
        const failError = document.getElementById('notify-fail');
        if (pin == typedNumbers) {
            
            successMassage.style.display = 'block';
            failError.style.display = 'none';
        }
        else {
            
            failError.style.display = 'block';
            successMassage.style.display = 'none';
        }


})