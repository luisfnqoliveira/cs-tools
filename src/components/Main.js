import React, { Component } from 'react';
import Bookshelf from './Bookshelf';
import Book from './Book';


class Main extends Component {

    state = {
        numOfShelfLevels: 5,
        numOfBooksPerLevel: 3,
        books: [
            { name: "book1", author: "author1", level: 1, position: 1 },
            { name: "book2", author: "author2", level: 1, position: 2 },
            { name: "book3", author: "author3", level: 2, position: 3 },
            { name: "book4", author: "author4", level: 3, position: 2 },
        ]
    }


    render() {
        return (
            <div className="main" >
                <div className="searchBar">

                </div>
                <div className="left-side" >
                    <Bookshelf
                        numOfLevels={this.state.numOfShelfLevels}
                        numOfBooksPerLevel={this.state.numOfBooksPerLevel}
                    />
                </div>
                <div className="right-side" >
                    <Book />
                </div>
                
                
            </div>
        );
    }
}

export default Main;