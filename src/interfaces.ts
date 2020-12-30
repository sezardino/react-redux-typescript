interface IPost {
  title: string;
  id: number;
}

interface PostsStateType {
  syncPosts: Array<IPost> | [];
  asyncPosts: Array<IPost> | [];
}

interface ActionType {
  type: string;
  payload: any;
}

interface IState {
  posts: PostsStateType;
}

export type {IPost, PostsStateType, ActionType, IState};
