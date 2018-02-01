import MyLayout from "../comps/MyLayout.js";
import SearchBar from "../comps/SearchBar.js";
import Results from "../comps/SearchResults.js"; //added this
//I assume the person searches on the main search bar and the Search Results component will be shown here on the search page where this acts like the "Penn station" of the logic that gives bar information.
import apiCall from "../comps/SearchQuery.js";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [],
      searchInput: ""
    };
  }
  // input you're passing in = searchQuery
  handleSearch(searchQuery) {
    console.log(searchQuery);
    return apiCall(searchQuery);
    // (search input=searchQuery)
  } //will invoke API call....

  render() {
    return (
      <div>
        <h2>Search Results "x"</h2>
        <SearchBar search={this.handleSearch} />
      </div>
    ); //I used business because that is an array with state
  }
}

export default () => {
  return (
    <MyLayout>
      <Search />
    </MyLayout>
  );
};

/*
1. value [] in my state to maintain yelp serch result
2. create a function to handle invoke of api call. 
3. set seachinput state to serachquery from handlesearch method

*/
