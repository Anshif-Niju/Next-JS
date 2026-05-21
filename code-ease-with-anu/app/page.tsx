import Link from "next/link";

function page() {
  const buttons: number[] = [1, 2, 3, 4];
  return (
    <>
      {buttons.map((id) => (
        <div key={id}>
          <Link href={`/products/${id}`}><button>Button{id}</button></Link>
        </div>
      ))}
    </>
  );
}

export default page;
