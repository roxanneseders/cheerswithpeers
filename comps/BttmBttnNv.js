import Link from "next/link";

const BttmBttnNv = () => (
  <nav className="navbar navbar-expand-lg navbar">
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarColor01"
      aria-controls="navbarColor01"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon" />
    </button>

    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav m-auto">
        <li className="nav-item active" />

        <li className="nav-item">
          <Link href="/bars">
            <a className="nav-link">Bars</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/signin">
            <a className="nav-link">Sign In</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/about">
            <a className="nav-link">About</a>
          </Link>
        </li>

        <li className="nav-item">
          <Link href="/owner">
            <a className="nav-link">Owner</a>
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default BttmBttnNv;

// {     < ---- code below is from 1. bootswatch  2. Links are from Navbar.js
//   <Link href="/">
//               <a className="nav-link">Home</a>
//             </Link>
//           </li>
//           <li className="nav-item">
//             <Link href="/about">
//               <a className="nav-link">About</a>
//             </Link>
//             <li className="nav-item">
//               <Link href="/bars">
//                 <a className="nav-link">Bars</a>
//               </Link>
//               <li className="nav-item">
//                 <Link href="/signin">
//                   <a className="nav-link">Sign In</a>
//                   </Link>
// }
