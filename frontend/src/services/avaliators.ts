import { UserAvaliator } from "@/@types/user"

const avaliator1: UserAvaliator = {
  name: "Ana Silva",
  email: "anasilva@example.com",
  image: "/users/user3.jpg",
  comment: "Loved the plants I bought from the user! They arrived in perfect condition and are beautiful, just like in the photos from the listing. I'm already planning my next purchase with them.",
  rate: 4,
  date: "2023-05-18"
}
const avaliator2: UserAvaliator = {
  name: "Lucas Oliveira",
  email: "lucasoliveira@example.com",
  image: "/users/user1.jpg",
  comment: "Excellent plant seller! The user was very attentive from the beginning and helped me choose the perfect plants for my space. The plants arrived well-packaged and healthy, I am very satisfied.",
  rate: 5,
  date: "2023-05-13"
}

const avaliator3: UserAvaliator = {
  name: "Juliana Santos",
  email: "julianasantos@example.com",
  image: "/users/user4.jpg",
  comment:
    "The user's plants are wonderful! I was amazed by the variety and quality of the products. The only suggestion I have is for the user to provide more information about the care each plant requires, so that we can take better care of them.",
  rate: 4,
  date: "2023-05-23"
}

export default [avaliator1, avaliator2, avaliator3]