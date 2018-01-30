import Link from "next/link";
import SearchBar from "./SearchBar";


const Navbar = () => (
  <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div className="container">
      <a className="navbar-brand" href="#" />
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav l-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Home</a>
            </Link>
          </li>
          <SearchBar />
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
