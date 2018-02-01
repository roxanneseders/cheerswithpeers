import Layout from "../comps/Layout.js";
import Owner from "../comps/Owner.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Information: [] };
  }

  render() {
    return;
  }
}

export default () => {
  return (
    <Layout>
      <Owner />
    </Layout>
  );
};
