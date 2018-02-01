import MyLayout from "../comps/MyLayout.js";
import SearchBar from "../comps/SearchBar.js";
import client from "../comps/SearchQuery.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(keyword) {
    this.setState({
      keyword
    });
  }

  render() {
    return (
      <div>
        <SearchBar onDataFetched={this.handleSubmit} />
      </div>
    );
  }
}
console.log();

export default () => {
  return (
    <MyLayout>
      <SearchBar />
    </MyLayout>
  );
};
