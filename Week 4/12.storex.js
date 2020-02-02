countProfit = data => {
    const stockCard = [ ['Sepatu Stacattu', 1500000, 10],
                    ['Baju Zoro', 500000, 2],
                    ['Sweater Uniklooh', 175000, 1]
                  ];
    
    if (data.length==0) {return []}

    return [...Array(stockCard.length)].map((_,b)=> {

        let cache = {}, 
        orderQty = data.map(el=> {return (el.product == stockCard[b][0]) ? el.amount:0}).filter(n=>n>0)
        sumQty = orderQty.reduce((a,b)=> a+b,0), 
        eligibleQty = (sumQty > stockCard[b][2]) ? orderQty[0]:sumQty,
        stock = (eligibleQty > 0) ? stockCard[b][2] - eligibleQty:-1;

        cache.Product = stockCard[b][0];

        cache.Shoppers = (stock >= 0) ? data.map(el => {return (el.product == stockCard[b][0]) ? el.name:''})
          .filter(name=>name!==''): [];

        cache.leftOver = (stock < 0) ? stockCard[b][2]:stock;
        cache.Profit = (stock < 0) ? 0:stockCard[b][1] * eligibleQty;
        return cache;
    
    })


}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]
console.log('\n ---------- NEW LINE -----------\n')
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log('\n ---------- NEW LINE -----------\n')
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log('\n ---------- NEW LINE -----------\n')
console.log(countProfit([])); //[]