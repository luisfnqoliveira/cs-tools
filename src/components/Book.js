import React from 'react';
import { Card, Popover, Badge } from 'antd';
import bookcover from '../assets/images/bookCover.jpg';
import { ItemTypes } from '../utilities/items.js';
import { useDrag } from 'react-dnd';
import { message } from 'antd';
// import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';

function Book(props) {
    const { Meta } = Card;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOOK,
        item: {
            code: props.code,
            name: props.name,
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

    if (!props.animationShow) {
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
                                onClick={() => {
                                    if (props.name === props.query)
                                        message.success("You have successfully retrieved " + props.name);
                                }}
                            />
                        </Card>
                    </Popover>
                </Badge>
            </div>
        );
    }
    else {
        return (
            <div ref={drag}>
                {props.bouncingBooks.some(book => book.code === props.code) === false &&
                    <Badge count={props.frequency}>
                        <Popover content={content} title={props.name} mouseEnterDelay={2}>
                            <Card
                                hoverable
                                style={{ left: 14, width: 70, height: 80 }}
                                cover={<img alt="bookcover" src={bookcover} />}
                            >
                                <Meta title={props.name}
                                    description={props.author}
                                    onClick={() => {
                                        if (props.name === props.query)
                                            message.success("You have successfully retrieved " + props.name);
                                    }}
                                />
                            </Card>
                        </Popover>
                    </Badge>}
                {props.bouncingBooks.map(book => {
                    if (book.code === props.code) {
                        return (
                            <div ref={drag}>
                                <TweenOne
                                    animation={animation}
                                //   paused={true}
                                //   className="code-box-shape"
                                //   style={{
                                //     position: 'absolute',
                                //     transformOrigin: 'center bottom',
                                //   }}
                                >
                                    <Badge count={props.frequency}>
                                        <Popover content={content} title={props.name} mouseEnterDelay={2}>
                                            <Card
                                                hoverable
                                                style={{ left: 14, width: 70, height: 80 }}
                                                cover={<img alt="bookcover" src={bookcover} />}
                                            >
                                                <Meta title={props.name}
                                                    description={props.author}
                                                    onClick={() => {
                                                        if (props.name === props.query)
                                                            message.success("You have successfully retrieved " + props.name);
                                                    }}
                                                />
                                            </Card>
                                        </Popover>
                                    </Badge>
                                </TweenOne>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Book;