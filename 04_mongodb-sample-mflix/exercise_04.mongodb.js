use("sample_mflix"); // บอก Playground ให้เจาะจงไปที่ฐานข้อมูลนี้

// เรียกดูชื่อ field ที่ DB ตั้งไว้ก่อน

//db.movies.aggregate([]);

//EXERCISE4

//Q1: How many movies mentioned American in their plot?

// db.movies.aggregate([{$match: { plot: { $regex: /American/i }}},
// {$count: "total_american"}]);

/* หาคำที่ซ่อนอยู่ในประโยคยาวๆ ถ้าเขียน " " จะเข้าใจว่าพิมพ์แค่คำเดียวโดดๆ
Regex บอกว่าขอแค่มีคำนี้อยู่ในประโยคก็พอ มีให้เลือกคือ
/American/ = หาคำนี้ตรงไหนก็ได้ในข้อความ
{$regex: /American/i หาแบบไม่สนพิมพ์เล็กใหญ่
*/

//Q2: How many movies does end plot (sentence) with the word street?
/* db.movies.aggregate([
  { $match: { plot: { $regex: /street\.$/i } } },
  { $count: "total_street_end" },
]); */

// db.movies.find({ plot: { $regex: "street.$", $options: "i" } }).count()

/* /\bstreet\b/i  = หา "street" ที่อยู่ใน plot ทั่วไป (ไม่จำเป็นต้องท้ายสุด)
/street$/i อยู่ท้ายสุดตรงๆ
/street\.$/i */

//Q3: What does the data of above examples look like?

db.movies.aggregate([
  { $match: { plot: { $regex: "street.$", $options: "i" } } },
  { $project: { title: 1, plot: 1, _id: 0 } },
]);

// db.movies.find({ plot: { $regex: "street.$", $options: "i" } })

/* /street\.$/i          // แบบ regex literal
"street.$"            // แบบ string ← ใน string ไม่ต้องใส่ \ นำหน้า .
$options: "i"         // case-insensitive แยกออกมา*/
