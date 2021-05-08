import React, {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LikeBtn />
      </header>
    </div>
  );
}

function LikeBtn(){
  const [count,setCount] = useState(999);
  const handleClick = () => {
      setCount(count+1);
  }
  return <span className="likeBtn" onClick={handleClick}>❤︎ {count}</span>
}
export default App;
