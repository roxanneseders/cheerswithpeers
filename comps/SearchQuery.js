("use strict");

const yelp = require("yelp-fusion");

// Place holder for Yelp Fusion's API Key. Grab them
// from https://www.yelp.com/developers/v3/manage_app
const apiKey =
  "Pu9AtNK5eBvInV3K9wYYI61bfEE5zy_NGh9CUI_x02IJEnxb4l26ckygnr20v3IEgoFtkGm68-sao8jPPhhVU1a8NL6l0AGsJrl6VNW_UQM4zDdcKKOeV2IQPmhmWnYx";

export default x => {
  const client = yelp.client(apiKey);
  const searchRequest = {
    categories: "nightlife",
    term: x,
    location: "phoenix, az"
  };
  return client
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
