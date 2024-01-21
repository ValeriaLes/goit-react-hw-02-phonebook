import { Form, Wrapper, Input, Button } from './ContactForm.styled';
import { nanoid } from 'nanoid';
import { Component } from 'react';

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  nameId = nanoid();
  phoneId = nanoid();

  state = {
    ...INITIAL_STATE,
  };

  handleSubmit = e => {

  
    e.preventDefault();
    this.props.onSubmit({...this.state})
    this.setState({
      ...INITIAL_STATE,
    });

   
  };

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Form onSubmit={this.handleSubmit}>
        <Wrapper>
          <label htmlFor={this.nameId}>Name</label>
          <Input
            value={this.state.name}
            type="text"
            id={this.nameId}
            onChange={this.handleChange}
            name="name"
            required
          />
        </Wrapper>
        <Wrapper>
          <label htmlFor={this.phoneId}>Number</label>
          <Input
            value={this.state.number}
            type="tel"
            id={this.phoneId}
            onChange={this.handleChange}
            name="number"
            pattern="[0-9]{3}[0-9]{5}"
            placeholder="add number with 8 digits"
            required
          />
        </Wrapper>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}

export default ContactForm