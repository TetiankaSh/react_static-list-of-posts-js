import './CommentList.scss';
import comments from '../../api/comments.json';
import { CommentInfo } from '../CommentInfo/CommentInfo';

export const CommentList = () => {
  return (
    <div className="CommentList">
      {comments.map(comment => (
        <CommentInfo key={comment.id} comment={comment} />
      ))}
    </div>
  );
};
