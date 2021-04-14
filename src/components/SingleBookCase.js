import React, { Component } from 'react';
import { Tooltip } from 'antd';
import Book from "./Book";
import BookStand from './BookStand';

class SingleBookCase extends Component {

    render() {
        const levelIntro = "Level " + this.props.level;
        const { numOfBooksPerLevel } = this.props;
        let bookstands = [];
        for (let i = 0; i < numOfBooksPerLevel; i++) {
            bookstands = [...bookstands, {
                position: i + 1,
            }];
        }
        return (
            <Tooltip placement="leftTop" title={levelIntro}>
                <div className="bookcase">
                    {
                        bookstands.map(i => {
                            return (
                                <div className="single">
                                    <BookStand position={i.position} key={i.position}/>
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