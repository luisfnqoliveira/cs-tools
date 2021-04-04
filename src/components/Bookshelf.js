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
                numOfBooks: numOfBooksPerLevel
            }];
        }
        return (
            <div className="bookshelf">
                {
                    bookcases.map(i => {
                        return (
                            <SingleBookCase level={i.level} key={i.level}/>
                        )
                    })
                }
            </div>
        );
    }
}

export default Bookshelf;