import React from 'react';
import { Popover } from 'antd';
import Book from './Book';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utilities/items.js';

function Storage(props) {
    const toStorage = 0;
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.BOOK,
        drop: (item, monitor) => props.dragHandler(item, toStorage, 0, 0),
        collect: monitor => ({
            isOver: !!monitor.isOver()
        })
    })

    console.log(props.books);
    var content = (<div className="book-container"></div>);
    if (Object.keys(props.books).length === 0 && props.books.constructor === Object) {

    }
    else {
        let storageBook = props.books.filter(book => book.location === 0);
        console.log(storageBook)
        content = (
            <div className="book-container">
                {
                    storageBook.map(i => {
                        return (
                            <div className='book-align-block'>
                                <Book
                                    code={i.code}
                                    name={i.name}
                                    author={i.author}
                                    location={i.location}
                                    level={i.level}
                                    position={i.position}
                                />
                            </div>
                        );
                    })
                }
            </div>
        );
    }
    return (
        <Popover content={content} placement="bottomRight" title="Book Storage" trigger="click">
            <div className="storage" ref={drop}></div>
        </Popover>
    );
}

// class Storage extends Component {
//     // constructor(props) {
//     //     super(props);
//     //     this.state = {
//     //         books: this.props.books,
//     //     }
//     // }
//     render() {
//         console.log(this.props.books);
//         var content = (<div className="book-container"></div>);
//         if (Object.keys(this.props.books).length === 0 && this.props.books.constructor === Object) {

//         }
//         else {
//             let storageBook = this.props.books.filter(book => book.location === 0);
//             console.log(storageBook)
//             content = (
//                 <div className="book-container">
//                     {
//                         storageBook.map(i => {
//                             return (
//                                 <div className='book-align-block'>
//                                     <Book
//                                         code={i.code}
//                                         name={i.name}
//                                         author={i.author}
//                                         location={i.location}
//                                         level={i.level}
//                                         position={i.position}
//                                     />
//                                 </div>
//                             );
//                         })
//                     }
//                 </div>
//             );
//         }
//         return (
//             <Popover content={content} placement="bottomRight" title="Book Storage" trigger="click">
//                 <div className="storage" ref={drop}></div>
//             </Popover>
//         );
//     }
// }

export default Storage;