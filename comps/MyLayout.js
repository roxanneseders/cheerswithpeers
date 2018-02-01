import Head from "next/head";
import Navbar from "./Navbar";
import BttmBttnNv from "./BttmBttnNv";

const MyLayout = props => (
  <div>
    <Head>
      <meta name="viewport" content="max=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <title>CHEERS</title>
      <link rel="icon" href="/static/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    {/* <style global jsx>{`
      body { 
        background: #000; <--- get to work all the time
        font: px menlo;
        color: #aaa;
      }`}
    </style> */}

    < Navbar />
    <div className="container">{props.children}</div>
    <img src='../static/img/craftbeer.jpg' />
    <BttmBttnNv />
  </div >
);

export default MyLayout;
