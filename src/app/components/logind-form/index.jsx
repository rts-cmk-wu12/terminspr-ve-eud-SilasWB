// Taget fra tidligere projekt

"use client";


import doTheLoginThing from "@/actions/logIndThingThing";
import { useActionState } from "react";
import { CircleLoader } from "react-spinners";

const override = {
	display: "block",
	margin: "0 auto",
}

export default function LogindForm() {
	const [formState, formAction, isPending] = useActionState(doTheLoginThing);

	return isPending ? (
		<CircleLoader
			color="#0d0d7cff"
			loading={true}
			cssOverride={override}
			size={100}
		/>
	) : (
		<form action={formAction}>
			<div>
				<label>
					
					<input type="text" name="username" placeholder="Brugernavn" />
					<p>{formState?.properties?.username?.errors}</p>
				</label>
			</div>
			<div>
				<label>
					
					<input type="password" name="password" placeholder="Adgangskode"/>
					<p>{formState?.properties?.password?.errors}</p>
				</label>
			</div>
			<button type="submit">Log ind</button>
			<p>{formState?.errors}</p>
		</form>
	);
}
