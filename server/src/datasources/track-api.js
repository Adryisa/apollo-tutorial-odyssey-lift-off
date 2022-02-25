const { RESTDataSource } = require("apollo-datasource-rest");

class TrackApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }
}

module.exports = TrackApi;
