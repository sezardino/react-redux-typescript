import React from 'react';
import {connect} from 'react-redux';
import {IPost} from '../../interfaces';
import {ActionCreator} from '../../reducer/posts';

type PostFormProps = {
  createPost: (
    post: IPost
  ) => {
    type: string;
    payload: IPost;
  };
};

type PostFormState = {
  value: string;
};

class PostForm extends React.Component<PostFormProps, PostFormState> {
  state = {
    value: '',
  };

  inputHandler = (evt: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState(() => ({
      value: evt.target.value,
    }));
  };

  submitHandler = (evt: React.FormEvent): void => {
    const {value} = this.state;
    evt.preventDefault();
    if (value.trim()) {
      const post = {id: Date.now(), title: value};
      this.props.createPost(post);
      this.setState({value: ''});
    }
  };

  render() {
    const {value} = this.state;
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Post title</label>
          <input
            value={value}
            onChange={this.inputHandler}
            type="text"
            className="form-control"
            id="title"
            name="title"
          />
        </div>
        <button className="btn btn-success" type="submit">
          Create
        </button>
      </form>
    );
  }
}

const mapDispatchToProps = {
  createPost: ActionCreator.createPost,
};

export default connect(null, mapDispatchToProps)(PostForm);
