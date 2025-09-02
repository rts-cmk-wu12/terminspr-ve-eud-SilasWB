import Footer from "@/app/components/footer";


export const metadata = {
  title: "Kalender"
};

export default async function Kalender() {

  return (
   <>
   <h1>{metadata.title}</h1>

  <Footer />
   </>
  );
}
