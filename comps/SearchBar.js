import ReactDOM from "react-dom";
import searchRequest from "../comps/SearchQuery.js";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    let auth = "Authorization";
    let headers = new Headers({
      "Access-Control-Allow-Headers": "*",
      auth:
        "Bearer Pu9AtNK5eBvInV3K9wYYI61bfEE5zy_NGh9CUI_x02IJEnxb4l26ckygnr20v3IEgoFtkGm68-sao8jPPhhVU1a8NL6l0AGsJrl6VNW_UQM4zDdcKKOeV2IQPmhmWnYx"
    });
    fetch(
      "https://api.yelp.com/v3/businesses/search?categories=nightlife&term=music&latitude=33.5585307&longitude=-111.88668",
      { headers: headers }
    ).then(res => console.log(res));
    // this.props.onDataFetched(this.input.value);
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
