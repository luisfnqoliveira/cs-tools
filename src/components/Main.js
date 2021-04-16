import React, { Component } from 'react';
import SplitPane from "react-split-pane";
import Bookshelf from './Bookshelf';
import Book from './Book';
import "../styles/Main.css";
import "antd/dist/antd.css";
import Container from 'react-bootstrap/Container';
import '../App.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import { Catalog } from './Catalog.js';
import Storage from './Storage';

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lib: [], catalogShow: false,
            numOfShelfLevels: 5,
            numOfBooksPerLevel: 3,
            books: [
                // location: 0 - storage; 1 - bookshelf --> level,position
                { name: "book1", author: "author1", location: 0 },
                { name: "book2", author: "author2", location: 0 },
                { name: "book3", author: "author3", location: 0 },
                { name: "book4", author: "author4", location: 0 },
                { name: "book5", author: "author1", location: 0 },
                { name: "book6", author: "author2", location: 0 },
                { name: "book7", author: "author3", location: 0 },
                { name: "book8", author: "author4", location: 0 },
                { name: "book9", author: "author1", location: 0 },
                { name: "book10", author: "author2", location: 0 },
                { name: "book11", author: "author3", location: 0 },
                { name: "book12", author: "author4", location: 0 },
            ],
            query: ''
        }
    }

    catalogClose = () => this.setState({ catalogShow: false });

    render() {
        const value = this.props.value;
        const { lib } = this.state;


        return (
            <div className="main" >
                <Container fluid="md">
                    <Row>
                        <h1>Search a Book in the Library</h1>
                    </Row>
                    <Row>
                        <Col>
                            <div className="form-inline mt-4 mb-4" >
                                <MDBIcon icon="search" />
                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Find a Book" aria-label="Search"
                                    value={this.state.query}
                                    onChange={event => this.setState({ query: event.target.value })}
                                    onKeyPress={event => {
                                        if (event.key === 'Enter') {
                                            if (!this.state.query) {
                                                alert('Please input a name!');
                                            } else {
                                                this.setState({ catalogShow: true, value: event.target.value })
                                            }
                                        }
                                    }} />
                            </div>
                            <Catalog
                                query={this.state.query}
                                show={this.state.catalogShow}
                                onHide={this.catalogClose}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <SplitPane
                            split="vertical"
                            defaultSize="50%"
                            minSize={100}
                            maxSize={-100}
                            style={{ position: "static" }}
                        // pane1Style={{ backgroundColor: "#A8D0E6" }}
                        // pane2Style={{ backgroundColor: "#24305E" }}
                        >
                            <div>
                                {/* left side */}
                                <Bookshelf
                                    numOfLevels={this.state.numOfShelfLevels}
                                    numOfBooksPerLevel={this.state.numOfBooksPerLevel}
                                />
                            </div>
                            <div className={(value === "Student") ? "wrapper" : ""}>
                                <div className={(value === "Student") ? "is-disabled" : ""}>
                                    {/* right side */}
                                    <Storage
                                        books={this.state.books}
                                    />
                                </div>
                            </div>
                        </SplitPane>
                    </Row>
                </Container>
            </div >
        );
    }


}

export default Main;