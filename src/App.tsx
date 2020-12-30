import React from 'react';
import {useDispatch} from 'react-redux';
import FetchedPosts from './components/fetchedPosts';
import PostForm from './components/postForm';
import Posts from './components/posts';
import {ThunkCreator} from './reducer/posts';

function App() {
  const dispatch = useDispatch();
  return (
    <div className="container pt-3">
      <div className="row">
        <div className="col">
          <PostForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h2>Synchronous Posts</h2>
          <Posts />
        </div>
        <div className="col">
          <h2>Asynchronous Posts</h2>
          <button
            className="card-button btn btn-dark"
            data-mdb-ripple-color="dark"
            onClick={() => dispatch(ThunkCreator.fetchPosts())}>
            Load Posts
          </button>
          <FetchedPosts />
        </div>
      </div>
    </div>
  );
}

export default App;
