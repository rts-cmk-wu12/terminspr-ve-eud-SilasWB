//Taget fra Tidligere Projekt

"use server";

import { cookies } from "next/headers";
import z from "zod";

export default async function doTheLoginThing(prevState, formData) {
	const response = await fetch(`http://localhost:4000/api/v1/activities`);
	const json = await response.json();
console.log(json);
// console.log(asset.id)


	const username = formData.get("username");
	const password = formData.get("password");

	const schema = z.object({
		username: z.string().min(1, { message: "Brugernavn skal være udfyldt" }),
		password: z.string().min(1, { message: "Adgangskode skal være udfyldt" })
	});

	const validated = schema.safeParse({
		username, password
	});

	if (!validated.success) return {
		...validated,
		...(z.treeifyError(validated.error))
	}

	const tokenresponse = fetch("http://localhost:4000/auth/token", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "username": validated.data.username,
    "password": validated.data.password
  }) 
})
  .then(response => console.log(response))
  .catch(err => console.error(err));
	console.log(tokenresponse)

	if (!tokenresponse) return {
		success: false,
		errors: ["Brugernavn eller adgangskode er forkert"]
	}

const { token } = await tokenresponse.json();
console.log(token)


const userresponse = fetch(`http://localhost:4000/api/v1/users/${id}`, {
  "method": "GET",
  "headers": {
    Authorization: `Bearer ${token}`
  }
})
  .then(response => console.log(response))
  .catch(err => console.error(err));



	// if () {
	// 	const cookieStore = await cookies();
	// 	cookieStore.set("hallojsovs", "Du er nu logget ind. Tillykke.", {
	// 		maxAge: 60 * 30
	// 	});
	// }

	return validated;
}
