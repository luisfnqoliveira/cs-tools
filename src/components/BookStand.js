import React, { useRef, useEffect } from 'react';
import { Tooltip } from 'antd';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utilities/items.js';
import Book from './Book.js';

function BookStand(props) {
    // console.log("render bookstand")
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

    const bookstandRef = useRef();
    var bookshelfDim = props.bookshelfDim;

    const onWindowResize = _ => {
        updateDimension();
    };

    const updateDimension = () => {
        if (bookstandRef.current) {
            let Newbookstand = {
                level: props.level,
                position: props.position,
                x: bookstandRef.current.getBoundingClientRect().x,
                y: bookstandRef.current.getBoundingClientRect().y
            };
            let index = bookshelfDim.findIndex(stand => stand.level === props.level && stand.position === props.position)
            if (index === -1) {
                bookshelfDim.push(Newbookstand)
            }
            else {
                bookshelfDim[index] = Newbookstand
            }
            return bookshelfDim;
        }
    }

    // React.useLayoutEffect(() => {
    //     setTimeout(() => console.log(inputRef.current.getBoundingClientRect()),
    //         100
    //     );
    // });
    useEffect(() => {
        console.log("bookstand use effect")
        props.updateBookshelfDim(updateDimension())
        window.addEventListener("resize", onWindowResize, true);
        return () => {
            window.removeEventListener("resize", onWindowResize, true);
        };
    }, [props.numOfLevels, props.numOfBooksPerLevel, props.showStepsInfo]);

    document.addEventListener("drop", function (event) {
        event.preventDefault();
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
        let shelfBook = books.filter(book => book.location === 1);
        return (
            <div ref={bookstandRef}>
                <Tooltip placement="bottom" title={positionIntro}>
                    <div className="bookstand" ref={drop}>
                        {shelfBook.map(i => {
                            if (i.level === props.level && i.position === props.position) {
                                return (
                                    <Book
                                        key={i.code}
                                        code={i.code}
                                        name={i.name}
                                        created_date={i.created_date}
                                        frequency={i.frequency}
                                        last_borrowed={i.last_borrowed}
                                        animationShow={props.animationShow}
                                        bouncingBooks={props.bouncingBooks}
                                        flyingBooks={props.flyingBooks}
                                    />
                                )
                            }
                        })}
                        {props.animationShow &&
                            props.bouncingBooks.map(book => {
                                let alreadyOnShelf = shelfBook.some(i => i.code === book.code)
                                if (alreadyOnShelf === false && book.level === props.level && book.position === props.position) {
                                    return (
                                        <Book
                                            key={book.code}
                                            code={book.code}
                                            name={book.name}
                                            created_date={book.created_date}
                                            frequency={book.frequency}
                                            last_borrowed={book.last_borrowed}
                                            animationShow={props.animationShow}
                                            bouncingBooks={props.bouncingBooks}
                                            flyingBooks={props.flyingBooks}
                                        />
                                    );
                                }
                            })}
                    </div>
                </Tooltip>
            </div >
        );
    }
}

export default BookStand;