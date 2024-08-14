import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReply } from '../redux/actions';

const ReplyForm = ({ commentId, onReplySubmitted }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      dispatch(addReply(commentId, name, text));
      setName('');
      setText('');
      onReplySubmitted();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="reply-form">
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your reply"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button type="submit">Submit Reply</button>
    </form>
  );
};

export default ReplyForm;