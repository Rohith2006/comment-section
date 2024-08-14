import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addComment } from '../redux/actions';

const CommentForm = () => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && text.trim()) {
      dispatch(addComment(name, text));
      setName('');
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <textarea
        placeholder="Your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      ></textarea>
      <button className='post' type="submit">Post</button>
    </form>
  );
};

export default CommentForm;