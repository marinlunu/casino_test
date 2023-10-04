const numbersArray = [0, 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33, 35];


function highlightNumbers() {
    
    const elementsWithText = document.querySelectorAll('.number_unit');
    
  
    elementsWithText.forEach((element) => {
        const text = element.textContent;
        
        
        const regex = /\d+/g;
        const matches = text.match(regex);
        
        
        if (matches) {
            matches.forEach((match) => {
                if (numbersArray.includes(parseInt(match, 10))) {
                    
                    element.classList.add('highlighted');
                }
            });
        }
    });
}


const triggerElement = document.querySelector('.even');
triggerElement.addEventListener('mouseover', highlightNumbers);


triggerElement.addEventListener('mouseout', () => {
    const highlightedNumbers = document.querySelectorAll('.highlighted');
    highlightedNumbers.forEach((element) => {
        element.classList.remove('highlighted');
    });
});
