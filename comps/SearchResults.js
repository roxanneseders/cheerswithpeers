import client from "../comps/SearchQuery.js";
import React from "react";

class Results extends React.Component {
  render() {
    // var y = function() {  <-- had to add var y =. try without first. See text below for why I changed the formatting.

    var listItems = this.props.value.map(function(business) {
      return (
        <li>
          {
            (business.name,
            business.image_url,
            business.rating,
            business.price,
            business.display_address)
          }
        </li>
      );
    });
    var listStyle = {
      listStyleType: "none",
      padding: "0"
    };
    return <ul style={listStyle}>{listItems}</ul>; //shouldn't this require this.listItems because it will change?
    //}
  }
}

export default Results;
//Steps to Reproduce:  from github - vsCode issue

// Create a React component as a class, like:
// class CommentList extends React.Component { render() { ... } }
// Add a static propType property, like:
// class CommentList extends React.Component { static propTypes = { data: PropTypes.array.isRequired }; render() { ... } }
// VSC underlines the static propTypes declaration as being an error with [js] property type declarations can only be used in a 'ts' file.. Despite there being no problem at all compiling the code with Babel.
