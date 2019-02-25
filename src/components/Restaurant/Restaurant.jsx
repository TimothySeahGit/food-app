import React from "react";

function Restaurant({ item }) {
  const {
    _id,
    name,
    address,
    openingTime,
    closingTime,
    cuisine,
    imageUrl,
    averagePrice
  } = item;
  const cardStyle = { width: "18rem" };

  return (
    // <div>
    //   name: {name}
    //   address: {address}
    // </div>
    <div className="col-sm-6 col-md-5 col-lg-4 card-deck d-flex mb-4">
      <div className="card" style={cardStyle}>
        <img src={imageUrl} className="card-img-top" alt={name} />{" "}
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <h5 className="card-text text-muted">
            <div>{cuisine.name}</div>
            <div>
              {openingTime}-{closingTime}
            </div>
          </h5>
        </div>{" "}
        <div className="card-footer text-muted">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Restaurant;
