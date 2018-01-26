import Head from "next/head";
import Navbar from "./Navbar";

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
  </div>
);

export default MyLayout;
