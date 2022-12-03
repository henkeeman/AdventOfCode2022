const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}
let rockpaperfile = syncReadFile("input.txt");

mapping = {
    "A": 1,
    "B": 2,
    "C": 3,
    
    "X": 1,
    "Y": 2,
    "Z": 3
}

function returnRoundSum(lestring)
{
    let winValue = 6;
    let drawValue = 3;
    let winsum = 0;
    let opponent = mapping[lestring.charAt(0)];
    let me = mapping[lestring.charAt(2)];

    // console.log(opponent - me);

    if((opponent - me) == -1)
        winsum += winValue//6;;
    else if((opponent - me) == 2)
        winsum += winValue//6;
    else if((opponent == me))
        winsum += (drawValue)//3;
    // console.log(winsum + me);
    return (winsum + me);
}


let totalScore = 0;
rockpaperfile.forEach(round => {
    if(round)
    totalScore += returnRoundSum(round);
});
console.log(totalScore);