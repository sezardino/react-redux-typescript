import {useSelector} from 'react-redux';
import {IPost, IState} from '../../interfaces';
import Post from '../post';

const FetchedPosts: React.FC = () => {
  const posts: Array<IPost> = useSelector(
    (state: IState) => state.posts.asyncPosts
  );
  if (!posts) {
    return <p>Click the button to load posts</p>;
  }
  return (
    <>
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </>
  );
};

export default FetchedPosts;
