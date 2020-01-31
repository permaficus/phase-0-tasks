animalCatalog = data => {

    return Object.values(data.reduce((group,word)=>{group[word[0]] = (group[word[0]]||[]);
        group[word[0]].push(word);return group;},[]))

}

// TEST CASES
console.log(animalCatalog(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(animalCatalog(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
console.log(animalCatalog(['badak','macan','ulo','cendil', 'cecek', 'buangke','meong']))