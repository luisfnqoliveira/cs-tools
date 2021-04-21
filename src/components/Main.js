import React, { Component } from 'react';
// import SplitPane from "react-split-pane";
import Bookshelf from './Bookshelf';
import "../styles/Main.css";
import "antd/dist/antd.css";
import Container from 'react-bootstrap/Container';
import '../App.js';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import { Catalog } from './Catalog.js';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Storage from './Storage';

function getStoredBooks() {
    const retrievedBooksString = localStorage.getItem('STORED_BOOK_KEY');
    if (!retrievedBooksString) {
        localStorage.setItem('STORED_BOOK_KEY', "[]")
        return [];
    }
    return JSON.parse(retrievedBooksString);
}

function allStorage() {
    var archive = {};
    {
        Object.entries(localStorage).map(([key, valueJSON]) => {
            const value = JSON.parse(valueJSON);
            archive = value;
        }
        )
    }
    return (archive)
}

class Main extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            lib: [],
            catalogShow: false,
            numOfShelfLevels: 5,
            numOfBooksPerLevel: 3,
            numOfBins: 4,
            books: allStorage(), // location: 0-storage; 1-bookshelf
            query: ''
        }
    }

    // dragHandler = (item, toLocation, toBin, toLevel, toPosition) => {
    //     let booksCopy = [...this.state.books];
    //     let bookDragged = booksCopy.filter(book => book.code === item.code);
    //     let index = booksCopy.indexOf(bookDragged[0]);
    //     bookDragged[0].location = toLocation;
    //     bookDragged[0].bin = toBin;
    //     bookDragged[0].level = toLevel;
    //     bookDragged[0].position = toPosition;
    //     booksCopy[index] = bookDragged[0];
    //     this.setState({ books: booksCopy });


    //     var storedBooks = getStoredBooks();
    //     for (var i = 0; i < storedBooks.length; i++){
    //         if (storedBooks[i].code === item.code) {
    //             storedBooks[i].name = item.name;
    //             storedBooks[i].location = toLocation;
    //             storedBooks[i].bin = toBin;
    //             storedBooks[i].level = toLevel;
    //             storedBooks[i].position = toPosition
    //         }
    //     }

    //     var storedBooksJson = JSON.stringify(storedBooks);
    //     console.log("storedBooksJson", storedBooksJson)
    //     localStorage.setItem("STORED_BOOK_KEY", storedBooksJson);
    //     window.location.reload();
    // }
    dragHandler = (item, toLocation, toBin, toLevel, toPosition) => {
        let booksCopy = [...this.state.books];
        let bookDragged = booksCopy.filter(book => book.code === item.code);
        let index = booksCopy.indexOf(bookDragged[0]);
        bookDragged[0].location = toLocation;
        bookDragged[0].bin = toBin;
        bookDragged[0].level = toLevel;
        bookDragged[0].position = toPosition;
        booksCopy[index] = bookDragged[0];
        this.setState({ books: booksCopy });

        var is_empty = 0;
        var storedBooks = getStoredBooks();
        for (var i = 0; i < storedBooks.length; i++) {
            if (storedBooks[i].level === toLevel && storedBooks[i].position === toPosition && storedBooks[i] && storedBooks[i].location ===1) {
                is_empty = 1;
            }
        }

        if (is_empty === 0) {
            for (var i = 0; i < storedBooks.length; i++) {
                if (storedBooks[i].code === item.code) {
                    storedBooks[i].name = item.name;
                    storedBooks[i].location = toLocation;
                    storedBooks[i].bin = toBin;
                    storedBooks[i].level = toLevel;
                    storedBooks[i].position = toPosition
                }

                var storedBooksJson = JSON.stringify(storedBooks);
                console.log("storedBooksJson", storedBooksJson)
                localStorage.setItem("STORED_BOOK_KEY", storedBooksJson);
            }
        }
        window.location.reload();
    }

        catalogClose = () => this.setState({ catalogShow: false });

        render() {
            const value = this.props.value;
            const { lib } = this.state;

            return (
                <div className="main" >
                    <Container fluid="lg">
                        <Row>
                            <Col>
                                <div className="search-monitor">
                                    <div className="search-container">
                                        <Row>
                                            <p>Search a Book in the Library</p>
                                        </Row>
                                        <Row>
                                            <div className="form-inline mt-4 mb-4" >
                                                <MDBIcon icon="search" />
                                                <input className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Find a Book" aria-label="Search"
                                                    value={this.state.query}
                                                    // onSubmit={event => this.setState({ query: event.target.value })}
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
                                        </Row>
                                    </div>
                                </div>
                            </Col>
                            <DndProvider backend={HTML5Backend}>
                                <Col className="bookshelf-view">
                                    <div>
                                        <Bookshelf
                                            numOfLevels={this.state.numOfShelfLevels}
                                            numOfBooksPerLevel={this.state.numOfBooksPerLevel}
                                            books={this.state.books}
                                            dragHandler={this.dragHandler.bind(this)}
                                        />
                                    </div>
                                </Col>
                                <Col className="storage-view">
                                    <div className={(value === "Student") ? "wrapper" : ""}>
                                        <div className={(value === "Student") ? "is-disabled" : ""}>
                                            <Storage
                                                books={this.state.books}
                                                numOfBins={this.state.numOfBins}
                                                dragHandler={this.dragHandler.bind(this)}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </DndProvider>
                        </Row>
                    </Container>
                </div >
            );
        }
    }

    export default Main;