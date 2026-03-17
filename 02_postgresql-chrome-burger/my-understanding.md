PostgreSQL Quick Cheat Sheet

1. กฎพื้นฐานที่ต่างจาก MongoDB

- Semicolon ( ; ): ต้องปิดท้ายทุกคำสั่งเสมอ (สำคัญมาก!)
- Single Quotes ( ' ): ใช้ครอบข้อมูลที่เป็น String/Text เสมอ (ห้ามใช้ " " ครอบข้อมูล)
- Double Quotes ( " ): ใช้เฉพาะเมื่อชื่อ Table หรือ Column มีตัวพิมพ์ใหญ่หรือเว้นวรรค (ปกติไม่ค่อยใช้)
- Case Sensitivity: SQL Keyword (SELECT, FROM) ไม่สนพิมพ์เล็กใหญ่ แต่ ข้อมูลในถัง สนใจนะ!

2. คำสั่งพื้นฐาน (The Big Four: CRUD)
   Action SQL Command เทียบกับ MongoDB
   Create INSERT INTO table (col) VALUES ('val'); db.coll.insertOne()
   Read SELECT \* FROM table WHERE col = 'val'; db.coll.find()
   Update UPDATE table SET col = 'new' WHERE id = 1; db.coll.updateOne()
   Delete DELETE FROM table WHERE id = 1; db.coll.deleteOne()

3. WHERE
   ใช้แทน $match ใน MongoDB ครับ

- ช่วงข้อมูล: WHERE year BETWEEN 1990 AND 2000; (เหมือน $gte และ $lte)
- เลือกหลายค่า: WHERE genre IN ('Drama', 'Comedy'); (เหมือน $in)
- หาคำที่ซ่อนอยู่ (Pattern Matching):
  - WHERE title LIKE 'Ameri%'; (ขึ้นต้นด้วย Ameri เหมือน /^Ameri/)
  - WHERE title ILIKE '%street%'; (มีคำว่า street ไม่สนพิมพ์เล็กใหญ่ เหมือน /street/i)

4. การเรียงและตัดข้อมูล (Sort & Limit)

- เรียง: ORDER BY runtime DESC; (DESC = -1, ASC = 1)
- ตัด: LIMIT 5; (เหมือน $limit)
- ข้าม: OFFSET 10; (ใช้ทำ Pagination ข้ามไปดูหน้าถัดไป)

5. การรวมกลุ่ม (Aggregation)
   ใน SQL เราจะใช้ GROUP BY ร่วมกับ Aggregate Functions ครับ
   SQL

SELECT director, SUM(awards_wins) AS total_wins
FROM movies
WHERE director = 'Hal Roach'
GROUP BY director;

เปรียบเทียบฟังก์ชัน:

- COUNT(\*): นับจำนวนแถว (เหมือน $count)
- SUM(col): ผลรวม (เหมือน $sum)
- AVG(col): ค่าเฉลี่ย (เหมือน $avg)
- MAX/MIN: ค่ามากสุด/น้อยสุด

6. การเชื่อมตาราง (The Power of JOIN)
   นี่คือจุดที่ SQL ต่างจาก MongoDB ชัดเจนที่สุด คือการเอาข้อมูลจากคนละตารางมาแปะกัน
   SQL

SELECT movies.title, directors.name
FROM movies
JOIN directors ON movies.director_id = directors.id;

- INNER JOIN: เอาเฉพาะที่มีข้อมูลตรงกันทั้งสองฝั่ง
- LEFT JOIN: เอาฝั่งซ้ายมาทั้งหมด แม้ฝั่งขวาจะไม่มีข้อมูลคู่กัน

Cheat Code สำหรับ Terminal (psql)
ถ้าต้องใช้ Command Line ในการเช็ค DB:

- \l: List ดูฐานข้อมูลทั้งหมด
- \c db_name: Connect เข้าไปที่ฐานข้อมูล (เหมือน use)
- \dt: Display Tables ดูว่ามีตารางอะไรบ้าง
- \d table_name: ดูโครงสร้าง (Schema) ของตารางนั้นๆ

สรุป:

- MongoDB: เน้นมุด (Dot Notation) และไหลตาม Pipeline
- PostgreSQL: เน้นเลือก (SELECT) จากไหน (FROM) เงื่อนไขอะไร (WHERE) และตบท้ายด้วย ;
