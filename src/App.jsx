import './App.scss';

// import postsFromServer from './api/posts.json';
// import commentsFromServer from './api/comments.json';
// import usersFromServer from './api/users.json';
// import { CommentInfo } from './components/CommentInfo/CommentInfo';
import { CommentList } from './components/CommentList/CommentList';
import { PostInfo } from './components/PostInfo/PostInfo';

export const App = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostInfo />

      <CommentList />
    </div>
  </section>
);
