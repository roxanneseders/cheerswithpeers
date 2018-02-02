import Head from "next/head";
import Navbar from "../comps/Navbar";
import Layout from "../comps/MyLayout.js";
import BttmBttnNv from "../comps/BttmBttnNv";

// export default () => (
//   <Layout>
//     <p>Where do you want to go?</p>
//   </Layout>
// );
import Layout from "../comps/Layout.js";

export default () => (
  <div className='hello'>
    <Head />
    <Navbar />
    <p>Hello World</p>
    <style>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #000;
        padding: 200px;
        text-align: center;
        transition: 100ms ease-in background;
        lost-column: 1/3;
        &:hover {
          color: red;
        }
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
    <footer>
      <BttmBttnNv />
    </footer>
  </div>
)
