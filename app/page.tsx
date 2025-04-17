import Link from "next/link";

export default function Home() {
  return (
    <div className="text-xl w-screen h-screen flex justify-center items-center">
      <div>
        Todo Application
        <br />
        <Link className="text-sm border m-1" href="/signin">Sign In To Todo App</Link>
        <br />
        <Link className="text-sm border m-1" href="/signup">Sign Up To Todo App</Link>
      </div>
    </div>
  );
}
