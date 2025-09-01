import Image from "next/image";
import SplashImage from '../../public/splash-image.jpg'
import Logo from '../../public/Logo.png'
import Link from "next/link";
import "@/app/index.scss";


export default function Home() {
  return (
<>
<section>
  <Image className="Home__Background-image" src={SplashImage} priority alt="background-image"></Image>
  <Image className="Home__Logo" src={Logo} width={200} height={200} alt="logo"></Image>

  <Link className="Home__Button" href="/aktiviteter" >
    Kom i gang
  </Link>
</section>
</>
  );
}

