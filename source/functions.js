var sha256 = require('sha256');
var shuffleSeed = require('shuffle-seed');

const shuffle = (clientSeed, serverSeed, nonce) =>{

  var shuffleHash = sha256(sha256(clientSeed)+sha256(serverSeed)+nonce);

  var deck = [];
  for(var i = 0; i < 6; i++){
    for(var j = 1; j <= 52; j++){
      deck.push(j)
    }
  }
  var shuffledDeck = shuffleSeed.shuffle(deck,shuffleHash);

  return shuffledDeck;

}
const numberToCardString = (cardNumber) =>{
  suit = "";
  face = "";
  if(cardNumber >= 1 && cardNumber <= 13){
    suit = "Spades"
  }
  if(cardNumber > 13 && cardNumber <= 26){
    suit = "Hearts"
  }
  if(cardNumber > 26 && cardNumber <= 39){
    suit = "Clubs"
  }
  if(cardNumber > 39 && cardNumber <= 52){
    suit = "Diamonds"
  }

  if(cardNumber == 13 || cardNumber == 26 || cardNumber == 39 || cardNumber == 52) {
    face = "A"
  }
  else {
    if(cardNumber == 12 || cardNumber == 25 || cardNumber == 38 || cardNumber == 51) {
      face = "K"
    }
    else {
      if(cardNumber == 11 || cardNumber == 24 || cardNumber == 37 || cardNumber == 50) {
        face = "Q"
      }
      else {
        if(cardNumber == 10 || cardNumber == 23 || cardNumber == 36 || cardNumber == 49) {
          face = "J"
        }
        else {
          face = (cardNumber%13)+1;
        }
      }
    }
  }
  

  return(`${face} of ${suit}`)
}

exports.shuffle = shuffle;
exports.numberToCardString = numberToCardString;
