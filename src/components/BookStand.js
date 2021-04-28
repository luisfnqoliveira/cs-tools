import React from 'react';
import { Tooltip } from 'antd';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utilities/items.js';
import Book from './Book.js';

function BookStand(props) {
    const positionIntro = "Position " + props.position;
    const toShelf = 1;
    const toBin = 0;
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.BOOK,
        drop: (item, monitor) => props.dragHandler(item, toShelf, toBin, props.level, props.position),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    const books = props.books;
    if (Object.keys(books).length === 0 && books.constructor === Object) {
        return (
            <Tooltip placement="bottom" title={positionIntro}>
                <div className="bookstand">
                </div>
            </Tooltip>
        );
    }
    else {
        const shelfBook = books.filter(book => book.location === 1);
        return (
            <Tooltip placement="bottom" title={positionIntro}>
                <div className="bookstand" ref={drop}>
                    {shelfBook.map(i => {
                        if (i.level === props.level && i.position === props.position) {
                            return (<Book 
                                key={i.code}
                                code={i.code}
                                name={i.name}
                                author={i.author}
                                location={i.location}
                                level={i.level}
                                position={i.position}
                                created_date={i.created_date}
                                frequency={i.frequency}
                                last_borrowed={i.last_borrowed}
                            />)
                        }
                    })}
                </div>
            </Tooltip>
        );
    }
}

export default BookStand;