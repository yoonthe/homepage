import React from 'react';
import github from './github.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="music"><iframe title="music" frameborder="no" border="0" marginwidth="0" marginheight="0" width="330" height="86" src="//music.163.com/outchain/player?type=2&id=22656381&auto=1&height=66" /></div>
      <header className="App-header">
        <p>
          等待开垦<img src={github} className="github" alt="github" /> <b>@ Yoonthe</b>
        </p>
      </header>
    </div>
  );
}

export default App;
