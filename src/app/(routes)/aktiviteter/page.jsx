import AktivitetCard from "@/app/components/aktivitetCard";


export const metadata = {
  title: "Aktiviteter"
};

export default async function Aktivitet() {
  const response = await fetch("http://localhost:4000/api/v1/activities");
  const json = await response.json();
  return (
   <>
   <ul>
   {json.map(aktivitet => (<li key={aktivitet.id}><AktivitetCard aktivitet={aktivitet} /></li>) )}
  </ul>
   </>
  );
}
