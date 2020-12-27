import React from 'react';
import {IPost} from '../../interfaces';
import Post from '../post';

type PostsProps = {
  posts: Array<IPost>;
};

const Posts = () => {
  return <p>posts</p>;
  // return posts.map((post) => <Post post={post} key={post.id} />);
};

export default Posts;
