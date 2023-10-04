
function highlightElements() {
  
    const elements = document.querySelectorAll('.black_unit');
    

    const selectedColorStyle = getComputedStyle(document.querySelector('.black_unit'));
    

    const selectedColor = selectedColorStyle.color;
    

    elements.forEach((element) => {
        const elementStyle = getComputedStyle(element);
        const elementColor = elementStyle.color;

      
        if (elementColor === selectedColor) {
            
            element.classList.add('highlighted');
        }

    });

    
}
function highlightElementsRed() {
    const elements = document.querySelectorAll('.red_unit');
    
    const selectedColorStyle = getComputedStyle(document.querySelector('.red_unit'));
    
    const selectedColor = selectedColorStyle.color;
    
    elements.forEach((element) => {
        const elementStyle = getComputedStyle(element);
        const elementColor = elementStyle.color;

      
        if (elementColor === selectedColor) {
            element.classList.add('highlighted');
        }

    });

    
}


const targetElement = document.querySelector('.allred');
const targetElementRed = document.querySelector('.allblack');


targetElement.addEventListener('mouseover', highlightElements);
targetElementRed.addEventListener('mouseover', highlightElementsRed);

targetElement.addEventListener('mouseout', () => {
    const highlightedElements = document.querySelectorAll('.highlighted');
    highlightedElements.forEach((element) => {
        element.classList.remove('highlighted');
    });
});

targetElementRed.addEventListener('mouseout', () => {
    const highlightedElementsRed = document.querySelectorAll('.highlighted');
    highlightedElementsRed.forEach((element) => {
        element.classList.remove('highlighted');
    });
});





const numbersArray = [0, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];


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


const triggerElement = document.querySelector('.one18');
triggerElement.addEventListener('mouseover', highlightNumbers);


triggerElement.addEventListener('mouseout', () => {
    const highlightedNumbers = document.querySelectorAll('.highlighted');
    highlightedNumbers.forEach((element) => {
        element.classList.remove('highlighted');
    });
});



const numbersArray2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

// functia de cautare
function highlightNumbers2() {
    // primim toate elemntele de pe html in format text
    const elementsWithText2 = document.querySelectorAll('.number_unit');
    
    // trecem prin fiecare element in chizda mati
    elementsWithText2.forEach((element) => {
        const text = element.textContent;
        
        // huita care am gait pe net, pentru a filtra cifrele
        const regex = /\d+/g;
        const matches = text.match(regex);
        
        // daca am gasit cifre blea
        if (matches) {
            matches.forEach((match) => {
                if (numbersArray2.includes(parseInt(match, 10))) {
                    // daca am gasit cifra o scoatem din vazut
                    element.classList.add('highlighted');
                }
            });
        }
    });
}

const triggerElementN = document.querySelector('.ninetrent');
triggerElementN.addEventListener('mouseover', highlightNumbers2);


triggerElementN.addEventListener('mouseout', () => {
    const highlightedNumbers2 = document.querySelectorAll('.highlighted');
    highlightedNumbers2.forEach((element) => {
        element.classList.remove('highlighted');
    });
});