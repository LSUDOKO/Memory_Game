document.addEventListener('DOMContentLoaded', () => {
    const cardsArray = [
        { name: 'star', img: 'images/star.png' },
        { name: 'moon', img: 'images/moon.png' },
        { name: 'sun', img: 'images/sun.png' },
        { name: 'cloud', img: 'images/cloud.png' },
        { name: 'rain', img: 'images/rain.png' },
        { name: 'snow', img: 'images/snow.png' },
        { name: 'star', img: 'images/star.png' },
        { name: 'moon', img: 'images/moon.png' },
        { name: 'sun', img: 'images/sun.png' },
        { name: 'cloud', img: 'images/cloud.png' },
        { name: 'rain', img: 'images/rain.png' },
        { name: 'snow', img: 'images/snow.png' }
    ];

    cardsArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const resultDisplay = document.querySelector('#result');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];

    function createBoard() {
        for (let i = 0; i < cardsArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardsChosen.push(cardsArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardsArray[cardId].img);
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (cardsChosen[0] === cardsChosen[1] && optionOneId !== optionTwoId) {
            alert('You found a match');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cardsWon.push(cardsChosen);
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
            alert('Sorry, try again');
        }
        cardsChosen = [];
        cardsChosenId = [];
        resultDisplay.textContent = cardsWon.length;
        if (cardsWon.length === cardsArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found them all!';
        }
    }

    createBoard();
});