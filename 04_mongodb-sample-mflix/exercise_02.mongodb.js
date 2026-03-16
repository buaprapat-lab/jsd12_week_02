
use('sample_mflix'); // บอก Playground ให้เจาะจงไปที่ฐานข้อมูลนี้

// เรียกดูชื่อ field ที่ DB ตั้งไว้ก่อน

// db.movies.aggregate([]);

// EXERCISE 2


//What is an example of  type “movie” and rated “TV-G” look like?

db.movies.aggregate([{ $match: { type: "movie", rated: "TV-G" } }]);



//How many movies are there in “movie” type and “TV-G” rated?
db.movies.aggregate([
    { $match: { type: "movie", rated: "TV-G" } },
    { $count: "total_tv_g_movies" }]);

/* ตั้งชื่อใหม่มาเลยคือ total.. เอาไว้เก็บผลรวม แต่ทำไมเขียนต่อแบบนี้ได้นะ
คนละลำดับขั้นกับ type, rate คือเป็น stage
stage 1: $match คือ Condition คัดกรอง
- stage 2: $count พอผ่านด่านแรกมาได้ก็มานับจำนวน คือ Action/Transformation */
