changeMe = data => {

    let today = new Date(), c=0;
    
    data.forEach(el => {
        c++
        let obj = {}; obj.FirstName = el[0], obj.LastName = el[1], obj.Gender = el[2],
            obj.Age = ((!el[3])? 'N/A':today.getFullYear()-el[3])

        console.log(`${c}. ${el[0]} ${el[1]} : `,obj);
    });


}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""