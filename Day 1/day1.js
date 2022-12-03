const {readFileSync, promises: fsPromises} = require('fs');

function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}
let caloriesfile = syncReadFile("input.txt");

class Elf{
    constructor()
    {
        this.species = "elf",
        this.totalCal = 0,
        this.tired = true
    }
}
let elfs = [];


let localElf = new Elf()
caloriesfile.forEach(calorie => {
    console.log(calorie)
    
    if(calorie === '')
    {
        elfs.push(localElf);
        localElf = new Elf;
    }
    else
    localElf.totalCal += parseInt(calorie);
    
    
});


console.log(caloriesfile.length)
elfs.sort((a, b) => (b.totalCal - a.totalCal ));
elfs.forEach(elf => {
    console.log(elf)
})
// Day 1 Uppgift 1
console.log(elfs[0].totalCal);
// Day 1 Uppgift 2
console.log(elfs[0].totalCal + elfs[1].totalCal + elfs[2].totalCal);
