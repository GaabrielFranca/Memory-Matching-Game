const front = "card_front"
const back = "card_back"
const CARD = "card"
const ICON = "icon"



function startGame() {

    inicializeCards(game.createCardsFromTechs())
}


function inicializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard")

    game.cards.forEach(card => {

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


function flipCard() {

    if (game.setCard(this.id)) {
        this.classList.add("flip")
        if (game.chekMatch()) {
            game.clearCards()
        } else {

            setTimeout(() => {

                let firstCardView = document.getElementById(game.firstCard.id)
                let secundCardView = document.getElementById(game.secundCard.id)

                firstCardView.classList.remove("flip")
                secundCardView.classList.remove("flip")

                game.clearCards()
            }, 1000)
        }
    };





}

startGame()