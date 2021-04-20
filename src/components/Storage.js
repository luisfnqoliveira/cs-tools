import React, { Component } from 'react';
import Bin from './Bin';

class Storage extends Component {
    state = {

    }

    render() {
        const { numOfBins } = this.props;
        const { books } = this.props;
        let bins = [];
        // check if books array is empty
        if (Object.keys(this.props.books).length === 0 && this.props.books.constructor === Object) {
            for (let i = 0; i < numOfBins; i++) {
                bins = [...bins, {
                    binId: i + 1,
                    // do we need to limit number of books in each bin? 
    
                    // filter books in different bins, still need to check
                    books: null,
                }];
            }
        } else{
            for (let i = 0; i < numOfBins; i++) {
                const binBooks = books.filter(book => book.bin === i + 1);
                bins = [...bins, {
                    binId: i + 1,
                    // do we need to limit number of books in each bin? 
    
                    // filter books in different bins, still need to check
                    books: binBooks,
                }];
            }
        }

        return (
            <div className="storage">
                {
                    bins.map(i => {
                        return (
                            <Bin
                                binId={i.binId}
                                key={i.binId}
                                books= {i.books}
                                dragHandler={this.props.dragHandler} />
                        )
                    })
                }
                <h5>Book Storage</h5>
            </div>
        );
    }
}

export default Storage;