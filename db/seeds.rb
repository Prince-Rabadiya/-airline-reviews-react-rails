airlines = Airline.create([{
  name: 'airline1',
  image_url: 'https://media.cntraveler.com/photos/607f3c487774091e06dd5d21/16:9/w_2560%2Cc_limit/Breeze%2520Airways_166655077_303814634409055_8038496796049085212_n.jpeg'
},{
  name: 'airline2',
  image_url: 'https://www.airport-technology.com/wp-content/uploads/sites/14/2020/04/Airlines.jpg'
},{
  name: 'airline3',
  image_url: 'https://www.lufthansagroup.com/media/_processed_/8/0/csm_190926_LH_Group_Rollfeld_LH_LX_OS_SN_EW_1d35253659.jpg'
},{
  name: 'airline4',
  image_url: 'https://d2poqm5pskresc.cloudfront.net/wp-content/uploads/2019/10/airlines.jpg'
},{
  name: 'airline5',
  image_url: 'https://news.cgtn.com/news/7951544e3359444d78636a4d324d6a4d3467444f31457a6333566d54/img/873d25fcfb0842efaa07af46c45538d3/873d25fcfb0842efaa07af46c45538d3.jpg'
}])

reviews = Review.create([{
  title: 'Best one',
  description: 'loved it!!!',
  score: 5,
  airline: airlines.first
},{
  title: 'Best one',
  description: 'loved it!!!',
  score: 4,
  airline: airlines.first
}])