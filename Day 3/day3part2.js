const { group } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}
let rucksackfile = syncReadFile("input.txt");
//Fixar blanken i slutet
rucksackfile.pop();
console.log(rucksackfile.length) 

function sortIntoGroups()
{
    let group = []
    TempGroup = [];
    for (let i = 0; i < rucksackfile.length; i+=3) {
        for (let j = 0; j < 3; j++) {
    
            TempGroup.push(rucksackfile[i+j])
            
        }
        group.push(TempGroup);
        TempGroup = [];
    }
    return group;
}
console.log(sortIntoGroups()[0][0])

function returnValue(char){

    if(char == char.toLowerCase())
    {
        return char.charCodeAt(0) - 96;
    }
    else
    {
        return char.charCodeAt(0) - 38;
    }
    
}

let groupOfSacks = sortIntoGroups()
let sumValue = 0;
groupOfSacks.forEach(rucksack => {
    let commonGround = "";
    let firstCompartment = rucksack[0];
    let secondCompartment = rucksack[1];
    let thirdCompartment = rucksack[2];

    for (let i = 0; i < firstCompartment.length; i++) {
        for (let j = 0; j < secondCompartment.length; j++) {
            for (let k = 0; k < thirdCompartment.length; k++) {
                if(firstCompartment.charAt(i) == secondCompartment.charAt(j) && firstCompartment.charAt(i) == thirdCompartment.charAt(k))
                {
                    commonGround = firstCompartment.charAt(i);
                }
            }
        }
        
    }
    sumValue += returnValue(commonGround);

});
console.log(sumValue)