users = [
  {
    "name": "Martin",
    "email": "gonzalez.martin.35@gmail.com",
    "password": "123456"
  }
]


lectures = [
  {
  "name": "Lindy Hop",
  "image_url": "https://raw.githubusercontent.com/Mar12358/book-an-appointment/202464a0370bb50779d9396bfa88028e2142be22/app/assets/images/lecture_lindy_hop.png",
  "description": "Learn Swing Jazz Dance with, with the roots of dance improvisazion with a partner",
  "web_link": "https://swingcity.com.ar",
  "price": 25,
  }
]

reservations = [
  {
  "user_id": 5,
  "lecture_id": 2,
  "date": "21/11/2023",
  "city": "Buenos Aires",
  }
]

users.each do |user|
  User.create(name: user[:name], email: user[:email], password: user[:password])
end

lectures.each do |lecture|
  Lecture.create(
    name: lecture[:name],
    image_url: lecture[:image_url],
    description: lecture[:description],
    web_link: lecture[:web_link],
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

