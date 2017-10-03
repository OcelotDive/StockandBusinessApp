
let displayCounter = 0;
let currencyCounter = 0;
function expand() {
    displayCounter++
    if (displayCounter % 2 === 0) {
        
    $('.commoditiesContainer').animate({height: '0%'}, 500);
   
        
        
}
    else { 
        $('.commoditiesContainer').animate({height: '20%'}, 500);
      
        
                
    }
}

function expandCurrencies() {
    currencyCounter++
    if (currencyCounter % 2 === 0) {
        
    $('.exchangeRateContainer').animate({height: '0%'}, 500);
   
        
        
}
    else { 
        $('.exchangeRateContainer').animate({height: '30%'}, 500);
      
        
                
    }
}