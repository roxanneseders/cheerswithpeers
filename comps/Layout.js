import Head from "next/head";
import Navbar from "./Navbar";
import BttmBttnNv from "./BttmBttnNv";

const Layout = props => (
  <div>
    <Head>
      <title>CHEERS</title>
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navbar />

    <div className="container">{props.children}</div>

    <img src="../static/img/craftbeer.jpg" />
    <BttmBttnNv />
  </div>
);

export default Layout;
//<--notes:
