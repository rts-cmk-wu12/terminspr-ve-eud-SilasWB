//Taget fra Tidligere Projekt

"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import z from "zod";

export default async function doTheLoginThing(prevState, formData) {

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

	const tokenresponse = await fetch("http://localhost:4000/auth/token", {
  "method": "POST",
  "headers": {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    "username": validated.data.username,
    "password": validated.data.password
  }) 
})

	if (!tokenresponse.ok) return {
		success: false,
		errors: ["Brugernavn eller adgangskode er forkert"]
	}

const { token, userId } = await tokenresponse.json();
console.log("token:", token);
console.log("userid:", userId);


const userresponse = await fetch(`http://localhost:4000/api/v1/users/${userId}`, {
  "method": "GET",
  "headers": {
    Authorization: `Bearer ${token}`
  }
})

	if (!userresponse.ok) return {
		success: false,
		errors: ["Brugernavn eller adgangskode er forkert"]
	}

const { user } = await userresponse.json();
console.log("user:", user);

	if (userresponse.ok) {
		const cookieStore = await cookies();
		cookieStore.set("auth_token", "Du er logget ind", {
			maxAge: 60 * 30
		});

		redirect("/aktiviteter")
	}

	return { success: true, user }

}
