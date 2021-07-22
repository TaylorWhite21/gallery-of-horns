import React from 'react';
import HornedBeast from './HornedBeast.js';

import CardColumns from 'react-bootstrap/CardColumns';
import Form from 'react-bootstrap/Form';



class Main extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      filterHorns: this.props.data
    }
  }

  filterHornsOnChange = e => {
    let beastList = this.props.data;
    if (e.target.value){
      beastList = beastList.filter(beast => beast.horns === parseInt(e.target.value));
    };
    this.setState({
      filterHorns: beastList,
    });

    // console.log(e.target.value)
  }

  render() {
    let hornsToRender = [];
    this.state.filterHorns.forEach((object, index) => {
      let beast =
        <HornedBeast
          key={index}
          handleShowModal={this.props.handleShowModal}
          handleCloseModal={this.props.handleCloseModal}
          imageUrl={object.image_url}
          title={object.title}
          description={object.description}
        />
      hornsToRender.push(beast);
    });


    return (
      <main>
        <Form>
          <Form.Group controlId="name">
            <Form.Label><h3>Filter by # of horns</h3></Form.Label>
            <Form.Control as="select" custom onChange={this.filterHornsOnChange}>
              <option value="">All</option>
              <option value="1">1 Horn</option>
              <option value="2">2 Horns</option>
              <option value="3">3 Horns</option>
              <option value="100">100 Horns</option>
            </Form.Control>
          </Form.Group>
        </Form>

        <CardColumns className="'card-group'">
          {hornsToRender}
        </CardColumns>
      </main>
    );
  }
}

export default Main;

