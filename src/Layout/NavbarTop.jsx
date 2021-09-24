import React, { useEffect, useState, useCallback } from "react";
import { VscSearch } from "react-icons/vsc";
// import logo from "../../public/logo512.png";
// import logo from "../../src/logo.png";
import debounce from "lodash.debounce";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Row,
  ListGroup,
} from "react-bootstrap";
import "./Navbar.css";
import { connect } from "react-redux";
import { getCite } from "../actions";
import SearchList from "../Components/SearchList";

const mapStateToProps = (state) => ({
  country: state.countries,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCity: (searchCity) => dispatch(getCite(searchCity)),
});

const NavbarTop = ({ fetchCity, country }) => {
  const [searchTerm, setSearchTerm] = useState("");

  // const changeHandler = (e) => {
  //   fetchCity(e.target.value);
  // };

  const debouncedChangeHandler = debounce((e) => {
    console.log(e.nativeEvent.inputType);
    if (e.target.value.length >= 3) {
      fetchCity(e.target.value);
      setSearchTerm(e.target.value);
    }
  }, 500);
  // debounce((e) => fetchCity(e.target.value), 300),
  // []

  // useEffect(() => {
  // if (searchTerm.length > 3) {
  // fetchCity();
  // }
  // const getInfo = async () => {
  //   try {
  //     let response = await fetch(
  //     );
  //     if (response.ok) {
  //       const data = await response.json();
  //       console.log(data);
  //       // dispatch({
  //       //   type: "FETCH_CITY",
  //       //   payload: data,
  //       // });
  //     } else {
  //       console.log("not fetch");
  //     }
  //   } catch (error) {
  //     // console.log(error);
  //   }
  // };
  // getInfo();
  // }, []);

  // const hendLerSubmit = () => {};

  return (
    <header className="nav-bg">
      <Container>
        <Navbar
          expand="lg"
          className="justify-content-between align-items-center"
        >
          {/* <Container> */}
          {/* <div className="d-flex  align-items-center justify-content-between"> */}
          <Navbar.Brand href="#home">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/The_Weather_Channel_logo_2005-present.svg/1200px-The_Weather_Channel_logo_2005-present.svg.png"
              alt=""
              style={{ width: "80px" }}
            />

            <img
              src="data:image/png;base64,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"
              alt=""
              style={{ width: "150px", marginLeft: "10px" }}
            />
          </Navbar.Brand>
          {/* onSubmit={hendLerSubmit} */}
          <Form className="form-search-top ">
            <div className="form-search-input">
              <FormControl
                onChange={debouncedChangeHandler}
                // setSearchTerm(e.target.value);
                // fetchCity(e.target.value);

                // defaultValue={searchTerm}
                type="search"
                placeholder="Search City or Zip Code"
                className=" search-form"
                aria-label="Search "
              />
              {/* searchTerm */}
              {country.name ? <SearchList /> : null}
              {/* {searchTerm ? <SearchList /> : ""} */}
              {/* {console.log(country.name ? "yes" : "not")} */}

              {/* <VscSearch className="icon-search" /> */}
            </div>
            {/* <Button variant="outline-success">Search</Button> */}
          </Form>

          <div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Something
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </div>
          {/* </div> */}
          {/* </Container> */}
        </Navbar>
      </Container>
    </header>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(NavbarTop);
// mapDispatchToProps
