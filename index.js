// Code your solutions in this file
/*for (let age = 30; age < 40; age++) {
  console.log(`I'm ${age} years old. Happy birthday to me!`);
  debugger;
} */
/*for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old.  Happy birthday to me!`);
    
}*/

/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts); */
/*const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts){
    for (let i = 0; i < gifts.length; i++){
        console.log(`Wrapped ${gifts[i]} and added a bow`);
        
    }

    return gifts;
}
wrapGifts(gifts);*/

/*function writeCards(array, event){
    for (let i = 0; i < array.length; i++){
        const myArray = [];
        myArray.push(`Thank you, ${array[i]}, for the wonderful ${event} gift!`);
        console.log(myArray);
        
    }

}*/

//writeCards(["Alex", "Jenny", "Ted", "Courtney"], "Christmas")

function countDown(i){
    while (i >= 0) {
        console.log(i);
        i--;
    }
}
countDown(50)