import axios from "axios";
import React, { Component } from "react";
import { ToastContainer, toast } from "react-toastify";
import SearchResults from "../comps/SearchResults.js";
import MyLayout from "../comps/MyLayout.js";
//require("dotenv").config();

const API_YELP_SEARCH = "https://api.yelp.com/v3/businesses/search?";

const YELP_RESULT_LIMIT = 20;

//const YELP_API_key = process.env.REACT_APP_YELP_API_key;
// Configure axios headers to use our Yelp API key:
const YELP_API_key =
  "Pu9AtNK5eBvInV3K9wYYI61bfEE5zy_NGh9CUI_x02IJEnxb4l26ckygnr20v3IEgoFtkGm68-sao8jPPhhVU1a8NL6l0AGsJrl6VNW_UQM4zDdcKKOeV2IQPmhmWnYx";
axios.defaults.headers.common["Authorization"] = `Bearer ${YELP_API_key}`;
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded";

const CORS_ANYWHERE_URL = "https://shrouded-basin-35216.herokuapp.com/";

class search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isError: false,
      isLoading: false,
      searchText: "",
      yelpResults: null
    };

    this.errorHandler = this.errorHandler.bind(this);
    this.getYelpData = this.getYelpData.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toastId = null;
  toastNotify = message => toast(message);

  toastUpdate = () =>
    toast.update(this.toastId, {
      type: toast.TYPE.ERROR,
      autoClose: 5000
    });

  toastDismiss = () => {
    toast.dismiss(this.toastId);
    this.setState({ isError: false });
  };

  dismissAll = () => toast.dismiss();

  errorHandler = (error, verbose = false) => {
    this.setState({ isLoading: false });
    this.toastUpdate(this.toastNotify(error.message));
    this.setState({ isError: false });
    if (!verbose === false) {
      console.log(
        `error: ${error.message}; state: ${JSON.stringify(this.state)}`
      );
    }
  };

  getYelpData = () => {
    // get our Yelp data payload...
    const yelpQueryString = `${API_YELP_SEARCH}categories=${"nightlife"}&term=${encodeURI(
      this.state.searchText
    )}&location=${encodeURI("phoenix, az")}&limit=${YELP_RESULT_LIMIT}`;

    axios
      .get(`${CORS_ANYWHERE_URL}${yelpQueryString}`)
      .then(response => {
        this.setState({ yelpResults: response.data });
        // We're done working; let's drop the isLoading flag:
        this.setState({ isLoading: false });
      })
      .catch(error => {
        this.errorHandler(error, true);
        console.warn(`     ERROR: ${JSON.stringify(error)}`);
      });
  };

  handleSearchTextChange = event => {
    this.setState({ searchText: event.target.value });
    if (event.target.value.length === 0) {
      this.setState({ yelpResults: null });
    }
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ yelpResults: null });
    this.setState({ isLoading: true });
    // Clear any errors we may have had from a previous attempt:
    this.setState({ isError: false });
    this.getYelpData();
  };

  render() {
    return (
      <div>
        <MyLayout>
          <div className="container">
            <div className="col-lg-12 col-md-12 col-sm-12">
              <form onSubmit={this.handleSubmit}>
                <div className="row">
                  <input
                    type="text"
                    autoFocus
                    name="searchText"
                    onChange={this.handleSearchTextChange}
                    placeholder="Search Here"
                    value={this.state.searchText}
                  />
                  <input
                    disabled={
                      this.state.searchText.length === 0 ||
                      this.state.isLoading ||
                      this.state.error
                    }
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12">
            <SearchResults
              isError={this.state.isError}
              isLoading={this.state.isLoading}
              yelpResults={this.state.yelpResults}
            />
          </div>
          <ToastContainer />
        </MyLayout>
      </div>
    );
  }
}

export default search;
