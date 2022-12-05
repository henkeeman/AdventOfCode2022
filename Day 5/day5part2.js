const { group } = require('console');
const {readFileSync, promises: fsPromises} = require('fs');
function syncReadFile(filename) {
    const arr = readFileSync(filename).toString().split("\n");
    return arr;
}

let cratesfile = syncReadFile("input.txt");

//Det är ren slump att det här fungerar. Jag råkade missa att man bara får lyfta 1 i taget. Vilket betyder att av helt ren chans så fungerar det här hahaha.


let crateStacks = []
for (let i = 0; i < 9; i++) {
    let crateStack = [];
    for (let j = 0; j < 8; j++) {
        crateStack.push(cratesfile[j].charAt(1 + i*4)) 
    }
    crateStacks.push(crateStack);
}

for (let i = 0; i < crateStacks.length; i++)
{
    crateStacks[i] = crateStacks[i].filter(crate => crate != " ")
}

function move(amount, from, to)
{
    from--;
    to--;
    let grabbedCrates = crateStacks[from].splice(0,amount)

    //Det här är det enda som är annorlunda i part 1 och part 2;
    grabbedCrates.reverse();
    // :)
    grabbedCrates.forEach(crate => {
        crateStacks[to].unshift(crate);
    });
}
for (let i = 10; i < cratesfile.length; i++) {
    
    let instructions = cratesfile[i].split(" ");
    let _amount = instructions[1], _from = instructions[3], _to = instructions[5];
    move(_amount, _from, _to);
}

let topCratesString = "";
crateStacks.forEach(stack => {
    topCratesString += stack[0]
});
console.log(topCratesString);