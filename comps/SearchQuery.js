import Search from "../pages/search.js";
import Places from "google-places-web";

Places.apiKey = "AIzaSyAtUabKXHc739JYZtH9EGaiInEo_H-LH4o";
Places.debug = true;

Places.autocomplete({ input: "music" })
  .then(places => places[3] || {})
  .then(
    place => (place.place_id ? Places.details({ placeid: place.place_id }) : {})
  )
  .then(details => {
    console.log(JSON.stringify(details, null, 2));
  })
  .catch(e => console.log(e.message));
