use('sample_mflix'); // บอก Playground ให้เจาะจงไปที่ฐานข้อมูลนี้

// เรียกดูชื่อ field ที่ DB ตั้งไว้ก่อน

db.theaters.aggregate([]);

/*{
  _id: ObjectId('59a47286cfa9a3a73e51e72c'),
  theaterId: NumberInt('1000'),
  location: {
    address: {
      street1: '340 W Market',
      city: 'Bloomington',
      state: 'MN',
      zipcode: '55425'
    },
    geo: {
      type: 'Point',
      coordinates: [
        Double('-93.24565'),
        Double('44.85466')
      ]
    }
  }
} */

// EXERCISE3

//How many theaters does AL state has?

db.theaters.aggregate([{ $match: { "location.address.state": "AL" } },
/*เป็น Nested Object ถ้าเขียนแค่ state: 'AL' เฉยๆ มันจะหาไม่เจอ เพราะ state มันไม่ได้อยู่ชั้นนอกสุด 
แต่มันอยู่ใน address ซึ่งอยู่ใน location อีกทีหนึ่งต้องใช้ dot นำทาง 

ส่วน " " ใช้ด้วยเพราะจะมองเป็นตัวแปรเดียว ถ้าไม่ใส่ คอมจะมุดหาในโค้ด JS แทน 
สรุปคือเป็นตัวแยกว่า "ใครเป็นคนลงมือมุด" ระหว่างฉันและคอมที่เขียน JavaScript กับ MongoDB
ถ้าใช้ " " คอมพิวเตอร์จะส่ง String ก้อนนี้ไปให้ MongoDB แล้ว MongoDB ก็จะไปทำหน้าที่มุดหาใน DB */
{ $count: "total_state_al" }
]);



// How many theaters does La Quinta city has?
db.theaters.aggregate([{ $match: { "location.address.city": "La Quinta" } },
{ $count: "total_theaters_LaQ" }
]);




// What is an example of each documents of above like?
