// Taget fra tidligere projekt

"use client";


import doTheLoginThing from "@/actions/logIndThingThing";
import { useActionState } from "react";
import SplashImage from '../../../../public/splash-image.jpg'
import { CircleLoader } from "react-spinners";
import "./logind.scss"
import Image from "next/image";

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
			<div className="logind">
			  <Image className="logind__background-image" src={SplashImage} priority alt="background-image" />
			  <div>	
				<label>
					
					<input className="logind__search-input" type="text" name="username" placeholder="Brugernavn" />
					<p>{formState?.properties?.username?.errors}</p>
				</label>
			</div>
			<div>
				<label>
					
					<input className="logind__search-input" type="password" name="password" placeholder="Adgangskode"/>
					<p>{formState?.properties?.password?.errors}</p>
				</label>
			</div>
			<button type="submit">Log ind</button>
			<p>{formState?.errors}</p></div>
			
		</form>
	);
}
