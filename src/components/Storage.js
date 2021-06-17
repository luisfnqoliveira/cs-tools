import React, { Component } from 'react';
import Bin from './Bin';
import TweenOne from 'rc-tween-one';

class Storage extends Component {
    state = {

    }

    render() {
        const p0 = 'M0,100 L25,100 C34,20 40,0 100,0';
        const p1 = 'M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100';
        const ease0 = TweenOne.easing.path(p0);
        const ease1 = TweenOne.easing.path(p1);

        const animation = [
            {
                // repeatDelay: 300,
                y: -70,
                repeat: 1,
                yoyo: true,
                ease: ease0,
                duration: 500
            },
            {
                // repeatDelay: 300,
                appearTo: 0,
                scaleX: 0,
                scaleY: 2,
                repeat: 1,
                yoyo: true,
                ease: ease1,
                duration: 500,
            }
        ];
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
                    books: [],
                }];
            }
        } else {
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

        if (this.props.animationShow) {
            return (
                <div className="storage">
                    <h5><strong>Book Storage</strong></h5>
                    {
                        bins.map(i => {
                            if (this.props.bouncingBooks.some(book => book.bin === i.binId)) {
                                return (
                                    <TweenOne animation={animation}>
                                        <Bin
                                            binId={i.binId}
                                            key={i.binId}
                                            books={i.books}
                                            dragHandler={this.props.dragHandler}
                                            animationShow={this.props.animationShow}
                                            bounceBook={this.props.bounceBook}
                                            flyingBooks={this.props.flyingBooks}
                                            handleFromUpdate={this.props.handleFromUpdate}
                                            handleToUpdate={this.props.handleToUpdate}
                                        />
                                    </TweenOne>
                                )
                            }
                            else {
                                return (
                                    <Bin
                                        binId={i.binId}
                                        key={i.binId}
                                        books={i.books}
                                        dragHandler={this.props.dragHandler}
                                        animationShow={this.props.animationShow}
                                        bounceBook={this.props.bounceBook}
                                        flyingBooks={this.props.flyingBooks}
                                        handleFromUpdate={this.props.handleFromUpdate}
                                        handleToUpdate={this.props.handleToUpdate}
                                    />
                                )
                            }
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <div className="storage">
                    <h5><strong>Book Storage</strong></h5>
                    {
                        bins.map(i => {
                            return (
                                <Bin
                                    binId={i.binId}
                                    key={i.binId}
                                    books={i.books}
                                    dragHandler={this.props.dragHandler}
                                    animationShow={this.props.animationShow}
                                    bounceBook={this.props.bounceBook}
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
}

export default Storage;