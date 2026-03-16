
use('sample_mflix'); // บอก Playground ให้เจาะจงไปที่ฐานข้อมูลนี้

// Exercise 1
// โจทย์ต้องการแค่ Filtering ข้อมูล ดังนั้นเครื่องมือหลักที่จะใช้ใน Pipeline คือ $match


// Fetch all documents from comments collection. ไม่ต้องตั้งเงื่อนไขอะไร ไม่มีสเจต แค่โชว์ข้อมูล หรือใส่แค่ Array ว่าง

db.comments.aggregate([]);



// Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”).

db.comments.aggregate([
    { $match: { _id: ObjectId("5a9427648b0beebeb69579f5") } }
]);

// ระวังเครื่องหมาย : ไม่ใช่ = อย่าสับสน และ " " or ' ' ไม่ใช่ตัว “ ที่ไปก้อปจากข้างบนมา 



// Fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.

db.comments.aggregate([
    { $match: { email: "john_bishop@fakegmail.com" } }
]);



// Fetch only one user from comments collection by name = “John Bishop”.

db.comments.aggregate([
    { $match: { name: "John Bishop" } }
]);
