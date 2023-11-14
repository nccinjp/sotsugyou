import About from './officalpage';
import {Link, Route, Routes} from 'react-router-dom';
import logo from "./logo.svg";
import './App.css';

function Button({children}) {
    return <button>{children}</button>;
}

export default function App() {
return (
    <div className='App'>
        <div className = "logo-place">
        <img
                className="App-logo"
                src={logo}
                width="150"
                height="150"
                alt="logo"
            /> 
        </div>


        <div className='link-button'>
        <Link to="/officalpage">
            <Button className="link-btn">Start</Button>
        </Link>

        <Routes>
            <Route path="/officalpage" element={<About />} />
        </Routes>
        </div>

    </div>
    );
}

// import React from 'react';
// import Offical from './officalpage';
// import {Link,}

// const home = () => {
//     return (
//         <div>
//             <h1>Hello</h1>
//             <a href="./">
//             <button>enter</button>
//             </a>
//         </div>
//     )
// }

// export default home

// function About() {
//   return <div>About page - bobbyhadz.com</div>;
// }
