<<<<<<< HEAD
import Layout from "../comps/Layout.js";
=======
import MyLayout from "../comps/MyLayout.js";
import SearchBar from "../comps/SearchBar.js";
>>>>>>> master

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
