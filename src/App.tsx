import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyButton from './components/MyButton';
import MyForm from './components/MyForm';
import Login from './components/Login';
import MyContainer from './layout/MyContainer';



function App() {
  return (
    <MyContainer>
      <Login />
    </MyContainer>
    // <>
    //   {/* <MyButton /> */}
    //   <MyForm />
    // </>
  );
}

export default App;
