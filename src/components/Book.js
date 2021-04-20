import React from 'react';
import { Card } from 'antd';
import bookcover from '../assets/images/bookCover.jpg';
import {ItemTypes} from '../utilities/items.js';
import { useDrag } from 'react-dnd';

function Book(props) {
    const { Meta } = Card;
    const [{isDragging}, drag] = useDrag(() => ({
        type: ItemTypes.BOOK,
        item: {
            code: props.code,
            name: props.name,
            author: props.author,
            level: props.level,
            position: props.position
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    return(
        <div ref = {drag}>
            <Card
                hoverable
                style={{ width: 80, height:  100}}
                cover={<img alt="bookcover" src={bookcover} />}
            >
                <Meta title={props.name} 
                      description={props.author}
                />
            </Card>
        </div>
    );
}
// const { Meta } = Card;

// class Book extends Component {

//     render() {
//         return (
//             <Card
//                 hoverable
//                 style={{ width: 80, height:  100}}
//                 cover={<img alt="bookcover" src={bookcover} />}
//             >
//                 <Meta title={this.props.title} 
//                       description={this.props.author}
//                 />
//             </Card>
//         );
//     }
// }

export default Book;