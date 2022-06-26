import React from 'react';
import axios from 'axios';

export default class Test extends React.Component {
  state = {
    test: ''
  }

  componentDidMount() {
    axios.get(`https://quyenbt-laravel-api.herokuapp.com/api/test`)
      .then(res => {
        const test = res.data;
        this.setState({test})
      })
  }

  render() {
    return (
        <div> asd </div>
    )
  }
}