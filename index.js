const names  = ["Guadalupe", "Ollie", "Aki"]
const events = 'surprise'

function writeCards(names){
    let newArray = []
    for(let i = 0; i < names.length; i++){
        newArray.push(`Thank you, ${names[i]}, for the wonderful ${events} gift!`)
    }
    return newArray
    
}
function countDown(integer) {
    while (integer >= 0) {
        console.log(integer);
        integer--;
    }
}
countDown(4);


