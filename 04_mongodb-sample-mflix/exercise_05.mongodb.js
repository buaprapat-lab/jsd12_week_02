use("sample_mflix");

// db.movies.aggregate([]);

// Q1 What are top 5 runtime movies?
//db.movies.aggregate([{$sort: {runtime: -1}}, {$limit: 5}]);

// stage 1 ($sort): เรียงลำดับ runtime จากมากไปน้อย (ใช้เลข -1) ถ้าน้อยไปมากคือ 1
// stage 2 ($limit): เอาแค่ 5 เรื่องแรก

// Q2 What are top 5 runtime movies that less than 60 minutes?
db.movies.aggregate([
  { $match: { runtime: { $lt: 60 } } }, // กรองเอาเฉพาะเรื่องที่สั้นกว่า 60
  { $sort: { runtime: -1 } }, // แล้วค่อยเรียงจากมากไปน้อย
  { $limit: 5 },
]);

//Q3 I was born in 1955, which 3 movies should I watch in next 10 years?
// 1995 อีก 10 ปีข้างหน้าคือจะได้ดูหนังตั้งแต่ปี 1995 - 1965
/* db.movies.aggregate([
  { 
    $match: { 
      year: { $gte: 1955, $lte: 1965 } //ช่วงเวลา
    } 
  },
  { $limit: 3 }
]);


//Q4 How many movies were released during 1990 - 2000?
db.movies.aggregate([
  { 
    $match: { 
      year: { $gte: 1990, $lte: 2000 } //ช่วงเวลา
    } 
  },
  { $count: total_movie90s }
]);



/*
{
  _id: ObjectId('573a1390f29313caabcd4803'),
  plot: 'Cartoon figures announce, via comic strip balloons, that they will move - and move they do, in a wildly exaggerated style.',
  genres: [
    'Animation',
    'Short',
    'Comedy'
  ],
  runtime: NumberInt('7'),
  cast: [
    'Winsor McCay'
  ],
  num_mflix_comments: NumberInt('0'),
  poster: 'https://m.media-amazon.com/images/M/MV5BYzg2NjNhNTctMjUxMi00ZWU4LWI3ZjYtNTI0NTQxNThjZTk2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SY1000_SX677_AL_.jpg',
  title: 'Winsor McCay, the Famous Cartoonist of the N.Y. Herald and His Moving Comics',
  fullplot: 'Cartoonist Winsor McCay agrees to create a large set of drawings that will be photographed and made into a motion picture. The job requires plenty of drawing supplies, and the cartoonist must also overcome some mishaps caused by an assistant. Finally, the work is done, and everyone can see the resulting animated picture.',
  languages: [
    'English'
  ],
  released: ISODate('1911-04-08T00:00:00.000Z'),
  directors: [
    'Winsor McCay',
    'J. Stuart Blackton'
  ],
  writers: [
    'Winsor McCay (comic strip "Little Nemo in Slumberland")',
    'Winsor McCay (screenplay)'
  ],
  awards: {
    wins: NumberInt('1'),
    nominations: NumberInt('0'),
    text: '1 win.'
  },
  lastupdated: '2015-08-29 01:09:03.030000000',
  year: NumberInt('1911'),
  imdb: {
    rating: Double('7.3'),
    votes: NumberInt('1034'),
    id: NumberInt('1737')
  },
  countries: [
    'USA'
  ],
  type: 'movie',
  tomatoes: {
    viewer: {
      rating: Double('3.4'),
      numReviews: NumberInt('89'),
      meter: NumberInt('47')
    },
    lastUpdated: ISODate('2015-08-20T18:51:24.000Z')
  }
}*/
