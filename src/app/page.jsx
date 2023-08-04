// import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-screen flex justify-center items-center gap-2 flex-col">
      <nav>
        <ul>
          <li>
            <Link href={"/pizza"} as={`/pizza/?language=en`}>
              Pizza
            </Link>
          </li>
          <li>
            <Link href="/todo">Todo</Link>
          </li>
          <li>
            <Link href={"/shop"}>Shop</Link>
          </li>
          <li>
            <Link href={"/shop/cat"}>cat</Link>
          </li>
          <li>
            <Link href={"/category"}>category</Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}
