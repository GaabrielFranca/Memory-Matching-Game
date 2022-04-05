const front = "card_front"
const back = "card_back"
const CARD = "card"
const ICON = "icon"
let techs = [
    "js",
    "html-5",
    "css",
    "bootstrap",
    "github",
    "database",
    "firebase",
    "node-js",
    "react",
    "typescript"]




let cards = null

startGame()

function startGame() {
    cards = createCardsFromTechs(techs)
    shuffleCards(cards)
    console.log(cards)

    inicializeCards(cards)


}

function inicializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard")

    cards.forEach(card => {

        let cardElement = document.createElement("div")
        cardElement.id = card.id;
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)

        cardElement.addEventListener("click", flipCard)
        gameBoard.appendChild(cardElement)

    })
}

function createCardContent(card, cardElement) {
    createCardFace(front, card, cardElement)
    createCardFace(back, card, cardElement)
}

function createCardFace(face, card, element) {
    let cardElementFace = document.createElement("div")
    cardElementFace.classList.add(face)

    if (face === front) {
        let iconElement = document.createElement("img")
        iconElement.classList.add(ICON)
        iconElement.src = src = "./assets/images/" + card.icon + ".png"
        cardElementFace.appendChild(iconElement)
    } else {
        cardElementFace.innerHTML = "&lt;/&gt"
    }

    element.appendChild(cardElementFace);
}


function shuffleCards(cards) {
    let currentIndex = cards.length
    let randomIndex = 0

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)

        currentIndex--;

        [cards[randomIndex], cards[currentIndex]] = [cards[currentIndex], cards[randomIndex]]
    }


}

function createCardsFromTechs(techs) {
    let cards = []

    techs.forEach((tech) => {
        cards.push(createPairTechs(tech))
    })

    let cards20 = cards.flatMap(pair => pair)
    console.log(cards20)
    return cards20


}

function createPairTechs(tech) {
    return [{
        id: createIDTech(tech),
        icon: tech,
        flipped: false
    }, {
        id: createIDTech(tech),
        icon: tech,
        flipped: false
    }]
}

function createIDTech(tech) {
    return tech + parseInt(Math.random() * 1000)
}

// createCardsFromTechs(techs)


function flipCard() {
    this.classList.add("flip")
}