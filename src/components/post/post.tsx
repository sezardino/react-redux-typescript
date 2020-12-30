import React from 'react';
import {IPost} from '../../interfaces';

type PostProps = {
  post: IPost;
};

const Post: React.FC<PostProps> = (props) => {
  const {
    post: {title},
    children,
  } = props;
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        {children && children}
      </div>
    </div>
  );
};

export default Post;
