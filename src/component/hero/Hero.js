import React, {Component} from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./Hero.css";

const API = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_API}&query=`;
const QUERY = 'Titanic';

class Hero extends Component {
  constructor() {
    super();

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch(API+QUERY)
    .then(response => response.json())
    .then(data => {console.log(data)})
  }

  render() {
    return (
      <Jumbotron fluid>
        <Container> 
          <h1 className="hero-heading">Find YOUR film</h1>
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
}

export default Hero;
