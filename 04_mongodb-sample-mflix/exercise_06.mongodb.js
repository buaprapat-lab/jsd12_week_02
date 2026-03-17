use("sample_mflix");

// db.movies.aggregate([]);

//Q1 Find all movies in the "movies" collection released between 1950 and 1970 (inclusive) that are documented as being shown in countries located in the USA.
//$match ร่วมกับเงื่อนไขช่วงตัวเลข และการเช็คค่าใน Array
/* db.movies.aggregate([
  { 
    $match: { 
      year: { $gte: 1950, $lte: 1970 },
      countries: "USA" 
    } 
  }
]);*/

//Q2 What is the number of movies in the "movies" collection with genres "Drama" and "History" released after the year 1970?
// ต้องการทั้ง Drama และ History ต้องมีคู่ + ใช้ $all ระบุว่าต้องมีสมาชิกทุกตัวที่กำหนดอยู่ใน Array

/* db.movies.aggregate([
  { 
    $match: { 
      genres: { $all: ["Drama", "History"] },
      year: { $gt: 1970 }
    } 
  },
  { $count: "total_drama_history" }
]); */

//Q3 In how many films is Roy L. McCardell credited as an actor?
// Actor อยู่ในฟิลด์ cast

/* db.movies.aggregate([
  { $match: { cast: "Roy L. McCardell" } },
  { $count: "total_films" }
]); */

//Q4 How many movies did Hal Roach directed?
/* db.movies.aggregate([
  { $match: { directors: "Hal Roach" } },
  { $count: "total_directed_by_hal" }
]); */

//Q5 What is the movie with the earliest release year directed by Hal Roach?

/* db.movies.aggregate([
  { $match: { directors: "Hal Roach" } },
  { $sort: { year: 1 } }, // 1 คือ น้อยไปมาก (เก่าไปใหม่)
  { $limit: 1 }
]); */

//Q6 How many awards did Hal Roach’s movies win?
/* มุดเข้าไปใน Object awards แล้วหาฟิลด์ wins
ผลรวมของรางวัลทั้งหมด ไม่ใช่แค่นับจำนวนเรื่อง ใข้ $group
ใน $group เวลาจะอ้างอิงฟิลด์จากข้อมูลเดิม 
ต้องใส่เครื่องหมาย $ นำหน้าชื่อฟิลด์เสมอ เช่น "$awards.wins" 
_id: null คือการบอก MongoDB ว่า "ไม่ต้องแบ่งกลุ่มนะ เอาข้อมูลทั้งหมดที่ผ่าน $match มา มัดรวมกันเป็นก้อนเดียวเลย"
แล้วสั่งให้มัน $sum รางวัลจากทุกเรื่องเข้าด้วยกัน
ต้องมี _id: เพราะเป็นไวยากรณ์ (Syntax) บังคับของ $group
กรณีอื่นที่สั่งเลย ถ้าสั่ง _id: "$color": แยกเหรียญทองไว้กองนึง เหรียญเงินไว้กองนึง (แบ่งกลุ่มตามสี)
คนละ _id นะ เป็นกฎว่าผลลัพธ์ที่ออกมาจาก $group "ต้องมีฟิลด์ระบุตัวตน (Unique Identifier) เสมอ"
และคือคำว่า _id เท่านีั้น (ในที่นี้คือป้ายชื่อหน้ากล่อง ที่เราเอาของไปรวมกัน) */

db.movies.aggregate([
  { $match: { directors: "Hal Roach" } },
  {
    $group: {
      _id: null,
      total_wins: { $sum: "$awards.wins" },
    },
  },
]);
