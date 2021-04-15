import React, { Component } from 'react';
import { Popover } from 'antd';
import Book from './Book';

class Storage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: this.props.books,
        }
    }

    render() {
        const content = (
            <div className="book-container">
                {
                    this.state.books.map(i => {
                        return (
                            <div className='book-align-block'> 
                                <Book 
                                    title = {i.name}
                                    author = {i.author}
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
        return (
            <Popover content={content} placement="bottomRight" title="Book Storage" trigger="click">
                <div className="storage"></div>
            </Popover>
        );
    }
}

export default Storage;