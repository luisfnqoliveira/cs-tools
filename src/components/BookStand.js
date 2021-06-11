import React, { useRef, useEffect, useState } from 'react';
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

    const inputRef = useRef();

    const onWindowResize = _ => {
        updateDimension();
    };

    const updateDimension = () => {
        if (inputRef.current) {
            console.log("reset bookstand")
            let bookstand = {
                level: props.level,
                position: props.position,
                x: inputRef.current.getBoundingClientRect().x,
                y: inputRef.current.getBoundingClientRect().y
            };
            console.log("add bookstand", bookstand)
        }
    }
    useEffect(() => {
        // updateDimension();
        // window.addEventListener("resize", onWindowResize, true);
        // return () => {
        //     window.removeEventListener("resize", onWindowResize, true);
        // };
    }, []);

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
        const shelfBook = books.filter(book => book.location === 1);
        return (
            <div ref={inputRef}>
                <Tooltip placement="bottom" title={positionIntro}>
                    {/* <div
                    ref={el => {
                        if (!el) return;
                        if (props.flyingBooks.length > 0 && props.animationShow) {
                            console.log(props.flyingBooks)
                            props.flyingBooks.map(book => {
                                if (book.fromLevel === props.level && book.fromPosition === props.position) {
                                    let fromX = el.getBoundingClientRect().x
                                    let fromY = el.getBoundingClientRect().y
                                    props.handleFromUpdate(book.name, fromX, fromY)
                                }
                                if (book.toLevel === props.level && book.toPosition === props.position) {
                                    let toX = el.getBoundingClientRect().x
                                    let toY = el.getBoundingClientRect().y
                                    props.handleToUpdate(book.name, toX, toY)
                                }
                            })
                        }
                    }}> */}
                    <div className="bookstand" ref={drop}>
                        {shelfBook.map(i => {
                            if (i.level === props.level && i.position === props.position) {
                                return (
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

                                )
                            }
                        })}
                    </div>
                    {/* </div> */}
                </Tooltip>
            </div >
        );
    }
}

export default BookStand;