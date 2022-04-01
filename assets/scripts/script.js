const front = "card_front"
const back = "card_back"

let techs = [
    "js",
    "html",
    "css",
    "bootstrap",
    "github",
    "database",
    "firebase",
    "node-js",
    "react",
    "typescript"]

function createCardsFromTechs(techs) {
    let cards = []

    for (let tech of techs) {
        cards.push(createPairTechs(tech))
    }
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

createCardsFromTechs(techs)
