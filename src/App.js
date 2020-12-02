import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './LiveDemo/NavBar/Navbar'
import Logindemo from './LiveDemo/Logindemo/Logindemo'
import { Provider } from 'react-redux'
import FunctionVoter from './LiveDemo/Voter/functionVoter'

function App() {
  return (
    // <Provider store={store}>
    //   <div className="App">
    //     <CakeContainer />
    //   </div>
    // // </Provider>
    // <Passvalue/>
    // <Fetchdata/>
    <FunctionVoter />
    );
}

export default App;
