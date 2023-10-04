const numbersArrayEven = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];


function highlightNumbersEven() {
    
    const elementsWithText = document.querySelectorAll('.number_unit');
    
  
    elementsWithText.forEach((element) => {
        const text = element.textContent;
        
        
        const regex = /\d+/g;
        const matches = text.match(regex);
        
        
        if (matches) {
            matches.forEach((match) => {
                if (numbersArrayEven.includes(parseInt(match, 10))) {
                    
                    element.classList.add('highlighted');
                }
            });
        }
    });
}


const triggerElementEven = document.querySelector('.even');
triggerElementEven.addEventListener('mouseover', highlightNumbersEven);


triggerElementEven.addEventListener('mouseout', () => {
    const highlightNumbersEven = document.querySelectorAll('.highlighted');
    highlightNumbersEven.forEach((element) => {
        element.classList.remove('highlighted');
    });
});
