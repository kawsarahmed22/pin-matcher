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