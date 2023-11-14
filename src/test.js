import React, { useState } from "react";   //loginf
import './App.css';
// import './NavStyles.css';
import  Navbar  from "./components/Navbar";

export default function App() {

  return (

    <div className="App">
      {/* <petGps/>  */}
      <Navbar/>
      
    </div>

  )
}
// export default App;


//以下完全沒問題 勿刪
// function App() {
//     const [currentForm, setCurrentForm] = useState('login');
//     const toggleForm = (formName) => {
//     setCurrentForm(formName);
//     }
//     return (
//         <div className="App">
//         {
//         currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
//         }

//     </div>
//     );
// }


// export default App;


