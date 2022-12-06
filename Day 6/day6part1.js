const { group } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const text = readFileSync(filename).toString()
    return text;
}
let signalfile = syncReadFile("input.txt");



let cache = [];
firstVal = 0;
//Behöver bara ändra den här för part 2
let distinctChars = 14;
function checkCache(_letter, iIndex)
{
    cache.unshift(_letter);
    cache.forEach((letter, index) => {
        if(_letter == letter && index != 0)
        {
            cache.splice(index, cache.length - index)
        }
        else if(index != 0 && cache.length > distinctChars)
        {
            if(firstVal == 0)
            {
                cache.shift()
                // gör det mer readable
                console.log(cache.reverse())
                firstVal = iIndex;
            }
        }
    });
    
    // console.log(cache);
    return false;
}
index = 0;
for (let i = 0; i < signalfile.length; i++) {
    currentLetter = signalfile.charAt(i);
    checkCache(currentLetter, i);
}
console.log(firstVal);
