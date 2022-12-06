const { group } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}
let sectionsfile = syncReadFile("input.txt");
//fixar det tomma elementet i botten
sectionsfile.pop();

// console.log(sectionsfile[0])

class Section{
    constructor(_aStart,_aEnd,_bStart,_bEnd)
    {
        this.aStart = _aStart,
        this.aEnd = _aEnd,
        this.bStart = _bStart,
        this.bEnd = _bEnd
    }
}

function checkIfCointained(aStart, aEnd, bStart, bEnd, inverse)
{
    // console.log(aStart,aEnd,bStart,bEnd,inverse);
    if(aStart <= bStart && aEnd>=bEnd)
        return 1;
    else if(bStart <= aStart && bEnd>=aEnd && inverse == true)
        return 1;
    else 
    return 0;

}
function checkIfOverlapping(aStart, aEnd, bStart, bEnd, inverse = false)
{
    if(!inverse)
    {
        if(aStart <= bStart && aEnd >= bStart)
        {
            return 1;
        }
        else if(aStart <= bEnd && aEnd >= bEnd)
        {
            return 1;
        }
        else 
        return 0;
    }
    else
    {
        if(bStart <= aStart && bEnd >= aStart)
        {
            return 1;
        }
        else if(bStart <= aEnd && bEnd >= aEnd)
        {
            return 1;
        }
        else 
        return 0;
    }
    
}

let sortedSections = [];
sectionsfile.forEach(section => {
   
   console.log(section.split(","));
   let splitSection = section.split(",")
  
   let sectionNrs0 = splitSection[0].split("-")
   let sectionNrs1 = splitSection[1].split("-")

   let _aStart = parseInt(sectionNrs0[0]), _aEnd = parseInt(sectionNrs0[1]), _bStart = parseInt(sectionNrs1[0]), _bEnd = parseInt(sectionNrs1[1]);
   let localSection = new Section(_aStart,_aEnd,_bStart,_bEnd);
   sortedSections.push(localSection);
});

// console.log(sortedSections)
let totalContainedSections = 0;
sortedSections.forEach(section => {
    if(checkIfOverlapping(section.aStart, section.aEnd, section.bStart, section.bEnd, false))
        totalContainedSections += checkIfOverlapping(section.aStart, section.aEnd, section.bStart, section.bEnd, false)
    else if(checkIfOverlapping(section.aStart, section.aEnd, section.bStart, section.bEnd, true))
        totalContainedSections += checkIfOverlapping(section.aStart, section.aEnd, section.bStart, section.bEnd, true)
});

console.log(totalContainedSections);
