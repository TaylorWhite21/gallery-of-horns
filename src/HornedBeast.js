import React from 'react';
import './HornedBeast.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class HornedBeast extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      amountOnHand: 0,
    }
  };

  plusOne = () => {
    this.setState({
      amountOnHand: this.state.amountOnHand + 1,
    })
  };

  subtractOne = () => {
    this.setState({
      amountOnHand: this.state.amountOnHand - 1,
    })
  };


  render() {
    return (
      <Card>
        <Card.Img style={{width:'250px'}} variant="top" src={this.props.imageUrl} alt="" title={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <Card.Text id="likes">
            {this.state.amountOnHand}
            <img id="emoji" src="https://emoji.gg/assets/emoji/4244-zerotwo-heart2.png" alt="zero two with heart" />
            <p>{this.props.description}</p>
            <Button variant="success" onClick={this.plusOne}>Like</Button>
            <Button variant="danger" onClick={this.subtractOne}>Unlike</Button>
          </Card.Text>
        </Card.Body>
      </Card>
    )
  }
}

export default HornedBeast;
