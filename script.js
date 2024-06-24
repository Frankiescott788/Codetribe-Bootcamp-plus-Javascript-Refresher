let cards = document.querySelectorAll('.card');
let message = document.getElementById('msg');
let container = document.getElementById('container');
let elements = container.children;
let elementsArray = Array.from(elements);
let clickedCards = [];
let cardElements = [];


cards.forEach(card => { 
    elementsArray.forEach(element => {
        container.appendChild(element)
    })
    shuffle(elementsArray)
    card.addEventListener('click', function() {
        clickedCards.push(this.dataset.alph)
        this.classList.add('flipped');
        this.querySelector('.alphas').classList.add('alphasDisplay');
        cardElements.push(this);
        if(clickedCards.length == 2) {
            if(clickedCards[0] === clickedCards[1]) {
                message.innerHTML = 'Cards matched';
                cardElements[0].classList.add('success');
                cardElements[1].classList.add('success'); 
                console.log(cardElements)
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[0].classList.remove('flipped');
                    cardElements[1].classList.remove('flipped');
                    cardElements[0].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[1].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 4) {
            if(clickedCards[2] === clickedCards[3]) {
                message.innerHTML = 'Cards matched';
                cardElements[2].classList.add('success');
                cardElements[3].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[3].classList.remove('flipped');
                    cardElements[2].classList.remove('flipped');
                    cardElements[2].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[3].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 6) {
            if(clickedCards[4] === clickedCards[5]) {
                message.innerHTML = 'Cards matched';
                cardElements[4].classList.add('success');
                cardElements[5].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[4].classList.remove('flipped');
                    cardElements[5].classList.remove('flipped');
                    cardElements[4].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[5].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 8) {
            if(clickedCards[6] === clickedCards[7]) {
                message.innerHTML = 'Cards matched';
                cardElements[6].classList.add('success');
                cardElements[7].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[6].classList.remove('flipped');
                    cardElements[7].classList.remove('flipped');
                    cardElements[6].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[7].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 10) {
            if(clickedCards[8] === clickedCards[9]) {
                message.innerHTML = 'Cards matched';
                cardElements[8].classList.add('success');
                cardElements[9].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[8].classList.remove('flipped');
                    cardElements[9].classList.remove('flipped');
                    cardElements[8].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[9].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 12) {
            if(clickedCards[10] === clickedCards[11]) {
                message.innerHTML = 'Cards matched';
                cardElements[10].classList.add('success');
                cardElements[11].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[10].classList.remove('flipped');
                    cardElements[11].classList.remove('flipped');
                    cardElements[10].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[11].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 14) {
            if(clickedCards[12] === clickedCards[13]) {
                message.innerHTML = 'Cards matched';
                cardElements[12].classList.add('success');
                cardElements[13].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[12].classList.remove('flipped');
                    cardElements[13].classList.remove('flipped');
                    cardElements[12].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[13].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 16) {
            if(clickedCards[14] === clickedCards[15]) {
                message.innerHTML = 'Cards matched';
                cardElements[14].classList.add('success');
                cardElements[15].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[14].classList.remove('flipped');
                    cardElements[15].classList.remove('flipped');
                    cardElements[14].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[15].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 18) {
            if(clickedCards[16] === clickedCards[17]) {
                message.innerHTML = 'Cards matched';
                cardElements[16].classList.add('success');
                cardElements[17].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[16].classList.remove('flipped');
                    cardElements[17].classList.remove('flipped');
                    cardElements[16].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[17].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 20) {
            if(clickedCards[18] === clickedCards[19]) {
                message.innerHTML = 'Cards matched';
                cardElements[18].classList.add('success');
                cardElements[19].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[18].classList.remove('flipped');
                    cardElements[19].classList.remove('flipped');
                    cardElements[18].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[19].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 22) {
            if(clickedCards[20] === clickedCards[21]) {
                message.innerHTML = 'Cards matched';
                cardElements[20].classList.add('success');
                cardElements[21].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[20].classList.remove('flipped');
                    cardElements[21].classList.remove('flipped');
                    cardElements[20].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[21].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 24) {
            if(clickedCards[22] === clickedCards[23]) {
                message.innerHTML = 'Cards matched';
                cardElements[23].classList.add('success');
                cardElements[22].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[23].classList.remove('flipped');
                    cardElements[22].classList.remove('flipped');
                    cardElements[22].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[23].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
        if(clickedCards.length == 26) {
            if(clickedCards[24] === clickedCards[25]) {
                message.innerHTML = 'Cards matched';
                cardElements[24].classList.add('success');
                cardElements[25].classList.add('success');              
            } else {
                message.innerHTML = 'Cards did not match'
                setTimeout(() => {
                    cardElements[24].classList.remove('flipped');
                    cardElements[25].classList.remove('flipped');
                    cardElements[24].querySelector('.alphas').classList.remove('alphasDisplay');
                    cardElements[25].querySelector('.alphas').classList.remove('alphasDisplay');

                }, 2000)
            }
        }
    })
})
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]
    }
};
