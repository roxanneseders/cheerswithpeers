import Head from "next/head";
import Navbar from "./Navbar";
import BttmBttnNv from "./BttmBttnNv";


const MyLayout = props => (
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

    <BttmBttnNv />
  </div>
);

export default MyLayout;
//<--notes:
