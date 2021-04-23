import React, { Component } from 'react';
import SingleBookCase from './SingleBookCase';

class Bookshelf extends Component {

    state = {

    }

    render() {
        const { numOfLevels } = this.props;
        const { numOfBooksPerLevel } = this.props;
        let bookcases = [];
        for (let i = 0; i < numOfLevels; i++) {
            bookcases = [...bookcases, {
                level: i + 1,
                numOfBooks: numOfBooksPerLevel,
                books: this.props.books
            }];
        }
        return (
            <div className="bookshelf">
                <h5 class="text-center"><strong>Bookshelf</strong></h5>
                {
                    bookcases.map(i => {
                        return (
                            <SingleBookCase level={i.level}
                                key={i.level}
                                numOfBooksPerLevel={i.numOfBooks}
                                books={i.books}
                                dragHandler={this.props.dragHandler} />
                        )
                    })
                }

            </div>
        );
    }
}

export default Bookshelf;