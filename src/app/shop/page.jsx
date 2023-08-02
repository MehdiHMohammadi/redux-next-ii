import Link from "next/link";

function Page() {
  return (
    <div className="h-screen flex justify-center items-center gap-2 flex-col">
      <h1>Page Shop in Folder Shop</h1>
      <h2>
        <Link href={"/"}>{`<-- Back`}</Link>
      </h2>
    </div>
  );
}

export default Page;
