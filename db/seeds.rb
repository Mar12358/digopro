users = [
  {
    "name": "Martin",
    "email": "gonzalez.martin.35@gmail.com",
    "password": "123456"
  }
]


lectures = [
  {
    "name": "Mathematics",
    "image_url": "https://images.ctfassets.net/szez98lehkfm/6Dcx47997HBKwo0SWqmhFA/22a52ae59d4419011e43ebb0b2c095af/MyIC_Article_81268?w=1106&h=622&fm=webp&fit=fill",
    "description": "Explore the fascinating world of mathematics, from basic arithmetic to advanced calculus. Uncover the beauty of numbers and equations.",
    "web_link": "https://en.wikipedia.org/wiki/Mathematics",
    "price": 20
  },
  {
    "name": "Lindy Hop",
    "image_url": "https://raw.githubusercontent.com/Mar12358/book-an-appointment/202464a0370bb50779d9396bfa88028e2142be22/app/assets/images/lecture_lindy_hop.png",
    "description": "Learn Swing Jazz Dance and the roots of dance improvisazion with a partner",
    "web_link": "https://swingcity.com.ar",
    "price": 15,
  },
  {
    "name": "Geography",
    "image_url": "https://as1.ftcdn.net/v2/jpg/01/05/89/36/1000_F_105893672_dmH2Tg2DZkOi2dltoUbtmSXVf6birx7L.jpg",
    "description": "Embark on a global adventure with geography. Discover countries, cultures, and the natural wonders of our planet.",
    "web_link": "https://en.wikipedia.org/wiki/Geography",
    "price": 18
  },
  {
    "name": "Spanish",
    "image_url": "https://vidalingua.com/images/spanish-courses",
    "description": "Immerse yourself in the melodious language of Spanish. Learn the art of communication and connect with a rich and diverse culture.",
    "web_link": "https://es.wikipedia.org/wiki/Idioma_espa%C3%B1ol",
    "price": 25
  },
  {
    "name": "Physics",
    "image_url": "https://as1.ftcdn.net/v2/jpg/03/15/20/92/1000_F_315209257_zELrbsRsxmsbBdPODkrsUjyWdMA6lEXa.jpg",
    "description": "Delve into the laws of the physical universe. Explore the mysteries of motion, energy, and the fundamental forces of nature.",
    "web_link": "https://en.wikipedia.org/wiki/Physics",
    "price": 20
  },
  {
    "name": "Art History",
    "image_url": "https://www.pomona.edu/sites/default/files/styles/slideshow_16/public/images/paragraphs/gorse-arthistory2015_4928.jpg?h=2404df48&itok=Jq8-8Z_v",
    "description": "Journey through the evolution of art and culture. Explore the masterpieces and movements that shaped human creativity.",
    "web_link": "https://en.wikipedia.org/wiki/Art_history",
    "price": 15
  },
  {
    "name": "Cooking",
    "image_url": "https://www.google.com/search?q=cooking+class+black+people&tbm=isch&ved=2ahUKEwiX27qWpcuBAxUaJrkGHdE5DgkQ2-cCegQIABAA&oq=cooking+class+black+people&gs_lcp=CgNpbWcQAzoECCMQJzoFCAAQgAQ6BAgAEB46BwgAEBMQgAQ6CAgAEAUQHhATOggIABAIEB4QEzoGCAAQCBAeUIYGWNQVYMMWaABwAHgAgAGAAYgB9weSAQQxMy4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=8mIUZZeaFprM5OUP0fO4SA&bih=953&biw=958#imgrc=x3ayWvNYJ4Kg9M",
    "description": "Embark on a culinary adventure. Learn the art of cooking delicious dishes from around the world.",
    "web_link": "https://en.wikipedia.org/wiki/Cooking",
    "price": 12
  },
  {
    "name": "Computer Programming",
    "image_url": "",
    "description": "Dive into the world of coding and software development. Unlock the power to create digital solutions.",
    "web_link": "",
    "price": 25
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

