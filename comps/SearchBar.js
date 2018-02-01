import ReactDOM from "react-dom";
import searchRequest from "../comps/SearchQuery.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    this.input.value;
    {
      value: event.target.value;
    }
    this.props.onDataFetched(this.input.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" ref={input => (this.input = input)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
