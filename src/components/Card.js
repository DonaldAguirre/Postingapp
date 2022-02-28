import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  const [comments, setComments] = useState([]);
  const [tableComments, setTableComments] = useState([]);
  const [searchList, setSearchList] = useState('');

  const getPetition = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setComments(response.data);
        setTableComments(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    setSearchList(e.target.value);
    filter(e.target.value);
  };

  const filter = (searchterm) => {
    let searchResult = tableComments.filter((element) => {
      if (
        element.name
          .toString()
          .toLowerCase()
          .includes(searchterm.toLowerCase()) ||
        element.email
          .toString()
          .toLowerCase()
          .includes(searchterm.toLowerCase())
      ) {
        return element;
      }
    });
    setComments(searchResult);
  };

  useEffect(() => {
    getPetition();
  }, []);

  return (
    <div>
      <div className="search">
        <input
          type="text"
          className="search-input"
          placeholder="Search Name or Email"
          value={searchList}
          onChange={handleChange}
        />
        <button className="search-button">Search</button>
      </div>
      {
        <div className="card">
          {comments.map((comment) => {
            return (
              <div className="card-text">
                <h4>Post: {comment.id}</h4>
                <p>Title: {comment.title}</p>
                <p>Message body: {comment.body}</p>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default Card;
