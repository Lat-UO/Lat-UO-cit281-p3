function validDenomination(coin){
return [1,5,10,25,50,100].indexOf(coin) !== -1;
}

function valueFromCoinObject(obj){
const denomination = obj.denom;
const countOfCoins = obj.count;
return denomination*countOfCoins;
}


function valueFromArray(arr){
//extra credit question
   if (Array.isArray(arr[0])){
           arr = arr[0];
   }
   return arr.reduce((accumulator,newObject) => accumulator + valueFromCoinObject(newObject), 0);

   /* let result = 0;
    for (let i = 0; i < arr.length; i++){
            result += valueFromCoinObject(arr[i])
    }
    return result; */
}


function coinCount(...coinage){
    return valueFromArray(coinage);
};

module.exports = {
        coinCount
};

console.log("{}", coinCount({denom: 5, count: 3}));
console.log("{}s", coinCount({denom: 5, count: 3},{denom: 10, count: 2}));
const coins = [{denom: 25, count: 2},{denom: 1, count: 7}];
console.log("...[{}]", coinCount(...coins));
console.log("[{}]", coinCount(coins));  // Extra credit
