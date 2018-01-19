import Header from "../comps/Header";
import Layout from "../comps/MyLayout.js";
//added 1/19
import Markdown from "react-markdown";

export default props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
This is our project.
Yes. We have  buttons and we have a title as well.

### CHEERS


     `}
      />
    </div>
    <style jsx global>{`
      .markdown {
        font-family: "Arial";
      }

      .markdown a {
        text-decoration: none;
        color: blue;
      }

      .markdown a:hover {
        opacity: 0.6;
      }

      .markdown h3 {
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);
// export default () => (
//   <Layout>
//     <p>CHEERS</p>
//   </Layout>
// );
