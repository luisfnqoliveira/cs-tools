import React from 'react';
import { Popover, Tooltip } from 'antd';
import Book from './Book';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utilities/items.js';

function Bin(props) {
    const toStorage = 0;
    const toBin = props.binId;
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.BOOK,
        drop: (item, monitor) => props.dragHandler(item, toStorage, toBin, 0, 0),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    var content = (<div className="book-container"></div>);
    const binTitle = "Bin " + props.binId;
    if (Object.keys(props.books).length === 0 && props.books.constructor === Object) {

    } else {
        // TODO: not only for location == 0, also need to seperate them by different bins
        let storageBook = props.books.filter(book => book.location === 0);
        content = (
            <div className="book-container">
                {
                    storageBook.map(i => {
                        return (
                            <div className='book-align-block'>
                                <Book
                                    key={i.code}
                                    code={i.code}
                                    name={i.name}
                                    // author={i.author}
                                    location={i.location}
                                    level={i.level}
                                    position={i.position}
                                    created_date={i.created_date}
                                    frequency={i.frequency}
                                    last_borrowed={i.last_borrowed}
                                    animationShow={props.animationShow}
                                    bouncingBooks={props.bouncingBooks}
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <Tooltip placement="top" title={binTitle}>
            <Popover content={content} placement="top" title={binTitle} trigger="click">
                {/* <div className="bin"> */}
                     {/* ref={el => {
                        if (zz!el) return;
                        if (props.flyingBooks) {
                            props.flyingBooks.map(book => {
                                if (book.fromBin === props.binId) {
                                    let fromX = el.getBoundingClientRect().x
                                    let fromY = el.getBoundingClientRect().y
                                    props.handleFromUpdate(book.name, fromX, fromY)
                                }
                                if (book.toBin === props.binId) {
                                    let toX = el.getBoundingClientRect().x
                                    let toY = el.getBoundingClientRect().y
                                    props.handleToUpdate(book.name, toX, toY)
                                }
                            })
                        } */}
                    <div className="bin" ref={drop}></div>
                {/* </div> */}
            </Popover>
        </Tooltip>
    );
}

export default Bin;