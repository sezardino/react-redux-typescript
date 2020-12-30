import {ActionType, IPost, PostsStateType} from '../interfaces';

const initialState: PostsStateType = {
  syncPosts: [],
  asyncPosts: [],
};

const actionType = {
  createPost: 'CREATE_POST',
  deletePost: 'DELETE_POST',
  fetchPosts: 'FETCH_POST',
};

const ActionCreator = {
  createPost: (post: IPost) => ({
    type: actionType.createPost,
    payload: post,
  }),
  deletePosts: (postId: number) => ({
    type: actionType.deletePost,
    payload: postId,
  }),
  fetchPosts: (posts: Array<IPost>) => ({
    type: actionType.fetchPosts,
    payload: posts,
  }),
};

const ThunkCreator = {
  fetchPosts: () => (dispatch: any) => {
    return fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then((response) => response.json())
      .then((data) => dispatch(ActionCreator.fetchPosts(data)));
  },
};

const reducer = (state = initialState, action: ActionType) => {
  switch (action.type) {
    case actionType.createPost:
      return {...state, syncPosts: [...state.syncPosts, action.payload]};
    case actionType.deletePost:
      return {
        ...state,
        syncPosts: [
          ...state.syncPosts.filter((post) => post.id !== action.payload),
        ],
      };
    case actionType.fetchPosts:
      return {
        ...state,
        asyncPosts: action.payload,
      };
    default:
      return state;
  }
};

export {ActionCreator, ThunkCreator};
export default reducer;
