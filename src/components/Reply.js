import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editReply, deleteReply } from '../redux/actions';

const Reply = ({ commentId, reply }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(reply.text);
  const dispatch = useDispatch();

  const handleEdit = () => {
    if (editedText.trim()) {
      dispatch(editReply(commentId, reply.id, editedText));
      setIsEditing(false);
    }
  };

  const handleDelete = () => {
    dispatch(deleteReply(commentId, reply.id));
  };

  return (
    <div className="reply">
      <h5>{reply.name}</h5>
      <p>{new Date(reply.date).toLocaleString()}</p>
      {isEditing ? (
        <div>
          <textarea
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          ></textarea>
          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p>{reply.text}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
      <button className="delete-btn" onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Reply;