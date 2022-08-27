import ancientsData from '../data/ancients.js'

const ancientCards = document.querySelectorAll('.ancient__card');
const difficulties = document.querySelectorAll('.difficulty__item')
const firstStage = document.querySelector('#firstStage');
const secondStage = document.querySelector('#secondStage');
const thirdStage = document.querySelector('#thirdStage');
let deck = [];

for (let ancientCard of ancientCards) {
    ancientCard.addEventListener('click', chooseAncientCard);
}

function chooseAncientCard(event) {
    for (let ancientCard of ancientCards) {
        ancientCard.classList.remove('active');
    }
    event.target.classList.add('active');
    for (let ancientData of ancientsData) {
        if (event.target.id === ancientData.id) {
            createTable(firstStage, ancientData.firstStage);
            createTable(secondStage, ancientData.secondStage);
            createTable(thirdStage, ancientData.thirdStage);
        }
    }
}

for (let difficulty of difficulties) {
    difficulty.addEventListener('click', chooseDifficulty);
}

function chooseDifficulty(event) {
    for (let difficulty of difficulties) {
        difficulty.classList.remove('active');
    }
    event.target.classList.add('active');
    if (event.target.id === 'baby') {

    }
}

function createTable(stage, color) {
    const lis = document.querySelectorAll(`#${stage.id} li`);
    for (let li of lis) {
        li.remove();
    }
    for (let countCards in color) {
        const li = document.createElement('li');
        stage.append(li);
        li.textContent = color[countCards];
        li.classList.add(`${countCards}`)
    }
}







