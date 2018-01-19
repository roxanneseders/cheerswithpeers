import Link from "next/link";

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <button style={linkStyle}>Home</button>
    </Link>
    <Link href="/about">
      <button style={linkStyle}>About</button>
    </Link>
    <Link href="/bars">
      <button style={linkStyle}>Bars</button>
    </Link>
    <Link href="/signin">
      <button style={linkStyle}>Sign in</button>
    </Link>
  </div>
);

export default Header;
