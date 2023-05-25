enum ERRORS_CONTACT {
  PHONE_OR_EMAIL_SIGNED = "The phone or email has been signed",
  CONNECT_TO_DATABASE = "Error to connect with database, please try again later",
  EMPTY_NAME_INPUT = "Please, provide your name",
  EMPTY_CONTACT_INPUTS = "Please, give us at least email or phone number",
  WRONG_PHONE_FORMAT = "Phone in wrong format",
  WRONG_EMAIL_FORMAT = "Email format: name@domain.com",
  ACCEPT_TERMS_AND_CONDITIONS = "Please accept term and conditions",


}

enum ERRORS_DATABASE {
  CONNECTION = "Error to connect with database"
}

enum ERRORS_PLANTS_REPOSITORY {
  PLANT_EXIST = "The plant has been added to database",
  GET_PLANT_BY_ID = "Error to get that plant, please check the provided id",
  EMPTY_PLANT_FAMILY = "Does not exist another plant in the same family"

}

enum ERRORS_USERS_REPOSITORY {
  EMAIL_OR_PHONE_SIGNED = "The phone or email has been signed",

}

export {
  ERRORS_CONTACT,
  ERRORS_DATABASE,
  ERRORS_PLANTS_REPOSITORY,
  ERRORS_USERS_REPOSITORY
}

