import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import CommentForm from './CommentForm';
import CommentList from './CommentList';

const CommentSection = () => {
  const comments = useSelector(state => state.comments);
  const [sortOrder, setSortOrder] = useState('newest');

  const sortedComments = [...comments].sort((a, b) => {
    if (sortOrder === 'newest') {
      return new Date(b.date) - new Date(a.date);
    } else {
      return new Date(a.date) - new Date(b.date);
    }
  });

  return (
    <div className="comment-section">
      <h2>Comments</h2>
      <CommentForm />
      <div className="sort-controls">
        <label htmlFor="sort-select">Sort by: </label>
        <select 
          id="sort-select" 
          value={sortOrder} 
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="newest">Newest First</option>
          <option value="oldest">Oldest First</option>
        </select>
      </div>
      <CommentList comments={sortedComments} />
    </div>
  );
};

export default CommentSection;