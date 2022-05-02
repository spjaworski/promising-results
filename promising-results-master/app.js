
// slowMath.add(6,2).then((result) => {
//     console.log(result)
//     return slowMath.multiply(result, 2)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.divide(nextResult, 4)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.subtract(nextResult, 3)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.add(nextResult, 98)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.remainder(nextResult, 2)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.multiply(nextResult, 50)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.remainder(nextResult, 40)
// }).then((nextResult) => {
//     console.log(nextResult)
//     return slowMath.add(nextResult, 32)
// }).then((nextResult) => {
//     console.log(`The final result is ${nextResult}.`)
// }).catch(function(err){
//     console.log(err)
// })

async function doMath() {
    try {
        let result = await slowMath.add(6, 2);
        console.log(result);
        result = await slowMath.multiply(result, 2)
        console.log(result)
        result = await slowMath.divide(result, 4)
        console.log(result)
        result = await slowMath.subtract(result, 3)
        console.log(result)
        result = await slowMath.add(result, 98)
        console.log(result)
        result = await slowMath.remainder(result, 2)
        console.log(result)
        result = await slowMath.multiply(result, 50)
        console.log(result)
        result = await slowMath.remainder(result, 40)
        console.log(result)
        result = await slowMath.add(result, 32)
        console.log(result)
    } catch(err) {
        console.log(err);
    }
}

doMath();
