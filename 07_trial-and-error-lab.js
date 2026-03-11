// Mockup Data
const users = [
    {
        user_id: "U001",
        user_name: "Sato Foster",
        user_email: "sato.foster@doggieclub.com",
        user_address: "101 Bellavue, Seattle",
        role: "customer"
    },
    {
        user_id: "U002",
        user_name: "Megumi Yui",
        user_email: "Megumi.y@doggieclub.com",
        user_address: "87-501 Shibuya, Tokyo",
        role: "customer"
    },
    {
        user_id: "U003",
        user_name: "Biscuit",
        user_email: "biscuit.thedal@doggieclub.com",
        user_address: "The Rainbow Bridge, Milky Way, Universe",
        role: "admin"
    },
];

const pet = [
    {
        pet_id: "P001",
        user_id: "U001",
        pet_name: "Bobo",
        pet_breed: "Dalmatian",
        pet_age: 7,
        pet_health_goal: "25 years life expectancy"
    },
    {
        pet_id: "P002",
        user_id: "U002",
        pet_name: "Conan",
        pet_breed: "Golden Retriever",
        pet_age: 3,
        pet_health_goal: "Frisbee forever"
    },
    {
        pet_id: "P003",
        user_id: "U002",
        pet_name: "Cocoa",
        pet_breed: "Weimaraner",
        pet_age: 1.5,
        pet_health_goal: "Grow old with baby face."
    },
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

// scenario 1: check if stock available?

function addToCart(product_id, product_quantity) //กำหนด func addtoCart โดยใช้ข้อมูล 2 อย่างคือ product id, quantity
{
    const product = products.find(item => item.product_id === product_id); //กำหนดตัวแปรให้ไปหา product ในหมวด products  มา สินค้าที่หยิบขึ้นมาดูแต่ละตัวเรียก item สร้างเงื่อนไขว่าถ้า item ==> (เอาไปเช็คเงื่อนไข) แล้วตรงกับ product_id ที่กรอกค่าลงไปจะต้อง..
    if (!product) return "We do not have this item."; // ! = ไม่ ถ้าไม่มี product ในระบบ ชื่อไม่ตรง
    if (!product.inStock || product.stock_quatity < product_quantity) { return `Sorry, there is only ${product.stock_quatity} ${product.product_name} in stock.`; }
    return `Added ${product.product_name} in the cart.`; // เงื่อนไข ${}
}

console.log(addToCart("PRO04", 1)); // ลอง Jerky Stick ที่ stock = 0
console.log(addToCart("PRO02", 14));

// scenario: calculate total