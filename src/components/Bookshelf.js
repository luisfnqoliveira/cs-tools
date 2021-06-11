import React, { Component } from 'react';
import SingleBookCase from './SingleBookCase';

class Bookshelf extends Component {

    render() {
        const { numOfLevels } = this.props;
        const { numOfBooksPerLevel } = this.props;
        let bookcases = [];
        for (let i = 0; i < numOfLevels; i++) {
            bookcases = [...bookcases, {
                level: i + 1,
                numOfBooks: numOfBooksPerLevel,
                books: this.props.books,
                bookcaseHeight: this.props.bookcaseHeight,
                bookcaseWidth: this.props.bookcaseWidth,
                bookstandMarginTop: this.props.bookstandMarginTop,
                bookstandMarginLeft: this.props.bookstandMarginLeft
            }];
        }
        return (
            <div className="bookshelf">
                {/* <h5 class="text-center"><strong>Bookshelf</strong></h5> */}
                {
                    bookcases.map(i => {
                        return (
                            <SingleBookCase level={i.level}
                                key={i.level}
                                numOfBooksPerLevel={i.numOfBooks}
                                bookcaseHeight={i.bookcaseHeight}
                                bookcaseWidth={i.bookcaseWidth}
                                bookstandMarginTop={i.bookstandMarginTop}
                                bookstandMarginLeft={i.bookstandMarginLeft}
                                books={i.books}
                                dragHandler={this.props.dragHandler}
                                dbclick={this.props.dbclick}
                                animationShow={this.props.animationShow}
                                bouncingBooks={this.props.bouncingBooks}
                                flyingBooks={this.props.flyingBooks}
                                handleFromUpdate={this.props.handleFromUpdate}
                                handleToUpdate={this.props.handleToUpdate}
                            />
                        )
                    })
                }

            </div>
        );
    }
}

export default Bookshelf;