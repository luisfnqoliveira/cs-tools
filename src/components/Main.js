import React, { Component } from 'react';
import SplitPane from "react-split-pane";
import Bookshelf from './Bookshelf';
import Book from './Book';
import "../styles/Main.css";
import "antd/dist/antd.css";

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
        const value = this.props.value;
        return (
            <div className="main" >
                {/* <div className="searchBar"> */}

                <SplitPane 
                    split="vertical" 
                    defaultSize="50%"
                    minSize={100}
                    maxSize={-100}
                    style={{position:"static"}}
                    // pane1Style={{ backgroundColor: "#A8D0E6" }}
                    // pane2Style={{ backgroundColor: "#24305E" }}
                >
                    <div>
                        <Bookshelf
                            numOfLevels={this.state.numOfShelfLevels}
                            numOfBooksPerLevel={this.state.numOfBooksPerLevel}
                        />
                    </div>
                    <div className={(value==="Student") ? "wrapper" : ""}>
                        <div className={(value==="Student") ? "is-disabled" : ""}>
                            <Book />
                        </div>
                    </div>
                </SplitPane>  
            </div>
        );
    }
}

export default Main;