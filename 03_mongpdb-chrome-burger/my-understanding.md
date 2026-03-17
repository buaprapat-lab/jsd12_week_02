MongoDB Quick Cheat Sheet

1. กฎเหล็กของ Syntax (The Syntax Rules)

- ใช้ : ไม่ใช่ =: ใน Query Object เราใช้ JSON format เสมอ เช่น { field: "value" }
- เครื่องหมายคำพูด (" "):
  - ค่าข้อมูล (String): ต้องใส่เสมอ "Drama"
  - ชื่อ Field ปกติ: ไม่ต้องใส่ก็ได้ year: 1990
  - ชื่อ Field ที่มีจุด (Nested): ต้องใส่ "location.address.city"
- Case Sensitive: "American" กับ "american" ไม่เหมือนกัน (ถ้าจะให้เหมือนต้องใช้ Regex i)

2. ตัวดำเนินการเปรียบเทียบ (Comparison Operators)
   ใช้บ่อยที่สุดใน $match หรือ .find()
   | Operator | ความหมาย | ตัวอย่าง |
   | $eq | เท่ากับ (มักละไว้ได้) | { year: 1990 } |
   | $ne | ไม่เท่ากับ | { genre: { $ne: "Horror" } } |
   | $gt / $gte | มากกว่า / มากกว่าหรือเท่ากับ | { runtime: { $gt: 60 } } |
   | $lt / $lte | น้อยกว่า / น้อยกว่าหรือเท่ากับ | { year: { $lte: 2000 } } |
   | $in | มีค่าตรงกับตัวใดตัวหนึ่งใน List | { tag: { $in: ["A", "B"] } } |
   | $all | ต้องมีสมาชิกครบทุกตัวใน Array | { genres: { $all: ["Drama", "History"] } } |

3. Regex (ค้นหาข้อความ)

- รูปแบบ: { field: { $regex: /คำค้น/options } }
- /i: ไม่สนตัวพิมพ์เล็ก-ใหญ่
- ^: ขึ้นต้นด้วย... เช่น /^The/ (หนังที่ชื่อขึ้นต้นด้วย The)
- $: ลงท้ายด้วย... เช่น /street$/
- \.?: มีจุดหรือไม่มีก็ได้ (Escape character)

4. Aggregation Pipeline
   จำไว้ว่า "ลำดับมีผลเสมอ" (Order Matters!) ข้อมูลจะไหลจาก Stage บนลงล่าง
   Stage หน้าที่ Key Point
   $match	กรอง ข้อมูล	ใส่เงื่อนไขเหมือน .find()
$sort เรียง ข้อมูล 1 = น้อยไปมาก, -1 = มากไปน้อย
   $limit	ตัด ข้อมูล	ใส่ตัวเลขจำนวนที่ต้องการ
$count นับ ข้อมูล ใส่ชื่อฟิลด์ใหม่ที่จะเก็บเลข { $count: "total" }
$project เลือก ฟิลด์ที่จะโชว์ 1 = โชว์, 0 = ซ่อน (เช่น ซ่อน \_id)
   $group ยุบ รวมกลุ่ม ต้องมี \_id และใช้ $ นำหน้าฟิลด์เดิมเสมอ
5. เจาะลึก $group (ตัวที่งงที่สุด)

- \_id: null: รวมทุกอย่างเป็นก้อนเดียว (หา Grand Total)
- \_id: "$field": แยกกลุ่มตามฟิลด์นั้นๆ

- สูตรคำนวณในกลุ่ม:
  - $sum: บวกเลข (เช่น ผลรวมรางวัล) หรือนับจำนวนด้วยการ $sum: 1
  - $avg: หาค่าเฉลี่ย
  - $max / $min: หาค่าสูงสุด/ต่ำสุดในกลุ่ม

6. VS Code Hacks for MongoDB

- คอมเมนต์ด่วน: Ctrl + / (ต้องเป็นภาษา English) หรือใช้ /_ ... _/ ครอบ
- เรียกดูโครงสร้าง: db.collection.findOne() เพื่อดูชื่อฟิลด์ก่อนเขียน Query
- เช็ค Database: use('db_name') ไว้บรรทัดแรกเสมอ
