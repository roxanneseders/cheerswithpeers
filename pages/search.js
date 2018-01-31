import Layout from "../comps/Layout.js";
import SearchBar from "../comps/SearchBar.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pictures: [] };
  }

  render() {
    return;
  }
}

export default () => {
  return (
    <MyLayout>
      <SearchBar />
    </MyLayout>
  );
};
