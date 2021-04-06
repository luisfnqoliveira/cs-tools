import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import '/Users/MAY/Desktop/cs-tools/src/App.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import { Catalog } from './Catalog.js';

import Bookshelf from './Bookshelf';
import Book from './Book';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            lib: [], catalogShow: false,
            numOfShelfLevels: 5,
            numOfBooksPerLevel: 3,
            books: [
                { name: "book1", author: "author1", level: 1, position: 1 },
                { name: "book2", author: "author2", level: 1, position: 2 },
                { name: "book3", author: "author3", level: 2, position: 3 },
                { name: "book4", author: "author4", level: 3, position: 2 },
            ]
        }
    }


    render() {
        const { lib } = this.state;
        let catalogClose = () => this.setState({ catalogShow: false });
        return (
            <div className="main" >
                <Container fluid="md">
                    <Row>
                        <h1>Search a Book in the Library</h1>
                    </Row>
                    <Row>
                        <Col>
                            <form className="form-inline mt-4 mb-4" >
                                <MDBIcon icon="search" />
                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Find a Book" aria-label="Search" 
                                onChange={event => this.setState({ query: event.target.value })}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            this.setState({ catalogShow: true })
                                        }
                                    }} />
                            </form>
                            <Catalog
                                show={this.state.catalogShow}
                                onHide={catalogClose}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                        <div className="left-side" >
                            <Bookshelf
                            numOfLevels={this.state.numOfShelfLevels}
                            numOfBooksPerLevel={this.state.numOfBooksPerLevel}
                            />
                        </div>
                        </Col>
                        <Col>
                        <div className="right-side" >
                    <Book />
                </div>
                        </Col>
                    </Row>
                </Container>
                
                
                
            </div >
        );
    }


}

export default Main;