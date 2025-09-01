// Taget fra tidligere projekt

export async function generateMetadata({ params }) {
	const { id } = await params;

	const response = await fetch(`http://localhost:4000/api/v1/activities?id=${id}`);
	const json = await response.json();
console.log(id)
	return {

		title: json.name

       
	} 
}

export default async function AktivitetPage({ params }) {
	const { id } = await params;

	const response = await fetch(`http://localhost:4000/api/v1/activities?id=${id}`);
	const json = await response.json();
console.log(json)
	return (
		<>
			<h2>{json.name}</h2>
			<p>{json.description}</p>
		</>
	);
}

