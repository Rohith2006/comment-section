import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editComment, deleteComment } from '../redux/actions';
import ReplyForm from './ReplyForm';
import Reply from './Reply';

const Comment = ({ comment }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReplying, setIsReplying] = useState(false);
  const [editedText, setEditedText] = useState(comment.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedText.trim()) {
      dispatch(editComment(comment.id, editedText));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteComment(comment.id));
  };

  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <p className="date">{new Date(comment.date).toLocaleString()}</p>
      {isEditing ? (
        <div>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
          <div className="edit-buttons">
            <button onClick={handleEdit}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </div>
        </div>
      ) : (
        <div>
          <p>{comment.text}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => setIsReplying(!isReplying)}>
            {isReplying ? 'Cancel Reply' : 'Reply'}
          </button>
        </div>
      )}
      <button className="delete-btn" onClick={handleDelete}>X</button>
      {isReplying && (
        <ReplyForm 
          commentId={comment.id} 
          onReplySubmitted={() => setIsReplying(false)}
        />
      )}
      {comment.replies.map(reply => (
        <Reply key={reply.id} commentId={comment.id} reply={reply} />
      ))}
    </div>
  );
};

export default Comment;