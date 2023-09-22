users = [
  {
    "name": "Martin",
  },
  {
    "name": "Edahi",
  },
  {
    "name": "Christopher",
  },
  {
    "name": "Nurbol",
  }
]


lectures = [
  {
  "name": "Lindy Hop",
  "image_url": "https://github.com/Mar12358/book-an-appointment/tree/features/app/assets/images/lecture_lindy_hop.png",
  "description": "Learn Swing Jazz Dance with, with the roots of dance improvisazion with a partner",
  "fb_link": "https://swingcity.com.ar",
  "tw_link": "https://twitter.com/home",
  "ig_link": "https://www.instagram.com",
  "price": 25,
  }
]

reservations = [
  {
  "user_id": "1",
  "lecture_id": "1",
  "date": "21/11/2023",
  "city": "Buenos Aires",
  }
]

users.each do |user|
  User.create(name: user[:name])
end

lectures.each do |lecture|
  Lecture.create(
    name: lecture[:name],
    image_url: lecture[:image_url],
    description: lecture[:description],
    fb_link: lecture[:fb_link],
    tw_link: lecture[:tw_link],
    ig_link: lecture[:ig_link],
    price: lecture[:price]
  )
end

reservations.each do |reservation|
  Reservation.create(
    user_id: reservation[:user_id],
    lecture_id: reservation[:lecture_id],
    date: reservation[:date],
    city: reservation[:city]
  )
end

