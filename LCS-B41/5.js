/**
 * =========================
 * Group Stage Mobile Legend
 * =========================
 *
 * Mobile legend adalah sebuah game moba yang sangat menarik banyak perhatian orang. Banyak team team yang bertanding dalam
 * turnamen untuk merebutkan peringkat team terbaik di Indonesia.
 *
 * Buatlah sebuah fungsi yang akan menentukan klasemen dari group stage turnamen Mobile legend.
 *
 * Rule perhitungan score:
 * - Setiap team akan mendapatkan 3 point  ketika menang daam sebuah pertandingan.
 * - Setiap team akan kehilangan 1 point ketika kalah dalam sebuah pertandingan.
 *
 * Output:
 * Fungsi ini akan mengeluarkan sebuah output berupa objek urutan klasemen setelah melakukan pertandingan. ( Perhatikan driver code )
 *
 * Asumsi:
 *  - Ketika ada lebih dari satu team yang memiliki score yang sama maka urutan pemenang ditentukan oleh posisi team dalam input fungsi yang kita buat.
 *
 *
 * Rules:
 *  - Tidak boleh menggunakan built-in function array. .map, .filter, .reduce, .sort
 */
function groupStage(teams) {

    let [scoreBoard,win,loose,cacheScore] = [{},3,-1,[]];

    const updateScore = (team,status) => {
        for (let x=0;x<cacheScore.length;x++) {
          if (cacheScore[x][0] == team) {
            cacheScore[x][1] += status == 'win' ? win:loose
          }
        }
    }
    const sort = data => {
      let f = 0;
      for (let min=0, i=0;i<data.length-1;i++) {
        if (data[i][1] < data[i+1][1]) {
          min = data[i];data[i] = data[i+1];data[i+1] = min;f++
        }
      }
      return (f==0) ? data:sort(data)
    }
    
    // score template
    for (let c in teams) { cacheScore.push([teams[c].name,0]) }
  
    for (let t in teams) {
      for (let g in teams[t]) {
        for (let m in teams[t].matches) {
          updateScore(teams[t][g],teams[t].matches[m].status)
        }
      }
    }
    
    cacheScore = sort(cacheScore)
    
    // render display
    for (let i=0;i<cacheScore.length;i++) {
      scoreBoard[i+1] = scoreBoard[i+1] || {'team': cacheScore[i][0],'score':cacheScore[i][1]}
      Object.assign(scoreBoard)
    }

    return scoreBoard;
}

var group1 = [
  {
    name: 'Evos',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'win'
      }
    ]
  },
  {
    name: 'RRQ',
    matches: [
      {
        against: 'Evos',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'lose'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'Alter Ego',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'ONIC',
    matches: [
      {
        against: 'RRQ',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'EVOS',
        status: 'lose'
      }
    ]
  }
]
console.log(groupStage(group1))
/**
 * {
 *  '1': {
 *  team: 'EVOS',
 *  score: 9
 * },
 * '2': {
 *  team: 'Alter Ego',
 *  score: 5
 * },
 * '3': {
 *  team: 'Onic',
 *  score: 5
 * },
 * '4': {
 *  team: 'RRQ',
 *  score: -3
 * }
 * }
 */
var group2 = [
  {
    name: 'Evos',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'lose'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'RRQ',
    matches: [
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'win'
      }
    ]
  },
  {
    name: 'Alter Ego',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Evos',
        status: 'win'
      },
      {
        against: 'ONIC',
        status: 'lose'
      }
    ]
  },
  {
    name: 'ONIC',
    matches: [
      {
        against: 'RRQ',
        status: 'lose'
      },
      {
        against: 'Alter Ego',
        status: 'win'
      },
      {
        against: 'EVOS',
        status: 'win'
      }
    ]
  }
]
console.log(groupStage(group2))
/**
 * { '1': { team: 'RRQ', score: 9 },
  '2': { team: 'ONIC', score: 5 },
  '3': { team: 'Alter Ego', score: 1 },
  '4': { team: 'Evos', score: -3 } }
**/