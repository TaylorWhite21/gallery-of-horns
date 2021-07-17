import React from 'react';
import './SelectedBeast.css';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component {


  render() {
    return (
      <Modal size="lg" show={this.props.handleShowModal} onHide={this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            <h3>{this.props.beast.title}</h3>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img id="modalImage" src= {this.props.beast.image_url} alt={this.props.beast.title}/>
          <p>{this.props.beast.description}</p>
        </Modal.Body>
      </Modal>
    );
  }
}

export default SelectedBeast;
