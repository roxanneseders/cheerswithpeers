import ReactDOM from "react-dom";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //<-the value of state needs to be an array (or object, too?) (imported or implicit inside the file)
      value: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    //< can do onChange here too, w/ ES5
  }

  handleSubmit(x) {
    let { search } = this.props;
    x.preventDefault();
    return search(this.state.value);
  }

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input
            type="text"
            onChange={this.onChange}
            value={this.state.value}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default SearchBar;
//         <h2>{this.state.value}</h2>  added to see what shows up...onSubmit..
