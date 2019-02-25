import React, { Component } from "react";
import { getRestaurants } from "../../services/restaurantService";
import Restaurant from "../Restaurant/Restaurant";

export class HomePage extends Component {
  state = {
    restaurants: getRestaurants()
  };

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-6">
            {this.state.restaurants.map(item => (
              <Restaurant key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
