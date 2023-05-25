import { UserAvaliator } from "@/@types/user"

const avaliator1: UserAvaliator = {
  name: "Ana Silva",
  email: "huannvicente14@outlook.com",
  comment: "Adorei as plantas que comprei com o usuário! Chegaram em perfeito estado e são lindas, exatamente como nas fotos do anúncio. Já estou planejando minha próxima compra com ele.",
  rate: 4,
  date: "2023-05-18"
}
const avaliator2: UserAvaliator = {
  name: "Lucas Oliveira",
  email: "huannvicente14@outlook.com",
  comment: "Excelente vendedor de plantas! O usuário foi muito atencioso desde o início e me ajudou a escolher as plantas ideais para o meu espaço. As plantas chegaram bem embaladas e saudáveis, estou muito satisfeito.",
  rate: 5,
  date: "2023-05-13"
}

const avaliator3: UserAvaliator = {
  name: "Juliana Santos",
  email: "huannvicente14@outlook.com",
  comment: "As plantas do usuário são maravilhosas! Fiquei encantada com a variedade e qualidade dos produtos. A única sugestão que tenho é que o usuário disponibilize mais informações sobre os cuidados que cada planta requer, para que possamos cuidar delas melhor.",
  rate: 4,
  date: "2023-05-23"
}

export default [avaliator1, avaliator2, avaliator3]