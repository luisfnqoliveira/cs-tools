import React, { Component } from 'react';
import { Card } from 'antd';
import bookcover from '../assets/images/bookCover.jpg';

const { Meta } = Card;

class Book extends Component {

    render() {
        return (
            <Card
                hoverable
                style={{ width: 80, height:  100}}
                cover={<img alt="bookcover" src={bookcover} />}
            >
                <Meta title={this.props.title} 
                      description={this.props.author}
                />
            </Card>
        );
    }
}

export default Book;