console.log('Guess Who?')
function toggleEliminated(character) {
    character.classList.add('eliminated')
}
let cards = [
    {
        name: 'Sakura',
        image: 'images/characters_01.jpg'
    }, {
        name: 'Kaede',
        image: 'images/characters_02.jpg'
    }, {
        name: 'Aya',
        image: 'images/characters_03.jpg'
    }, {
        name: 'Yuuki',
        image: 'images/characters_04.jpg'
    }, {
        name: 'Mikoto',
        image: 'images/characters_05.jpg'
    }, {
        name: 'Ren',
        image: 'images/characters_06.jpg'
    }, {
        name: 'Ryo',
        image: 'images/characters_07.jpg'
    }, {
        name: 'Yori',
        image: 'images/characters_08.jpg'
    }, {
        name: 'Hana',
        image: 'images/characters_09.jpg'
    }, {
        name: 'Tatsuya',
        image: 'images/characters_10.jpg'
    }, {
        name: 'Taro',
        image: 'images/characters_11.jpg'
    }, {
        name: 'Mai',
        image: 'images/characters_12.jpg'
    }, {
        name: 'Emiko',
        image: 'images/characters_13.jpg'
    }, {
        name: 'Ayumi',
        image: 'images/characters_14.jpg'
    }, {
        name: 'Hotaru',
        image: 'images/characters_15.jpg'
    }, {
        name: 'Haru',
        image: 'images/characters_16.jpg'
    }, {
        name: 'Kazuya',
        image: 'images/characters_17.jpg'
    }, {
        name: 'Akira',
        image: 'images/characters_18.jpg'
    }, {
        name: 'Saki',
        image: 'images/characters_19.jpg'
    }, {
        name: 'Kazuo',
        image: 'images/characters_20.jpg'
    }
]
function populateCards() {
    let cardsElement = document.querySelector('.cards')
    for (let i = 0; i < cards.length; i++) {
        let cardImg = cards[i].image
        let cardName = cards[i].name
        cardsElement.innerHTML = cardsElement.innerHTML + "<div class='card' onclick='toggleEliminated(this)'><img src=" + cardImg + "><span>" + cardName + "</span></div>"
    }
}
populateCards()
function selectRandomCard() {
    let randomNum = Math.round(Math.random() * 19)
    let mysteryCardImage = document.querySelector('.mystery-card-image')
    let mysteryCardName = document.querySelector('.mystery-card-name')
    mysteryCardImage.src = cards[randomNum].image
    mysteryCardName.innerHTML = cards[randomNum].name
}
selectRandomCard()