import React from 'react';
import { Card, Popover, Badge, message } from 'antd';
import bookcover from '../assets/images/bookCover.jpg';
import { ItemTypes } from '../utilities/items.js';
import { useDrag } from 'react-dnd';
// import PropTypes from 'prop-types';
import TweenOne from 'rc-tween-one';
import BezierPlugin from 'rc-tween-one/lib/plugin/BezierPlugin';
TweenOne.plugins.push(BezierPlugin);

function Book(props) {
    // console.log("render book")
    const { Meta } = Card;
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.BOOK,
        item: {
            code: props.code,
            name: props.name,
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

    const bounce = [
        {
            y: -70,
            repeat: 1,
            yoyo: true,
            ease: ease0,
            duration: 500
        },
        {
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
                            style={{ left: 14, width: 70, height: 80, pointerEvents: 'auto' }}
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
            <div>
                {(props.bouncingBooks.some(book => book.code === props.code) === false) &&
                    (props.flyingBooks.some(book => book.code === props.code) === false) &&
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
                }
                {props.bouncingBooks.map(book => {
                    if (book.code === props.code) {
                        return (
                            <div ref={drag}>
                                <TweenOne
                                    animation={bounce}
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
                {props.flyingBooks.map(book => {
                    if (book.code === props.code) {
                        return (
                            <div ref={drag}>
                                <TweenOne
                                    animation={{
                                        bezier: {
                                            type: 'thru',
                                            vars: [book.bezier],
                                        },
                                        duration: 1500,
                                    }}
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