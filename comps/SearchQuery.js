import SearchBar from "../comps/SearchBar.js"; //I added this. ?we'd need object of state from SearchBar to be passed into the search request to be searched by .search method, no?

("use strict");

const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
  "Pu9AtNK5eBvInV3K9wYYI61bfEE5zy_NGh9CUI_x02IJEnxb4l26ckygnr20v3IEgoFtkGm68-sao8jPPhhVU1a8NL6l0AGsJrl6VNW_UQM4zDdcKKOeV2IQPmhmWnYx";
var myInit = {
  method: "GET",
  mode: "no-cors",
  cache: "default",
  headers: "Access-Control-Allow-Origin",
  Origin: "http://localhost:3000"
};

export default x => {
  const client = yelp.client(apiKey);
  const searchRequest = {
    categories: "nightlife",
    term: x,
    location: "phoenix, az"
  };
  return client //<--1830 and 20
    .search(searchRequest)
    .then(response => {
      const firstResult = response.jsonBody.businesses;
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson);
    })
    .catch(e => {
      console.log(e);
    });
};
