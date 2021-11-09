import logo from './logo.svg';
import './App.css';

function fetchData(){
  fetch('172.0.1.214:5000/')
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
