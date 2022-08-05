// 🐨 you'll need to import react and createRoot from react-dom up here
import React from "react";
import ReactDOM from "react-dom";
import {Logo} from './components/logo';
function App() { 
    return <div>
        <Logo width="80" height="80"/>
        <h1>Bookshelf</h1>
        <div>
            <button onClick={() => alert('Login Clicked')}>Login</button>
        </div>
        <div> 
            <button onClick={() => alert('Register Clicked')}>Register</button>
        </div>
    </div>
}
ReactDOM.render(<App />, document.getElementById("root"));