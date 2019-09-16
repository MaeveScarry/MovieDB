import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

function Hero() {
  return (
    <Jumbotron fluid>
      <Container> 
        <h1 className="hero-heading">Find YOUR film - hi sonya</h1>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">
              <FontAwesomeIcon icon={faSearch} />
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Film title"
            aria-label="Film title"
            aria-describedby="basic-addon1"
          />
        </InputGroup>
      </Container>
    </Jumbotron>
  );
}

export default Hero;
