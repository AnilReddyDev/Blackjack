let player = { 
    Name : inputname(),
    Chips : 500
} 
function inputname(){
    return prompt('Enter Name Here');
}
let cards = []
let sum = 0;
let hasBlackJack = undefined;
let isAlive = undefined;
let message =  ""
let messageEl = document.getElementById("message-el")
// let sumEl =  document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


let playerEl = document.querySelector("#player-el")

playerEl.textContent = player.Name + ": Ⓒ" + (player.Chips)



function getRandomCards(){
    let randomnumberresult = (Math.floor((Math.random() * 13) + 1)) 
    if(randomnumberresult === 1){
        return 11
    }else if(randomnumberresult > 10 ){
        return 10
    }else{
        return randomnumberresult
    }
}

function startGame(){
    isAlive = true
    hasBlackJack = false
    let firstcard = getRandomCards();
    let secondcard = getRandomCards();
    cards = [firstcard,secondcard]
    sum = firstcard + secondcard;
    renderGame()
}

function renderGame(){
    cardsEl.textContent = "Cards: "
    for(let i=0; i<cards.length; i+=1){
        cardsEl.textContent +=cards[i] + " "
    }
    sumEl.textContent = "Sum: " + sum;
    if(sum <= 20 ){
        message = "Draw a new card?"
    }else if(sum === 21){
        message = "you have got Blackjack!"
        hasBlackJack = true;
        update()
        playerEl.textContent = player.Name + ": Ⓒ" + (player.Chips)
    }else{
        message = "You are out of the game!"
        isAlive = false;
        update()
        playerEl.textContent = player.Name + ": Ⓒ" + (player.Chips)
    }
    messageEl.textContent = message;
}
function newCard(){
    if(isAlive=== true && hasBlackJack===false){
        let card = getRandomCards();
        sum += card
        cards.push(card)
        renderGame()

    }
}
function update(){
    if(isAlive===false && player.Chips>0){
        player.Chips -= 10
    }else if(hasBlackJack === true){
        player.Chips +=60
    }else{
        player.Chips = 0
    }
}