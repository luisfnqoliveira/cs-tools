import React, { Component } from 'react';
import { Tooltip } from 'antd';
import BookStand from './BookStand';

class SingleBookCase extends Component {

    render() {
        // console.log("render bookcase")
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
                                <div key={i.position} className="single" style={bookstandMargin}>
                                    <BookStand
                                        position={i.position}
                                        level={i.level}
                                        books={i.books}
                                        numOfLevels={this.props.numOfLevels}
                                        numOfBooksPerLevel={this.props.numOfBooksPerLevel}
                                        bookcaseHeight={i.bookcaseHeight}
                                        bookcaseWidth={i.bookcaseWidth}
                                        bookstandMarginTop={i.bookstandMarginTop}
                                        dragHandler={this.props.dragHandler}
                                        animationShow={this.props.animationShow}
                                        bouncingBooks={this.props.bouncingBooks}
                                        flyingBooks={this.props.flyingBooks}
                                        bookshelfDim={this.props.bookshelfDim}
                                        updateBookshelfDim={this.props.updateBookshelfDim}
                                        showStepsInfo={this.props.showStepsInfo}
                                        onAnimComplete={this.props.onAnimComplete}
                                    />
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