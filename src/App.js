import './App.css';
import {Custom} from "./component/Custom";
import {useState} from "react";

function App() {
    const [token, setToken] = useState("");
    function handleClick() {
        setToken("");
    }
  return (
    <div className="App">
        <div>
            <Custom />
          <input type={"text"} value={token} onChange={event => setToken(event.target.value)}/>
            <button type={"submit"} onClick={handleClick}>submit</button>
        </div>
    </div>
  );
}

export default App;
