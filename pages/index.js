import Header from "../comps/Header";
import Layout from "../comps/MyLayout.js";

//added 1/22

import Link from "next/link";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default () => (
  <Layout>
    <h1>CHEERS</h1>
    <ul>
      <PostLink title="About" />
      <PostLink title="Bars" />
      <PostLink title="Sign in" />
    </ul>
  </Layout>
);
