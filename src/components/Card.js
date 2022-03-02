import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Card() {
  const [posts, setPosts] = useState([]);
  const [tablePosts, setTablePosts] = useState([]);
  const [searchList, setSearchList] = useState('');

  const getPetition = async () => {
    await axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((response) => {
        setPosts(response.data);
        setTablePosts(response.data);
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
    let searchResult = tablePosts.filter((element) => {
      if (
        element.title
          .toString()
          .toLowerCase()
          .includes(searchterm.toLowerCase()) ||
        element.body
          .toString()
          .toLowerCase()
          .includes(searchterm.toLowerCase())
      ) {
        return element;
      }
    });
    setPosts(searchResult);
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
          {posts.map((post) => {
            return (
              <div className="card-text">
                <h4>Post: {post.id}</h4>
                <p>Title: {post.title}</p>
                <p>Message body: {post.body}</p>
              </div>
            );
          })}
        </div>
      }
    </div>
  );
}

export default Card;
