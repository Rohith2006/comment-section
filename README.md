# React Comments Section

This project implements a dynamic comments section using React and Redux. Users can add comments, reply to comments, edit their comments and replies, and sort comments by date.

## Features

- Add new comments
- Reply to existing comments
- Edit comments and replies
- Delete comments and replies
- Sort comments by newest or oldest
- Persist data using local storage
- Responsive design

## Technologies Used

- React.js
- Redux for state management
- CSS for styling

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Rohith2006/comment-section.git
   ```

2. Navigate to the project directory:
   ```
   cd react-comments-section
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Usage

- To add a new comment, fill in the name and comment fields at the top of the page and click "Post".
- To reply to a comment, click the "Reply" button under the comment, fill in the form, and click "Submit Reply".
- To edit a comment or reply, click the "Edit" button, make your changes, and click "Save".
- To delete a comment or reply, click the "X" button in the top-right corner of the comment or reply.
- To sort comments, use the dropdown menu at the top of the comments section.

## Project Structure

```
src/
├── components/
│   ├── Comment.js
│   ├── CommentForm.js
│   ├── CommentList.js
│   ├── CommentSection.js
│   ├── Reply.js
│   └── ReplyForm.js
├── redux/
│   ├── actions.js
│   ├── reducers.js
│   └── store.js
├── App.js
├── index.js
└── styles.css
```

