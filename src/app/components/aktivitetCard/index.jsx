import Image from "next/image";
import Link from "next/link";

export default async function AktivitetCard({aktivitet}) {

return (
    <> 
<Link href={`/aktiviteter/${aktivitet.id}`}>
<article className="aktivitetCard">

    <div>
    <Image src={aktivitet.asset.url} width={350} height={340} alt={aktivitet.name}></Image>
    </div>
    <h2>{aktivitet.name}</h2>
    <p>{aktivitet.description}</p>

</article>
</Link>
 
    </>
)
}
