import React, { Component } from 'react';
import { Tooltip } from 'antd';
import BookStand from './BookStand';

class SingleBookCase extends Component {

    render() {
        const levelIntro = "Level " + this.props.level;
        const { numOfBooksPerLevel } = this.props;
        let bookstands = [];
        for (let i = 0; i < numOfBooksPerLevel; i++) {
            bookstands = [...bookstands, {
                position: i + 1,
                level: this.props.level,
                books: this.props.books,
                bookstandMarginTop: this.props.bookstandMarginTop,
                bookstandMarginLeft: this.props.bookstandMarginLeft
            }];
        }

        let bookcaseSize = {
            height: this.props.bookcaseHeight,
            width: this.props.bookcaseWidth,
        }

        return (
            <Tooltip placement="leftTop" title={levelIntro}>
                <div className="bookcase" style={bookcaseSize}>
                    {
                        bookstands.map(i => {
                            let bookstandMargin = {
                                marginTop: i.bookstandMarginTop,
                                marginLeft: i.bookstandMarginLeft
                            }
                            return (
                                <div className="single" style={bookstandMargin}>
                                    <BookStand
                                        position={i.position}
                                        key={i.position}
                                        level={i.level}
                                        books={i.books}
                                        bookcaseHeight={i.bookcaseHeight}
                                        bookcaseWidth={i.bookcaseWidth}
                                        bookstandMarginTop={i.bookstandMarginTop}
                                        dragHandler={this.props.dragHandler} />
                                </div>
                            )
                        })
                    }
                </div>
            </Tooltip>
        );
    }
}

export default SingleBookCase;