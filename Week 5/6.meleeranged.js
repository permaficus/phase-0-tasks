meleeGrouping = str => {

    if (!str) {return [];}

    str = str.split(',');
    let cache = [];
    str = str.reduce((hero,group) => {

        cache = group.split('-');
        hero[cache[1]] = hero[cache[1]] || [];
        hero[cache[1]].push(cache[0]);
        return hero;

    },{})

    return Object.values(str);

}

// TEST CASE

console.log(meleeGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]
console.log(meleeGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]
console.log(meleeGrouping('')); // []