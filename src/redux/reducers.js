import { ADD_COMMENT, EDIT_COMMENT, DELETE_COMMENT, ADD_REPLY, EDIT_REPLY, DELETE_REPLY } from './actions';

const initialState = {
  comments: JSON.parse(localStorage.getItem('comments')) || [],
};

const rootReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case ADD_COMMENT:
      newState = {
        ...state,
        comments: [...state.comments, { id: Date.now(), ...action.payload, replies: [] }],
      };
      break;
    case EDIT_COMMENT:
      newState = {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.id ? { ...comment, text: action.payload.text } : comment
        ),
      };
      break;
    case DELETE_COMMENT:
      newState = {
        ...state,
        comments: state.comments.filter(comment => comment.id !== action.payload.id),
      };
      break;
    case ADD_REPLY:
      newState = {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? { ...comment, replies: [...comment.replies, { id: Date.now(), ...action.payload }] }
            : comment
        ),
      };
      break;
    case EDIT_REPLY:
      newState = {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? {
                ...comment,
                replies: comment.replies.map(reply =>
                  reply.id === action.payload.replyId ? { ...reply, text: action.payload.text } : reply
                ),
              }
            : comment
        ),
      };
      break;
    case DELETE_REPLY:
      newState = {
        ...state,
        comments: state.comments.map(comment =>
          comment.id === action.payload.commentId
            ? { ...comment, replies: comment.replies.filter(reply => reply.id !== action.payload.replyId) }
            : comment
        ),
      };
      break;
    default:
      return state;
  }
  localStorage.setItem('comments', JSON.stringify(newState.comments));
  return newState;
};

export default rootReducer;