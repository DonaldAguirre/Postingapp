import React, { Component } from 'react';
import axios from 'axios';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    let result = fetch('https://jsonplaceholder.typicode.com/comments');

    result
      .then((response) => response.json())
      .then((data) => {
        this.setState({ articles: data });
      });
    // let result = await axios.get(
    //   'https://jsonplaceholder.typicode.com/comments'
    // ).then( => (result) {
    //   this.setState({ articles: data });
    // })
  }

  render() {
    return (
      <div className="card">
        {this.state.articles.map((article) => {
          return (
            <div className="card-text">
              <h4>Post: {article.id}</h4>
              <p>Nombre: {article.name}</p>
              <p>Email: {article.email}</p>
              <p>Cuerpo del mensaje: {article.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Card;
