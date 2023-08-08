import Link from "next/link";

function Page() {
  function decodeHtmlEntities(text) {
    if (typeof text !== "string") {
      throw new Error(`Failed to decode HTML entity: invalid type ${text}`);
    }

    let decoded = text;

    const entities = {
      "&amp;": "\u0026", //&
      "&quot;": "\u0022", //"
      "&#039;": "\u0027", //'
    };

    return decoded.replace(/&amp;|&quot;|&#039;/g, (char) => entities[char]);
  }

  const output = decodeHtmlEntities(
    "{'code':'rest_cannot_read','message':'\u0628\u0627 \u0639\u0631\u0636 \u067e\u0648\u0632\u0634\u060c \u0634\u0645\u0627 \u0645\u062c\u0627\u0632 \u0628\u0647 \u0645\u0634\u0627\u0647\u062f\u0647 \u0631\u0648\u0646\u0648\u0634\u062a\u200c\u0647\u0627\u06cc \u0627\u06cc\u0646 \u0646\u0648\u0634\u062a\u0647 \u0646\u0645\u06cc\u200c\u0628\u0627\u0634\u06cc\u062f.','data':{'status':401}}"
  );
  console.log(output);
  return (
    <div className="h-screen flex justify-center items-center gap-2 flex-col">
      <h1>Page Shop in Folder Shop</h1>
      <h1 className="w-1/2 flex justify-center">{output}</h1>
      <h2>
        <Link href={"/"}>{`<-- Back`}</Link>
      </h2>
    </div>
  );
}

export default Page;
