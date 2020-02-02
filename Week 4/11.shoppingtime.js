shopping = (member,money) => {

    if (!member || member.length==0 || money < 50000) { 
        return "Either you're not a member or you dont have enough money";}

    const products = {
        'Sepatu Stacattu':1500000,
        'Baju Zoro':500000,
        'Baju brand H&N':250000,
        'Sweater Uniklooh':175000,
        'Casing Handphone':50000
    }
    let am = money, 
    avp = Object.keys(products).map((a)=> ( am - products[a] < 0) ? am - products[a] : am -= products[a])
        .filter((b)=> b >= 0);

    let cart = [...Array(avp.length)].map((_,x)=> {
        return Object.keys(products).filter((a)=> products[a]==((x > 0) ? (avp[x-1] - avp[x]):money-avp[x])).toString();
    })

    let sc = {};
    sc.ID = member;
    sc.Money = money;
    sc.Cart = cart;
    sc.Change = avp.pop();

    return sc;

}

console.log(shopping('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shopping('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shopping()); ////Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shopping('jkasdiofsd93', 2475000));
console.log(shopping('234JdhweRx', 75000));
console.log(shopping('id-9394usn384', 2150000));