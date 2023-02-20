import Logo from "./logo";
import Link from "next/link";

function MainNavigation() {
  return (
    <header>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <nav>
        <li>
          <Link href="/posts">Posts</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </nav>
    </header>
  );
}

export default MainNavigation;
