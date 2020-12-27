import React from 'react';

class PostForm extends React.Component {
  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input type="text" className="form-control" id="title" name="title" />
        </div>
        <button className="btn btn-success" type="submit">
          Создать
        </button>
      </form>
    );
  }
}

export default PostForm;
