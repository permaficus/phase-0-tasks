highestScore = data => {

    // SHORT VERSION
    // return data.reduce((a,b)=>{
    //     a[b.class] = a[b.class] || data.filter( el =>el.class==b.class)
    //         .reduce((a,b)=> (a.score>b.score)?a:b);
    //     delete b.class;
    //     return a;

    // },{})
    

    // LONG VERSION
    let cache = [], results = {};
    
    for (let i = 0; i < data.length; i++) {
      
      let className = data[i].class;
      (!cache.includes(className)) ? cache.push(className):'';
      
    }
    
    for (let i=0;i< cache.length;i++) {
      
      let obj = {}, highest = 0;

      for (let n=0;n< data.length;n++) {

        if (cache[i] === data[n].class && data[n].score > highest) {
        
            highest = data[n].score;
            obj.name = data[n].name;
            obj.score = data[n].score;
        
        }
        
        results[cache[i]] = obj;
      
      }
    
    }
  
    return results;

}


// TEST CASE
console.log(highestScore([
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
  //   foxes: { name: 'Dimitri', score: 90 },
  //   wolves: { name: 'Alexei', score: 85 }
  // }
  
  
  console.log(highestScore([
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
  //   foxes: { name: 'Alexander', score: 100 },
  //   wolves: { name: 'Alisa', score: 76 },
  //   tigers: { name: 'Viktor', score: 80 }
  // }
  
  
  console.log(highestScore([])); //{}