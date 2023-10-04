const numbersArrayOdd = [0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36];


function highlightNumbersOdd() {
    
    const elementsWithText = document.querySelectorAll('.number_unit');
    
  
    elementsWithText.forEach((element) => {
        const text = element.textContent;
        
        
        const regex = /\d+/g;
        const matches = text.match(regex);
        
        
        if (matches) {
            matches.forEach((match) => {
                if (numbersArrayOdd.includes(parseInt(match, 10))) {
                    
                    element.classList.add('highlighted');
                }
            });
        }
    });
}


const triggerElementOdd = document.querySelector('.odd');
triggerElementOdd.addEventListener('mouseover', highlightNumbersOdd);


triggerElementOdd.addEventListener('mouseout', () => {
    const highlightNumbersOdd = document.querySelectorAll('.highlighted');
    highlightNumbersOdd.forEach((element) => {
        element.classList.remove('highlighted');
    });
});
