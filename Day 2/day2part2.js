const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}
let rockpaperfile = syncReadFile("input.txt");

mapOpponentMove = {
    "A": 1,
    "B": 2,
    "C": 3
}
mapResult = {
    "X": 0,
    "Y": 3,
    "Z": 6
}

function checkMove(opponent,result)
{
    
    switch (opponent)
    {
        //Opponent Rock
        case 1:
            if(result == 0)
                return 3;
            else if(result == 3)
                return 1;
            else if(result == 6)
                return 2;
        break;
        //Opponent Paper
        case 2:
            if(result == 0)
                return 1;
            else if(result == 3)
                return 2;
            else if(result == 6)
                return 3;
        break;
        //Opponent Scissor
        case 3:
            if(result == 0)
                return 2;
            else if(result == 3)
                return 3;
            else if(result == 6)
                return 1;
        break;
    }
}

function returnRoundSum(lestring)
{
    let opponent = mapOpponentMove[lestring.charAt(0)];
    let result = mapResult[lestring.charAt(2)];


    if(result == 0)
    {
        return (checkMove(opponent,result))
    }
    else
    {
        return (checkMove(opponent,result) + result)
    }

}

let totalScore = 0;
rockpaperfile.forEach(round => {
    if(round)
    totalScore += returnRoundSum(round);
});
console.log(totalScore);