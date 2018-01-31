import AboutLayout from "../comps/AboutLayout.js";
import Head from "next/head";


const About = () => (
  <AboutLayout>
    <div>
      {/* <Head>
        <title>ABOUT</title>
      </Head> */}
    </div>
    <br />
    <h1>About</h1>
    <br />
    <br />
    <br />

    <div>
      {/* <p>Hey!</p> */}

      <img src='../static/img/Cap.png' /><p>This</p>

      <img src='../static/img/hawkeye.png' />
      <p>That</p>
      <img src='../static/img/Hulk.png' />
      <p>The other</p>
      <img src='../static/img/Thor.png' />
      <p>Thing</p>
      <link rel="icon" href="/static/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </div>
  </AboutLayout>
);

export default About;
