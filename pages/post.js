import Layout from "../comps/MyLayout.js";

const Content = props => (
  <div>
    <h1>{props.url.query.title}</h1>
  </div>
);

export default props => (
  <Layout>
    <Content url={props.url} />
  </Layout>
);
