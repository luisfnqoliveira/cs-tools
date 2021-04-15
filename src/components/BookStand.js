import React, { Component } from 'react';
import { Tooltip } from 'antd';

class BookStand extends Component {

    render() {
        const positionIntro = "Position " + this.props.position;
        return (
            <Tooltip placement="bottom" title={positionIntro}>
                <div className="bookstand"></div>
            </Tooltip>
        );
    }
}

export default BookStand;