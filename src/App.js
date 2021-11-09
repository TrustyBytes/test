import logo from './logo.svg';
import './App.css';

function fetchData(){
  fetch("http://172.0.1.214:5000")
      .then(res => console.log(res))
      .catch(err => console.log(err))
}


function App() {
  return (
    <div className="App">
        <button onClick = { () => fetchData() }>Fetch </button>
    </div>
  );
}

export default App;
