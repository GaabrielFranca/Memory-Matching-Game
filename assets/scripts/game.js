let game = {

    lockMode: false,
    firstCard: null,
    secundCard: null,

    setCard: function (id) {
        let card = this.cards.filter(card => card.id === id)[0]

        if (card.flipped || this.lockMode) {
            return false
        }
        if (!this.firstCard) {
            this.firstCard = card
            return true
        } else {
            this.secundCard = card
            this.lockMode = true
            return true
        }
    },

    chekMatch: function () {
        return (this.firstCard.icon === this.secundCard.icon)
    },

    clearCards: function () {
        this.firstCard = null
        this.secundCard = null
        this.lockMode = false
    },

    techs: [
        "js",
        "html-5",
        "css",
        "bootstrap",
        "github",
        "database",
        "firebase",
        "node-js",
        "react",
        "typescript"],

    cards: null,


    createCardsFromTechs: function () {
        this.cards = []
        // console.log(this.cards)
        this.techs.forEach((tech) => {
            this.cards.push(this.createPairTechs(tech))
        })

        let cards20 = this.cards.flatMap(pair => pair)
        this.cards = cards20
        this.shuffleCards()

        return this.cards

    }
    ,
    createPairTechs: function (tech) {
        return [{
            id: this.createIDTech(tech),
            icon: tech,
            flipped: false
        }, {
            id: this.createIDTech(tech),
            icon: tech,
            flipped: false
        }]

    }
    ,
    createIDTech: function (tech) {
        return tech + parseInt(Math.random() * 1000)
    }
    ,
    shuffleCards: function (cards) {
        let currentIndex = this.cards.length
        let randomIndex = 0

        while (currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex)

            currentIndex--;

            [this.cards[randomIndex], this.cards[currentIndex]] = [this.cards[currentIndex], this.cards[randomIndex]]
        }
    }

}

