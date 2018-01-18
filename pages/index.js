import Link from "next/link";

const Index = () => (
  <div>
    <Link href="/about">
      <button>About</button>
    </Link>
    <Link href="/bars">
      <button>Bars</button>
    </Link>
    <Link href="/home">
      <button>Home</button>
    </Link>
    <Link href="/signin">
      <button>Sign in</button>
    </Link>

    <p>CHEERS</p>
  </div>
);

export default Index;
