import AktivitetCard from "@/app/components/aktivitetCard";
import Footer from "@/app/components/footer";
import "./aktiviteter.scss"

export const metadata = {
  title: "Aktiviteter"
};

export default async function Aktivitet() {
  const response = await fetch("http://localhost:4000/api/v1/activities");
  const json = await response.json();
  return (
   <>
   <section className="aktiviteter">
   <h1>{metadata.title}</h1>
   <ul>
   {json.map(aktivitet => (<li key={aktivitet.id}><AktivitetCard aktivitet={aktivitet} /></li>) )}
  </ul>
</section>
  <Footer />
   </>
  );
}
