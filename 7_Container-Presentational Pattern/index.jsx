import React from "react";
import { LoadingListings, Listing, ListingsGrid } from "../components";

function ListingsContainerComponent() {
  const [listings, setListings] = React.useState([]);

  React.useEffect(() => {
    fetch("https://my.cms.com/listings")
      .then((res) => res.json())
      .then((res) => setListings(res.listings));
  }, []);

  return <Listings listings={listings} />;
}

function ListingsPresentationalComponent(props) {
  if (props.listings.length === 0) {
    return <LoadingListings />;
  }

  return (
    <ListingsGrid>
      {listings.map((listing) => (
        <Listing listing={listing} />
      ))}
    </ListingsGrid>
  );
}
