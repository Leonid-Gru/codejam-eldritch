import ancientsData from '../data/ancients.js'
import cardsDataBrown from '../data/mythicCards/brown/index.js'
import cardsDataGreen from '../data/mythicCards/green/index.js'
import cardsDataBlue from '../data/mythicCards/blue/index.js'

const ancientCards = document.querySelectorAll('.ancient__card');
const difficulty = document.querySelector('.difficulty');
const difficulties = document.querySelectorAll('.difficulty__item');
const firstStage = document.querySelector('#firstStage');
const secondStage = document.querySelector('#secondStage');
const thirdStage = document.querySelector('#thirdStage');
const buttonShuffle = document.querySelector('.deck__shuffle');
const deckCards = document.querySelector('.deck__cards');
const cardsBack = document.querySelector('.deck__back');
const stageTitleFirst = document.querySelector('.stages__title--first');
const stageTitleSecond = document.querySelector('.stages__title--second');
const stageTitleThird = document.querySelector('.stages__title--third');
let deck = {};
let brown = [];
let green = [];
let blue = [];

for (let ancientCard of ancientCards) {
    ancientCard.addEventListener('click', chooseAncientCard);
}

function chooseAncientCard(event) {
    for (let ancientCard of ancientCards) {
        ancientCard.classList.remove('active');
    }
    event.target.classList.add('active');
    difficulty.style.display = 'block';
    deckCards.style.display = 'none';
    stageTitleFirst.style.textDecoration = 'none';
    stageTitleThird.style.textDecoration = 'none';
    stageTitleSecond.style.textDecoration = 'none';
    buttonShuffle.addEventListener('click', () => {
        deleteImg();
        deckCards.style.display = 'flex';
        buttonShuffle.style.display = 'none';
        for (let ancientData of ancientsData) {
            if (event.target.id === ancientData.id) {
                createDeck(firstStage, ancientData.firstStage);
                createDeck(secondStage, ancientData.secondStage);
                createDeck(thirdStage, ancientData.thirdStage);
            }
        }
    });
}

cardsBack.addEventListener('click', () => {
    deleteImg();
    const img = document.createElement('img');
    img.classList.add('deck__img');
    deckCards.append(img);
    if (deck.firstStage.length !== 0) {
        img.src = `../assets/MythicCards/${deck.firstStage[0].match(/[a-z]+/g)[0]}/${deck.firstStage[0]}.png`;
        if (deck.firstStage[0].includes('green')) {
            const firstStageGreen = document.querySelector('#firstStage .greenCards');
            firstStageGreen.textContent = firstStageGreen.textContent - 1;
        } else if (deck.firstStage[0].includes('brown')) {
            const firstStageBrown = document.querySelector('#firstStage .brownCards');
            firstStageBrown.textContent = firstStageBrown.textContent - 1;
        } else {
            const firstStageBlue = document.querySelector('#firstStage .blueCards');
            firstStageBlue.textContent = firstStageBlue.textContent - 1;
        }
        deck.firstStage.shift(deck.firstStage[0]);
    } else {
        stageTitleFirst.style.textDecoration = 'line-through';
        if (deck.secondStage.length !== 0) {
            img.src = `../assets/MythicCards/${deck.secondStage[0].match(/[a-z]+/g)[0]}/${deck.secondStage[0]}.png`;
            if (deck.secondStage[0].includes('green')) {
                const secondStageGreen = document.querySelector('#secondStage .greenCards');
                secondStageGreen.textContent = secondStageGreen.textContent - 1;
            } else if (deck.secondStage[0].includes('brown')) {
                const secondStageBrown = document.querySelector('#secondStage .brownCards');
                secondStageBrown.textContent = secondStageBrown.textContent - 1;
            } else {
                const secondStageBlue = document.querySelector('#secondStage .blueCards');
                secondStageBlue.textContent = secondStageBlue.textContent - 1;
            }
            deck.secondStage.shift(deck.secondStage[0]);
        } else {
            stageTitleSecond.style.textDecoration = 'line-through';
            if (deck.thirdStage.length !== 0) {
                img.src = `../assets/MythicCards/${deck.thirdStage[0].match(/[a-z]+/g)[0]}/${deck.thirdStage[0]}.png`;
                if (deck.thirdStage[0].includes('green')) {
                    const thirdStageGreen = document.querySelector('#thirdStage .greenCards');
                    thirdStageGreen.textContent = thirdStageGreen.textContent - 1;
                } else if (deck.thirdStage[0].includes('brown')) {
                    const thirdStageBrown = document.querySelector('#thirdStage .brownCards');
                    thirdStageBrown.textContent = thirdStageBrown.textContent - 1;
                } else {
                    const thirdStageBlue = document.querySelector('#thirdStage .blueCards');
                    thirdStageBlue.textContent = thirdStageBlue.textContent - 1;
                }
                deck.thirdStage.shift(deck.thirdStage[0]);
            } else {
                stageTitleThird.style.textDecoration = 'line-through';
            }
        }
    }
});

for (let difficulty of difficulties) {
    difficulty.addEventListener('click', chooseDifficulty);
}

function chooseDifficulty(event) {
    brown = [];
    green = [];
    blue = [];
    for (let difficulty of difficulties) {
        difficulty.classList.remove('active');
    }
    event.target.classList.add('active');
    buttonShuffle.style.display = 'flex';
    deckCards.style.display = 'none';
    stageTitleFirst.style.textDecoration = 'none';
    stageTitleThird.style.textDecoration = 'none';
    stageTitleSecond.style.textDecoration = 'none';
    if (event.target.id === 'easy') {
        for (let card of cardsDataBrown) {
            if (card.difficulty !== 'hard') {
                brown.push(card)
            }
        }
        for (let card of cardsDataGreen) {
            if (card.difficulty !== 'hard') {
                green.push(card)
            }
        }
        for (let card of cardsDataBlue) {
            if (card.difficulty !== 'hard') {
                blue.push(card)
            }
        }
    } else if (event.target.id === 'hard') {
        for (let card of cardsDataBrown) {
            if (card.difficulty !== 'easy') {
                brown.push(card)
            }
        }
        for (let card of cardsDataGreen) {
            if (card.difficulty !== 'easy') {
                green.push(card)
            }
        }
        for (let card of cardsDataBlue) {
            if (card.difficulty !== 'easy') {
                blue.push(card)
            }
        }
    } else if (event.target.id === 'normal') {
        brown = cardsDataBrown
        green = cardsDataGreen
        blue = cardsDataBlue
    } else if (event.target.id === 'baby') {
        for (let card of cardsDataBrown) {
            if (card.difficulty !== 'normal' && card.difficulty !== 'hard') {
                brown.push(card)
            }
            if (brown.length <= 9) {
                for (let card of cardsDataBrown) {
                    if (card.difficulty !== 'easy' && card.difficulty !== 'hard') {
                        brown.push(card)
                    }
                }
            }
        }
        for (let card of cardsDataGreen) {
            if (card.difficulty !== 'normal' && card.difficulty !== 'hard') {
                green.push(card)
            }
            if (brown.length <= 6) {
                for (let card of cardsDataBrown) {
                    if (card.difficulty !== 'easy' && card.difficulty !== 'hard') {
                        brown.push(card)
                    }
                }
            }
        }
        for (let card of cardsDataBlue) {
            if (card.difficulty !== 'normal' && card.difficulty !== 'hard') {
                blue.push(card)
            }
        }
    } else if (event.target.id === 'nightmare') {
        for (let card of cardsDataBrown) {
            if (card.difficulty !== 'normal' && card.difficulty !== 'easy') {
                brown.push(card);
            }
            if (brown.length <= 9) {
                for (let card of cardsDataBrown) {
                    if (card.difficulty !== 'easy' && card.difficulty !== 'hard') {
                        brown.push(card);
                    }
                }
            }
        }
        for (let card of cardsDataGreen) {
            if (card.difficulty !== 'normal' && card.difficulty !== 'easy') {
                green.push(card);
            }
            if (brown.length <= 6) {
                for (let card of cardsDataBrown) {
                    if (card.difficulty !== 'easy' && card.difficulty !== 'hard') {
                        brown.push(card);
                    }
                }
            }
        }
        for (let card of cardsDataBlue) {
            if (card.difficulty !== 'normal' && card.difficulty !== 'easy') {
                blue.push(card);
            }
        }
    }
}

function createDeck(stage, color) {
    const lis = document.querySelectorAll(`#${stage.id} li`);
    let arr = [];
    for (let li of lis) {
        li.remove();
    }
    for (let countCards in color) {
        const li = document.createElement('li');
        stage.append(li);
        li.textContent = color[countCards];
        li.classList.add(`${countCards}`);
        let numb;
        for (let i = 0; i < color[countCards]; i++) {
            if (li.classList[0].includes('brown')) {
                numb = getRandomNumber(brown);
                if (!arr.includes(numb.id)) {
                    arr.push(numb.id);
                } else {
                    i--;
                }
            } else if (li.classList[0].includes('blue')) {
                numb = getRandomNumber(blue);
                if (!arr.includes(numb.id)) {
                    arr.push(numb.id);
                } else {
                    i--;
                }
            } else if (li.classList[0].includes('green')) {
                numb = getRandomNumber(green);
                if (!arr.includes(numb.id)) {
                    arr.push(numb.id);
                } else {
                    i--;
                }
            }
        }
        shuffle(arr);
        deck[stage.id] = arr;
    }
}

function getRandomNumber(card) {
    return card[Math.floor(Math.random() * card.length)]
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function deleteImg() {
    const imgs = document.querySelectorAll('.deck__img');
    for (let img of imgs) {
        img.remove();
    }
}




