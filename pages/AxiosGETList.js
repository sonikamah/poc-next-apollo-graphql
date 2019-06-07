import React from 'react';
import axios from 'axios';
import Header from '../components/Header';

export default class AxiosGETList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  render() {
    return <>
      <Header/>
      <ul>
        { this.state.persons.map(person => <li>{person.name}</li>)}
      </ul>
    </>
  }
}