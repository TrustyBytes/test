import logo from './logo.svg';
import './App.css';

function fetchData(){
  fetch('http://65.1.92.29:5000/')
      .then(data => console.log(data))
}


function App() {
  return (
    <div className="App">
        <button onClick = { () => fetchData() }>Fetch </button>
    </div>
  );
}

export default App;
