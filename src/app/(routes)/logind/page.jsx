import LogindForm from "@/app/components/logind-form";



export const metadata = {
  title: "Log ind"
};

export default async function LogInd() {
  const response = await fetch("http://localhost:4000/api/v1/activities");
  const json = await response.json();
  return (
   <>
   <section>
    <h1>{metadata.title}</h1>
<LogindForm />



   </section>
   
  


   </>
  );
}
