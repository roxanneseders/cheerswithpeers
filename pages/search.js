import React from "react";
import MyLayout from "../comps/MyLayout.js";
import SearchBar from "../comps/SearchBar.js";
import searchQuery from "../comps/SearchQuery.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(keyword) {
    console.log(keyword);
    searchQuery(keyword);
    this.setState({
      keyword
    });
  }

  render() {
    return (
      <div>
        <MyLayout>
          <SearchBar onDataFetched={this.handleSubmit} />
        </MyLayout>
      </div>
    );
  }
}

export default Search;

// export default () => {
//   return (
//     <MyLayout>
//       <SearchBar />
//     </MyLayout>
//   );
// };
