graduates = data => {

    // SHORT VERSION
    // return data.filter(n => n.score > 75).reduce((a,b)=> {

    //     a[b.class] = (a[b.class] || data.filter(cls=> cls.class == b.class && cls.score > 75))
    //     delete b.class;
    //     return a;

    // },{})

    // LONG VERSION

    let obj = {};

    const gradStudents = className => {
        let name = {}, students = [];  
        for (let n in data) {
          if (data[n].class == className && data[n].score > 75) {
            name.name = data[n].name;
            name.score = data[n].score;
            students.push(name)
          }
        }

        return students;
    }

    for (let b in data) {

        if (data[b].score > 75) {
            obj[data[b].class] = gradStudents(data[b].class)
        }

    }

    return obj;

}

console.log(graduates([
    {
      name: 'Dimitri',
      score: 90,
      class: 'foxes'
    },
    {
      name: 'Alexei',
      score: 85,
      class: 'wolves'
    },
    {
      name: 'Sergei',
      score: 74,
      class: 'foxes'
    },
    {
      name: 'Anastasia',
      score: 78,
      class: 'wolves'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Dimitri', score: 90 }
  //   ],
  //   wolves: [
  //     { name: 'Alexei' , score: 85 },
  //     { name: 'Anastasia', score: 78 }
  //   ]
  // }
  
  console.log(graduates([
    {
      name: 'Alexander',
      score: 100,
      class: 'foxes'
    },
    {
      name: 'Alisa',
      score: 76,
      class: 'wolves'
    },
    {
      name: 'Vladimir',
      score: 92,
      class: 'foxes'
    },
    {
      name: 'Albert',
      score: 71,
      class: 'wolves'
    },
    {
      name: 'Viktor',
      score: 80,
      class: 'tigers'
    }
  ]));
  
  // {
  //   foxes: [
  //     { name: 'Alexander', score: 100 },
  //     { name: 'Vladimir', score: 92 }
  //   ],
  //   wolves: [
  //     { name: 'Alisa', score: 76 },
  //   ],
  //   tigers: [
  //     { name: 'Viktor', score: 80 }
  //   ]
  // }
  
  
  console.log(graduates([])); //{}