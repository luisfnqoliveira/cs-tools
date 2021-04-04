import React, { Component } from 'react';
import { Tooltip } from 'antd';
import Book from "./Book";

class SingleBookCase extends Component {

    render() {
        const levelIntro = "Level " + this.props.level;
        return (
            <Tooltip placement="leftTop" title={levelIntro}>
                <div className="bookcase">
                    {/* <Book /> */}
                </div>
            </Tooltip>
        );
    }
}

export default SingleBookCase;