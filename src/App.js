import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import CommentSection from './components/CommentSection';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CommentSection />
      </div>
    </Provider>
  );
}

export default App;