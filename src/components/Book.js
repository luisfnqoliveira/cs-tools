import React from 'react';
import { Card, Popover, Badge } from 'antd';
import bookcover from '../assets/images/bookCover.jpg';
import { ItemTypes } from '../utilities/items.js';
import { useDrag } from 'react-dnd';

function Book(props) {
    const { Meta } = Card;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOOK,
        item: {
            code: props.code,
            name: props.name,
            author: props.author,
            level: props.level,
            position: props.position,
            created_date: props.created_date,
            frequency: props.frequency,
            last_borrowed: props.last_borrowed,
        },
        collect: monitor => ({
            isDragging: !!monitor.isDragging(),
        }),
    }))

    const content = (
        <div>
            <p>Created: {props.created_date}</p>
            <p>Frequency: {props.frequency}</p>
            <p>Last borrowed: {props.last_borrowed}</p>
        </div>
    );

    return (
        <div ref={drag}>
            <Badge count={props.frequency}>
                <Popover content={content} title={props.name} mouseEnterDelay={2}>
                    <Card
                        hoverable
                        style={{ left: 14, width: 70, height: 80 }}
                        cover={<img alt="bookcover" src={bookcover} />}
                    >
                        <Meta title={props.name}
                            description={props.author}
                        />
                    </Card>
                </Popover>
            </Badge>
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