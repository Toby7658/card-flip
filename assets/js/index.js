const canvas = document.getElementById("canvas");

/** list of cards to be displayed */
let cardGame = () => [{
        name: "bunny",
        img: "assets/img/bunny.png"
    },
    {
        name: "bunny",
        img: "assets/img/bunny.png"
    },
    {
        name: "purple",
        img: "assets/img/purple.png"
    },
    {
        name: "purple",
        img: "assets/img/purple.png"
    },
    {
        name: "fox",
        img: "assets/img/fox.png"
    },
    {
        name: "fox",
        img: "assets/img/fox.png"
    },
    {
        name: "grey",
        img: "assets/img/grey.png"
    },
    {
        name: "grey",
        img: "assets/img/grey.png"
    },
    {
        name: "sonic",
        img: "assets/img/sonic.png"
    },
    {
        name: "sonic",
        img: "assets/img/sonic.png"
    },
    {
        name: "red",
        img: "assets/img/red.png"
    },
    {
        name: "red",
        img: "assets/img/red.png"
    },
    {
        name: "eggman",
        img: "assets/img/eggman.png"
    },
    {
        name: "eggman",
        img: "assets/img/eggman.png"
    },
    {
        name: "yellow",
        img: "assets/img/yellow.png"
    },
    {
        name: "yellow",
        img: "assets/img/yellow.png"
    },
];

/** comment here */
let randomize = () => {
    let cardDisplay = cardGame();
    //randomize the array from animalCards variable: //
    cardDisplay.sort(() => Math.random() - 0.5);
    return cardDisplay;
};

randomize();

/** canvas */
let gameboard = () => {
   let cardDisplay = randomize();}