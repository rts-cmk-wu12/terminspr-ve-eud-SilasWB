import Link from "next/link";
import "./footer.scss"
import { CiCalendar, CiHome, CiSearch } from "react-icons/ci";
export default function Footer() {

return (
    <footer className="footer"> 
<ul className="footer__row">

    <Link href="/aktiviteter"><li className="footer__item"><CiHome /></li></Link>
    <Link href="/search"><li className="footer__item"><CiSearch /></li></Link>
    <Link href="/kalender"><li className="footer__item"><CiCalendar /></li></Link>

</ul>
    </footer>
)
}
