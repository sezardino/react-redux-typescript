import React from 'react';
import {IPost} from '../../interfaces';

type PostProps = {
  post: IPost;
};

const Post: React.FC<PostProps> = ({post}) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{post.title}</h5>
      </div>
    </div>
  );
};

export default Post;
