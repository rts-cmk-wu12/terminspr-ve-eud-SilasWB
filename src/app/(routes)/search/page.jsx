import Footer from "@/app/components/footer";
import SearchBar from "@/app/components/searchbar";


export const metadata = {
  title: "Search"
};

export default async function Search() {
 
  return (
   <>
<h1>{metadata.title}</h1>
<SearchBar />
  <Footer />
   </>
  );
}
