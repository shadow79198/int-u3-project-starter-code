
cardName = document.querySelector(".nameCard")
informationCard = document.querySelector(".cardInformation")
blueEyes = document.querySelector(".dragon")
spell = document.querySelector(".fusion")
remove = document.querySelector(".cyclone")
Max = document.querySelector(".dragonTwo")
dm = document.querySelector(".enemy")
cardBack = document.querySelector(".backCard")
dragonDed = document.querySelector(".dedDragon")
imageFirst = document.querySelector(".firstImage")
imageSecond = document.querySelector(".secondImage")
check = 0
yay = 0
// move between the pages
advance = document.querySelector(".option-one")
title = document.querySelector(".title")
openingStory = document.querySelector(".story-opening")
attackYours = document.querySelector(".your-attack")
hpEnemy = document.querySelector("#enemyHP")
hpYours = document.querySelector("#yourHP")
screenField = document.querySelector(".field-screen")
instruction = document.querySelector(".instruction")
finish = document.querySelector(".finish")
woah = document.querySelector(".woah")
result = document.querySelector(".result")
credits = document.querySelector(".credits")

// information when you hover each card... funny
blueEyes.addEventListener("mouseover", function() {
    cardName.innerHTML = "Blue Eyes White Dragon"
    informationCard.innerHTML = "This legendary dragon is a powerful engine of destruction. Virtually invincible, very few have faced this awesome creature and lived to tell the tale."
})
blueEyes.addEventListener("mouseout", function() {
    cardName.innerHTML = ""
    informationCard.innerHTML = ""
})
spell.addEventListener("mouseover", function() {
    cardName.innerHTML = "Chaos Form"
    informationCard.innerHTML = 'This card can be used to Ritual Summon any "Chaos" or "Black Luster Soldier" Ritual Monster. You must also Tribute monsters from your hand or field and/or banish "Blue-Eyes White Dragon" or "Dark Magician" from your GY, whose total Levels exactly equal the Level of the "Chaos" or "Black Luster Soldier" Ritual Monster you Ritual Summon.'
})
spell.addEventListener("mouseout", function() {
    cardName.innerHTML = ""
    informationCard.innerHTML = ""
})
remove.addEventListener("mouseover", function() {
    cardName.innerHTML = "Cosmic Cyclone"
    informationCard.innerHTML = "Pay 1000 LP, then target 1 Spell/Trap on the field; banish it."
})
remove.addEventListener("mouseout", function() {
    cardName.innerHTML = ""
    informationCard.innerHTML = ""
})
Max.addEventListener("mouseover", function() {
    cardName.innerHTML = "Blue-Eyes Chaos MAX Dragon"
    informationCard.innerHTML = 'You can Ritual Summon this card with "Chaos Form". Must be Ritual Summoned. Your opponent cannot target this card with card effects, also it cannot be destroyed by your opponent"s card effects. If this card attacks a Defense Position monster, inflict double piercing battle damage to your opponent.'
})
Max.addEventListener("mouseout", function() {
    cardName.innerHTML = ""
    informationCard.innerHTML = ""
})
dm.addEventListener("mouseover", function() {
    cardName.innerHTML = "Dark Magician"
    informationCard.innerHTML = "The ultimate wizard in terms of attack and defense."
})
dm.addEventListener("mouseout", function() {
    cardName.innerHTML = ""
    informationCard.innerHTML = ""
})
console.log(yay)

// code for selecting a card
function winning(){
    informationCard.innerHTML = "You used Cosmic Cyclone on the opponent face down card"
    cardBack.style.opacity = 0
    remove.style.display = "none"
    yay = 1

}
function losing(){
    attackYours.innerHTML = "ATK: 4000"
    if (yay == 1) {
        informationCard.innerHTML = "You use your ritual spell to summon Blue-Eyes Chaos MAX Dragon, in which you use your normal Blue Eyes White Dragon to summon"
    }else{
        informationCard.innerHTML = "You use your ritual spell to summon Blue-Eyes Chaos MAX Dragon, in which you use your normal Blue Eyes White Dragon to summon, but the enemy uses his trap card"
    }
    blueEyes.style.display = "none"
    spell.style.display = "none"
    Max.style.display = "none"
    check = 1
    dragonDed.style.display = "flex"
    dragonDed.style.justifyContent = "center"
    dragonDed.style.marginLeft = "1170px"
}
cardBack.addEventListener("click", function() {
    if (check == 1) {
        hpEnemy.innerHTML = "Enemy HP: 750"
        cardBack.src = "images/God.png"
        cardName.innerHTML = "Solemn Judgement"
        informationCard.innerHTML = "When a monster(s) would be Summoned, OR a Spell/Trap Card is activated: Pay half your LP; negate the Summon or activation, and if you do, destroy that card."
        check = 2
    }
})
dragonDed.addEventListener("click", function() {
    if (check == 2) {
        dragonDed.style.display = "none"
        cardName.innerHTML = ""
        informationCard.innerHTML = "The opponent destroyed your card and the turn ends"
        check = 3
        cardBack.style.display = "none"
        attackYours.innerHTML = "ATK: 0"
    }
})
function defeat(){
    if (check == 3){
        informationCard.innerHTML = "Is the opponent turn and he attacks dirrectly for game"
        cardName.innerHTML = ""
        hpYours.innerHTML = "Your HP: 0"
        hpYours.style.color = "Red"
        finish.style.display = "block"
        console.log(check)
    }
    if (yay == 1){
        informationCard.innerHTML = "You use your monster to attck your opponent monster and win the game"
        hpEnemy.innerHTML = "Enemy HP: 0"
        hpEnemy.style.color = "Red"
        finish.style.display = "block"
    }
}
advance.addEventListener("click", function() {
    title.style.display = "none"
    openingStory.style.display = "none"
    advance.style.display = "none"
    screenField.style.display = "block"
    instruction.style.display = "block"
})
finish.addEventListener("click", function() {
    screenField.style.display = "none"
    instruction.style.display = "none"
    woah.style.display = "block"
    if(check == 3){
        result.innerHTML = "Wow, Imagine losing"
        credits.innerHTML = "Because you lost this game now you lost those $50, on top of that now you don't have money to buy the CD you wanted"
        imageFirst.src = "images/marchPoor.png"
        imageSecond.src= "images/huohuo.png"
    }
    if(yay == 1){
        result.innerHTML = "Woooooooo, You Won"
        credits.innerHTML = "Now you have $100 and You can buy the CD you wanted"
        imageFirst.src = "images/marchMoney.png"
        imageSecond.src = "images/topaz.png"
    }

})
