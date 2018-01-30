import client from "../comps/SearchQuery.js";
import React from "react";

class Results extends React.Component{
  render: function() {
    var listItems = this.props.data.map(function(business) {
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
    return <ul style={listStyle}>{listItems}</ul>;
  }
};

export default Results;
