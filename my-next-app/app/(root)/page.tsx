import Link from "next/link";
import Hello from "../../components/Hello";

const home = () => {
  console.log("I am server Component");
  return (
    <div>
      Welcome to next js
      <Hello />
      <ul className="mt-10">
        <li>
          <Link href="/dashboard/users/1">User 1</Link>
        </li>
        <li>
          <Link href="/dashboard/users/2">User 2</Link>
        </li>
        <li>
          <Link href="/dashboard/users/3">User 3</Link>
        </li>
        <li>
          <Link href="/dashboard/users/4">User 4</Link>
        </li>
      </ul>
    </div>
  );
};

export default home;
