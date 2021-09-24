import React from "react";
import { ListGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchList.css";

const mapStateToProps = (state) => ({
  country: state.countries,
});

const SearchList = ({ country }) => {
  // console.log(country.name);
  return (
    <div className="search-list">
      <ListGroup>
        <ListGroup.Item className="search-li">
          {/* <Link>{country && country.name}</Link> */}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default connect(mapStateToProps)(SearchList);
{
  /* <ListGroup.Item className="search-li">
          Dapibus ac facilisis in
        </ListGroup.Item>
        <ListGroup.Item>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */
}
