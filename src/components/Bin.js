import React, { useRef, useEffect } from 'react';
import { Popover, Tooltip } from 'antd';
import Book from './Book';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utilities/items.js';

function Bin(props) {
    // console.log("render bin")
    const toStorage = 0;
    const toBin = props.binId;
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.BOOK,
        drop: (item, monitor) => props.dragHandler(item, toStorage, toBin, 0, 0),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    const binRef = useRef();
    var storageDim = props.storageDim;

    const onWindowResize = _ => {
        updateDimension();
    };

    const updateDimension = () => {
        if (binRef.current) {
            let NewBin = {
                binId: props.binId,
                x: binRef.current.getBoundingClientRect().x,
                y: binRef.current.getBoundingClientRect().y
            };
            let index = storageDim.findIndex(bin => bin.binId === props.binId)
            if (index === -1) {
                storageDim.push(NewBin)
            }
            else {
                storageDim[index] = NewBin
            }
            return storageDim;
        }
    }

    useEffect(() => {
        props.updateStorageDim(updateDimension())
        window.addEventListener("resize", onWindowResize, true);
        return () => {
            window.removeEventListener("resize", onWindowResize, true);
        };
    }, [props.numOfLevels, props.numOfBooksPerLevel, props.showStepsInfo]);

    var content = (<div className="book-container"></div>);
    const binTitle = "Bin " + props.binId;
    if (Object.keys(props.books).length === 0 && props.books.constructor === Object) {

    } else {
        // TODO: not only for location == 0, also need to seperate them by different bins
        let storageBook = props.books.filter(book => book.location === 0);
        if (!props.animationShow) {
            content = (
                <div className="book-container">
                    {
                        storageBook.map(i => {
                            return (
                                <div key={i.code} className='book-align-block'>
                                    <Book
                                        code={i.code}
                                        name={i.name}
                                        created_date={i.created_date}
                                        frequency={i.frequency}
                                        last_borrowed={i.last_borrowed}
                                        animationShow={props.animationShow}
                                        bouncingBooks={props.bouncingBooks}
                                        flyingBooks={props.flyingBooks}
                                        onAnimComplete={props.onAnimComplete}
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            );
        }
        else {
            content = (
                <div className="book-container">
                    {
                        storageBook.map(i => {
                            let alreadyOnBin = props.flyingBooks.some(book => book.code === i.code)
                            if (alreadyOnBin === false) {
                                return (
                                    <div key={i.code} className='book-align-block'>
                                        <Book
                                            code={i.code}
                                            name={i.name}
                                            created_date={i.created_date}
                                            frequency={i.frequency}
                                            last_borrowed={i.last_borrowed}
                                            animationShow={props.animationShow}
                                            bouncingBooks={props.bouncingBooks}
                                            flyingBooks={props.flyingBooks}
                                            onAnimComplete={props.onAnimComplete}
                                        />
                                    </div>
                                );
                            }
                        })
                    }
                </div>
            );
        }
    }
    return (
        <Tooltip placement="top" title={binTitle}>
            <Popover content={content} placement="top" title={binTitle} trigger="click">
                <div ref={binRef}>
                    <div className="bin" ref={drop}>
                        {props.animationShow &&
                            props.flyingBooks.map(i => {
                                if (i.from.bin === props.binId) {
                                    return (
                                        <div key={i.code} style={{
                                            justifySelf: 'left',
                                            // pointerEvents: 'auto',
                                        }}>
                                            <Book
                                                code={i.code}
                                                name={i.name}
                                                created_date={i.created_date}
                                                frequency={i.frequency}
                                                last_borrowed={i.last_borrowed}
                                                animationShow={props.animationShow}
                                                bouncingBooks={props.bouncingBooks}
                                                flyingBooks={props.flyingBooks}
                                                onAnimComplete={props.onAnimComplete}
                                            />
                                        </div>
                                    );
                                } else {
                                    return (
                                        <div></div>
                                    )
                                }

                            })}
                    </div>
                </div>
            </Popover>
        </Tooltip>
    );
}

export default Bin;