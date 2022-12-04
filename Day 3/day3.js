const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}
let rucksackfile = syncReadFile("input.txt");
//Fixar blanken i slutet
rucksackfile.pop();

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


let sumValue = 0;
rucksackfile.forEach(rucksack => {
        let commonGround = "";
        let firstCompartment = "";
        let secondCompartment = "";

        for (let i = 0; i < rucksack.length; i++) {
            if(i < (rucksack.length/2))
            {
                firstCompartment += rucksack.charAt(i);
            }
            else
            {
                secondCompartment += rucksack.charAt(i);
            }
            
        }

        for (let i = 0; i < firstCompartment.length; i++) {
            for (let j = 0; j < secondCompartment.length; j++) {
                if(firstCompartment.charAt(i) == secondCompartment.charAt(j))
                {
                    commonGround = firstCompartment.charAt(i);
                }
            }
            
        }
        sumValue += returnValue(commonGround);
    
});

console.log(sumValue);