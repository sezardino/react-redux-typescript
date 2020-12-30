import React from 'react';
import {connect} from 'react-redux';
import {IPost, IState} from '../../interfaces';
import {ActionCreator} from '../../reducer/posts';
import Post from '../post';

type PostsProps = {
  posts: Array<IPost>;
  deletePost: (id: number) => void;
};

const Posts: React.FC<PostsProps> = (props) => {
  const {posts, deletePost} = props;
  if (!posts) {
    return <p>The are no posts</p>;
  }
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id}>
          <button
            className="card-button btn btn-dark"
            data-mdb-ripple-color="dark"
            onClick={() => deletePost(post.id)}>
            delete
          </button>
        </Post>
      ))}
    </>
  );
};

const mapStateToProps = ({posts}: IState) => {
  return {
    posts: posts.syncPosts,
  };
};

const mapDispatchToProps = {
  deletePost: (id: number) => ActionCreator.deletePosts(id),
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
