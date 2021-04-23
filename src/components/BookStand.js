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
        // console.log(shelfBook);
        return (
            <Tooltip placement="bottom" title={positionIntro}>
                <div className="bookstand" ref={drop}>
                    {shelfBook.map(i => {
                        if (i.level === props.level && i.position === props.position) {
                            return (<Book code={i.code}
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
                    {/* {isOver && (
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            height: '100%',
                            width: '100%',
                            zIndex: 1,
                            opacity: 0.5,
                            backgroundColor: 'yellow',
                        }}
                    />
                )} */}
                </div>
            </Tooltip>
        );
    }
}
// class BookStand extends Component {

//     render() {
//         const positionIntro = "Position " + this.props.position;
//         return (
//             <Tooltip placement="bottom" title={positionIntro}>
//                 <div className="bookstand" ref={drop}></div>
//             </Tooltip>
//         );
//     }
// }

export default BookStand;