import React, { Component } from 'react';
import { Popover } from 'antd';
import Book from './Book';

class Storage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         books: this.props.books,
    //     }
    // }

    render() {
        let storageBook = this.props.books.filter(book => book.location === 0);
        const content = (
            <div className="book-container">
                {
                    storageBook.map(i => {
                        return (
                            <div className='book-align-block'> 
                                <Book
                                    code = {i.code}
                                    title = {i.name}
                                    author = {i.author}
                                    location = {i.location}
                                    level = {i.level}
                                    position = {i.position}
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