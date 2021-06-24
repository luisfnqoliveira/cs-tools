import React, { PureComponent } from 'react';
import SingleBookCase from './SingleBookCase';

class Bookshelf extends PureComponent {
    // shouldComponentUpdate(nextProps, nextState) {
    //     return nextProps !== this.props
    // }

    render() {
        // console.log("render bookshelf")
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
                                numOfLevels={this.props.numOfLevels}
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
                                bookshelfDim={this.props.bookshelfDim}
                                updateBookshelfDim={this.props.updateBookshelfDim}
                                showStepsInfo={this.props.showStepsInfo}
                                onAnimComplete={this.props.onAnimComplete}
                            />
                        )
                    })
                }

            </div>
        );
    }
}

export default Bookshelf;