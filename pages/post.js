import Layout from "../comps/MyLayout.js";
import Markdown from "react-markdown";

export default props => (
  <Layout>
    <h1>{props.url.query.title}</h1>
    <div className="markdown">
      <Markdown
        source={`
    Bars-Come get your drink on!
    About-This is about us[link](/link).
    Sign in-Tell us about your place.

    ###CHEERS

    And here's the content.
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
      .markdown h3
        margin: 0;
        padding: 0;
        text-transform: uppercase;
      }
    `}</style>
  </Layout>
);
