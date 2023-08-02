// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center gap-2 flex-col">
      <nav>
        <ul>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/contact"}>Contant</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/shop/categoty"}>categoty</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
