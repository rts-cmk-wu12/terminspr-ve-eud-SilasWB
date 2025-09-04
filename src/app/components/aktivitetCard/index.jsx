import Image from "next/image";
import Link from "next/link";
import "./aktivitetcard.scss"

export default async function AktivitetCard({aktivitet}) {

return (
    <> 
<Link href={`/aktiviteter/${aktivitet.id}`}>
<article className="aktivitetCard">

    <Image src={aktivitet.asset.url} width={350} height={340} alt={aktivitet.name}></Image>
    <div className="text-container"> <h2>{aktivitet.name}</h2>
    <p>{aktivitet.minAge}-{aktivitet.maxAge} år</p>
    </div>
   

</article>
</Link>
 
    </>
)
}
