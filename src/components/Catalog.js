import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export class Catalog extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Library Catalog
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>Library Catalog Card</h4>
          <p>
            Book Name: 
          </p>
          <p>
            Location:
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button type = "button" onClick={this.props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

