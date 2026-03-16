use('sample_mflix'); // บอก Playground ให้เจาะจงไปที่ฐานข้อมูลนี้

// เรียกดูชื่อ field ที่ DB ตั้งไว้ก่อน

//db.embedded_movies.aggregate([]);

//EXERCISE4 

//How many movies mentioned American in their plot?
/*
db.embedded_movies.aggregate([{$match: { plot: { $regex: /American/i }}},
{$count: "total_american"}]);
*/

/* หาคำที่ซ่อนอยู่ในประโยคยาวๆ ถ้าเขียน " " จะเข้าใจว่าพิมพ์แค่คำเดียวโดดๆ
Regex บอกว่าขอแค่มีคำนี้อยู่ในประโยคก็พอ มีให้เลือกคือ
/American/ = หาคำนี้ตรงไหนก็ได้ในข้อความ
{$regex: /American/i หาแบบไม่สนพิมพ์เล็กใหญ่
*/

//How many movies does end plot (sentence) with the word street?
db.embedded_movies.aggregate([{ $match: { plot: { $regex: /street$/i } } },
{ $count: "total_street_end" }]);

/* $ ท้ายคำคือต้องจบด้วยคำนี้เท่านั้น
ถ้าใน plot มีจุอ full stop ปิดท่้าย ..street. ต้อวใช้ /street.$/
ยังแก้ไม่เสดดดดดด */


//What does the data of above examples look like?




/*{
  _id: ObjectId('573a1390f29313caabcd446f'),
  plot: 'A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain\'s producers into charity lines and further into poverty. The film...',
  genres: [
    'Short',
    'Drama'
  ],
  runtime: NumberInt('14'),
  cast: [
    'Frank Powell',
    'Grace Henderson',
    'James Kirkwood',
    'Linda Arvidson'
  ],
  num_mflix_comments: NumberInt('1'),
  title: 'A Corner in Wheat',
  fullplot: 'A greedy tycoon decides, on a whim, to corner the world market in wheat. This doubles the price of bread, forcing the grain\'s producers into charity lines and further into poverty. The film continues to contrast the ironic differences between the lives of those who work to grow the wheat and the life of the man who dabbles in its sale for profit.',
  languages: [
    'English'
  ],
  released: ISODate('1909-12-13T00:00:00.000Z'),
  directors: [
    'D.W. Griffith'
  ],
  rated: 'G',
  awards: {
    wins: NumberInt('1'),
    nominations: NumberInt('0'),
    text: '1 win.'
  },
  lastupdated: '2015-08-13 00:46:30.660000000',
  year: NumberInt('1909'),
  imdb: {
    rating: Double('6.6'),
    votes: NumberInt('1375'),
    id: NumberInt('832')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.6'),
      numReviews: NumberInt('109'),
      meter: NumberInt('73')
    },
    lastUpdated: ISODate('2015-05-11T18:36:53.000Z')
  }
}
  */