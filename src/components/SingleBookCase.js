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
            }];
        }
        return (
            <Tooltip placement="leftTop" title={levelIntro}>
                <div className="bookcase">
                    {
                        bookstands.map(i => {
                            return (
                                <div className="single">
                                    <BookStand 
                                        position={i.position}
                                        key={i.position}
                                        level={i.level}
                                        books={i.books}
                                        dragHandler = {this.props.dragHandler}
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