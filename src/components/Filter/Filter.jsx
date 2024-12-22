import { Component } from 'react';

export class Filter extends Component {
  handleChange = ({ target }) => {
    this.props.findContact(target.value);
  };

  render() {
    return (
      <div>
        <label>Find contacts by name</label>
        <input type="text" name="filter" onChange={this.handleChange} />
      </div>
    );
  }
}
