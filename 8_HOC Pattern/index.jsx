import React from "react";
import withLoader from "./withLoader";

export function Listings(props) {
  if (!props.data.listings.length) return null;

  return (
    <div>
      {props.listings.map((listing) => (
        <p>{listing.name}</p>
      ))}
    </div>
  );
}

export default withLoader(
  Listings,
  "https://house-lydiahallie.vercel.app/api/listings"
);
