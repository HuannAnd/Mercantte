import { User } from "@/@types/user";

import { ERRORS_CONTACT } from "@/constants/errors";


export default async function sendingUserToDatabase(user: User) {
  const res = await fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify(user),
  });

  if (!res.ok) {
    throw new Error("Error to send a user to database");
  }

  const data = await res.json();
  console.log("User data:", data);


  if (!data.success) {
    throw new Error(ERRORS_CONTACT.PHONE_OR_EMAIL_SIGNED);
  }
}