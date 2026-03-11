// Mockup Data
const users = [
    {
        user_id: "U001",
        user_name: "Sato Foster",
        user_email: "sato.foster@doggieclub.com",
        user_address: "101 Bellavue, Seattle",
        role: "customer"
    }
];

const pet = [
    {
        pet_id: "P001",
        user_id: "U001",
        pet_name: "Bobo",
        pet_breed: "Dalmatian",
        pet_age: 7,
        pet_health_goal: "25 years life expectancy"
    }
];

const products = [
    {
        product_id: "PRO01", product_name: "Spirulina Powder", product_price: 60,
        stock_quatity: 17, inStock: true, product_category: "Superfood Boosters"
    },
    {
        product_id: "PRO02", product_name: "Mixed Berry Yogurt", product_price: 25,
        stock_quatity: 25, inStock: true, product_category: "Superfood Boosters"
    },
    {
        product_id: "PRO03", product_name: "Freeze-dried Salmon", product_price: 90,
        stock_quatity: 18, inStock: true, product_category: "High-performance Proteins"
    },
    {
        product_id: "PRO04", product_name: "Jerky Sticks", product_price: 40,
        stock_quatity: 0, inStock: false, product_category: "High-performance Proteins"
    },
    {
        product_id: "PRO05", product_name: "Bone Broth", product_price: 55,
        stock_quatity: 30, inStock: true, product_category: "Vitality Hydration"
    },
];

//Shopping cart
let shoppingCart = [
    { product_id: "PRO01", product_quatity: 2 },
    { product_id: "PRO05", product_quatity: 1 }
];

//Transaction data (simulation)
let order = [
    {
        order_id: "BB-1001",
        user_id: "U001",
        items: shoppingCart, //to connect with the shoppingCart
        total_amount: (60 * 2) + 55,
        status: "pending",
    }
];

// checking

console.log(products); // check all items
console.log(products[1].product_name); // show "mixed berry yogurt"
console.log(shoppingCart); // check all item in the cart: PRO01 and PRO05
console.log(order[0]);
